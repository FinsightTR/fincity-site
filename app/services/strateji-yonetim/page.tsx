// app/services/strateji-yonetim/page.tsx
import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Strateji ve Yönetim Danışmanlığı | Fincity",
  description:
    "Kurumsal hedeflere uygun strateji geliştirme, OKR/KPI yapılandırma ve yönetim ritmi tasarımı hizmetleri.",
};

export default function StratejiYonetimPage() {
  return (
    <main className="bg-white">
      {/* Breadcrumb */}
      <div className="border-b bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 text-sm">
          <nav className="text-gray-600">
            <Link href="/" className="hover:text-gray-900">Ana Sayfa</Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-gray-900">Hizmetlerimiz</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Strateji ve Yönetim Danışmanlığı</span>
          </nav>
        </div>
      </div>

      {/* Görsel */}
      <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="relative w-full h-80 rounded-2xl overflow-hidden">
          <Image
            src="/strateji-yonetim.jpg"
            alt="Strateji ve Yönetim Danışmanlığı"
            fill
            className="object-cover"
          />
        </div>

        {/* Başlık ve Açıklama */}
        <h1 className="text-3xl sm:text-4xl font-bold mt-10 mb-6">
          Strateji ve Yönetim Danışmanlığı
        </h1>
        <p className="text-gray-700 leading-7 mb-6">
          Kurumsal hedeflerinize uygun stratejiler geliştiriyor, yönetim süreçlerini optimize ediyor ve sürdürülebilir büyüme için gerekli yönetim ritmini oluşturuyoruz.
        </p>
        <p className="text-gray-700 leading-7 mb-10">
          Stratejik planlama, performans ölçümü ve yönetim sistemleri konusunda uzman ekibimizle, kurumların vizyonunu somut hedeflere dönüştürmesine yardımcı oluyoruz.
        </p>

        {/* Alt Hizmetler */}
        <h2 className="text-2xl font-semibold mb-4">Strateji ve Yönetim Danışmanlığı Hizmetlerimiz</h2>
        <ul className="list-disc ml-6 space-y-3 text-gray-700">
          <li>🎯 Stratejik Planlama ve Kurumsal Dönüşüm Yönetimi</li>
          <li>📊 OKR ve KPI Yapılandırma ve Takip Sistemleri</li>
          <li>🧭 Yönetim Raporlama ve Karar Destek Sistemleri</li>
          <li>🤝 Kurumsal Performans Yönetimi</li>
          <li>📅 Yönetim Ritmi ve Yönetim Toplantı Yapısının Tasarımı</li>
          <li>💡 Stratejik Risk Analizi ve Süreç İyileştirme</li>
        </ul>
      </section>
    </main>
  );
}
