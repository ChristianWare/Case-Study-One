import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
import { IUser } from "./backend/models/user";
import { analytics } from "./utils/analytics";

export default withAuth(
  function middleware(req) {
    // authorize roles
    const url = req?.nextUrl?.pathname;
    const user = req?.nextauth?.token?.user as IUser;

    if (url?.startsWith("/admin") && user?.role !== "admin") {
      return NextResponse.redirect(new URL("/", req.url));
    }

    // track analytics event
    if (req.nextUrl.pathname === "/") {
      try {
        analytics.track("pageview", {
          page: "/",
          country: req.geo?.country,
        });
      } catch (err) {
        // fail silently
        console.error(err);
      }
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = {
  matcher: ["/me/:path*", "/bookings/:path*", "/admin/:path*", "/"],
};
