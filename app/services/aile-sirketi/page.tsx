 // app/services/aile-sirketi/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aile Şirketi Hizmetleri | Fincity",
  description:
    "Kuşaktan kuşağa sürdürülebilir başarı için güven, strateji ve yapı. Aile şirketleri için kurumsallaşma, yönetişim ve varlık yapılanması danışmanlığı.",
};

export default function AileSirketiPage() {
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
            <span className="text-gray-900 font-medium">Aile Şirketi Hizmetleri</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
              👨‍👩‍👧‍👦 Aile Şirketi Hizmetleri
            </h1>
            <p className="mt-5 text-gray-700 leading-7">
              Fincity olarak, aile şirketlerinin yalnızca bugününü değil, gelecek kuşaklara aktarılacak
              mirasını da koruyacak kurumsal yapılar ve yönetim sistemleri tasarlıyoruz.
              <br /><br />
              Amacımız; sahiplik, yönetim ve aile değerleri arasındaki dengeyi kurarak şirketlerin 
              sürdürülebilir büyüme ve kuşaklar arası devamlılık hedeflerine ulaşmalarına destek olmaktır.
              <br /><br />
              Aile işletmeleri için geliştirdiğimiz hizmetler; stratejik, duygusal ve yapısal dinamikleri
              bir araya getirir. Fincity olarak her aileye özgü ihtiyaçları analiz eder, kurumsallaşma, 
              yönetim modeli, aile içi iletişim ve varlık yönetimi konularında kalıcı çözümler üretiriz.
            </p>
          </div>

          <img
            src="/aile-sirketleri.jpg"
            alt="Aile Şirketi Hizmetleri"
            className="w-full h-72 sm:h-80 object-cover rounded-2xl border border-gray-200"
          />
        </div>
      </section>

      {/* Hizmet Kartları */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">
          🌿 Aile Şirketi Hizmetlerimiz
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">

          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="text-lg font-semibold mb-2">🪴 Kuşaktan Kuşağa Geçiş</h3>
            <p className="text-gray-700">
              Şirketin gelecek vizyonunu güvenle yeni nesillere aktarabilmeniz için miras planlaması, 
              yetenek devri, liderlik geçişi ve aile anayasası süreçlerini yönetiyoruz.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="text-lg font-semibold mb-2">🤝 Aile Yönetimi</h3>
            <p className="text-gray-700">
              Aile bireylerinin rollerini netleştiren, iletişimi güçlendiren ve karar alma süreçlerini 
              yapılandıran sistemler kurguluyoruz. Aile konseyi, toplantı yapısı ve çatışma yönetimi 
              modelleriyle sürdürülebilir bir yönetişim kültürü oluşturuyoruz.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="text-lg font-semibold mb-2">🏛️ Kurumsal Yönetim</h3>
            <p className="text-gray-700">
              Aile şirketinin profesyonel yönetim ilkeleriyle uyumlu hale gelmesini sağlıyoruz. 
              Yönetim kurulu yapısı, denetim mekanizmaları ve performans ölçüm sistemleriyle 
              güvenilir bir yapı oluşturuyoruz.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="text-lg font-semibold mb-2">💼 Ortakların İş Modeli</h3>
            <p className="text-gray-700">
              Ortaklar arası hak, sorumluluk ve karar mekanizmalarını tanımlayarak, çatışma riskini 
              minimize eden adil ve şeffaf bir iş modeli geliştiriyoruz.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="text-lg font-semibold mb-2">💎 Değerler ve Amaçlar</h3>
            <p className="text-gray-700">
              Ailenizi bir arada tutan değerleri ve uzun vadeli amaçları tanımlıyor; bu kültürel temelleri 
              şirketin stratejik kararlarına entegre ediyoruz.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="text-lg font-semibold mb-2">🏠 Aile Varlıklarının Yapılanması</h3>
            <p className="text-gray-700">
              Finansal varlıkların, gayrimenkullerin ve yatırımların kuşaklar arası sürdürülebilirliğini 
              sağlayan aile holding, vakıf veya tröst yapıları konusunda danışmanlık sunuyoruz.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}
