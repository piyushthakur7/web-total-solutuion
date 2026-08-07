/**
 * Moves portfolio screenshots off api.microlink.io and into InsForge Storage.
 *
 * Run with:  npx tsx scripts/migrate-portfolio-images.ts
 *
 * Why: microlink generates each screenshot on demand — measured at ~1.1-1.3s
 * per image with no caching. The portfolio page loads 14 of them, which was
 * enough to make Lighthouse time out. Fetching each one once and serving it
 * from our own storage lets next/image resize, cache and convert to AVIF/WebP.
 *
 * Safe to re-run: rows already pointing at InsForge Storage are skipped.
 */
import { readFileSync } from 'node:fs';
import { createAdminClient } from '@insforge/sdk';

const BUCKET = 'portfolio-screenshots';

const project = JSON.parse(readFileSync('.insforge/project.json', 'utf8')) as {
  oss_host: string;
  api_key: string;
};

const admin = createAdminClient({ baseUrl: project.oss_host, apiKey: project.api_key });

interface Row {
  id: string;
  slug: string;
  image_url: string;
}

async function main() {
  const { data, error } = await admin.database
    .from('portfolio_projects')
    .select('id, slug, image_url');

  if (error) throw new Error(`Could not read projects: ${JSON.stringify(error)}`);

  const rows = (data ?? []) as Row[];
  let migrated = 0;
  let skipped = 0;
  let failed = 0;

  for (const row of rows) {
    if (row.image_url.includes(project.oss_host)) {
      skipped += 1;
      console.log(`  skip     ${row.slug} (already on storage)`);
      continue;
    }

    try {
      const response = await fetch(row.image_url, {
        headers: { 'User-Agent': 'Mozilla/5.0 (compatible; WebTotalSolution/1.0)' },
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      const contentType = response.headers.get('content-type') ?? 'image/png';
      const extension = contentType.includes('jpeg') ? 'jpg' : contentType.includes('webp') ? 'webp' : 'png';
      const blob = await response.blob();

      const key = `${row.slug}.${extension}`;
      const uploaded = await admin.storage.from(BUCKET).upload(key, blob);
      if (uploaded.error) throw new Error(JSON.stringify(uploaded.error));

      const url = (uploaded.data as any)?.url as string | undefined;
      if (!url) throw new Error(`Upload returned no URL: ${JSON.stringify(uploaded.data)}`);

      const { error: updateError } = await admin.database
        .from('portfolio_projects')
        .update({ image_url: url })
        .eq('id', row.id);
      if (updateError) throw new Error(JSON.stringify(updateError));

      migrated += 1;
      console.log(`  migrated ${row.slug}  (${Math.round(blob.size / 1024)} KB)`);
    } catch (cause) {
      failed += 1;
      console.warn(`  FAILED   ${row.slug}: ${(cause as Error).message}`);
    }
  }

  console.log(`\n${migrated} migrated, ${skipped} skipped, ${failed} failed.`);
  if (failed > 0) process.exitCode = 1;
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
