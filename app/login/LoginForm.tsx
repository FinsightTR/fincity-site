// app/components/LoginForm.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  // /login?next=/hedef → sadece iç (/) path'e izin ver
  const rawNext = searchParams?.get("next") || "";
  const nextPath = rawNext.startsWith("/") ? rawNext : "/dashboard";

  // Oturum varsa yönlendir
  useEffect(() => {
    let mounted = true;
    const sb = createClientComponentClient();
    sb.auth.getUser().then(({ data }) => {
      if (!mounted) return;
      if (data.user) router.replace(nextPath);
    });
    return () => {
      mounted = false;
    };
  }, [router, nextPath]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErr(null);

    if (!email || !password) {
      setErr("Lütfen e-posta ve şifrenizi girin.");
      return;
    }

    setLoading(true);
    try {
      const sb = createClientComponentClient();
      const { error } = await sb.auth.signInWithPassword({ email, password });
      if (error) {
        let msg = error.message;
        if (/invalid login credentials/i.test(msg)) msg = "E-posta veya şifre hatalı.";
        setErr(msg);
        return;
      }
      router.push(nextPath);
    } catch {
      setErr("Beklenmeyen bir hata oluştu. Lütfen tekrar deneyin.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gray-50">
      <form
        onSubmit={onSubmit}
        className="bg-white p-8 rounded-2xl shadow w-full max-w-sm space-y-4"
        noValidate
      >
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

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white rounded p-2 disabled:opacity-60"
          aria-busy={loading}
        >
          {loading ? "Giriş yapılıyor..." : "Giriş Yap"}
        </button>
      </form>
    </div>
  );
}
