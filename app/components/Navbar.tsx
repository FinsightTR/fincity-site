// app/components/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const onAbout = pathname.startsWith("/about");
  const onServices = pathname === "/services" || pathname.startsWith("/services/");
  const onContact = pathname.startsWith("/contact");

  const base = "hover:text-gray-900";
  const active = "font-semibold text-gray-900";
  const inactive = "text-gray-600";

  return (
    <nav className="flex items-center gap-6 text-sm font-medium">
      {/* Hakkımızda */}
      <Link href="/about" className={`${base} ${onAbout ? active : inactive}`}>
        Hakkımızda
      </Link>

      {/* Hizmetlerimiz artık /services sayfasına yönleniyor */}
      <Link href="/services" className={`${base} ${onServices ? active : inactive}`}>
        Hizmetlerimiz
      </Link>

      {/* Gündem (ana sayfada #news kısmına gider) */}
      <Link href="/#news" className={base}>
        Gündem
      </Link>

      {/* Teklif Al butonu */}
      <Link
        href="/contact"
        className={`rounded-xl px-4 py-2 ${
          onContact
            ? "bg-gray-800 text-white"
            : "bg-gray-900 text-white hover:bg-gray-800"
        }`}
      >
        Teklif Al →
      </Link>
    </nav>
  );
}
