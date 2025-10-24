 import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aile Şirketi Hizmetleri | Fincity",
  description: "Yönetim modelleri, kuşak geçişi ve kurumsallaşma.",
};

export default function FamilyBizPage() {
  return (
    <main className="bg-white">
      <div className="border-b bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-3 text-sm">
          <nav className="text-gray-600">
            <Link href="/" className="hover:text-gray-900">Ana Sayfa</Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-gray-900">Hizmetlerimiz</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Aile Şirketi Hizmetleri</span>
          </nav>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Aile Şirketi Hizmetleri</h1>
            <p className="mt-4 text-gray-700 leading-7">
              (İçerik eklenecek) Aile anayasası, yönetim modeli ve kuşak geçiş planları.
            </p>
          </div>
          <img src="/aile-sirketi.jpg" alt="" className="w-full rounded-2xl border border-gray-200 shadow-sm object-cover"/>
        </div>
      </section>
    </main>
  );
}
