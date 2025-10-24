 // app/services/sirket-birlesme/page.tsx
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Şirket Birleşme ve Satın Alma | Fincity",
  description:
    "Değerleme, due diligence ve entegrasyon planlama ile M&A süreçlerinde uçtan uca danışmanlık.",
};

export default function SirketBirlesmePage() {
  return (
    <main className="bg-white">
      {/* Breadcrumb */}
      <div className="border-b bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-3 text-sm">
          <nav className="text-gray-600">
            <Link href="/" className="hover:text-gray-900">Ana Sayfa</Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-gray-900">Hizmetlerimiz</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Şirket Birleşme ve Satın Alma</span>
          </nav>
        </div>
      </div>

      {/* Hero + görsel alanı */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Şirket Birleşme ve Satın Alma
            </h1>
            <p className="mt-4 text-gray-700 leading-7">
              (İçerik eklenecek) Hedef şirket taraması, değerleme, finansal/operasyonel
              due diligence, SPA destekleri, entegrasyon planlama ve kapanış sonrası ilk
              100 gün danışmanlığı.
            </p>
          </div>
          {/* /public/sirket-birlesme.jpg eklediğinde görünür */}
          <img
            src="/sirket-birlesme.jpg"
            alt=""
            className="w-full rounded-2xl border border-gray-200 shadow-sm object-cover"
          />
        </div>
      </section>
    </main>
  );
}
