// middleware.ts
import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";

export const config = {
  matcher: ["/login", "/dashboard/:path*", "/panel/:path*", "/erp/:path*", "/mukellef/:path*"],
};

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll: () => req.cookies.getAll(),
        setAll: (cookies) => cookies.forEach(({ name, value, options }) => res.cookies.set(name, value, options)),
      },
    }
  );

  const { data: s } = await supabase.auth.getSession();
  const session = s.session;
  const path = req.nextUrl.pathname;

  const needsLogin = ["/dashboard", "/panel", "/erp", "/mukellef"].some(p => path.startsWith(p));
  if (needsLogin && !session) {
    const url = new URL("/login", req.url);
    url.searchParams.set("next", path + req.nextUrl.search);
    return NextResponse.redirect(url);
  }

  // ---- ADMIN şartı: ERP + Mükellef ----
  if (session && (path.startsWith("/erp") || path.startsWith("/mukellef"))) {
    const { data: u } = await supabase.auth.getUser();
    const role = (u.user?.user_metadata?.role ?? "user") as "admin" | "manager" | "user";
    if (role !== "admin") {
      const back = new URL("/panel", req.url);
      back.searchParams.set("m", "unauthorized");
      return NextResponse.redirect(back);
    }
  }

  // Login'liyken /login'e gelirse panele at
  if (path === "/login" && session) {
    return NextResponse.redirect(new URL("/panel", req.url));
  }

  return res;
}
