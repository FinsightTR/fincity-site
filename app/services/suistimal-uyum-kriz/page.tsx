// app/services/suistimal-uyum-kriz/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Suistimal, Uyum ve Kriz Yönetimi | Fincity",
  description:
    "Etik uyum, suistimal incelemeleri, kriz yönetimi, adli bilişim ve kurum içi risk önleme danışmanlığı hizmetleri.",
};

export default function SuistimalUyumKrizPage() {
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
            <span className="text-gray-900 font-medium">Suistimal, Uyum ve Kriz Yönetimi</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
              🧩 Suistimal, Uyum ve Kriz Yönetimi
            </h1>
            <p className="mt-5 text-gray-700 leading-7">
              Fincity olarak, kurumların itibarını, varlıklarını ve çalışan bağlılığını korumayı
              hedefleyen etik, uyum ve suistimal yönetimi çözümleri sunuyoruz. 
              <br /><br />
              Organizasyonel riskleri önceden tespit ederek iç kontrol süreçlerini güçlendiriyor, 
              kriz dönemlerinde stratejik iletişim ve müdahale desteği sağlıyoruz.  
              Amacımız, kurumların <strong>adil, şeffaf ve güvenilir</strong> bir yönetim anlayışıyla 
              faaliyet göstermesine katkı sağlamaktır.
            </p>
          </div>

          <img
            src="/suistimal-uyum-kriz.jpg"
            alt="Suistimal, Uyum ve Kriz Yönetimi"
            className="w-full h-72 sm:h-80 object-cover rounded-2xl border border-gray-200"
          />
        </div>
      </section>

      {/* Alt Hizmetler */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">
          ⚖️ Suistimal, Uyum ve Kriz Yönetimi Hizmetlerimiz
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="text-lg font-semibold mb-2">🔍 Suistimal Risk Yönetimi & Soruşturmalar</h3>
            <p className="text-gray-700">
              Kurum içi suistimal, dolandırıcılık veya kötüye kullanım şüphelerinin tespiti, 
              delil analizi ve soruşturma süreçlerinin yürütülmesi.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="text-lg font-semibold mb-2">🧭 Etik & Uyum Yönetimi</h3>
            <p className="text-gray-700">
              Rüşvet, yolsuzluk ve çıkar çatışması politikalarının geliştirilmesi; 
              ABAC/AML standartlarına uyum danışmanlığı.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="text-lg font-semibold mb-2">🚨 Kriz Yönetimi & Kurumsal İstihbarat</h3>
            <p className="text-gray-700">
              Kriz planlaması, medya yönetimi, veri ihlali veya operasyonel tehditlerde 
              stratejik müdahale ve iletişim desteği.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="text-lg font-semibold mb-2">🧩 Ticari Anlaşmazlık & Hasar İncelemeleri</h3>
            <p className="text-gray-700">
              Ticari anlaşmazlıklar, zarar hesaplamaları ve hasar incelemelerinde 
              bağımsız uzman analizi ve raporlama desteği.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="text-lg font-semibold mb-2">💻 Veri Analitiği & Adli Bilişim</h3>
            <p className="text-gray-700">
              Adli bilişim, veri analitiği ve siber suistimal incelemeleriyle olay temelli 
              delil toplama ve analiz süreçlerinin yürütülmesi.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="text-lg font-semibold mb-2">🎓 Eğitim & Farkındalık Programları</h3>
            <p className="text-gray-700">
              Etik davranış, suistimal önleme ve kriz yönetimi konularında kurum içi 
              eğitimler, seminerler ve e-öğrenme modülleri.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
