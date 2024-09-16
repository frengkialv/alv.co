import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const isLogin = request.cookies.get("access_token");

  if (!isLogin && request.nextUrl.pathname.startsWith("/cart")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (
    isLogin &&
    (request.nextUrl.pathname.startsWith("/login") ||
      request.nextUrl.pathname.startsWith("/register"))
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/cart", "/login", "/register"],
};
