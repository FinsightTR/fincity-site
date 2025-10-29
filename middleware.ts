// middleware.ts
import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";

export async function middleware(req: NextRequest) {
  // Varsayılan response nesnesi oluştur
  const res = NextResponse.next();

  try {
    // Supabase server client oluştur
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() {
            return req.cookies.getAll();
          },
          setAll(cookies) {
            // Supabase oturum cookie'si değişirse response'a uygula
            for (const { name, value, options } of cookies) {
              res.cookies.set(name, value, options);
            }
          },
        },
      }
    );

    // Aktif oturumu kontrol et
    const {
      data: { session },
    } = await supabase.auth.getSession();

    // /dashboard koruması
    if (req.nextUrl.pathname.startsWith("/dashboard") && !session) {
      const loginUrl = new URL("/login", req.url);
      loginUrl.searchParams.set("next", req.nextUrl.pathname + req.nextUrl.search);
      return NextResponse.redirect(loginUrl);
    }

    // /login iken oturum varsa dashboard'a yönlendir
    if (req.nextUrl.pathname === "/login" && session) {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }

    // Diğer tüm istekleri devam ettir
    return res;
  } catch (error) {
    console.error("Middleware hata:", error);
    return new NextResponse("Middleware error", { status: 500 });
  }
}

// Middleware sadece login ve dashboard rotalarında çalışsın
export const config = {
  matcher: ["/dashboard/:path*", "/login"],
};
