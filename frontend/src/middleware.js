import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export function middleware(req) {
  // Access the cookies using req.cookies
  const cookieStore = cookies();
  const authCookie = cookieStore.get("auth");
  const user = authCookie ? JSON.parse(authCookie.value).user : null;

  // If the user is not authenticated and not on the login page, redirect to login
  if (!user && req.nextUrl.pathname !== "/login") {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"] // Add the paths you want to protect
};
