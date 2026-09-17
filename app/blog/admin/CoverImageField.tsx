"use client";

import React, { useRef, useState } from 'react';
import { ImagePlus, Loader2, Trash2, UploadCloud } from 'lucide-react';
import { MAX_IMAGE_BYTES, uploadBlogImage } from './uploadImage';

/**
 * Cover image picker: upload a file straight from the author's machine, or
 * paste a URL for images that already live somewhere else. Both write to the
 * same `imageUrl` field, so nothing downstream has to know which was used.
 */
export default function CoverImageField({
  value,
  onChange,
  slug,
  labelClass,
  fieldClass,
}: {
  value: string;
  onChange: (url: string) => void;
  slug: string;
  labelClass: string;
  fieldClass: string;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [dragging, setDragging] = useState(false);

  const handleFile = async (file: File | undefined) => {
    if (!file) return;
    setError(null);
    setBusy(true);
    try {
      const { url } = await uploadBlogImage(file, slug);
      onChange(url);
    } catch (cause) {
      setError((cause as Error).message);
    } finally {
      setBusy(false);
      // Allow re-picking the same file after a failure.
      if (inputRef.current) inputRef.current.value = '';
    }
  };

  return (
    <div className="space-y-3">
      <span className={labelClass}>Cover Image</span>

      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp,image/avif,image/gif"
        className="sr-only"
        onChange={(event) => handleFile(event.target.files?.[0])}
      />

      {value ? (
        <div className="space-y-2">
          <div className="relative rounded-xl overflow-hidden border border-slate-200 aspect-[21/9] bg-slate-50">
            {/* Plain img: the URL can point anywhere, including hosts that are
                not in next.config's remotePatterns. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={value} alt="Cover preview" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              disabled={busy}
              className="inline-flex items-center space-x-1.5 text-xs font-bold text-brand-blue hover:underline disabled:opacity-50"
            >
              {busy ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <UploadCloud className="w-3.5 h-3.5" />}
              <span>{busy ? 'Uploading…' : 'Replace image'}</span>
            </button>
            <button
              type="button"
              onClick={() => {
                onChange('');
                setError(null);
              }}
              className="inline-flex items-center space-x-1.5 text-xs font-bold text-slate-500 hover:text-red-600"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Remove</span>
            </button>
          </div>
        </div>
      ) : (
        <div
          onDragOver={(event) => {
            event.preventDefault();
            setDragging(true);
          }}
          onDragLeave={() => setDragging(false)}
          onDrop={(event) => {
            event.preventDefault();
            setDragging(false);
            void handleFile(event.dataTransfer.files?.[0]);
          }}
          className={`rounded-xl border-2 border-dashed transition-colors ${
            dragging ? 'border-brand-blue bg-brand-blue/5' : 'border-slate-200 bg-slate-50'
          }`}
        >
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            disabled={busy}
            className="w-full px-4 py-10 flex flex-col items-center justify-center gap-2 text-center disabled:opacity-60"
          >
            {busy ? (
              <Loader2 className="w-6 h-6 text-brand-blue animate-spin" />
            ) : (
              <ImagePlus className="w-6 h-6 text-slate-400" />
            )}
            <span className="text-sm font-bold text-slate-700">
              {busy ? 'Uploading…' : 'Upload a cover image'}
            </span>
            <span className="text-[11px] text-slate-500">
              Click to choose a file or drag one here — JPG, PNG, WebP or GIF up to{' '}
              {MAX_IMAGE_BYTES / (1024 * 1024)} MB
            </span>
          </button>
        </div>
      )}

      {error && (
        <p role="alert" className="text-xs font-semibold text-red-600">
          {error}
        </p>
      )}

      <div className="space-y-1.5">
        <label htmlFor="blog-image" className="text-[11px] font-semibold text-slate-500">
          …or paste an image URL
        </label>
        <input
          id="blog-image"
          type="url"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className={`${fieldClass} text-xs`}
          placeholder="https://images.pexels.com/..."
        />
      </div>
    </div>
  );
}
