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
      {/* HERO BÖLÜMÜ */}
      <section className="relative w-full h-[420px] sm:h-[500px]">
        <Image
          src="/hero-home.jpg"
          alt="Fincity ekip görseli"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay ve Metin */}
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
            Uzmanlık ve teknolojiyi bir araya getiriyoruz
          </h1>
          <p className="mt-4 max-w-3xl text-white/90 text-lg">
            Böylece siz{" "}
            <span className="font-semibold text-white">daha akıllı</span>,{" "}
            <span className="font-semibold text-white">daha hızlı</span> ve{" "}
            <span className="font-semibold text-white">daha başarılı</span>{" "}
            olabilirsiniz.
          </p>

          {/* Hakkımızda Butonu */}
          <div className="mt-6">
            <Link
              href="/about"
              className="rounded-xl bg-white/90 px-6 py-3 text-gray-900 font-medium hover:bg-white"
            >
              Hakkımızda
            </Link>
          </div>
        </div>
      </section>

      {/* ================== HİZMETLER (ANA SAYFA) ================== */}
      <section id="hizmetler" className="border-t bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
            Hizmetlerimiz
          </h2>
          <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12">
            Finansal, operasyonel ve teknolojik ihtiyaçlarınıza uygun entegre
            çözümler sunuyoruz.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 1 */}
            <a
              href="/services/dijital"
              className="block p-6 bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Dijital Hizmetler
              </h3>
              <p className="text-sm text-gray-600">
                RPA/low-code, ERP/CRM entegrasyonları, veri ambarı ve dashboard.
              </p>
              <span className="inline-block mt-4 text-sm font-medium text-gray-900">
                Detayları Gör →
              </span>
            </a>

            {/* 2 */}
            <a
              href="/services/vergi"
              className="block p-6 bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Vergi Danışmanlığı
              </h3>
              <p className="text-sm text-gray-600">
                Beyannameler, inceleme süreçleri, stratejik vergi planlaması.
              </p>
              <span className="inline-block mt-4 text-sm font-medium text-gray-900">
                Detayları Gör →
              </span>
            </a>

            {/* 3 */}
            <a
              href="/services/insan-yonetimi"
              className="block p-6 bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                İnsan Yönetimi ve Organizasyon Danışmanlığı
              </h3>
              <p className="text-sm text-gray-600">
                OKR/KPI, performans yönetimi ve organizasyonel dönüşüm.
              </p>
              <span className="inline-block mt-4 text-sm font-medium text-gray-900">
                Detayları Gör →
              </span>
            </a>

            {/* 4 */}
            <a
              href="/services/risk-surec"
              className="block p-6 bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Risk, Süreç ve Teknoloji
              </h3>
              <p className="text-sm text-gray-600">
                İç kontrol, süreç analizi ve teknoloji temelli optimizasyon.
              </p>
              <span className="inline-block mt-4 text-sm font-medium text-gray-900">
                Detayları Gör →
              </span>
            </a>

            {/* 5 */}
            <a
              href="/services/sirket-birlesme"
              className="block p-6 bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Şirket Birleşme ve Satın Alma
              </h3>
              <p className="text-sm text-gray-600">
                Değerleme, due diligence ve entegrasyon danışmanlığı.
              </p>
              <span className="inline-block mt-4 text-sm font-medium text-gray-900">
                Detayları Gör →
              </span>
            </a>

            {/* 6 */}
            <a
              href="/services/suistimal-uyum-kriz"
              className="block p-6 bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Suistimal, Uyum ve Kriz Yönetimi
              </h3>
              <p className="text-sm text-gray-600">
                Uyum, politika, eğitim ve kriz senaryoları yönetimi.
              </p>
              <span className="inline-block mt-4 text-sm font-medium text-gray-900">
                Detayları Gör →
              </span>
            </a>

            {/* 7 */}
            <a
              href="/services/strateji-yonetim"
              className="block p-6 bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Strateji ve Yönetim Danışmanlığı
              </h3>
              <p className="text-sm text-gray-600">
                Kurumsal hedeflere uygun strateji ve OKR planlaması.
              </p>
              <span className="inline-block mt-4 text-sm font-medium text-gray-900">
                Detayları Gör →
              </span>
            </a>

            {/* 8 */}
            <a
              href="/services/finansal-raporlama"
              className="block p-6 bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Finansal Raporlama ve Muhasebe
              </h3>
              <p className="text-sm text-gray-600">
                Muhasebe, raporlama ve FP&A süreçleri için çözümler.
              </p>
              <span className="inline-block mt-4 text-sm font-medium text-gray-900">
                Detayları Gör →
              </span>
            </a>

            {/* 9 */}
            <a
              href="/services/aile-sirketi"
              className="block p-6 bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Aile Şirketi Hizmetleri
              </h3>
              <p className="text-sm text-gray-600">
                Yönetim modelleri, kuşak geçişi ve kurumsallaşma.
              </p>
              <span className="inline-block mt-4 text-sm font-medium text-gray-900">
                Detayları Gör →
              </span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
