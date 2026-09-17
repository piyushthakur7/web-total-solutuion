"use client";

import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  Bold,
  Italic,
  Underline,
  Heading2,
  Heading3,
  List,
  ListOrdered,
  Link2,
  Link2Off,
  Quote,
  Pilcrow,
  Eraser,
  Code2,
  ImagePlus,
  Loader2,
} from 'lucide-react';
import { cleanHtml, clipboardToHtml } from './htmlClean';
import { toArticleHtml } from '../../../src/utils/richText';
import { uploadBlogImage, validateImage } from './uploadImage';

/**
 * A small WYSIWYG body editor.
 *
 * Built on `contentEditable` and `document.execCommand`. `execCommand` is
 * formally deprecated but is still the only API every browser implements for
 * caret-aware rich text, and the alternative — pulling in a full editor
 * framework — is far more weight than an admin-only compose box needs.
 *
 * The editable surface is deliberately uncontrolled: React writes its HTML once
 * on mount and never again, because re-rendering the subtree under the caret
 * destroys the selection mid-keystroke.
 */

interface ToolbarAction {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  run: () => void;
}

export default function RichTextEditor({
  value,
  onChange,
  slug,
}: {
  value: string;
  onChange: (html: string) => void;
  /** Groups this post's uploads under one folder in the storage bucket. */
  slug?: string;
}) {
  const editorRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const mounted = useRef(false);
  const [showSource, setShowSource] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [dragging, setDragging] = useState(false);

  // Older posts are stored as plain text; promote them so opening one shows real
  // formatting and saving it writes markup back.
  const initialHtml = useRef(toArticleHtml(value)).current;

  const syncFromEditor = useCallback(() => {
    if (editorRef.current) onChange(editorRef.current.innerHTML);
  }, [onChange]);

  useEffect(() => {
    const editor = editorRef.current;
    if (showSource || !editor) return;

    // First mount shows the promoted body; returning from source view shows
    // whatever was typed there.
    const html = mounted.current ? value : initialHtml;
    editor.innerHTML = html;

    if (!mounted.current && html !== value) onChange(html);
    mounted.current = true;

    // Enter should open a new paragraph, and formatting should produce tags
    // rather than inline styles. Both are per-document settings.
    try {
      document.execCommand('defaultParagraphSeparator', false, 'p');
      document.execCommand('styleWithCSS', false, 'false');
    } catch {
      // Older engines reject the calls; the editor still works without them.
    }
    // Re-running on `value` would fight the caret — mount and mode switch only.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showSource]);

  const exec = (command: string, argument?: string) => {
    editorRef.current?.focus();
    document.execCommand(command, false, argument);
    syncFromEditor();
  };

  const handlePaste = (event: React.ClipboardEvent<HTMLDivElement>) => {
    // A screenshot on the clipboard arrives as a file, not as markup. Upload it
    // rather than letting the browser inline a huge base64 data URI.
    const pastedImage = Array.from(event.clipboardData.files).find((file) =>
      file.type.startsWith('image/')
    );
    if (pastedImage) {
      event.preventDefault();
      void insertImage(pastedImage);
      return;
    }

    const html = clipboardToHtml(event.clipboardData);
    if (!html) return;

    event.preventDefault();
    document.execCommand('insertHTML', false, html);
    syncFromEditor();
  };

  const applyLink = () => {
    const selection = window.getSelection();
    if (!selection || selection.isCollapsed) {
      window.alert('Select the words you want to turn into a link first.');
      return;
    }

    const entered = window.prompt('Link address', 'https://');
    if (!entered) return;

    const href = /^(https?:|mailto:|tel:|\/)/i.test(entered) ? entered : `https://${entered}`;
    exec('createLink', href);

    // execCommand cannot set attributes, so mark the new links up afterwards.
    // Matched by comparison rather than a selector — a URL cannot be escaped
    // into an attribute selector reliably.
    editorRef.current?.querySelectorAll('a').forEach((anchor) => {
      if (anchor.getAttribute('href') !== href) return;
      anchor.setAttribute('target', '_blank');
      anchor.setAttribute('rel', 'noopener noreferrer');
    });
    syncFromEditor();
  };

  /**
   * Uploads a picture and drops an <img> at the caret. The sanitiser already
   * allows IMG with src and alt, so the markup survives the save unchanged.
   *
   * The alt text is prompted for rather than left blank: an image with no alt
   * is invisible to screen readers and worth nothing in image search.
   */
  const insertImage = useCallback(
    async (file: File) => {
      const invalid = validateImage(file);
      if (invalid) {
        setUploadError(invalid);
        return;
      }

      setUploadError(null);
      setUploading(true);
      try {
        const { url } = await uploadBlogImage(file, slug);
        const alt = (window.prompt('Describe this image (for accessibility and image search)', '') ?? '').trim();

        const image = document.createElement('img');
        image.setAttribute('src', url);
        image.setAttribute('alt', alt);

        editorRef.current?.focus();
        // Restores the caret when focus was lost to the file dialog, so the
        // picture lands at the end rather than nowhere.
        const selection = window.getSelection();
        if (!selection || selection.rangeCount === 0 || !editorRef.current?.contains(selection.anchorNode)) {
          const range = document.createRange();
          range.selectNodeContents(editorRef.current as Node);
          range.collapse(false);
          selection?.removeAllRanges();
          selection?.addRange(range);
        }

        document.execCommand('insertHTML', false, image.outerHTML + '<p><br></p>');
        syncFromEditor();
      } catch (cause) {
        setUploadError((cause as Error).message);
      } finally {
        setUploading(false);
        if (fileInputRef.current) fileInputRef.current.value = '';
      }
    },
    [slug, syncFromEditor]
  );

  const groups: ToolbarAction[][] = [
    [
      { icon: Bold, label: 'Bold (Ctrl+B)', run: () => exec('bold') },
      { icon: Italic, label: 'Italic (Ctrl+I)', run: () => exec('italic') },
      { icon: Underline, label: 'Underline (Ctrl+U)', run: () => exec('underline') },
    ],
    [
      { icon: Pilcrow, label: 'Normal text', run: () => exec('formatBlock', 'p') },
      { icon: Heading2, label: 'Section heading', run: () => exec('formatBlock', 'h2') },
      { icon: Heading3, label: 'Sub heading', run: () => exec('formatBlock', 'h3') },
    ],
    [
      { icon: List, label: 'Bullet list', run: () => exec('insertUnorderedList') },
      { icon: ListOrdered, label: 'Numbered list', run: () => exec('insertOrderedList') },
      { icon: Quote, label: 'Quote', run: () => exec('formatBlock', 'blockquote') },
    ],
    [
      {
        icon: uploading ? Loader2 : ImagePlus,
        label: uploading ? 'Uploading image…' : 'Insert image',
        run: () => fileInputRef.current?.click(),
      },
      { icon: Link2, label: 'Add link', run: applyLink },
      { icon: Link2Off, label: 'Remove link', run: () => exec('unlink') },
      { icon: Eraser, label: 'Clear formatting', run: () => exec('removeFormat') },
    ],
  ];

  return (
    <div className="rounded-xl border border-slate-200 overflow-hidden">
      <input
        ref={fileInputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp,image/avif,image/gif"
        className="sr-only"
        onChange={(event) => {
          const file = event.target.files?.[0];
          if (file) void insertImage(file);
        }}
      />

      <div className="flex flex-wrap items-center gap-1 border-b border-slate-200 bg-slate-50 px-2 py-1.5">
        {groups.map((group, groupIndex) => (
          <React.Fragment key={group[0].label}>
            {groupIndex > 0 && <span className="w-px h-5 bg-slate-200 mx-1" aria-hidden />}
            {group.map(({ icon: Icon, label, run }) => (
              <button
                key={label}
                type="button"
                title={label}
                aria-label={label}
                disabled={showSource}
                // `onMouseDown` — clicking a button would otherwise blur the
                // editable area and drop the selection before the command runs.
                onMouseDown={(event) => {
                  event.preventDefault();
                  run();
                }}
                className="p-2 rounded-lg text-slate-600 hover:bg-white hover:text-brand-blue hover:shadow-sm transition-all disabled:opacity-30 disabled:hover:bg-transparent"
              >
                <Icon className={`w-4 h-4 ${uploading && Icon === Loader2 ? 'animate-spin' : ''}`} />
              </button>
            ))}
          </React.Fragment>
        ))}

        <button
          type="button"
          title="Edit HTML source"
          aria-label="Edit HTML source"
          aria-pressed={showSource}
          onMouseDown={(event) => {
            event.preventDefault();
            // Leaving source view: normalise whatever was hand-written.
            if (showSource) onChange(cleanHtml(value));
            setShowSource((previous) => !previous);
          }}
          className={`ml-auto p-2 rounded-lg transition-all ${
            showSource
              ? 'bg-brand-blue text-white shadow-sm'
              : 'text-slate-600 hover:bg-white hover:text-brand-blue hover:shadow-sm'
          }`}
        >
          <Code2 className="w-4 h-4" />
        </button>
      </div>

      {showSource ? (
        <textarea
          value={value}
          onChange={(event) => onChange(event.target.value)}
          rows={18}
          spellCheck={false}
          className="w-full px-4 py-3 text-xs font-mono leading-relaxed focus:outline-none resize-y"
        />
      ) : (
        <div
          ref={editorRef}
          contentEditable
          suppressContentEditableWarning
          role="textbox"
          aria-multiline="true"
          aria-label="Post content"
          onInput={syncFromEditor}
          onBlur={syncFromEditor}
          onPaste={handlePaste}
          onDragOver={(event) => {
            if (!Array.from(event.dataTransfer.types).includes('Files')) return;
            event.preventDefault();
            setDragging(true);
          }}
          onDragLeave={() => setDragging(false)}
          onDrop={(event) => {
            const file = Array.from(event.dataTransfer.files).find((candidate) =>
              candidate.type.startsWith('image/')
            );
            if (!file) return;
            event.preventDefault();
            setDragging(false);
            void insertImage(file);
          }}
          data-placeholder="Write your post here, or paste it straight from Word."
          className={`prose prose-slate max-w-none min-h-[26rem] px-5 py-4 focus:outline-none empty:before:content-[attr(data-placeholder)] empty:before:text-slate-400 empty:before:not-italic prose-img:rounded-xl ${
            dragging ? 'bg-brand-blue/5 ring-2 ring-inset ring-brand-blue/40' : ''
          }`}
        />
      )}

      {(uploading || uploadError) && (
        <div
          role={uploadError ? 'alert' : undefined}
          className={`px-5 py-2.5 text-xs font-semibold border-t ${
            uploadError
              ? 'bg-red-50 border-red-100 text-red-700'
              : 'bg-slate-50 border-slate-100 text-slate-600'
          }`}
        >
          {uploadError ?? 'Uploading image…'}
        </div>
      )}
    </div>
  );
}
