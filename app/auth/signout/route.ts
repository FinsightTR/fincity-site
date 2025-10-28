// app/auth/signout/route.ts
import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";

/**
 * Sunucu tarafında oturumu sonlandırır.
 * Cookie'leri temizler ve login sayfasına yönlendirir.
 */
export async function POST(req: NextRequest) {
  // Kullanıcıyı login sayfasına yönlendireceğiz
  const res = NextResponse.redirect(new URL("/login", req.url));

  // Supabase server client oluştur
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return req.cookies.get(name)?.value;
        },
        set(name: string, value: string, options: any) {
          res.cookies.set({ name, value, ...options });
        },
        remove(name: string, options: any) {
          res.cookies.set({ name, value: "", ...options });
        },
      },
    }
  );

  // Oturumu kapat
  await supabase.auth.signOut();

  // Yönlendirmeyi gönder
  return res;
}
