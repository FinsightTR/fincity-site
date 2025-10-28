// app/login/page.tsx
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";
import LoginForm from "@/app/login/LoginForm";

export const dynamic = "force-dynamic";
export const metadata = { title: "Giriş | Fincity" };

export default async function LoginPage({
  searchParams,
}: {
  searchParams?: { next?: string };
}) {
  const cookieStore = await cookies();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get: (name: string) => cookieStore.get(name)?.value,
      },
    }
  );

  const { data: { session } } = await supabase.auth.getSession();

  const nextPath =
    searchParams?.next && searchParams.next.startsWith("/")
      ? searchParams.next
      : "/dashboard";

  if (session) redirect(nextPath);

  return <LoginForm />;
}
