// app/services/page.tsx
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hizmetlerimiz | Fincity",
  description:
    "Fincity'nin finansal, operasyonel ve teknoloji alanlarındaki danışmanlık hizmetleri.",
};

const SERVICES: {
  slug: string;
  title: string;
  desc: string;
}[] = [
  {
    slug: "dijital",
    title: "Dijital Hizmetler",
    desc: "RPA/low-code, ERP/CRM entegrasyonları, veri ambarı ve dashboard.",
  },
  {
    slug: "vergi",
    title: "Vergi Danışmanlığı",
    desc: "Beyannameler, inceleme süreçleri, stratejik vergi planlaması.",
  },
  {
    slug: "insan-yonetimi",
    title: "İnsan Yönetimi ve Organizasyon Danışmanlığı",
    desc: "OKR/KPI, performans yönetimi ve organizasyonel dönüşüm.",
  },
  {
    slug: "risk-surec",
    title: "Risk, Süreç ve Teknoloji",
    desc: "İç kontrol, süreç analizi ve teknoloji temelli optimizasyon.",
  },
  {
    slug: "sirket-birlesme",
    title: "Şirket Birleşme ve Satın Alma",
    desc: "Değerleme, due diligence ve entegrasyon danışmanlığı.",
  },
  {
    slug: "suistimal-uyum-kriz",
    title: "Suistimal, Uyum ve Kriz Yönetimi",
    desc: "Uyum, politika, eğitim ve kriz senaryoları yönetimi.",
  },
  {
    slug: "strateji-yonetim",
    title: "Strateji ve Yönetim Danışmanlığı",
    desc: "Kurumsal hedeflere uygun strateji ve OKR planlaması.",
  },
  {
    slug: "finansal-raporlama",
    title: "Finansal Raporlama ve Muhasebe",
    desc: "Muhasebe, raporlama ve FP&A süreçleri için çözümler.",
  },
  {
    slug: "aile-sirketi",
    title: "Aile Şirketi Hizmetleri",
    desc: "Yönetim modelleri, kuşak geçişi ve kurumsallaşma.",
  },
];

export default function ServicesIndexPage() {
  return (
    <main className="bg-white">
      {/* Üst breadcrumb */}
      <div className="border-b bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 text-sm">
          <nav className="text-gray-600">
            <Link href="/" className="hover:text-gray-900">Ana Sayfa</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Hizmetlerimiz</span>
          </nav>
        </div>
      </div>

      {/* Liste */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 text-center">
          Hizmetlerimiz
        </h1>
        <p className="mt-4 text-center text-gray-700">
          Finansal, operasyonel ve teknolojik ihtiyaçlarınıza uygun entegre çözümler sunuyoruz.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="block rounded-2xl border border-gray-200 p-6 bg-white hover:shadow-md transition-all"
            >
              <h2 className="text-lg font-semibold text-gray-900 mb-2">{s.title}</h2>
              <p className="text-sm text-gray-600">{s.desc}</p>
              <span className="inline-block mt-4 text-sm font-medium text-gray-900">
                Detayları Gör →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
