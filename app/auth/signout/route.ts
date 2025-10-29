// app/auth/signout/route.ts
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";

/**
 * Oturumu sonlandırır ve /login'e yönlendirir.
 * Next.js 15: cookies() -> Promise; @supabase/ssr: cookies -> getAll / setAll
 */
export async function POST(req: NextRequest) {
  // Yönlendirme yanıtını önceden oluştur
  const res = NextResponse.redirect(new URL("/login", req.url));

  // Request cookie'lerini oku
  const store = await cookies();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        // Supabase mevcut cookie'leri okumak için çağırır
        getAll() {
          return store.getAll();
        },
        // Supabase cookie yazmak/silmek istediğinde hepsini burada set ederiz
        setAll(cookiesToSet) {
          for (const { name, value, options } of cookiesToSet) {
            res.cookies.set({ name, value, ...options });
          }
        },
      },
    }
  );

  await supabase.auth.signOut();

  return res;
}
