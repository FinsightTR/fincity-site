// lib/supabaseBrowser.ts
import { createClient } from "@supabase/supabase-js";

/**
 * Tarayıcı (Client) tarafında Supabase client oluşturur.
 * Navbar, LoginForm gibi client bileşenlerinde kullan.
 */
export const getSupabaseBrowser = () => {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
};


