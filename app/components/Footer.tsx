// app/components/Footer.tsx
import Link from "next/link";

const links = [
  { href: "/legal/kvkk", label: "Kişisel Verilerin Korunması" },
  { href: "/legal/yasal-uygulamalar", label: "Yasal Uygulamalar" },
  { href: "/legal/bilgi-guvenligi", label: "Bilgi Güvenliği" },
  { href: "/legal/site-sahibi", label: "Site Sahibi" },
  { href: "/legal/yasal-uyari", label: "Yasal Uyarı" },
  { href: "/legal/cerez-politikasi", label: "Çerezler Hakkında" },
  { href: "/legal/harici-hizmet-saglayicilar", label: "Harici Hizmet Sağlayıcılar" },
  { href: "/legal/bilgi-toplumu-hizmetleri", label: "Bilgi Toplumu Hizmetleri" },
];

export default function Footer() {
  return (
    <footer className="border-t bg-gray-50 mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="mt-10 text-xs text-gray-500 text-center border-t pt-6">
          © {new Date().getFullYear()} Fincity. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
}
