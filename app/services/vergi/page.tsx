// app/services/vergi/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vergi Danışmanlığı | Fincity",
  description:
    "Beyannameler & uyum, KDV iadesi, transfer fiyatlandırması, e-fatura/e-defter ve vergi teknolojileri dâhil uçtan uca vergi danışmanlığı.",
};

export default function VergiPage() {
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
            <span className="text-gray-900 font-medium">Vergi Danışmanlığı</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
              💼 Vergi Danışmanlığı
            </h1>
            <p className="mt-5 text-gray-700 leading-7">
              <strong>Fincity ile vergiyi bir maliyet değil, stratejik avantaj olarak yönetin.</strong>
              <br />
              Fincity olarak amacımız, işletmelerin vergiyi yalnızca bir maliyet unsuru
              değil, stratejik bir yönetim aracı olarak ele almasını sağlamaktır.
              Her kurumun sektörel dinamikleri ve organizasyon yapısı farklıdır; bu nedenle
              vergisel süreçlerde tek tip çözümler yerine kurumunuza özel stratejiler geliştiriyoruz.
              Klasik yaklaşımların ötesine geçerek, <strong>otomasyon, veri analitiği ve dijital raporlama</strong>
              olanaklarıyla vergi yönetimini daha etkin, hızlı ve şeffaf hale getiriyoruz.
              Hedefimiz, mevzuata tam uyum sağlarken işletmenizin finansal verimliliğini artırmak
              ve sizi rakiplerinizin bir adım önüne taşımaktır.
            </p>
          </div>

          {/* Görsel (opsiyonel) – public/vergi.jpg varsa gösterilir */}
          <img
            src="/vergi.jpg"
            alt="Vergi danışmanlığı görseli"
            className="w-full h-72 sm:h-80 object-cover rounded-2xl border border-gray-200"
          />
        </div>
      </section>

      {/* Alt Hizmetler */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">🧭 Vergi Hizmetlerimiz</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {/* 1 */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="text-lg font-semibold mb-2">🧾 Beyannameler & Uyum Hizmetleri</h3>
            <p className="text-gray-700">
              Vergi beyannamelerinizin hazırlanması, kontrolü ve ilgili mevzuata tam uyumla
              beyan süreçlerinin uçtan uca yönetimi.
            </p>
          </div>

          {/* 2 */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="text-lg font-semibold mb-2">↩️ KDV İade Süreçleri</h3>
            <p className="text-gray-700">
              İade taleplerinin mevzuata uygun hazırlanması, denetim dosyalarının oluşturulması
              ve sürecin takibi.
            </p>
          </div>

          {/* 3 */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="text-lg font-semibold mb-2">🔗 Transfer Fiyatlandırması</h3>
            <p className="text-gray-700">
              Grup içi işlemler için transfer fiyatlandırması dokümantasyonu, yerel ve ana dosya,
              karşılaştırılabilirlik ve risk analizleri.
            </p>
          </div>

          {/* 4 */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="text-lg font-semibold mb-2">🛡️ Vergi İnceleme Desteği</h3>
            <p className="text-gray-700">
              İnceleme süreçlerinde teknik savunma hazırlığı, uzlaşma görüşmeleri, rapor analizi ve
              strateji danışmanlığı.
            </p>
          </div>

          {/* 5 */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="text-lg font-semibold mb-2">🧮 e-Fatura / e-Defter Uyum Hizmetleri</h3>
            <p className="text-gray-700">
              e-Fatura, e-Defter ve e-Arşiv uygulamalarına tam geçiş; süreç, entegrasyon ve mevzuat
              uyumu danışmanlığı.
            </p>
          </div>

          {/* 6 */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="text-lg font-semibold mb-2">🤖 Vergi Teknolojileri & Otomasyon</h3>
            <p className="text-gray-700">
              Veri entegrasyonu, dijital beyan, uzlaşma ve risk analizlerinde teknoloji tabanlı,
              otomasyonlu çözüm tasarımı.
            </p>
          </div>

          {/* 7 */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="text-lg font-semibold mb-2">🧭 Stratejik Vergi Planlaması</h3>
            <p className="text-gray-700">
              Yatırımların ve teşviklerin vergisel açıdan en verimli şekilde planlanması;
              nakit akışına etkilerin modellenmesi.
            </p>
          </div>

          {/* 8 */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="text-lg font-semibold mb-2">📑 Vergi İnceleme & Savunma</h3>
            <p className="text-gray-700">
              Olası inceleme riskleri için önleyici değerlendirmeler, savunma stratejileri ve
              rapor hazırlığı.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
