// app/page.tsx
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fincity | Yönetim & Finans Danışmanlığı",
  description:
    "Yönetim danışmanlığı, FP&A, muhasebe & vergi ve teknoloji entegrasyonlarıyla uçtan uca çözümler.",
};

export default function HomePage() {
  return (
    <main className="bg-white text-gray-900">
      {/* ================= HERO ================= */}
      <section className="relative h-[60vh] md:h-[72vh] overflow-hidden">
        {/* Arka plan görseli */}
        <Image
          src="/hero-home.jpg"
          alt="Birlikte çalışan, gülümseyen ekip"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* Degrade overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40" />

        {/* İçerik */}
        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 h-full flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            Uzmanlık ve teknolojiyi bir araya getiriyoruz
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-white/90 max-w-3xl">
            Böylece siz <span className="font-semibold">daha akıllı</span>,{" "}
            <span className="font-semibold">daha hızlı</span> ve{" "}
            <span className="font-semibold">daha başarılı</span> olabilirsiniz.
          </p>

          <div className="mt-8 flex gap-3">
            <a
              href="/#hizmetler"
              className="rounded-xl bg-white text-gray-900 px-5 py-2.5 font-medium hover:bg-gray-100"
            >
              Hizmetlerimiz
            </a>
            <a
              href="/contact"
              className="rounded-xl border border-white/60 px-5 py-2.5 font-medium text-white hover:bg-white/10"
            >
              Teklif Al →
            </a>
          </div>
        </div>
      </section>

      {/* ================= HİZMETLER ================= */}
      <section id="hizmetler" className="border-t bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">Hizmetlerimiz</h2>
          <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12">
            Finansal, operasyonel ve teknolojik ihtiyaçlarınıza uygun entegre çözümler sunuyoruz.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <a href="/services/dijital" className="block p-6 bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Dijital Hizmetler</h3>
              <p className="text-sm text-gray-600">RPA/low-code, ERP/CRM entegrasyonları, veri ambarı ve dashboard.</p>
              <span className="inline-block mt-4 text-sm font-medium text-gray-900">Detayları Gör →</span>
            </a>

            <a href="/services/vergi" className="block p-6 bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Vergi Danışmanlığı</h3>
              <p className="text-sm text-gray-600">Beyannameler, inceleme süreçleri, stratejik vergi planlaması.</p>
              <span className="inline-block mt-4 text-sm font-medium text-gray-900">Detayları Gör →</span>
            </a>

            <a href="/services/insan-yonetimi" className="block p-6 bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">İnsan Yönetimi ve Organizasyon Danışmanlığı</h3>
              <p className="text-sm text-gray-600">OKR/KPI, performans yönetimi ve organizasyonel dönüşüm.</p>
              <span className="inline-block mt-4 text-sm font-medium text-gray-900">Detayları Gör →</span>
            </a>

            <a href="/services/risk-surec" className="block p-6 bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Risk, Süreç ve Teknoloji</h3>
              <p className="text-sm text-gray-600">İç kontrol, süreç analizi ve teknoloji temelli optimizasyon.</p>
              <span className="inline-block mt-4 text-sm font-medium text-gray-900">Detayları Gör →</span>
            </a>

            <a href="/services/sirket-birlesme" className="block p-6 bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Şirket Birleşme ve Satın Alma</h3>
              <p className="text-sm text-gray-600">Değerleme, due diligence ve entegrasyon danışmanlığı.</p>
              <span className="inline-block mt-4 text-sm font-medium text-gray-900">Detayları Gör →</span>
            </a>

            <a href="/services/suistimal-uyum-kriz" className="block p-6 bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Suistimal, Uyum ve Kriz Yönetimi</h3>
              <p className="text-sm text-gray-600">Uyum, politika, eğitim ve kriz senaryoları yönetimi.</p>
              <span className="inline-block mt-4 text-sm font-medium text-gray-900">Detayları Gör →</span>
            </a>

            <a href="/services/strateji-yonetim" className="block p-6 bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Strateji ve Yönetim Danışmanlığı</h3>
              <p className="text-sm text-gray-600">Kurumsal hedeflere uygun strateji ve OKR planlaması.</p>
              <span className="inline-block mt-4 text-sm font-medium text-gray-900">Detayları Gör →</span>
            </a>

            <a href="/services/finansal-raporlama" className="block p-6 bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Finansal Raporlama ve Muhasebe</h3>
              <p className="text-sm text-gray-600">Muhasebe, raporlama ve FP&A süreçleri için çözümler.</p>
              <span className="inline-block mt-4 text-sm font-medium text-gray-900">Detayları Gör →</span>
            </a>

            <a href="/services/aile-sirketi" className="block p-6 bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Aile Şirketi Hizmetleri</h3>
              <p className="text-sm text-gray-600">Yönetim modelleri, kuşak geçişi ve kurumsallaşma.</p>
              <span className="inline-block mt-4 text-sm font-medium text-gray-900">Detayları Gör →</span>
            </a>
          </div>
        </div>
      </section>

      {/* ================= GÜNDEM ================= */}
      <section id="news" className="border-t bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">Gündem</h2>
          <p className="text-center text-gray-700">Yakında yeni içerikler eklenecek.</p>
        </div>
      </section>
    </main>
  );
}
