// app/components/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const onServices = pathname === "/services" || pathname.startsWith("/services/");
  const servicesHref = isHome ? "/#hizmetler" : "/#hizmetler"; // ana sayfadaki bölüme kaydır

  return (
    <nav className="flex items-center gap-6 text-sm font-medium">
      <Link href="/#about" className="hover:text-gray-900">Hakkımızda</Link>

      <Link
        href={servicesHref}
        className={`hover:text-gray-900 ${onServices ? "font-semibold text-gray-900" : "text-gray-600"}`}
      >
        Hizmetlerimiz
      </Link>

      <Link href="/#news" className="hover:text-gray-900">Gündem</Link>

      <Link
        href="/contact"
        className="rounded-xl bg-gray-900 px-4 py-2 text-white hover:bg-gray-800"
      >
        Teklif Al →
      </Link>
    </nav>
  );
}
