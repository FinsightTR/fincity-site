// app/services/finansal-raporlama/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Finansal Raporlama ve Muhasebe Hizmetleri | Fincity",
  description:
    "UFRS dönüşüm, finansal raporlama, sermaye piyasası danışmanlığı ve bütçeleme süreçlerinde stratejik finansal çözümler.",
};

export default function FinansalRaporlamaPage() {
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
            <span className="text-gray-900 font-medium">Finansal Raporlama ve Muhasebe</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
              💼 Finansal Raporlama ve Muhasebe Hizmetleri
            </h1>
            <p className="mt-5 text-gray-700 leading-7">
              Fincity olarak, finansal raporlama ve muhasebe süreçlerini yalnızca bir uyum gerekliliği değil, 
              şirketlerin stratejik karar alma mekanizmasının temel unsuru olarak görüyoruz.  
              <br /><br />
              Amacımız; yönetim ekiplerinin doğru, eksiksiz ve zamanında bilgiye ulaşarak şeffaf, denetlenebilir 
              ve sürdürülebilir bir finansal yapı kurmasına yardımcı olmaktır.
              <br /><br />
              Finansal verilerinizi mevzuata uyumlu, yönetimsel içgörüler sunacak biçimde analiz ediyor; 
              teknolojiyle desteklenen raporlama altyapılarıyla işletmenizi geleceğe hazırlıyoruz.
            </p>
          </div>

          <img
            src="/finansal-raporlama.jpg"
            alt="Finansal Raporlama ve Muhasebe Hizmetleri"
            className="w-full h-72 sm:h-80 object-cover rounded-2xl border border-gray-200"
          />
        </div>
      </section>

      {/* Alt Hizmetler */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">
          📊 Finansal Raporlama ve Muhasebe Hizmetlerimiz
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="text-lg font-semibold mb-2">📘 Finansal Raporlama ve UFRS Dönüşüm Hizmetleri</h3>
            <p className="text-gray-700">
              Uluslararası Finansal Raporlama Standartları (UFRS/IFRS) kapsamında mali tabloların dönüşümünü yönetiyor, 
              küresel yatırımcılarla aynı dili konuşan finansal raporlar oluşturuyoruz.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="text-lg font-semibold mb-2">🤝 Şirket Birleşme ve Satın Alma Süreçlerinde Muhasebe Desteği</h3>
            <p className="text-gray-700">
              Birleşme, devir ve satın alma süreçlerinde muhasebe entegrasyonlarını sağlayarak 
              finansal veri uyumunu güçlendiriyoruz.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="text-lg font-semibold mb-2">📄 Faaliyet Raporu ve Muhasebe Danışmanlığı</h3>
            <p className="text-gray-700">
              Faaliyet raporlarının stratejik, şeffaf ve düzenleyici gerekliliklere uygun hazırlanmasını 
              sağlıyor; muhasebe politikalarınıza danışmanlık sunuyoruz.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="text-lg font-semibold mb-2">🏦 Sermaye Piyasalarına İlişkin Danışmanlık</h3>
            <p className="text-gray-700">
              Halka arz, yatırımcı ilişkileri, kamuyu aydınlatma yükümlülükleri ve SPK mevzuatına 
              uyum gibi konularda danışmanlık sağlıyoruz.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="text-lg font-semibold mb-2">📈 Yönetim Raporlaması ve Bütçeleme Danışmanlığı</h3>
            <p className="text-gray-700">
              Operasyonel performansınızı ölçen yönetim raporlama modelleri geliştiriyor, 
              bütçeleme süreçlerinizi veri odaklı hale getiriyoruz.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="text-lg font-semibold mb-2">💰 Hazine İşlemleri ve Finansal Araçlar Danışmanlığı</h3>
            <p className="text-gray-700">
              Finansal riskleri analiz ediyor, döviz pozisyon yönetimi, nakit akışı planlaması 
              ve yatırım araçlarıyla ilgili çözümler geliştiriyoruz.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
