// app/services/page.tsx
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hizmetlerimiz | Fincity",
  description: "Fincity'nin sunduğu profesyonel danışmanlık hizmetleri.",
};

const SERVICES = [
  {
    slug: "dijital",
    title: "Dijital Hizmetler",
    desc: "Süreç otomasyonu (RPA), veri analitiği ve ERP/CRM entegrasyonlarıyla iş süreçlerinizi hızlandırıyoruz.",
  },
  {
    slug: "vergi",
    title: "Vergi Danışmanlığı",
    desc: "Vergi planlaması, e-Fatura/e-Defter ve mevzuat uyum süreçlerinde uçtan uca çözümler sunuyoruz.",
  },
  {
    slug: "finansal",
    title: "Finansal Raporlama ve Muhasebe",
    desc: "Finansal raporlama, muhasebe ve FP&A süreçlerinde uzman desteği.",
  },
  {
    slug: "risk",
    title: "Risk, Süreç ve Teknoloji",
    desc: "İç kontrol, süreç analizi ve teknoloji temelli optimizasyon çözümleri.",
  },
  {
    slug: "birlesme",
    title: "Şirket Birleşme ve Satın Alma",
    desc: "Değerleme, due diligence ve birleşme sonrası entegrasyon danışmanlığı.",
  },
  {
    slug: "insan-yonetimi",
    title: "İnsan Yönetimi ve Organizasyon",
    desc: "Performans, OKR/KPI sistemleri ve organizasyonel dönüşüm danışmanlığı.",
  },
];

export default function ServicesIndexPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-10">
          Hizmetlerimiz
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="block rounded-2xl border border-gray-200 p-6 bg-white hover:shadow-md transition-all duration-200"
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


