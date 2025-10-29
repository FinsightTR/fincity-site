// app/dashboard/page.tsx
import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";

export const dynamic = "force-dynamic";
export const metadata = { title: "Panel | Fincity" };

export default async function DashboardPage() {
  const cookieStore = await cookies();
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll: () => cookieStore.getAll().map(c => ({ name: c.name, value: c.value })),
        setAll: (cookiesToSet) => {
          // Next.js 15'te burada gerçek set işlemi yapmıyoruz (redirect/güncelleme yok).
          // Oturum cookie'leri Supabase tarafından yönetiliyor.
        },
      },
    }
  );

  const { data: { user } } = await supabase.auth.getUser();

  const meta = (user?.user_metadata ?? {}) as Record<string, any>;
  const fullName =
    meta.full_name || meta.name || meta.display_name || (user?.email?.split("@")[0] ?? "Kullanıcı");

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-2xl font-semibold mb-6">Hoş geldin, {fullName}</h1>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border p-4">
          <h2 className="font-medium mb-2">Herkesin gördüğü alanlar</h2>
          <p className="text-sm text-gray-600">Buraya üyeye özel kısa özet / linkler gelecek.</p>
        </div>

        <div className="rounded-xl border p-4">
          <h2 className="font-medium mb-2">ERP Modülü</h2>
          <p className="text-sm text-gray-600">Yetkiye göre yönlendirme yapılacak.</p>
        </div>
      </div>
    </main>
  );
}
