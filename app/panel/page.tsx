// app/panel/page.tsx
'use client';

import { Suspense, useEffect, useMemo, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import type { User } from '@supabase/supabase-js';

export default function PanelPage() {
  // Next 15 uyarısını önlemek için Suspense ile sarmalıyoruz
  return (
    <Suspense fallback={<div className="py-16 text-center">Yükleniyor…</div>}>
      <PanelInner />
    </Suspense>
  );
}

function PanelInner() {
  const router = useRouter();
  const search = useSearchParams();
  const supabase = useMemo(() => createClientComponentClient(), []);

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const unauthorized = search.get('m') === 'unauthorized';

  useEffect(() => {
    let mounted = true;

    (async () => {
      const { data } = await supabase.auth.getUser();
      if (!mounted) return;

      if (!data.user) {
        // Oturum yoksa login'e next=/panel ile gönder
        router.replace('/login?next=/panel');
        return;
      }

      setUser(data.user);
      setLoading(false);
    })();

    // Auth değişirse server cookie’leriyle senkron kalalım
    const { data: sub } = supabase.auth.onAuthStateChange(async () => {
      await router.refresh();
    });

    return () => {
      mounted = false;
      sub.subscription.unsubscribe();
    };
  }, [supabase, router]);

  if (loading) {
    return <div className="py-16 text-center">Yükleniyor…</div>;
  }

  const fullName =
    (user?.user_metadata as any)?.full_name ||
    (user?.email ? user.email.split('@')[0] : '');

  return (
    <main className="flex flex-col items-center py-16">
      {unauthorized && (
        <div className="mb-6 w-full max-w-4xl rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-red-700">
          Bu alana erişim yetkiniz yok.
        </div>
      )}

      <h1 className="text-2xl font-medium mb-2">Hoş geldin, {fullName}</h1>
      <h2 className="text-3xl font-bold mb-12">Uygulamalarımız</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full px-6">
        {/* Fincity Web */}
        <Link
          href="/"
          className="border rounded-2xl p-6 shadow-sm hover:shadow-md transition bg-white"
        >
          <h3 className="text-xl font-semibold mb-2">🏠 Fincity Web</h3>
          <p className="text-gray-600">Fincity anasayfaya dön.</p>
        </Link>

        {/* ERP Modülleri */}
        <Link
          href="/erp"
          className="border rounded-2xl p-6 shadow-sm hover:shadow-md transition bg-white"
        >
          <h3 className="text-xl font-semibold mb-2">🧾 ERP Modülleri</h3>
          <p className="text-gray-600">Finsight ERP modülleri yakında burada.</p>
        </Link>

        {/* Mükellef Uygulaması */}
        <Link
          href="/mukellef"
          className="border rounded-2xl p-6 shadow-sm hover:shadow-md transition bg-white"
        >
          <h3 className="text-xl font-semibold mb-2">💼 Mükellef Uygulaması</h3>
          <p className="text-gray-600">Bağlantılar yakında eklenecek.</p>
        </Link>
      </div>
    </main>
  );
}
