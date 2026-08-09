/**
 * Blog body handling.
 *
 * Post bodies are stored as HTML and rendered with `dangerouslySetInnerHTML`.
 * Two things have to be true for that to be safe and to look right:
 *
 *  1. Older posts were typed/pasted into a plain `<textarea>`, so they are
 *     stored as *plain text*. Rendered as-is the browser collapses every
 *     newline and the post becomes one unreadable wall of text. Those bodies
 *     get promoted to real markup at render time — no re-entry needed.
 *  2. Anything that is already HTML gets a safety pass, mostly to strip the
 *     script/style/comment debris that Word drags along on paste.
 *
 * Everything here is regex-based on purpose so it runs unchanged on the server
 * (no DOM). The editor does its own, much finer-grained cleanup in the browser
 * where a real DOM is available.
 */

/** Tags that mean "this body is already markup, leave its structure alone". */
const BLOCK_LEVEL_HTML = /<\/?(?:p|div|h[1-6]|ul|ol|li|blockquote|br|table|figure|section|article|pre|img)\b/i;

const BULLET_LINE = /^\s*[-*•·‣▪]\s+/;
const NUMBERED_LINE = /^\s*\d+[.)]\s+/;
const ENDS_A_SENTENCE = /[.,;:!?]$/;

/** Bare URLs users paste as text; `www.` forms get an https scheme on output. */
const BARE_URL = /(?:https?:\/\/|www\.)[^\s<]+/gi;
/** Sentence punctuation that swallowed the end of a URL. `;` is excluded so
 *  escaped entities such as `&amp;` inside a query string survive. */
const URL_TRAILING_PUNCTUATION = /[.,:!?)\]}'"]+$/;

export function isHtmlContent(content: string): boolean {
  return BLOCK_LEVEL_HTML.test(content);
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/** Escapes a line, then turns bare URLs into links and `**text**` into bold. */
function inlineMarkup(line: string): string {
  const escaped = escapeHtml(line);

  const linked = escaped.replace(BARE_URL, (match) => {
    const trailing = match.match(URL_TRAILING_PUNCTUATION)?.[0] ?? '';
    const url = trailing ? match.slice(0, -trailing.length) : match;
    const href = url.toLowerCase().startsWith('www.') ? `https://${url}` : url;
    return `<a href="${href}" target="_blank" rel="noopener noreferrer">${url}</a>${trailing}`;
  });

  return linked.replace(/\*\*(?=\S)([\s\S]*?\S)\*\*/g, '<strong>$1</strong>');
}

/**
 * A short line with no terminal punctuation is almost always a section title
 * rather than a sentence — that is how these posts were written in Word.
 */
export function looksLikeHeading(text: string): boolean {
  if (text.length === 0 || text.length > 80) return false;
  if (ENDS_A_SENTENCE.test(text)) return false;
  return text.split(/\s+/).length >= 2;
}

/**
 * Promotes plain text to markup: blank-line and single-line breaks become
 * paragraphs, runs of `-`/`1.` lines become real lists, and standalone short
 * lines become headings.
 */
export function plainTextToHtml(text: string): string {
  const lines = text.replace(/\r\n?/g, '\n').split('\n');

  // Classify every line first — deciding between "list item" and "heading"
  // needs to know whether the neighbouring lines are list lines too.
  const classified = lines.map((raw) => {
    const trimmed = raw.trim();
    if (BULLET_LINE.test(trimmed)) {
      return { kind: 'bullet' as const, text: trimmed.replace(BULLET_LINE, '').trim() };
    }
    if (NUMBERED_LINE.test(trimmed)) {
      return { kind: 'number' as const, text: trimmed.replace(NUMBERED_LINE, '').trim(), marker: trimmed };
    }
    return { kind: trimmed ? ('text' as const) : ('blank' as const), text: trimmed };
  });

  const out: string[] = [];
  let index = 0;

  while (index < classified.length) {
    const line = classified[index];

    if (line.kind === 'blank') {
      index += 1;
      continue;
    }

    if (line.kind === 'bullet' || line.kind === 'number') {
      // Collect the adjacent run of same-kind list lines.
      const run: typeof classified = [];
      while (index < classified.length && classified[index].kind === line.kind) {
        run.push(classified[index]);
        index += 1;
      }

      // A lone numbered line that reads like a title ("1. Why speed matters")
      // introduces a section — the body follows on the next line. Rendering it
      // as a one-item <ol> would be wrong and would restart numbering at 1.
      if (run.length === 1 && looksLikeHeading(run[0].text)) {
        // Keep the author's numbering, but collapse the tab Word puts after it.
        const label = line.kind === 'number' ? (run[0] as { marker: string }).marker : run[0].text;
        out.push(`<h3>${inlineMarkup(label.replace(/\s+/g, ' '))}</h3>`);
        continue;
      }

      const tag = line.kind === 'bullet' ? 'ul' : 'ol';
      const items = run.map((item) => `<li>${inlineMarkup(item.text)}</li>`).join('');
      out.push(`<${tag}>${items}</${tag}>`);
      continue;
    }

    // These posts are written one paragraph per line, so a line too short to be
    // a paragraph and lacking any terminal punctuation is a section heading.
    if (looksLikeHeading(line.text)) {
      out.push(`<h2>${inlineMarkup(line.text)}</h2>`);
      index += 1;
      continue;
    }

    out.push(`<p>${inlineMarkup(line.text)}</p>`);
    index += 1;
  }

  return out.join('\n');
}

/**
 * Strips executable and layout-hijacking markup. This is a safety net, not a
 * full sanitiser: only signed-in site admins can author post bodies.
 */
export function sanitizeArticleHtml(html: string): string {
  return html
    // Word ships conditional comments and an XML prologue on every paste.
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<\?xml[\s\S]*?\?>/g, '')
    .replace(/<(script|style|iframe|object|embed|form|link|meta|base)\b[\s\S]*?<\/\1\s*>/gi, '')
    .replace(/<(script|style|iframe|object|embed|form|link|meta|base)\b[^>]*\/?>/gi, '')
    // Inline event handlers, quoted or bare.
    .replace(/\son[a-z]+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)/gi, '')
    .replace(/\s(href|src)\s*=\s*("|')\s*(?:javascript|vbscript):[^"']*\2/gi, ' $1="#"')
    .trim();
}

/** The body as renderable HTML, whichever way it happens to be stored. */
export function toArticleHtml(content: string): string {
  if (!content) return '';
  return isHtmlContent(content) ? sanitizeArticleHtml(content) : plainTextToHtml(content);
}

/** Readable plain text for meta descriptions and structured data. */
export function htmlToPlainText(html: string): string {
  return html
    .replace(/<(script|style)\b[\s\S]*?<\/\1\s*>/gi, '')
    .replace(/<\/(?:p|div|h[1-6]|li|blockquote|tr)\s*>/gi, ' ')
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim();
}
