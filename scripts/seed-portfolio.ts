/**
 * One-time migration of the hardcoded PORTFOLIO_ITEMS array into the InsForge
 * `portfolio_projects` table.
 *
 * Run with:  npx tsx scripts/seed-portfolio.ts
 *
 * Safe to re-run — rows are matched on `slug` and updated in place, so this
 * will not create duplicates. It never deletes rows you added in the admin.
 */
import { readFileSync } from 'node:fs';
import { createAdminClient } from '@insforge/sdk';
import { PORTFOLIO_ITEMS } from '../src/data';

const project = JSON.parse(readFileSync('.insforge/project.json', 'utf8')) as {
  oss_host: string;
  api_key: string;
};

const admin = createAdminClient({
  baseUrl: project.oss_host,
  apiKey: project.api_key,
});

async function main() {
  const { data: existing, error: readError } = await admin.database
    .from('portfolio_projects')
    .select('id, slug');

  if (readError) {
    throw new Error(`Could not read existing projects: ${JSON.stringify(readError)}`);
  }

  const bySlug = new Map((existing ?? []).map((row: any) => [row.slug, row.id]));

  let inserted = 0;
  let updated = 0;

  for (const [index, item] of PORTFOLIO_ITEMS.entries()) {
    const row = {
      slug: item.id,
      title: item.title,
      category: item.category,
      description: item.description,
      highlight: item.highlight,
      image_url: item.imageUrl,
      website_url: item.websiteUrl ?? null,
      tech_stack: item.techStack,
      // Live client sites lead the portfolio.
      featured: Boolean(item.websiteUrl),
      sort_order: index,
      published: true,
    };

    const existingId = bySlug.get(item.id);

    if (existingId) {
      const { error } = await admin.database
        .from('portfolio_projects')
        .update(row)
        .eq('id', existingId);
      if (error) throw new Error(`Update failed for ${item.id}: ${JSON.stringify(error)}`);
      updated += 1;
    } else {
      const { error } = await admin.database.from('portfolio_projects').insert([row]);
      if (error) throw new Error(`Insert failed for ${item.id}: ${JSON.stringify(error)}`);
      inserted += 1;
    }

    console.log(`  ${existingId ? 'updated' : 'inserted'}  ${item.id}`);
  }

  console.log(`\nDone. ${inserted} inserted, ${updated} updated.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
