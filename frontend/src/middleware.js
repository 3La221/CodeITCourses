import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export function middleware(req) {
  const url = req.nextUrl.clone();

  // 1. Redirect '/' to '/formations'
  if (url.pathname === '/') {
    url.pathname = '/formations';
    return NextResponse.redirect(url);
  }

  // 2. Handle authentication for protected routes
  const cookieStore = cookies();
  const authCookie = cookieStore.get("auth");
  const user = authCookie ? JSON.parse(authCookie.value).user : null;

  // If the user is not authenticated and not on the login page, redirect to login
  if (!user && url.pathname.startsWith('/dashboard') && url.pathname !== '/login') {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  // Allow the request to proceed
  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/dashboard/:path*'], // Define paths to apply the middleware
};
