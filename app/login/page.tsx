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
  // Next.js 15: searchParams artık Promise
  searchParams?: Promise<Search>;
}) {
  const cookieStore = await cookies();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: { get: (name: string) => cookieStore.get(name)?.value },
    }
  );

  const {
    data: { session },
  } = await supabase.auth.getSession();

  // Next paramını Promise içinden güvenli çek
  const sp = (await searchParams) ?? {};
  const rawNext = Array.isArray(sp.next) ? sp.next[0] : (sp.next as string | undefined);
  const nextPath = rawNext && rawNext.startsWith("/") ? rawNext : "/dashboard";

  if (session) redirect(nextPath);

  return <LoginForm />;
}
