 // app/services/strateji-yonetim/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Strateji ve Yönetim Danışmanlığı | Fincity",
  description:
    "Kurumsal strateji, OKR/KPI sistemleri, büyüme planlama, organizasyonel dönüşüm ve sürdürülebilir yönetim danışmanlığı hizmetleri.",
};

export default function StratejiYonetimPage() {
  return (
    <main className="bg-white text-gray-900">
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

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
              🧭 Strateji ve Yönetim Danışmanlığı
            </h1>
            <p className="mt-5 text-gray-700 leading-7">
              Fincity olarak kurumların vizyonunu gerçeğe dönüştürmek için stratejik planlama, performans yönetimi ve operasyonel mükemmeliyet alanlarında 
              uçtan uca danışmanlık sağlıyoruz.
              <br /><br />
              İş hedeflerinize uygun OKR/KPI sistemleri geliştiriyor, yönetim ritmini yeniden tanımlıyor ve sürdürülebilir büyüme için 
              stratejik yol haritaları oluşturuyoruz. Her kurumun yapısına özel olarak, <strong>ölçülebilir, çevik ve etkili yönetim modelleri</strong> tasarlıyoruz.
            </p>
          </div>

          <img
            src="/strateji-yonetim.jpg"
            alt="Strateji ve Yönetim Danışmanlığı"
            className="w-full h-72 sm:h-80 object-cover rounded-2xl border border-gray-200"
          />
        </div>
      </section>

      {/* Alt Hizmetler */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">
          💼 Strateji ve Yönetim Danışmanlığı Hizmetlerimiz
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="text-lg font-semibold mb-2">🎯 Stratejik Planlama & Hedef Belirleme</h3>
            <p className="text-gray-700">
              Kurum vizyonu, pazar dinamikleri ve büyüme hedefleri doğrultusunda stratejik planlama süreci ve yol haritası oluşturma.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="text-lg font-semibold mb-2">📊 OKR & KPI Yönetim Sistemleri</h3>
            <p className="text-gray-700">
              Kurumsal hedeflerle bireysel performansı hizalayan OKR/KPI yapılarını kurma ve yönetim kültürüne entegre etme.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="text-lg font-semibold mb-2">🏢 Organizasyonel Strateji & Yapılanma</h3>
            <p className="text-gray-700">
              İş modeli analizi, süreç yeniden tasarımı ve organizasyon yapısının stratejiyle uyumlu hale getirilmesi.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="text-lg font-semibold mb-2">🚀 Dijital & Operasyonel Dönüşüm</h3>
            <p className="text-gray-700">
              Dijitalleşme, verimlilik artışı ve süreç otomasyonu odaklı dönüşüm stratejileriyle sürdürülebilir başarı sağlama.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="text-lg font-semibold mb-2">📈 Kurumsal Performans Yönetimi</h3>
            <p className="text-gray-700">
              Kurumsal hedeflerin düzenli takibi, yönetim raporlaması ve stratejik performans analizlerinin yürütülmesi.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="text-lg font-semibold mb-2">🌍 Sürdürülebilirlik & ESG Stratejileri</h3>
            <p className="text-gray-700">
              Çevresel, sosyal ve yönetişim (ESG) kriterlerini stratejik karar alma süreçlerine entegre etme ve raporlama desteği.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
