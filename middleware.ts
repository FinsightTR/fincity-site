// middleware.ts
import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  try {
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() {
            return req.cookies.getAll();
          },
          setAll(cookies) {
            for (const { name, value, options } of cookies) {
              res.cookies.set(name, value, options);
            }
          },
        },
      }
    );

    // 1) Oturum bilgisi
    const { data: sessionData } = await supabase.auth.getSession();
    const session = sessionData.session;

    // 2) Korunacak yollar (login gerektirir)
    const protectedPrefixes = ["/dashboard", "/panel", "/erp", "/mukellef"];

    const path = req.nextUrl.pathname;
    const isProtected = protectedPrefixes.some((p) => path.startsWith(p));

    // Login değilse -> /login?next=<hedef>
    if (isProtected && !session) {
      const loginUrl = new URL("/login", req.url);
      loginUrl.searchParams.set("next", path + req.nextUrl.search);
      return NextResponse.redirect(loginUrl);
    }

    // 3) Rol kontrolü (/erp = admin)
    if (path.startsWith("/erp") && session) {
      const { data: userData } = await supabase.auth.getUser();
      const role = (userData.user?.user_metadata?.role ?? "user") as
        | "admin"
        | "manager"
        | "user";
      if (role !== "admin") {
        const back = new URL("/panel", req.url);
        back.searchParams.set("m", "unauthorized");
        return NextResponse.redirect(back);
      }
    }

    // 4) Zaten login iken /login'e gelirse -> panele/dash'e at
    if (path === "/login" && session) {
      // Tercihin hangisiyse onu kullan: /panel veya /dashboard
      return NextResponse.redirect(new URL("/panel", req.url));
      // return NextResponse.redirect(new URL("/dashboard", req.url));
    }

    return res;
  } catch (e) {
    console.error("Middleware hata:", e);
    return new NextResponse("Middleware error", { status: 500 });
  }
}

// IMPORTANT: Middleware bu rotalarda çalışsın
export const config = {
  matcher: ["/login", "/dashboard/:path*", "/panel/:path*", "/erp/:path*", "/mukellef/:path*"],
};
