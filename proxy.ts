import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Routes that require authentication
const protectedPaths = ["/portfolio", "/onboarding", "/kyc"];

// Routes that should redirect to dashboard if already authenticated
const authPaths = ["/login", "/register"];

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasToken = request.cookies.has("access_token");

  // Protected routes: redirect to /login if no cookie
  const isProtected = protectedPaths.some(
    (path) => pathname === path || pathname.startsWith(path + "/"),
  );

  if (isProtected && !hasToken) {
    const loginUrl = new URL("/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  // Auth routes: redirect to /portfolio if already logged in
  const isAuthPage = authPaths.some(
    (path) => pathname === path || pathname.startsWith(path + "/"),
  );

  if (isAuthPage && hasToken) {
    const portfolioUrl = new URL("/portfolio", request.url);
    return NextResponse.redirect(portfolioUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/portfolio/:path*",
    "/onboarding/:path*",
    "/kyc/:path*",
    "/login",
    "/register",
  ],
};
