// lib/supabaseServer.ts
import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";

export async function getSupabaseServer() {
  const store = await cookies();
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return store.getAll();
        },
        setAll() {
          // Route/page handler dışında yanıt nesnesi yok → no-op
          // (Cookie yazımı gereken yerlerde handler içinde yukarıdaki route.ts yaklaşımı kullanılmalı)
        },
      },
    }
  );
}
