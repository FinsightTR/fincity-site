// middleware.ts
import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";

export const config = {
  // ⚠️ /panel ve /dashboard çıkarıldı. Sadece login, erp ve mukellef kontrol ediliyor.
  matcher: ["/login", "/erp/:path*", "/mukellef/:path*"],
};

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll: () => req.cookies.getAll(),
        setAll: (cookies) => {
          for (const { name, value, options } of cookies) {
            res.cookies.set(name, value, options);
          }
        },
      },
    }
  );

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const path = req.nextUrl.pathname;

  // ✅ Oturum varken /login'e gelirse doğrudan /panel'e gönder
  if (path === "/login" && session) {
    return NextResponse.redirect(new URL("/panel", req.url));
  }

  // ✅ /erp ve /mukellef: giriş ZORUNLU
  if ((path.startsWith("/erp") || path.startsWith("/mukellef")) && !session) {
    const url = new URL("/login", req.url);
    url.searchParams.set("next", path + req.nextUrl.search);
    return NextResponse.redirect(url);
  }

  // ✅ /erp ve /mukellef: admin ZORUNLU
  if (session && (path.startsWith("/erp") || path.startsWith("/mukellef"))) {
    const { data: u } = await supabase.auth.getUser();
    const role = (u.user?.user_metadata?.role ?? "user") as "admin" | "manager" | "user";
    if (role !== "admin") {
      const back = new URL("/panel", req.url);
      back.searchParams.set("m", "unauthorized");
      return NextResponse.redirect(back);
    }
  }

  return res;
}
