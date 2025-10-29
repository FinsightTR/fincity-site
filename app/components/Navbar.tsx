"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useMemo } from "react";
import { getSupabaseBrowser } from "@/lib/supabaseBrowser";
import type { User } from "@supabase/supabase-js";

export default function Navbar() {
  const pathname = usePathname();
  const [user, setUser] = useState<User | null>(null);
  const [loaded, setLoaded] = useState(false);

  const onAbout = pathname.startsWith("/about");
  const onServices = pathname === "/services" || pathname.startsWith("/services/");
  const onContact = pathname.startsWith("/contact");
  const onDashboard = pathname.startsWith("/dashboard");

  const base = "hover:text-gray-900 transition-colors";
  const active = "font-semibold text-gray-900";
  const inactive = "text-gray-600";

  useEffect(() => {
    const sb = getSupabaseBrowser();
    sb.auth.getUser().then(({ data }) => {
      setUser(data.user ?? null);
      setLoaded(true);
    });
    const { data: sub } = sb.auth.onAuthStateChange((_evt, session) => {
      setUser(session?.user ?? null);
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  // Kullanıcı adı: full_name > name > display_name > e-posta prefix
  const fullName = useMemo(() => {
    const m = user?.user_metadata as any;
    return (
      m?.full_name ||
      m?.name ||
      m?.display_name ||
      (user?.email ? user.email.split("@")[0] : "")
    );
  }, [user]);

  const handleLogout = async () => {
    const sb = getSupabaseBrowser();
    await sb.auth.signOut();
    window.location.href = "/login";
  };

  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg text-gray-900 hover:text-gray-700">
          Fincity
        </Link>

        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link href="/about" className={`${base} ${onAbout ? active : inactive}`}>Hakkımızda</Link>
          <Link href="/services" className={`${base} ${onServices ? active : inactive}`}>Hizmetlerimiz</Link>
          <Link href="/#news" className={`${base} ${pathname === "/#news" ? active : inactive}`}>Gündem</Link>
          <Link href="/contact" className={`${onContact ? active : inactive} ${base}`}>İletişim</Link>

          {!loaded ? (
            <span className="text-gray-400">...</span>
          ) : !user ? (
            <Link href="/login" className="px-3 py-1.5 rounded bg-gray-900 text-white hover:bg-gray-800 transition">
              Giriş
            </Link>
          ) : (
            <>
              {/* <span className="text-gray-700 hidden sm:inline">
  Hoş geldin{fullName ? `, ${fullName}` : ""}!
</span> */}


              {!onDashboard && (
                <Link href="/dashboard" className="px-3 py-1.5 rounded bg-blue-600 text-white hover:bg-blue-700 transition">
                  Panel
                </Link>
              )}
              <button onClick={handleLogout} className="px-3 py-1.5 rounded border text-gray-700 hover:bg-gray-100">
                Çıkış
              </button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
