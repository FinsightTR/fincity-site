// lib/supabaseBrowser.ts
import { createClient } from "@supabase/supabase-js";

/**
 * Tarayıcı (client) tarafında Supabase client oluşturur.
 * Navbar, LoginForm gibi bileşenlerde kullanılmak üzere.
 * Bu fonksiyon sadece browser tarafında çağrılmalıdır.
 */

export function getSupabaseBrowser() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) {
    throw new Error("Supabase URL veya Anon Key eksik. .env.local dosyasını kontrol et.");
  }

  // createClient her çağrıldığında yeni bir instance döner
  // Browser context'inde cache'lenmesine gerek yoktur
  return createClient(url, key, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
    },
  });
}


