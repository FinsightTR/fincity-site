// app/services/dijital/page.tsx
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dijital Hizmetler | Fincity",
  description:
    "RPA/low-code otomasyonları, ERP/CRM entegrasyonları, veri ambarı ve yönetim dashboard’larıyla ölçeklenebilir, sürdürülebilir dijital çözümler.",
};

export default function DigitalServicesPage() {
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
            <span className="text-gray-900 font-medium">Dijital Hizmetler</span>
          </nav>
        </div>
      </div>

      {/* Hero + Intro */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Metin */}
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
              Dijital Hizmetler
            </h1>
            <p className="text-gray-700 leading-7">
              Fincity olarak dijital dönüşümü, sadece teknoloji kurulumundan ibaret
              görmüyoruz. İş hedeflerinize bağlanan, ölçülebilir çıktılar üreten ve
              ekibiniz tarafından sürdürülebilir şekilde kullanılan çözümler kuruyoruz.
              Düşük maliyetli ama etkili otomasyonlardan, uçtan uca veri görünürlüğüne
              kadar adım adım ilerleyen bir yol haritası uygularız.
            </p>
            <p className="text-gray-700 leading-7">
              RPA/low-code otomasyonlar, ERP/CRM entegrasyonları, veri ambarı ve
              yönetim dashboard’larıyla karar alma hızınızı artırır, operasyonel
              hataları azaltır ve süreçlerinizi ölçeklenebilir hale getiririz.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50"
              >
                İletişime Geç
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center rounded-xl bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
              >
                Tüm Hizmetler
              </Link>
            </div>
          </div>

          {/* Görsel */}
          <div className="relative w-full overflow-hidden rounded-2xl shadow-sm bg-white">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src="/dijital.jpg" // public/dijital.jpg
                alt="Dijital dönüşüm görseli"
                fill
                className="object-cover"
                priority
                sizes="(min-width:1024px) 560px, 100vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Kapsam Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="text-center text-2xl sm:text-3xl font-semibold text-gray-900">
          Dijital Hizmetler Kapsamımız
        </h2>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-gray-200 p-5 hover:shadow-sm transition-shadow"
            >
              <h3 className="text-base font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA / Alt Bilgi */}
      <section className="border-t">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="rounded-2xl bg-gray-50 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Bir haftada hızlı başlangıç yapmak ister misiniz?
              </h3>
              <p className="text-gray-600 mt-1">
                Süreç keşfi → POC → Üretim planı. ROI odaklı ilerliyoruz.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-xl bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
            >
              Görüşme Planla
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

const FEATURES = [
  {
    title: "RPA / Low-code Süreç Otomasyonu",
    desc: "Tekrarlayan işleri otomatikleştirerek hız ve kaliteyi artırın. Power Automate, Make, n8n gibi platformlarla hızlı POC.",
  },
  {
    title: "ERP/CRM Entegrasyonları",
    desc: "Logo, Netsis, SAP, Mikro ve HubSpot gibi sistemlerle güvenli veri akışı ve uçtan uca süreç görünürlüğü.",
  },
  {
    title: "API & Veri Akışı Tasarımı",
    desc: "Kaynaklar arası veri senkronizasyonu, ETL/ELT kurguları ve olay tabanlı entegrasyon mimarileri.",
  },
  {
    title: "Veri Ambarı (DWH) Kurulumu",
    desc: "Operasyonel sistemlerden beslenen raporlama ve analitik için ölçeklenebilir veri ambarı mimarisi.",
  },
  {
    title: "Yönetim Dashboard’ları (FP&A)",
    desc: "Kârlılık, nakit akışı, satış ve operasyon metriklerini tek panelde; drill-down ve dönem karşılaştırmalarıyla.",
  },
  {
    title: "Operasyon & Satış Raporları",
    desc: "Günlük/haftalık otomatik raporlar; KPI takibi, uyarılar ve hedef gerçekleşmeleri.",
  },
  {
    title: "Bulut Geçişi & Mimari Yönlendirme",
    desc: "AWS/Azure üzerinde güvenlik, maliyet optimizasyonu ve ölçeklenebilirlik odaklı yol haritası.",
  },
  {
    title: "Veri Kalitesi & Yönetişim",
    desc: "Veri standardizasyonu, sahiplik ve kataloglama pratikleriyle güvenilir raporlama.",
  },
  {
    title: "Eğitim & Devretme Modeli",
    desc: "Ekibinize dokümantasyon ve mini eğitimlerle sürdürülebilir kullanım kültürü.",
  },
];
