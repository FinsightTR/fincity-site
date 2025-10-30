// app/login/page.tsx
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";
import LoginForm from "./LoginForm";

export const dynamic = "force-dynamic";
export const metadata = { title: "Giriş | Fincity" };

type Search = Record<string, string | string[]>;

export default async function LoginPage({
  searchParams,
}: {
  searchParams?: Promise<Search>;
}) {
  // Next 15: cookies() async döner
  const store = await cookies();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return store.getAll();
        },
        // SSR'da cookie yazmıyoruz (Next 15 uyumu)
        setAll() {},
      },
    }
  );

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const sp = (await searchParams) ?? {};
  const rawNext = Array.isArray(sp.next) ? sp.next[0] : (sp.next as string | undefined);

  // Güvenli next path: iç link ve "/" ile başlamalı
  const nextPath =
    rawNext && rawNext.startsWith("/") && !rawNext.startsWith("//")
      ? rawNext
      : "/panel";

  // Oturum varsa formu göstermeden yönlendir
  if (session) redirect(nextPath);

  return <LoginForm />;
}
