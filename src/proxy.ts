import { type NextRequest, NextResponse } from 'next/server';

const MARKDOWN_SUPPORTED_PATHS = new Set([
  '/',
  '/about',
  '/therapy',
  '/workshops',
  '/coaching',
  '/tools',
  '/resources',
]);

export function proxy(request: NextRequest) {
  const accept = request.headers.get('accept') ?? '';
  const path = request.nextUrl.pathname;

  if (accept.includes('text/markdown') && MARKDOWN_SUPPORTED_PATHS.has(path)) {
    const url = request.nextUrl.clone();
    url.pathname = '/api/markdown';
    url.searchParams.set('path', path);
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/about', '/therapy', '/workshops', '/coaching', '/tools', '/resources'],
};
