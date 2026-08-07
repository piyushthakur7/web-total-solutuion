/**
 * Creates (or repairs) a blog admin account.
 *
 * Run with:
 *   npx tsx scripts/seed-admin.ts <email> <password>
 *
 * What it does:
 *   1. Signs the user up through the SDK so the password is hashed correctly.
 *   2. Marks the email verified — this project has SMTP disabled, so a new
 *      account can never verify itself and would otherwise be unable to log in.
 *   3. Adds the user to `public.site_admins`, which is what the RLS policies on
 *      `blogs` and `portfolio_projects` check before allowing any write.
 *
 * Safe to re-run: an existing account is verified and promoted rather than
 * duplicated. Re-running does NOT change an existing account's password.
 */
import { readFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { createClient } from '@insforge/sdk';

const project = JSON.parse(readFileSync('.insforge/project.json', 'utf8')) as {
  oss_host: string;
  api_key: string;
};

/** The anon key drives sign-up/sign-in exactly as the browser would. */
const anonKey = (() => {
  const match = readFileSync('.env.local', 'utf8').match(
    /^NEXT_PUBLIC_INSFORGE_ANON_KEY=(.+)$/m
  );
  if (!match) {
    throw new Error('NEXT_PUBLIC_INSFORGE_ANON_KEY not found in .env.local');
  }
  return match[1].trim().replace(/^["']|["']$/g, '');
})();

const [, , emailArg, passwordArg] = process.argv;

if (!emailArg || !passwordArg) {
  console.error('Usage: npx tsx scripts/seed-admin.ts <email> <password>');
  process.exit(1);
}

const email = emailArg.trim().toLowerCase();
const password = passwordArg;

/**
 * Runs SQL through the InsForge CLI — needed for `auth` schema fields that the
 * data API deliberately does not expose. Requires `npx @insforge/cli login`.
 */
function sql(query: string): { rows: Record<string, unknown>[] } {
  // `shell: true` is required so Windows can resolve `npx.cmd`. The SQL is
  // wrapped in double quotes (it only ever contains single quotes internally),
  // and newlines are collapsed so the shell sees one argument.
  const oneLine = query.replace(/\s+/g, ' ').trim();
  if (oneLine.includes('"')) {
    throw new Error('SQL containing double quotes is not supported by this helper.');
  }

  const output = execFileSync(
    'npx',
    ['@insforge/cli', 'db', 'query', `"${oneLine}"`, '--json'],
    { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'], shell: true }
  );

  // The CLI can prefix npm noise before the JSON payload.
  const start = output.indexOf('{');
  if (start === -1) throw new Error(`Unexpected CLI output: ${output}`);

  const parsed = JSON.parse(output.slice(start));
  if (parsed.error) throw new Error(`SQL failed: ${parsed.error}`);
  return { rows: parsed.rows ?? [] };
}

function escape(value: string) {
  return value.replace(/'/g, "''");
}

async function main() {
  console.log(`\nSeeding blog admin: ${email}\n`);

  // 1. Create the account (ignore "already exists").
  const anon = createClient({ baseUrl: project.oss_host, anonKey });
  const signUp = await (anon as any).auth.signUp({ email, password });

  if (signUp.error) {
    const message = String(signUp.error.message ?? signUp.error);
    const alreadyExists = /exist|registered|duplicate|conflict/i.test(message);
    if (!alreadyExists) {
      // Verification-required is expected here and is resolved in step 2.
      if (!/verif/i.test(message)) {
        throw new Error(`Sign up failed: ${message}`);
      }
    }
    console.log(`  account: ${alreadyExists ? 'already existed' : 'created (pending verification)'}`);
  } else {
    console.log('  account: created');
  }

  // 2. Force-verify the email — SMTP is disabled on this project.
  const verified = sql(
    `UPDATE auth.users SET email_verified = true WHERE lower(email) = '${escape(email)}' RETURNING id`
  );
  const rows = verified.rows;
  if (rows.length === 0) {
    throw new Error(`No auth user found for ${email} — sign up did not complete.`);
  }
  const userId = rows[0].id as string;
  console.log(`  email:   verified (user ${userId})`);

  // 3. Grant publishing access.
  sql(
    `INSERT INTO public.site_admins (user_id, note)
     VALUES ('${userId}', 'blog admin — seeded ${new Date().toISOString().slice(0, 10)}')
     ON CONFLICT (user_id) DO NOTHING`
  );
  console.log('  access:  added to site_admins');

  // 4. Prove it actually works, end to end.
  const check = createClient({ baseUrl: project.oss_host, anonKey });
  const signIn = await (check as any).auth.signInWithPassword({ email, password });
  if (signIn.error) {
    throw new Error(`Sign-in check failed: ${signIn.error.message ?? signIn.error}`);
  }

  const { data: adminRows } = await check.database.from('site_admins').select('user_id').limit(1);
  const canPublish = Array.isArray(adminRows) && adminRows.length > 0;

  console.log(`  login:   ${signIn.error ? 'FAILED' : 'OK'}`);
  console.log(`  publish: ${canPublish ? 'OK' : 'DENIED'}`);
  console.log(`\nDone. Sign in at /blog/admin/login\n`);

  if (!canPublish) process.exit(1);
}

main().catch((error) => {
  console.error(`\n${error.message ?? error}\n`);
  process.exit(1);
});
