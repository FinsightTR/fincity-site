// app/auth/signout/route.ts
import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";

// Cookie seçeneklerini "any" kullanmadan tanımlayalım
type CookieOptions = {
  path?: string;
  httpOnly?: boolean;
  secure?: boolean;
  sameSite?: "lax" | "strict" | "none";
  expires?: Date;
  maxAge?: number;
  domain?: string;
};

/**
 * Sunucu tarafında oturumu sonlandırır, cookie'leri temizler ve /login'e yönlendirir.
 */
export async function POST(req: NextRequest) {
  // Yanıtı önceden oluşturuyoruz ki cookie set/remove işlemlerini bu yanıt üzerinde yapalım.
  const res = NextResponse.redirect(new URL("/login", req.url));

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return req.cookies.get(name)?.value;
        },
        set(name: string, value: string, options?: CookieOptions) {
          res.cookies.set({ name, value, ...options });
        },
        remove(name: string, options?: CookieOptions) {
          // Cookie'yi silmek için boş değer + maxAge:0 kullanıyoruz.
          res.cookies.set({ name, value: "", maxAge: 0, ...options });
        },
      },
    }
  );

  await supabase.auth.signOut();

  return res;
}
