// app/dashboard/page.tsx
import { getServerSupabase } from "@/lib/supabaseServer";

type AppRow = {
  id: string;
  name: string;
  url: string;
  code?: string | null;
};

export default async function Dashboard() {
  const supabase = getServerSupabase();

  // Aktif kullanıcıyı al
  const { data: userData, error: userErr } = await supabase.auth.getUser();
  if (userErr || !userData.user) {
    return (
      <div className="max-w-2xl mx-auto mt-10">
        <p>
          Devam etmek için{" "}
          <a className="underline text-blue-600" href="/login">
            giriş yapın
          </a>
          .
        </p>
      </div>
    );
  }

  // Kullanıcıya tanımlı uygulamaları çek
  const { data: rows, error } = await supabase
    .from("user_apps")
    .select("apps:app_id (id, name, url, code)")
    .eq("user_id", userData.user.id);

  if (error) {
    return (
      <div className="max-w-2xl mx-auto mt-10 space-y-3">
        <h1 className="text-2xl font-bold">Hoş geldin, {userData.user.email}</h1>
        <p className="text-red-600">
          Uygulamalar yüklenirken bir sorun oluştu: {error.message}
        </p>
      </div>
    );
  }

  const apps: AppRow[] = (rows || [])
    .map((r: any) => r.apps)
    .filter(Boolean);

  return (
    <div className="max-w-5xl mx-auto mt-10 px-4 space-y-6">
      <div className="flex items-baseline justify-between">
        <h1 className="text-2xl font-bold">
          Hoş geldin, {userData.user.email}
        </h1>
        <form action="/auth/signout" method="post">
          <button className="border px-3 py-1.5 rounded hover:bg-gray-50">
            Çıkış Yap
          </button>
        </form>
      </div>

      {apps.length === 0 ? (
        <div className="border rounded-lg p-6 text-gray-600">
          Bu kullanıcıya tanımlı bir uygulama bulunmuyor.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {apps.map((a) => (
            <a
              key={a.id}
              href={a.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group border rounded-xl p-4 hover:shadow transition"
            >
              <div className="text-lg font-semibold group-hover:underline">
                {a.name}
              </div>
              <div className="mt-1 text-xs text-gray-500 break-all">{a.url}</div>
              {a.code && (
                <div className="mt-2 inline-flex items-center text-[11px] px-2 py-0.5 rounded bg-gray-100 text-gray-700">
                  {a.code}
                </div>
              )}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
