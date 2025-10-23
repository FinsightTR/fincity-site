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
    desc: "RPA/low-code, ERP/CRM entegrasyonları, veri ambarı ve dashboard çözümleri.",
  },
  {
    slug: "vergi",
    title: "Vergi Danışmanlığı",
    desc: "Vergi uyumu, beyannameler, stratejik vergi planlaması ve inceleme danışmanlığı.",
  },
];

export default function ServicesIndexPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-10">
          Hizmetlerimiz
        </h1>

        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12">
          Fincity olarak farklı ihtiyaçlara özel danışmanlık çözümleri sunuyoruz. Aşağıdan detaylara ulaşabilirsiniz.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

