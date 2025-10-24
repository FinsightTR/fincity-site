// app/services/insan-yonetimi/page.tsx
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İnsan Yönetimi ve Organizasyon Danışmanlığı | Fincity",
  description:
    "İK danışmanlığı, organizasyonel tasarım, OKR/KPI, eğitim & gelişim, SGK ve iş hukuku/uyum hizmetleri.",
};

export default function HumanOrgServicePage() {
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
            <span className="text-gray-900 font-medium">
              İnsan Yönetimi ve Organizasyon Danışmanlığı
            </span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
              İnsan Yönetimi ve Organizasyon Danışmanlığı
            </h1>
            <p className="mt-4 text-gray-700 leading-7">
              Fincity olarak, insan kaynakları süreçlerinizi verimli, şeffaf ve
              ölçülebilir hale getiriyor; organizasyon yapınızı büyüme
              hedeflerinizle hizalıyoruz. Performans, yetenek ve kültür odaklı,
              veriyle yönetilen bir İK modeli kurmanıza yardımcı oluyoruz.
            </p>
            <ul className="mt-6 space-y-2 text-gray-700">
              <li>• <b>Ölçülebilir performans:</b> OKR/KPI yapılarıyla hedefler ve çıktılar netleşir.</li>
              <li>• <b>Uygun organizasyon:</b> Roller ve iş akışları sadeleşir, verimlilik artar.</li>
              <li>• <b>Uyum & güven:</b> İş kanunu/SGK süreçleri mevzuata tam uyumlu ilerler.</li>
            </ul>

            <div className="mt-6 flex gap-3">
              <Link
                href="/contact"
                className="rounded-xl bg-gray-900 px-4 py-2 text-white hover:bg-gray-800"
              >
                Görüşme Planla →
              </Link>
              <Link
                href="/services"
                className="rounded-xl border border-gray-300 px-4 py-2 hover:bg-gray-50"
              >
                Tüm Hizmetler
              </Link>
            </div>
          </div>

          <div>
            <img
              src="/insan-yonetimi.jpg"
              alt="İnsan yönetimi ve organizasyon danışmanlığı"
              className="w-full rounded-2xl border border-gray-200 shadow-sm object-cover"
            />
          </div>
        </div>
      </section>

      {/* Alt Hizmetler */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Alt Hizmetler</h2>
        <p className="mt-3 text-gray-700">
          Aşağıdaki başlıklar modüler yapıdadır; ihtiyacınıza göre tek tek veya paket halinde uygulanır.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-gray-200 p-5 bg-white">
            <h3 className="text-lg font-semibold text-gray-900">İnsan Kaynakları Danışmanlığı</h3>
            <p className="mt-2 text-sm text-gray-600">
              İşe alım/yerleştirme, bordro & özlük, yan hak tasarımı, kariyer ve
              yedekleme planları, çalışan yaşam döngüsü tasarımı.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-5 bg-white">
            <h3 className="text-lg font-semibold text-gray-900">Sosyal Güvenlik Hizmetleri</h3>
            <p className="mt-2 text-sm text-gray-600">
              SGK süreçleri, teşvik ve muafiyet yönetimi, denetim hazırlığı,
              iş hukuku uyumu ve raporlama.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-5 bg-white">
            <h3 className="text-lg font-semibold text-gray-900">Organizasyonel Tasarım &amp; Yeniden Yapılanma</h3>
            <p className="mt-2 text-sm text-gray-600">
              Organizasyon şeması, görev tanımları, yetki-sorumluluk (RACI)
              matrisi, büyüme/birleşme sonrası yeniden tasarım.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-5 bg-white">
            <h3 className="text-lg font-semibold text-gray-900">Performans ve OKR/KPI Sistemleri</h3>
            <p className="mt-2 text-sm text-gray-600">
              Hedef kırılımı, göstergelerin tasarımı, prim &amp; ödül modelleri,
              dönemsel değerlendirme ritüeli, dashboard’lar.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-5 bg-white">
            <h3 className="text-lg font-semibold text-gray-900">Eğitim &amp; Gelişim Programları</h3>
            <p className="mt-2 text-sm text-gray-600">
              Liderlik, iletişim, geri bildirim, koçluk yaklaşımı, yeni yönetici
              programları; ihtiyaç analizi ve yıllık gelişim kataloğu.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-5 bg-white">
            <h3 className="text-lg font-semibold text-gray-900">Çalışan Deneyimi &amp; Bağlılık</h3>
            <p className="mt-2 text-sm text-gray-600">
              Memnuniyet/bağlılık anketleri, oryantasyon optimizasyonu, iç
              iletişim ritüelleri ve esenlik programları.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-5 bg-white">
            <h3 className="text-lg font-semibold text-gray-900">İş Hukuku &amp; Uyum Danışmanlığı</h3>
            <p className="mt-2 text-sm text-gray-600">
              İK süreçlerinin hukuki çerçevesi, sözleşmeler, disiplin
              süreçleri, KVKK uyumu ve işyeri denetimlerinde mevzuata uygunluk.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">İhtiyacınıza uygun bir yol haritası belirleyelim</h3>
            <p className="text-gray-700">
              Kısa bir keşif görüşmesi ile mevcut durumu analiz edip öneri planı paylaşalım.
            </p>
          </div>
          <Link href="/contact" className="rounded-xl bg-gray-900 px-5 py-2.5 text-white hover:bg-gray-800">
            Görüşme Planla →
          </Link>
        </div>
      </section>
    </main>
  );
}
