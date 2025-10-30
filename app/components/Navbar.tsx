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
    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
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
    const active =
      pathname === href ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600';
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

        {/* Orta: Menü */}
        <div className="flex items-center gap-1">
          {navLink('/hakkimizda', 'Hakkımızda')}
          {navLink('/services/dijital', 'Hizmetlerimiz')}
          {navLink('/gundem', 'Gündem')}
          {navLink('/iletisim', 'İletişim')}
          {/* Panel: daima /panel */}
          {navLink('/panel', 'Panel')}
        </div>

        {/* Sağ: Auth */}
        <div className="flex items-center gap-2">
          {user ? (
            <>
              <span className="hidden md:inline text-sm text-gray-600">
                {user.user_metadata?.full_name ?? user.email}
              </span>
              <button
                onClick={onLogout}
                className="px-3 py-1 rounded border text-gray-700 hover:bg-gray-50"
              >
                Çıkış
              </button>
            </>
          ) : (
            <Link
              href="/login?next=/panel"
              prefetch={false}
              className="px-3 py-1 rounded border text-gray-700 hover:bg-gray-50"
            >
              Giriş
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}
