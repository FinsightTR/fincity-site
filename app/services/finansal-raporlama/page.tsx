 // app/services/finansal-raporlama/page.tsx
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Finansal Raporlama ve Muhasebe | Fincity",
  description: "Muhasebe, raporlama ve FP&A süreçleri için çözümler.",
};

export default function FinansalRaporlamaPage() {
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
            <span className="text-gray-900 font-medium">Finansal Raporlama ve Muhasebe</span>
          </nav>
        </div>
      </div>

      {/* Hero + görsel alanı */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Finansal Raporlama ve Muhasebe</h1>
            <p className="mt-4 text-gray-700 leading-7">
              (İçerik eklenecek) Muhasebe süreçleri, kapanış takvimi, FP&amp;A ve yönetim
              raporlaması. IFRS/TFRS uyumu ve otomasyon odaklı iyileştirmeler.
            </p>
          </div>
          {/* /public/finansal-raporlama.jpg eklediğinde görünür */}
          <img
            src="/finansal-raporlama.jpg"
            alt=""
            className="w-full rounded-2xl border border-gray-200 shadow-sm object-cover"
          />
        </div>
      </section>
    </main>
  );
}
