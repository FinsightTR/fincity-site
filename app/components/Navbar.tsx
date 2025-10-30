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
    supabase.auth.getUser().then(({ data }) => mounted && setUser(data.user ?? null));
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) =>
      setUser(s?.user ?? null)
    );
    return () => {
      mounted = false;
      sub.subscription.unsubscribe();
    };
  }, [supabase]);

  const onLogout = async () => {
    await supabase.auth.signOut();
    router.replace('/login?next=/panel');
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

  // Tek CTA: kullanıcı varsa /panel, yoksa /login?next=/panel
  const panelHref = user ? '/panel' : '/login?next=/panel';

  return (
    <header className="w-full border-b bg-white">
      <nav className="mx-auto max-w-6xl flex items-center justify-between px-4 py-3">
        {/* Sol: Logo */}
        <Link href="/" prefetch={false} className="text-xl font-semibold">
          Fincity
        </Link>

        {/* Orta: Menü (Panel kaldırıldı) */}
        <div className="flex items-center gap-1">
          {navLink('/about', 'Hakkımızda')}
          {navLink('/services', 'Hizmetlerimiz')}
          {navLink('/gundem', 'Gündem')}
          {navLink('/contact', 'İletişim')}
        </div>

        {/* Sağ: Tek buton + (varsa) çıkış */}
        <div className="flex items-center gap-2">
          <Link
            href={panelHref}
            prefetch={false}
            className="px-4 py-1.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Panele Giriş
          </Link>

          {user && (
            <>
              <span className="hidden md:inline text-sm text-gray-600">
                {user.user_metadata?.full_name ?? user.email}
              </span>
              <button
                onClick={onLogout}
                className="px-3 py-1 rounded border text-gray-700 hover:bg-gray-50"
                title="Oturumu kapat"
              >
                Çıkış
              </button>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
