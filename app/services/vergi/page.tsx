 // app/services/vergi/page.tsx
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vergi Danışmanlığı | Fincity",
  description:
    "Vergi uyumu, beyannameler, inceleme ve stratejik vergi planlaması. KDV iade, e-Fatura/e-Defter uyum ve vergi teknolojileri.",
};

export default function VergiPage() {
  return (
    <main className="bg-white">
      {/* BREADCRUMB */}
      <div className="border-b bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-3 text-sm">
          <nav className="text-gray-600">
            <Link href="/" className="hover:text-gray-900">Ana Sayfa</Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-gray-900">Hizmetlerimiz</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Vergi Danışmanlığı</span>
          </nav>
        </div>
      </div>

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Vergi Danışmanlığı
            </h1>
            <p className="mt-4 text-gray-700 leading-7">
              Uyum süreçlerinden stratejik vergi planlamasına kadar uçtan uca hizmet
              veriyoruz. Beyannameler, KDV iade, e-Fatura/e-Defter, inceleme ve
              soruşturma süreçlerinde güvenilir bir yol arkadaşı oluruz.
            </p>

            <ul className="mt-6 space-y-3 text-gray-800">
              <li>• <b>Uyum & Beyannameler:</b> GIB uyumluluğu, kapanış takvimi, beyan süreçleri.</li>
              <li>• <b>Stratejik Planlama:</b> Vergi optimizasyonu, teşviklerden yararlanma, grup yapıları.</li>
              <li>• <b>İnceleme & Savunma:</b> Risk analizi, talep/cevap yazıları, uzlaşma desteği.</li>
              <li>• <b>Vergi Teknolojileri:</b> e-Fatura/e-Defter, veri kalitesi, RPA/ETL ile otomasyon.</li>
            </ul>
          </div>

          {/* /public/vergi.jpg mevcutsa otomatik görünür */}
          <img
            src="/vergi.jpg"
            alt="Vergi danışmanlığı"
            className="w-full rounded-2xl border border-gray-200 shadow-sm object-cover"
          />
        </div>
      </section>

      {/* ALT HİZMETLER */}
      <section className="mx-auto max-w-7xl px-4 pb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
          Vergi Hizmetlerimiz
        </h2>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              t: "Beyannameler & Uyum",
              d: "KDV, Muhtasar, Geçici/Kurumlar süreçleri; kapanış takvimi ve kontrol listeleri.",
            },
            {
              t: "KDV İade Süreçleri",
              d: "İade dosyaları, listeler, mutabakat ve raporlama otomasyonu.",
            },
            {
              t: "Transfer Fiyatlandırması",
              d: "Yerel dosya & ana dosya, emsal analizleri ve yıllık raporlar.",
            },
            {
              t: "Vergi İnceleme Desteği",
              d: "Risk analizi, yazışmalar, uzlaşma/ceza indirim süreçlerinde teknik destek.",
            },
            {
              t: "e-Fatura / e-Defter Uyum",
              d: "Şema/şematron kontrolleri, veri kalitesi, arşiv ve saklama politikaları.",
            },
            {
              t: "Vergi Teknolojileri",
              d: "RPA/ETL ile veri çekme, kontrol ve raporlamanın otomasyonu.",
            },
          ].map((c) => (
            <div
              key={c.t}
              className="rounded-2xl border border-gray-200 bg-white p-6 hover:shadow-sm transition-shadow"
            >
              <h3 className="text-lg font-semibold text-gray-900">{c.t}</h3>
              <p className="mt-2 text-sm text-gray-600">{c.d}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
