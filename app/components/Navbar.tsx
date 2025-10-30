// app/components/Navbar.tsx
'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import type { User } from '@supabase/supabase-js';

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const supabase = useMemo(() => createClientComponentClient(), []);

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    let mounted = true;

    supabase.auth.getUser().then(({ data }) => {
      if (mounted) setUser(data.user ?? null);
    });

    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => {
      setUser(s?.user ?? null);
    });

    return () => {
      mounted = false;
      sub.subscription.unsubscribe();
    };
  }, [supabase]);

  const onLogout = async () => {
    await supabase.auth.signOut();
    // güvenli çıkış → anasayfa
    router.replace('/');
    router.refresh();
  };

  const navLink = (href: string, label: string) => {
    const active = pathname?.startsWith(href)
      ? 'text-blue-600 font-semibold'
      : 'text-gray-700 hover:text-blue-600';
    return (
      <Link href={href} prefetch={false} className={`px-3 py-1 ${active}`}>
        {label}
      </Link>
    );
  };

  return (
    <header className="w-full border-b bg-white">
      <nav className="mx-auto max-w-6xl flex items-center justify-between px-4 py-3">
        {/* Sol: Logo */}
        <Link href="/" prefetch={false} className="text-xl font-semibold">
          Fincity
        </Link>

        {/* Orta: Menü (Panel menü öğesi yok) */}
        <div className="flex items-center gap-1">
          {navLink('/about', 'Hakkımızda')}
          {navLink('/services', 'Hizmetlerimiz')}
          {navLink('/gundem', 'Gündem')}
          {navLink('/contact', 'İletişim')}
        </div>

        {/* Sağ taraf: 
           - Oturum yoksa: Panele Giriş ( /login?next=/panel )
           - Oturum varsa: Kullanıcı adı + Güvenli Çıkış */}
        <div className="flex items-center gap-2">
          {!user ? (
            <Link
              href="/login?next=/panel"
              prefetch={false}
              className="px-4 py-1.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              Panele Giriş
            </Link>
          ) : (
            <>
              <span className="hidden md:inline text-sm text-gray-700">
                {(user.user_metadata as any)?.full_name ?? user.email}
              </span>
              <button
                onClick={onLogout}
                className="px-3 py-1 rounded border text-gray-700 hover:bg-gray-50"
                title="Güvenli Çıkış"
              >
                Güvenli Çıkış
              </button>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
