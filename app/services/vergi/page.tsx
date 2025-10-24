 import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hizmetlerimiz | Fincity",
  description: "Fincity'nin sunduğu profesyonel hizmetleri keşfedin.",
};

const SERVICES = [
  {
    slug: "dijital",
    title: "Dijital Hizmetler",
    desc:
      "RPA/low-code, ERP/CRM entegrasyonları, veri ambarı ve dashboard çözümleri.",
  },
  {
    slug: "vergi",
    title: "Vergi Danışmanlığı",
    desc:
      "Vergi uyumu, beyannameler, stratejik vergi planlaması ve inceleme danışmanlığı.",
  },
  {
    slug: "insan-yonetimi",
    title: "İnsan Yönetimi ve Organizasyon Danışmanlığı",
    desc:
      "Performans, organizasyonel yapı, uyum ve İK süreçlerinin dijital dönüşümü.",
  },
  {
    slug: "risk-surec",
    title: "Risk, Süreç ve Teknoloji Danışmanlığı",
    desc:
      "Kurumsal risk, iç denetim, BT yönetişimi ve finansal risk/regülasyon çözümleri.",
  },
];

export default function ServicesIndexPage() {
  return (
    <main className="bg-white">
      {/* Breadcrumb */}
      <div className="border-b bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-3 text-sm">
          <nav className="text-gray-600">
            <Link href="/" className="hover:text-gray-900">Ana Sayfa</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Hizmetlerimiz</span>
          </nav>
        </div>
      </div>

      {/* Kartlar */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900">Hizmetlerimiz</h1>
        <p className="mt-4 text-gray-700">
          İş hedeflerinize uygun çözümler sunuyoruz. Aşağıdan ilgilendiğiniz hizmeti seçebilirsiniz.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="block rounded-2xl border border-gray-200 p-5 bg-white hover:shadow-sm transition-shadow"
            >
              <h2 className="text-lg font-semibold text-gray-900">{s.title}</h2>
              <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
              <span className="mt-4 inline-block text-sm font-medium text-gray-900">Detayları Gör →</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
