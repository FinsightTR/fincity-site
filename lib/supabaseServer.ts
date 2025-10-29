// lib/supabaseServer.ts
import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";

export function getSupabaseServer() {
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        // Next 15: cookies() artık Promise, o yüzden await kullan
        async get(name: string) {
          const store = await cookies();
          return store.get(name)?.value;
        },
        async set() {
          // no-op (Vercel edge ortamında yazılamaz)
        },
        async remove() {
          // no-op
        },
      },
    }
  );
}
