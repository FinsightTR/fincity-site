 // app/services/suistimal-uyum-kriz/page.tsx
import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Suistimal, Uyum ve Kriz Yönetimi | Fincity",
  description:
    "Uyum, suistimal önleme, kriz yönetimi ve politika oluşturma konularında danışmanlık.",
};

export default function SuistimalUyumKrizPage() {
  return (
    <main className="bg-white">
      <div className="border-b bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 text-sm">
          <nav className="text-gray-600">
            <Link href="/" className="hover:text-gray-900">
              Ana Sayfa
            </Link>{" "}
            /{" "}
            <Link href="/services" className="hover:text-gray-900">
              Hizmetlerimiz
            </Link>{" "}
            / <span className="text-gray-900 font-medium">Suistimal, Uyum ve Kriz Yönetimi</span>
          </nav>
        </div>
      </div>

      {/* GÖRSEL */}
      <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="relative w-full h-80 rounded-2xl overflow-hidden">
          <Image
            src="/suistimal-uyum-kriz.jpg"
            alt="Suistimal, Uyum ve Kriz Yönetimi"
            fill
            className="object-cover"
          />
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold mt-10 mb-6">
          Suistimal, Uyum ve Kriz Yönetimi Hizmetleri
        </h1>
        <p className="text-gray-700 leading-7 mb-6">
          Fincity olarak işletmelerin suistimal risklerini minimize etmek, düzenleyici uyumu
          güçlendirmek ve kriz anlarında hızlı tepki vermelerini sağlamak için bütünsel çözümler
          geliştiriyoruz.
        </p>

        {/* ALT HİZMETLER */}
        <ul className="list-disc ml-6 space-y-3 text-gray-700">
          <li>🕵️‍♂️ Suistimal İnceleme ve Adli Muhasebe</li>
          <li>⚖️ Regülasyon ve Uyum Danışmanlığı</li>
          <li>📑 Politika ve Prosedür Geliştirme</li>
          <li>🧭 Kriz Yönetimi ve Acil Durum Planlaması</li>
          <li>🔐 Bilgi Güvenliği ve Farkındalık Eğitimleri</li>
          <li>🧩 Etik ve Uyum Programları</li>
        </ul>
      </section>
    </main>
  );
}
