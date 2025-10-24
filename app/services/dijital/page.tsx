// app/services/dijital/page.tsx
import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dijital Hizmetlerimiz | Fincity",
  description:
    "RPA, ERP/CRM entegrasyonları, veri ambarı, dashboard ve süreç otomasyonu çözümlerimizle işletmenizin dijital dönüşümünü hızlandırıyoruz.",
};

export default function DijitalHizmetlerPage() {
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
            <span className="text-gray-900 font-medium">Dijital Hizmetlerimiz</span>
          </nav>
        </div>
      </div>

      {/* Görsel */}
      <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="relative w-full h-80 rounded-2xl overflow-hidden">
          <Image
            src="/dijital-hizmetler.jpg"
            alt="Dijital Hizmetlerimiz"
            fill
            className="object-cover"
          />
        </div>

        {/* Başlık */}
        <h1 className="text-3xl sm:text-4xl font-bold mt-10 mb-10 text-center">
          Dijital Hizmetlerimiz
        </h1>

        {/* Hizmet Kartları */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-lg mb-2">⚙️ RPA / Low-code Süreç Otomasyonu</h3>
            <p className="text-gray-600">
              Tekrarlayan işleri otomatikleştirerek hız ve kaliteyi artırın. Power Automate, Make, n8n gibi platformlarla hızlı POC çözümleri.
            </p>
          </div>

          <div className="border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-lg mb-2">🔗 ERP/CRM Entegrasyonları</h3>
            <p className="text-gray-600">
              Logo, Netsis, SAP, Mikro ve HubSpot gibi sistemlerle güvenli veri akışı ve uçtan uca süreç görünürlüğü sağlayın.
            </p>
          </div>

          <div className="border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-lg mb-2">🌐 API & Veri Akışı Tasarımı</h3>
            <p className="text-gray-600">
              Kaynaklar arası veri senkronizasyonu, ETL/ELT kurguları ve olay tabanlı entegrasyon mimarileri.
            </p>
          </div>

          <div className="border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-lg mb-2">📦 Veri Ambarı (DWH) Kurulumu</h3>
            <p className="text-gray-600">
              Operasyonel sistemlerden beslenen raporlama ve analitik için ölçeklenebilir veri ambarı mimarisi.
            </p>
          </div>

          <div className="border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-lg mb-2">📊 Yönetim Dashboard’ları (FP&A)</h3>
            <p className="text-gray-600">
              Kârlılık, nakit akışı, satış ve operasyon metriklerini tek panelde; drill-down ve dönem karşılaştırmalarıyla görüntüleyin.
            </p>
          </div>

          <div className="border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-lg mb-2">📈 Operasyon & Satış Raporları</h3>
            <p className="text-gray-600">
              Günlük/haftalık otomatik raporlar; KPI takibi, uyarılar ve hedef gerçekleşmeleri.
            </p>
          </div>

          <div className="border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-lg mb-2">☁️ Bulut Geçişi & Mimari Yönlendirme</h3>
            <p className="text-gray-600">
              AWS/Azure üzerinde güvenlik, maliyet optimizasyonu ve ölçeklenebilirlik odaklı dijital dönüşüm.
            </p>
          </div>

          <div className="border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-lg mb-2">🧭 Veri Kalitesi & Yönetişim</h3>
            <p className="text-gray-600">
              Veri standardizasyonu, sahiplik ve kataloglama pratikleriyle güvenilir raporlama altyapısı.
            </p>
          </div>

          <div className="border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-lg mb-2">🎓 Eğitim & Devretme Modeli</h3>
            <p className="text-gray-600">
              Ekibinize dokümantasyon ve mini eğitimlerle sürdürülebilir dijital kullanım kültürü kazandırın.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
