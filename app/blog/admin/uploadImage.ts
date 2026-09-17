"use client";

import { insforge } from '../../../src/utils/insforge/client';

/**
 * Direct browser upload of a blog image into InsForge Storage.
 *
 * Uses the SSR browser client so the upload carries the signed-in admin's
 * access token — the refresh token stays httpOnly, and Storage RLS sees a real
 * user rather than the anon role.
 *
 * `blog-images` is a public bucket: the returned URL is served directly to blog
 * readers, and its host is allowlisted in next.config.mjs so next/image can
 * resize and re-encode it.
 */
export const BLOG_IMAGE_BUCKET = 'blog-images';

/** Matches the accept attribute on the file inputs. */
const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/avif', 'image/gif'];

/**
 * Cap chosen to stay under InsForge's default upload limit while still allowing
 * an unoptimised phone photo through.
 */
export const MAX_IMAGE_BYTES = 8 * 1024 * 1024;

export interface UploadedImage {
  url: string;
  /** Storage key — required for any later download or delete. */
  key: string;
}

function extensionFor(file: File) {
  const fromName = file.name.split('.').pop()?.toLowerCase();
  if (fromName && /^[a-z0-9]{2,5}$/.test(fromName)) return fromName;
  return file.type.split('/')[1] ?? 'png';
}

/**
 * Builds a stable, collision-proof key. The slug prefix keeps a post's images
 * grouped together in the bucket, which makes them findable later.
 */
function keyFor(file: File, slug?: string) {
  const folder = slug && slug.trim() ? slug.trim() : 'unsorted';
  const stem = file.name
    .replace(/\.[^.]+$/, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '')
    .slice(0, 40) || 'image';

  return `${folder}/${stem}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${extensionFor(file)}`;
}

/** Human-readable reason the file cannot be uploaded, or null when it is fine. */
export function validateImage(file: File): string | null {
  if (!ALLOWED_TYPES.includes(file.type)) {
    return 'That file is not an image. Use a JPG, PNG, WebP, AVIF or GIF.';
  }
  if (file.size > MAX_IMAGE_BYTES) {
    const mb = (file.size / (1024 * 1024)).toFixed(1);
    return `That image is ${mb} MB. Please use one under ${MAX_IMAGE_BYTES / (1024 * 1024)} MB.`;
  }
  return null;
}

/**
 * Uploads one image and returns its public URL and storage key.
 * Throws with a message fit to show the author directly.
 */
export async function uploadBlogImage(file: File, slug?: string): Promise<UploadedImage> {
  const invalid = validateImage(file);
  if (invalid) throw new Error(invalid);

  const { data, error } = await insforge.storage
    .from(BLOG_IMAGE_BUCKET)
    .upload(keyFor(file, slug), file);

  if (error) {
    console.error('[blog-images] Upload failed:', error);
    throw new Error('The image could not be uploaded. Please try again.');
  }

  const url = (data as { url?: string } | null)?.url;
  const key = (data as { key?: string } | null)?.key;

  if (!url || !key) {
    console.error('[blog-images] Upload returned no url/key:', data);
    throw new Error('The upload finished but returned no address. Please try again.');
  }

  return { url, key };
}
