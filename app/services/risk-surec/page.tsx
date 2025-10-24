 import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Risk, Süreç ve Teknoloji Danışmanlığı | Fincity",
  description:
    "Kurumsal risk yönetimi, iç denetim, BT yönetişimi ve finansal risk süreçleriyle sürdürülebilir büyüme için danışmanlık hizmetleri.",
};

export default function RiskSurecPage() {
  return (
    <main className="bg-white">
      <div className="border-b bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-3 text-sm">
          <nav className="text-gray-600">
            <Link href="/" className="hover:text-gray-900">
              Ana Sayfa
            </Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-gray-900">
              Hizmetlerimiz
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">
              Risk, Süreç ve Teknoloji
            </span>
          </nav>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Risk, Süreç ve Teknoloji Danışmanlığı
            </h1>
            <p className="mt-4 text-gray-700 leading-7">
              Finansal, operasyonel ve teknoloji temelli risklerinizi bütünsel
              bir yaklaşımla yönetiyoruz. Kurumsal yönetişim, süreç olgunluğu
              ve dijital güvenlik standartlarınızı geliştirerek sürdürülebilir
              bir yapı oluşturuyoruz.
            </p>
          </div>
          <div>
            <img
              src="/risk-surec.jpg"
              alt="Risk, süreç ve teknoloji danışmanlığı"
              className="w-full rounded-2xl border border-gray-200 shadow-sm object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

