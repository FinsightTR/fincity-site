// app/services/insan-yonetimi/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "İnsan Yönetimi ve Organizasyon Danışmanlığı | Fincity",
  description:
    "Performans yönetimi, OKR/KPI sistemleri, organizasyonel dönüşüm ve liderlik gelişimi alanlarında danışmanlık hizmetleri.",
};

export default function InsanYonetimiPage() {
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
            <span className="text-gray-900 font-medium">
              İnsan Yönetimi ve Organizasyon Danışmanlığı
            </span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
              👥 İnsan Yönetimi ve Organizasyon Danışmanlığı
            </h1>
            <p className="mt-5 text-gray-700 leading-7">
              Fincity olarak, insan kaynağını şirket stratejinizin merkezine yerleştiriyoruz. 
              Amacımız, çalışan bağlılığını artıran, verimliliği güçlendiren ve kurum kültürünü 
              sürdürülebilir kılan organizasyon yapıları kurmanıza destek olmaktır.
              <br /><br />
              Performans yönetimi, liderlik gelişimi, organizasyonel yeniden yapılanma ve değişim 
              yönetimi süreçlerinde kurumunuza özel çözümler geliştiriyoruz. OKR/KPI sistemleriyle 
              stratejik hedeflerinize ulaşmanızı sağlıyoruz.
            </p>
          </div>

          <img
            src="/insan-yonetimi.jpg"
            alt="İnsan Yönetimi ve Organizasyon Danışmanlığı"
            className="w-full h-72 sm:h-80 object-cover rounded-2xl border border-gray-200"
          />
        </div>
      </section>

      {/* Alt Hizmetler */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">
          💼 İnsan Yönetimi ve Organizasyon Danışmanlığı Hizmetlerimiz
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="text-lg font-semibold mb-2">🎯 OKR & KPI Sistem Tasarımı</h3>
            <p className="text-gray-700">
              Kurumsal hedefleri bireysel performansla hizalayan OKR/KPI sistemlerinin 
              tasarımı ve uygulanması.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="text-lg font-semibold mb-2">👩‍💼 Performans Yönetimi</h3>
            <p className="text-gray-700">
              Çalışan performansını ölçen, geliştiren ve ödüllendiren modern yönetim 
              modellerinin kurgulanması.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="text-lg font-semibold mb-2">🏢 Organizasyonel Yapılandırma</h3>
            <p className="text-gray-700">
              Şirket stratejisine uygun organizasyon şeması, rol tanımları ve 
              iş süreçlerinin yeniden tasarımı.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="text-lg font-semibold mb-2">🚀 Değişim Yönetimi</h3>
            <p className="text-gray-700">
              Dijital dönüşüm, birleşme veya yeniden yapılanma süreçlerinde 
              değişim yönetimi planı ve iletişim stratejisi geliştirme.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="text-lg font-semibold mb-2">🧭 Liderlik & Yetenek Gelişimi</h3>
            <p className="text-gray-700">
              Yönetici koçluğu, liderlik gelişim programları ve geleceğin liderlerini 
              yetiştirmeye yönelik atölye çalışmaları.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="text-lg font-semibold mb-2">🤝 Kurum Kültürü & Çalışan Deneyimi</h3>
            <p className="text-gray-700">
              Çalışan bağlılığı, kurum içi iletişim ve şirket kültürünü güçlendiren 
              anket, analiz ve gelişim uygulamaları.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
