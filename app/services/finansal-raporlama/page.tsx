 // app/services/finansal-raporlama/page.tsx
import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Finansal Raporlama ve Muhasebe | Fincity",
  description:
    "Finansal yönetimde şeffaflık, doğruluk ve sürdürülebilirlik sağlayan profesyonel raporlama ve muhasebe hizmetleri.",
};

export default function FinansalRaporlamaPage() {
  return (
    <main className="bg-white">
      {/* Üst Menü / Breadcrumb */}
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

      {/* Görsel */}
      <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="relative w-full h-80 rounded-2xl overflow-hidden">
          <Image
            src="/finansal-raporlama.jpg"
            alt="Finansal Raporlama ve Muhasebe"
            fill
            className="object-cover"
          />
        </div>

        {/* Başlık */}
        <h1 className="text-3xl sm:text-4xl font-bold mt-10 mb-6">
          💼 Finansal Raporlama ve Muhasebe Hizmetleri
        </h1>
        <p className="text-gray-700 leading-7 mb-6">
          <strong>Fincity</strong> ile finansal yönetimde şeffaflık, doğruluk ve sürdürülebilirlik.
        </p>
        <p className="text-gray-700 leading-7 mb-6">
          Fincity olarak, finansal raporlama ve muhasebe süreçlerini yalnızca bir uyum gerekliliği
          olarak değil, şirketlerin stratejik karar alma mekanizmasının temel unsuru olarak ele alıyoruz.
          Amacımız; yönetim ekiplerinin doğru, eksiksiz ve zamanında bilgiye ulaşarak şeffaf, denetlenebilir
          ve sürdürülebilir bir finansal yapı kurmasına yardımcı olmaktır.
        </p>
        <p className="text-gray-700 leading-7 mb-10">
          Finansal verilerinizi, mevzuata uyumlu ve yönetimsel içgörüler sunacak biçimde analiz ediyor;
          teknolojiyle desteklenen raporlama altyapılarıyla işletmenizi geleceğe hazırlıyoruz. Bu sayede
          paydaşlarınıza güvenilir bilgi akışı sağlarken, yatırımcı güvenini ve kurumsal itibarı güçlendiriyoruz.
        </p>

        {/* Alt Hizmetler */}
        <h2 className="text-2xl font-semibold mb-4">🌐 Verdiğimiz Hizmetler</h2>
        <ul className="list-disc ml-6 space-y-3 text-gray-700">
          <li>
            <strong>📘 Finansal Raporlama ve UFRS Dönüşüm Hizmetleri</strong>  
            <br />
            Uluslararası Finansal Raporlama Standartları (UFRS/IFRS) kapsamında mali tablolarınızın dönüşüm süreçlerini yönetiyor, 
            küresel yatırımcılarla aynı dili konuşan finansal raporlar oluşturuyoruz.
          </li>

          <li>
            <strong>🤝 Şirket Birleşme ve Satın Alma Süreçlerinde Muhasebe ve Raporlama Desteği</strong>  
            <br />
            Birleşme, devir ve satın alma süreçlerinde muhasebe entegrasyonlarını ve finansal veri uyumunu sağlayarak 
            karar alma süreçlerini hızlandırıyor ve riskleri minimize ediyoruz.
          </li>

          <li>
            <strong>📊 Faaliyet Raporu ve Muhasebe Danışmanlığı</strong>  
            <br />
            Faaliyet raporlarınızın stratejik, şeffaf ve düzenleyici gerekliliklere uygun hazırlanmasını sağlıyor; 
            iç kontrol ve muhasebe politikalarınıza danışmanlık desteği sunuyoruz.
          </li>

          <li>
            <strong>💹 Sermaye Piyasalarına İlişkin Danışmanlık</strong>  
            <br />
            Halka arz süreci, yatırımcı ilişkileri, kamuyu aydınlatma yükümlülükleri ve SPK mevzuatına uyum gibi alanlarda 
            şirketinizi adım adım yönlendiriyoruz.
          </li>

          <li>
            <strong>📈 Yönetim Raporlaması ve Bütçeleme Danışmanlığı</strong>  
            <br />
            Operasyonel performansınızı ölçen ve geleceğe dair finansal senaryolar sunan yönetim raporlama modelleri geliştiriyor, 
            bütçeleme süreçlerinizi veri odaklı hale getiriyoruz.
          </li>

          <li>
            <strong>🏦 Hazine İşlemleri ve Finansal Araçlara Danışmanlık</strong>  
            <br />
            Finansal risklerinizi analiz ediyor, döviz pozisyon yönetimi, nakit akışı planlaması ve yatırım araçlarıyla ilgili 
            en verimli çözümleri sunuyoruz.
          </li>
        </ul>
      </section>
    </main>
  );
}
