"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import type { User } from "@supabase/supabase-js";

export default function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const supabase = useMemo(() => createClientComponentClient(), []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);

  const rawNext = searchParams?.get("next") || "";
  const nextPath = rawNext.startsWith("/") ? rawNext : "/panel"; // ✅ varsayılan panel

  // Oturum zaten varsa login'de bekletme
  useEffect(() => {
    (async () => {
      const { data } = await supabase.auth.getSession();
      if (data.session) router.replace(nextPath);
    })();
  }, [supabase, router, nextPath]);

  // Hoş geldin satırı için
  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user ?? null));
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) =>
      setUser(s?.user ?? null)
    );
    return () => sub.subscription.unsubscribe();
  }, [supabase]);

  const fullName =
    (user?.user_metadata as any)?.full_name ||
    (user?.email ? user.email.split("@")[0] : "");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErr(null);
    if (!email || !password) {
      setErr("Lütfen e-posta ve şifrenizi girin.");
      return;
    }
    setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        let msg = error.message;
        if (/invalid login credentials/i.test(msg)) msg = "E-posta veya şifre hatalı.";
        setErr(msg);
        return;
      }
      await supabase.auth.getSession(); // token hazır
      router.refresh();
      router.replace(nextPath); // ✅ panel'e
    } catch {
      setErr("Beklenmeyen bir hata oluştu. Lütfen tekrar deneyin.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gray-50">
      <form onSubmit={onSubmit} className="bg-white p-8 rounded-2xl shadow w-full max-w-sm space-y-4" noValidate>
        {user && <p className="text-2xl font-bold text-center">Hoş geldin, {fullName}</p>}
        <h1 className="text-2xl font-bold text-center">Fincity Giriş</h1>

        {err && (
          <p role="alert" className="text-sm text-red-700 bg-red-50 border border-red-200 rounded p-2">
            {err}
          </p>
        )}

        <label className="block text-sm font-medium text-gray-700">
          E-posta
          <input
            name="email"
            type="email"
            placeholder="ornek@fincity.com.tr"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 w-full border rounded p-2"
            required
            autoComplete="username"
            inputMode="email"
          />
        </label>

        <label className="block text-sm font-medium text-gray-700">
          Şifre
          <input
            name="password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 w-full border rounded p-2"
            required
            autoComplete="current-password"
          />
        </label>

        <button type="submit" disabled={loading} className="w-full bg-blue-600 text-white rounded p-2 disabled:opacity-60" aria-busy={loading}>
          {loading ? "Giriş yapılıyor..." : "Giriş Yap"}
        </button>
      </form>
    </div>
  );
}
