// middleware.ts
import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";

/**
 * Tek bir hostname'e sabitle (kanonik host).
 * İstersen .env içine NEXT_PUBLIC_PRIMARY_HOST koyabilirsin; yoksa fincity-site.vercel.app kullanılır.
 */
const PRIMARY_HOST =
  process.env.NEXT_PUBLIC_PRIMARY_HOST || "fincity-site.vercel.app";

/** Kanonik host kontrolü: yanlış hostta ise 308 ile ana hosta yönlendir. */
function ensurePrimaryHost(req: NextRequest): NextResponse | null {
  const host = req.headers.get("host") || "";
  const isLocal =
    host.startsWith("localhost") ||
    host.startsWith("127.0.0.1") ||
    host.endsWith(".local");

  if (isLocal || host === PRIMARY_HOST) return null;

  const url = new URL(req.url);
  url.host = PRIMARY_HOST;
  // Protokolü koru (Vercel prod'da zaten https)
  url.protocol = req.nextUrl.protocol;
  return NextResponse.redirect(url, 308);
}

/**
 * Not: Kanonik host yönlendirmesinin her sayfada çalışması için
 * matcher'ı tüm rotaları kapsayacak şekilde ayarladık; _next statiklerini hariç tuttuk.
 */
export const config = {
  matcher: [
    // Tüm yollar, ama Next statikleri/asset'leri hariç
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};

export async function middleware(req: NextRequest) {
  // 1) Önce hostu sabitle
  const canon = ensurePrimaryHost(req);
  if (canon) return canon;

  // 2) Varsayılan response
  const res = NextResponse.next();

  // 3) Supabase server client (cookie bridge)
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

  // 4) Oturum varken /login'e gelirse → /panel
  if (path === "/login" && session) {
    return NextResponse.redirect(new URL("/panel", req.url));
  }

  // 5) /erp ve /mukellef: login şart
  const isProtected = path.startsWith("/erp") || path.startsWith("/mukellef");
  if (isProtected && !session) {
    const url = new URL("/login", req.url);
    url.searchParams.set("next", path + req.nextUrl.search);
    return NextResponse.redirect(url);
  }

  // 6) /erp ve /mukellef: admin şartı
  if (isProtected && session) {
    const { data: u } = await supabase.auth.getUser();
    const role = (u.user?.user_metadata?.role ?? "user") as
      | "admin"
      | "manager"
      | "user";

    if (role !== "admin") {
      const back = new URL("/panel", req.url);
      back.searchParams.set("m", "unauthorized");
      return NextResponse.redirect(back);
    }
  }

  // 7) Devam
  return res;
}
