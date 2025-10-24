 // app/services/insan-yonetimi/page.tsx
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İnsan Yönetimi ve Organizasyon Danışmanlığı | Fincity",
  description:
    "OKR/KPI yapıları, organizasyon tasarımı, İK süreçleri, SGK uyumu, performans ve ücret yönetimi, İK analitiği.",
};

export default function InsanYonetimiPage() {
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
            <span className="text-gray-900 font-medium">İnsan Yönetimi ve Organizasyon</span>
          </nav>
        </div>
      </div>

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
              İnsan Yönetimi ve Organizasyon Danışmanlığı
            </h1>
            <p className="mt-4 text-gray-700 leading-7">
              İnsan kaynakları ve organizasyon süreçlerinizi performans, şeffaflık ve
              ölçeklenebilirlik odağında yeniden kurguluyoruz. OKR/KPI yapıları, rol &
              sorumluluklar, iş gücü planlama ve veri temelli İK analitiği ile büyüme
              hedeflerinize hizalanmış bir yapı kurmanıza yardımcı oluruz.
            </p>

            <ul className="mt-6 space-y-3 text-gray-800">
              <li>• <b>Ölçülebilir performans:</b> OKR/KPI hedef kademelendirme ve ritim.</li>
              <li>• <b>Uygun organizasyon:</b> Roller, iş akışları ve yetkinlik matrisleri.</li>
              <li>• <b>Uyum & güven:</b> İş kanunu/SGK süreçleri ile tam mevzuat uyumu.</li>
              <li>• <b>Veriyle yönetim:</b> İK analitiği, raporlama panelleri ve içgörü.</li>
            </ul>
          </div>

          {/* Görseli /public klasörüne koyun: insan-yonetimi.png */}
          <img
            src="/insan-yonetimi.png"
            alt="İnsan yönetimi ve organizasyon danışmanlığı"
            className="w-full rounded-2xl border border-gray-200 shadow-sm object-cover"
          />
        </div>
      </section>

      {/* ALT HİZMETLER */}
      <section className="mx-auto max-w-7xl px-4 pb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
          İnsan Yönetimi ve Organizasyon Danışmanlığı Hizmetlerimiz
        </h2>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              t: "İnsan Kaynakları Danışmanlığı",
              d: "İşe alım–oryantasyon, yetenek yönetimi, kariyer yolları ve yedekleme.",
            },
            {
              t: "Sosyal Güvenlik Hizmetleri",
              d: "SGK süreçleri, teşvikler, bordro kontrolleri ve mevzuat uyumu.",
            },
            {
              t: "Organizasyon Tasarımı & İş Gücü Planlama",
              d: "Rol/sorumluluklar, organizasyonel yapı, norm kadro ve kapasite planı.",
            },
            {
              t: "Performans & Ücret Yönetimi",
              d: "OKR/KPI tasarımı, prim/bonus sistemleri, ücret bantları ve ücretlendirme komitesi.",
            },
            {
              t: "Uyum & Politika Setleri",
              d: "Çalışan el kitabı, etik & disiplin, hibrit/uzaktan çalışma, izin ve yan hak politikaları.",
            },
            {
              t: "İK Analitiği & Raporlama",
              d: "Headcount, devir, devamsızlık, verimlilik ve memnuniyet panelleri.",
            },
            {
              t: "Eğitim, Mentorluk & Devir",
              d: "Yönetici koçluğu, eğitim tasarımı ve kurum içi devretme modelleri.",
            },
            {
              t: "Çalışan Deneyimi & İç İletişim",
              d: "Onboarding, anketler, aksiyon planı ve iç iletişim ritmi tasarımı.",
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
