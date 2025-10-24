// app/page.tsx
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
      {/* HERO */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-center">
          Uzmanlık ve teknolojiyi bir araya getiriyoruz
        </h1>
        <p className="mt-4 text-center text-lg sm:text-xl text-gray-600">
          Böylece siz <span className="font-semibold text-gray-900">daha akıllı</span>,{" "}
          <span className="font-semibold text-gray-900">daha hızlı</span> ve{" "}
          <span className="font-semibold text-gray-900">daha başarılı</span> olabilirsiniz.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Link
            href="/contact"
            className="rounded-xl bg-gray-900 px-5 py-2.5 text-white hover:bg-gray-800"
          >
            Teklif Al →
          </Link>
          <Link
            href="/#hizmetler"
            className="rounded-xl border border-gray-300 px-5 py-2.5 hover:bg-gray-50"
          >
            Hizmetlerimiz
          </Link>
        </div>
      </section>

      {/* HAKKIMIZDA */}
      <section id="about" className="border-t bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Hakkımızda</h2>
          <p className="mx-auto max-w-4xl text-center text-gray-700 leading-7">
            Fincity; yönetim danışmanlığı, finansal planlama (FP&A), muhasebe & vergi
            ve teknoloji entegrasyonlarında uzmanlaşmış bir ekiptir. Hedefimiz yalın
            süreçler, şeffaf raporlama ve öngörülebilir nakit akışıyla işletmelerin
            daha hızlı ve sağlıklı karar almasını sağlamaktır. 4–8 hafta içinde
            kurulum ve standart rapor setleriyle görünür sonuç üretir, aylık gözden
            geçirme oturumlarıyla sürdürülebilirliği sağlarız.
          </p>
        </div>
      </section>

      {/* ================== HİZMETLER (ANA SAYFA) ================== */}
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

            <a href="/services" className="block p-6 bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">İnsan Yönetimi ve Organizasyon Danışmanlığı</h3>
              <p className="text-sm text-gray-600">OKR/KPI, performans yönetimi ve organizasyonel dönüşüm.</p>
              <span className="inline-block mt-4 text-sm font-medium text-gray-900">Detayları Gör →</span>
            </a>

            <a href="/services" className="block p-6 bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Risk, Süreç ve Teknoloji</h3>
              <p className="text-sm text-gray-600">İç kontrol, süreç analizi ve teknoloji temelli optimizasyon.</p>
              <span className="inline-block mt-4 text-sm font-medium text-gray-900">Detayları Gör →</span>
            </a>

            <a href="/services" className="block p-6 bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Şirket Birleşme ve Satın Alma</h3>
              <p className="text-sm text-gray-600">Değerleme, due diligence ve entegrasyon danışmanlığı.</p>
              <span className="inline-block mt-4 text-sm font-medium text-gray-900">Detayları Gör →</span>
            </a>

            <a href="/services" className="block p-6 bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Suistimal, Uyum ve Kriz Yönetimi</h3>
              <p className="text-sm text-gray-600">Uyum, politika, eğitim ve kriz senaryoları yönetimi.</p>
              <span className="inline-block mt-4 text-sm font-medium text-gray-900">Detayları Gör →</span>
            </a>

            <a href="/services" className="block p-6 bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Strateji ve Yönetim Danışmanlığı</h3>
              <p className="text-sm text-gray-600">Kurumsal hedeflere uygun strateji ve OKR planlaması.</p>
              <span className="inline-block mt-4 text-sm font-medium text-gray-900">Detayları Gör →</span>
            </a>

            <a href="/services" className="block p-6 bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Finansal Raporlama ve Muhasebe</h3>
              <p className="text-sm text-gray-600">Muhasebe, raporlama ve FP&A süreçleri için çözümler.</p>
              <span className="inline-block mt-4 text-sm font-medium text-gray-900">Detayları Gör →</span>
            </a>

            <a href="/services" className="block p-6 bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Aile Şirketi Hizmetleri</h3>
              <p className="text-sm text-gray-600">Yönetim modelleri, kuşak geçişi ve kurumsallaşma.</p>
              <span className="inline-block mt-4 text-sm font-medium text-gray-900">Detayları Gör →</span>
            </a>
          </div>
        </div>
      </section>

      {/* GÜNDEM / HABERLER */}
      <section id="news" className="border-t bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">Gündem</h2>
          <p className="text-center text-gray-700">Yakında yeni içerikler eklenecek.</p>
        </div>
      </section>
    </main>
  );
}

