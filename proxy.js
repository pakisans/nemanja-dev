import { NextResponse } from 'next/server';
import { locales, defaultLocale } from '@/lib/i18n';

export const proxy = (request) => {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/favicon') ||
    pathname.startsWith('/cv') ||
    pathname.startsWith('/og') ||
    pathname.startsWith('/icon') ||
    pathname.startsWith('/apple') ||
    pathname.startsWith('/site.webmanifest') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  const pathnameLocale = locales.find(
    (loc) => pathname === `/${loc}` || pathname.startsWith(`/${loc}/`),
  );
  if (pathnameLocale) return NextResponse.next();

  const acceptLanguage = request.headers.get('accept-language') ?? '';
  const preferredLocale = acceptLanguage.toLowerCase().includes('sr')
    ? 'sr'
    : defaultLocale;

  return NextResponse.redirect(
    new URL(
      `/${preferredLocale}${pathname === '/' ? '' : pathname}`,
      request.url,
    ),
  );
};

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
