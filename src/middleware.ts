import { NextResponse, type NextRequest } from 'next/server';
import { updateSession } from '@insforge/sdk/ssr/middleware';

const ADMIN_ROOT = '/blog/admin';
const ADMIN_LOGIN = '/blog/admin/login';

export async function middleware(request: NextRequest) {
  const response = NextResponse.next({ request });

  const isConfigured =
    Boolean(process.env.NEXT_PUBLIC_INSFORGE_URL) &&
    Boolean(process.env.NEXT_PUBLIC_INSFORGE_ANON_KEY);

  if (!isConfigured) {
    // Without a backend the admin area cannot authenticate anyone — keep it closed.
    if (request.nextUrl.pathname.startsWith(ADMIN_ROOT)) {
      return NextResponse.redirect(new URL('/', request.url));
    }
    return response;
  }

  // Refresh the session before Server Components render so they never read a
  // stale or expired access token.
  await updateSession({
    requestCookies: request.cookies,
    responseCookies: response.cookies,
  });

  const path = request.nextUrl.pathname;
  const hasSession = Boolean(request.cookies.get('insforge_access_token')?.value);

  // Cheap cookie gate only. The authoritative checks are the admin layout's
  // server-side session lookup and the database RLS policies.
  if (path.startsWith(ADMIN_ROOT) && !path.startsWith(ADMIN_LOGIN) && !hasSession) {
    return NextResponse.redirect(new URL(ADMIN_LOGIN, request.url));
  }

  if (path.startsWith(ADMIN_LOGIN) && hasSession) {
    return NextResponse.redirect(new URL(ADMIN_ROOT, request.url));
  }

  return response;
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
