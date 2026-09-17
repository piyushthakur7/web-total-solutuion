/**
 * Browser-side cleanup for pasted and edited post bodies.
 *
 * Pasting from Word or Google Docs drops thousands of characters of styling
 * debris into the document: `MsoNormal` classes, `<o:p>` namespaced tags,
 * absolute font sizes, and colours that fight the site's own typography. Naively
 * stripping all of it loses the formatting the author actually cares about,
 * because both editors express **bold** as `font-weight` on a `<span>` rather
 * than as a `<strong>` tag.
 *
 * So this walks the pasted DOM and rebuilds it from a small allow-list, lifting
 * styling that carries meaning (bold, italic, underline, links, lists) into
 * semantic tags and discarding the rest.
 *
 * Requires a DOM — client components only.
 */

import { looksLikeHeading, plainTextToHtml } from '../../../src/utils/richText';

const ALLOWED_TAGS = new Set([
  'P', 'BR', 'STRONG', 'EM', 'U', 'S', 'A', 'UL', 'OL', 'LI',
  'H2', 'H3', 'H4', 'BLOCKQUOTE', 'CODE', 'PRE', 'IMG', 'HR',
]);

/** Presentational tags folded into their semantic equivalent. */
const TAG_ALIASES: Record<string, string> = {
  B: 'STRONG',
  I: 'EM',
  STRIKE: 'S',
  DEL: 'S',
  H1: 'H2', // The page already renders the post title as the only <h1>.
  H5: 'H4',
  H6: 'H4',
};

/** Removed with their contents — never carries author intent. */
const DROP_WITH_CONTENT = new Set(['SCRIPT', 'STYLE', 'META', 'LINK', 'TITLE', 'HEAD', 'NOSCRIPT']);

/** Unwrapped into a paragraph rather than inline, so text keeps its break. */
const BLOCK_WRAPPERS = new Set(['DIV', 'SECTION', 'ARTICLE', 'TD', 'TH', 'TR', 'ADDRESS', 'DD', 'DT']);

const ALLOWED_ATTRIBUTES: Record<string, string[]> = {
  A: ['href'],
  IMG: ['src', 'alt', 'loading', 'decoding'],
};

const UNSAFE_URL = /^\s*(?:javascript|vbscript|data):/i;

/** Word renders bullets as a Symbol-font character followed by tab spacing. */
const BULLET_MARKER = /^\s*[•·▪‣o*-]\s+/;
const NUMBER_MARKER = /^\s*\d+[.)]\s+/;

/** Reads bold/italic/underline out of inline CSS so it survives span removal. */
function emphasisFromStyle(element: Element): string[] {
  const style = element.getAttribute('style') ?? '';
  const tags: string[] = [];

  if (/font-weight\s*:\s*(?:bold(?:er)?|[5-9]\d\d)/i.test(style)) tags.push('STRONG');
  if (/font-style\s*:\s*italic/i.test(style)) tags.push('EM');
  if (/text-decoration[a-z-]*\s*:[^;]*underline/i.test(style)) tags.push('U');

  return tags;
}

/** Google Docs wraps its whole payload in `<b style="font-weight:normal">`. */
function isFakeBold(element: Element): boolean {
  const style = element.getAttribute('style') ?? '';
  return /font-weight\s*:\s*(?:normal|[1-4]\d\d)/i.test(style);
}

function wrapIn(tags: string[], children: Node[], doc: Document): Node[] {
  if (!children.length) return [];

  let current = children;
  for (const tag of tags) {
    const wrapper = doc.createElement(tag.toLowerCase());
    current.forEach((child) => wrapper.appendChild(child));
    current = [wrapper];
  }
  return current;
}

function cleanNode(node: Node, doc: Document): Node[] {
  if (node.nodeType === Node.TEXT_NODE) {
    // Word pads everything with non-breaking spaces; they break wrapping.
    const text = (node.nodeValue ?? '').replace(/\u00a0/g, ' ');
    return text ? [doc.createTextNode(text)] : [];
  }

  if (node.nodeType !== Node.ELEMENT_NODE) return [];

  const element = node as Element;
  const rawTag = element.tagName.toUpperCase();

  // `<o:p>`, `<w:sdt>` and friends are Office-only namespaced markup.
  if (DROP_WITH_CONTENT.has(rawTag) || rawTag.includes(':')) return [];

  if (rawTag === 'BR') return [doc.createElement('br')];
  if (rawTag === 'HR') return [doc.createElement('hr')];

  const children = Array.from(element.childNodes).flatMap((child) => cleanNode(child, doc));
  const aliased = TAG_ALIASES[rawTag] ?? rawTag;

  // A <b> carrying `font-weight:normal` is a wrapper, not emphasis.
  const tag = aliased === 'STRONG' && isFakeBold(element) ? 'SPAN' : aliased;

  if (!ALLOWED_TAGS.has(tag)) {
    const emphasis = emphasisFromStyle(element);
    const wrapped = emphasis.length ? wrapIn(emphasis, children, doc) : children;

    if (BLOCK_WRAPPERS.has(rawTag) && wrapped.length) {
      const paragraph = doc.createElement('p');
      wrapped.forEach((child) => paragraph.appendChild(child));
      return [paragraph];
    }
    return wrapped;
  }

  const clean = doc.createElement(tag.toLowerCase());
  for (const name of ALLOWED_ATTRIBUTES[tag] ?? []) {
    const value = element.getAttribute(name);
    if (value && !UNSAFE_URL.test(value)) clean.setAttribute(name, value);
  }

  if (tag === 'IMG') {
    // An image with no src is nothing to render.
    if (!clean.getAttribute('src')) return [];
    // Explicit alt="" marks the image as decorative; no alt attribute at all
    // just leaves screen readers to announce the file name.
    if (!clean.hasAttribute('alt')) clean.setAttribute('alt', '');
    // Below-the-fold article images should never block the first paint.
    clean.setAttribute('loading', 'lazy');
    clean.setAttribute('decoding', 'async');
  }

  if (tag === 'A') {
    if (!clean.getAttribute('href')) return children; // A link to nowhere is just text.
    clean.setAttribute('target', '_blank');
    clean.setAttribute('rel', 'noopener noreferrer');
  }

  children.forEach((child) => clean.appendChild(child));

  // Styling on an allowed tag still has to be lifted — Word puts bold on the
  // <p> itself when a whole line is emphasised. Headings are already bold.
  if (tag === 'P' || tag === 'LI') {
    const emphasis = emphasisFromStyle(element);
    if (emphasis.length && clean.textContent?.trim()) {
      const inner = Array.from(clean.childNodes);
      inner.forEach((child) => child.remove());
      wrapIn(emphasis, inner, doc).forEach((child) => clean.appendChild(child));
    }
  }

  return [clean];
}

function markerKindOf(element: Element): 'bullet' | 'number' | null {
  if (element.tagName !== 'P') return null;
  const text = element.textContent ?? '';
  if (BULLET_MARKER.test(text)) return 'bullet';
  if (NUMBER_MARKER.test(text)) return 'number';
  return null;
}

/**
 * Word's bulleted lists arrive as ordinary paragraphs that merely *start* with a
 * bullet character. Consecutive ones are rebuilt into a real list; a lone one
 * that reads like a title becomes a heading instead, so numbering does not
 * restart at 1 on every section.
 */
function rebuildFlattenedLists(container: HTMLElement, doc: Document): void {
  let index = 0;

  while (index < container.children.length) {
    const kind = markerKindOf(container.children[index]);
    if (!kind) {
      index += 1;
      continue;
    }

    const run: Element[] = [];
    while (index < container.children.length && markerKindOf(container.children[index]) === kind) {
      run.push(container.children[index]);
      index += 1;
    }

    const stripMarker = (element: Element) =>
      (element.textContent ?? '').replace(kind === 'bullet' ? BULLET_MARKER : NUMBER_MARKER, '').trim();

    let replacement: HTMLElement;

    if (run.length === 1 && looksLikeHeading(stripMarker(run[0]))) {
      replacement = doc.createElement('h3');
      replacement.innerHTML = run[0].innerHTML;
    } else {
      replacement = doc.createElement(kind === 'bullet' ? 'ul' : 'ol');
      run.forEach((item) => {
        const li = doc.createElement('li');
        li.innerHTML = item.innerHTML.replace(kind === 'bullet' ? BULLET_MARKER : NUMBER_MARKER, '');
        replacement.appendChild(li);
      });
    }

    container.insertBefore(replacement, run[0]);
    run.forEach((item) => item.remove());
    index = Array.from(container.children).indexOf(replacement) + 1;
  }
}

/**
 * Word marks a bold run both with `<b>` and with `font-weight` on the span
 * inside it, which lifts into `<strong><strong>`. Harmless but noisy, so the
 * inner duplicate is unwrapped.
 */
function collapseNestedEmphasis(container: HTMLElement): void {
  const unwrap = (element: Element) => {
    const parent = element.parentElement;
    if (!parent) return;
    while (element.firstChild) parent.insertBefore(element.firstChild, element);
    element.remove();
  };

  container.querySelectorAll('strong, em, u, s').forEach((element) => {
    if (element.parentElement?.tagName === element.tagName) unwrap(element);
  });

  // Headings render bold already, so bold inside one says nothing.
  container.querySelectorAll('h2 > strong, h3 > strong, h4 > strong').forEach(unwrap);
}

function dropEmptyBlocks(container: HTMLElement): void {
  container.querySelectorAll('p, h2, h3, h4, li, blockquote').forEach((element) => {
    const hasContent = (element.textContent ?? '').trim().length > 0;
    const hasMedia = element.querySelector('img, br, hr');
    if (!hasContent && !hasMedia) element.remove();
  });
}

/** Loose inline nodes at the top level are gathered into paragraphs. */
function wrapLooseInlines(container: HTMLElement, doc: Document): void {
  const BLOCKS = new Set(['P', 'UL', 'OL', 'H2', 'H3', 'H4', 'BLOCKQUOTE', 'PRE', 'HR']);
  let buffer: Node[] = [];

  const flush = (before: Node | null) => {
    if (!buffer.length) return;
    const paragraph = doc.createElement('p');
    buffer.forEach((child) => paragraph.appendChild(child));
    container.insertBefore(paragraph, before);
    buffer = [];
  };

  Array.from(container.childNodes).forEach((child) => {
    const isBlock = child.nodeType === Node.ELEMENT_NODE && BLOCKS.has((child as Element).tagName);
    if (isBlock) {
      flush(child);
      return;
    }
    if (child.nodeType === Node.TEXT_NODE && !(child.nodeValue ?? '').trim()) {
      child.parentNode?.removeChild(child);
      return;
    }
    buffer.push(child);
  });

  flush(null);
}

/**
 * Parses clipboard HTML without letting any of it come alive.
 *
 * A `<template>`'s contents are held in an inert document fragment, so images
 * never fetch, `onerror` never fires and `<script>` never runs — the payload is
 * only ever inspected. A clipboard payload is also a *fragment*, which rules
 * out `DOMParser`: it applies full-document parsing rules and can strand
 * leading nodes in `<head>` where this walk would never see them.
 */
function parseInert(html: string): Node[] {
  const template = document.createElement('template');

  if ('content' in template) {
    template.innerHTML = html;
    return Array.from(template.content.childNodes);
  }

  const inert = document.implementation.createHTMLDocument('');
  inert.body.innerHTML = html;
  return Array.from(inert.body.childNodes);
}

/** Rebuilds arbitrary HTML into the small, well-formed subset the blog renders. */
export function cleanHtml(html: string): string {
  if (typeof document === 'undefined') return html;

  const container = document.createElement('div');

  parseInert(html)
    .flatMap((node) => cleanNode(node, document))
    .forEach((node) => container.appendChild(node));

  wrapLooseInlines(container, document);
  rebuildFlattenedLists(container, document);
  collapseNestedEmphasis(container);
  dropEmptyBlocks(container);

  return container.innerHTML.trim();
}

/** Turns whatever is on the clipboard into clean, insertable HTML. */
export function clipboardToHtml(data: DataTransfer): string {
  const html = data.getData('text/html');
  if (html) return cleanHtml(html);

  const text = data.getData('text/plain');
  return text ? plainTextToHtml(text) : '';
}
