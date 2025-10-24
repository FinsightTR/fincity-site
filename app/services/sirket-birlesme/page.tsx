// app/services/sirket-birlesme/page.tsx
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Şirket Birleşme ve Satın Alma (M&A) | Fincity",
  description:
    "Kurumsal finansman, M&A süreci desteği, due diligence, değerleme, borç danışmanlığı, veri analitiği ve entegrasyon (PMI).",
};

export default function SirketBirlesmePage() {
  const SUBSERVICES: { t: string; d: string }[] = [
    {
      t: "🏦 Kurumsal Finansman Hizmetleri",
      d: "Sermaye yapısı analizi, fonlama stratejisi, yatırımcı iletişimi ve iş planı/finansal model desteği.",
    },
    {
      t: "🤝 Şirket Birleşme ve Satın Alma Desteği",
      d: "Stratejik uyum analizi, hedef/listeler, gizlilik & teklif süreci, veri odası koordinasyonu ve zaman planı.",
    },
    {
      t: "🔎 Due Diligence (Finansal/Operasyonel/BT/İK)",
      d: "Gelir-kârlılık kalitesi, çalışma sermayesi, sözleşmeler, vergi/uyum, süreç ve BT olgunluğu incelemeleri.",
    },
    {
      t: "💹 Değerleme Hizmetleri",
      d: "DCF, pazar çarpanları, işlem çarpanları ve senaryo/stres testleri ile bütüncül değerleme yaklaşımı.",
    },
    {
      t: "💳 Borç Danışmanlığı",
      d: "Yapılandırma, sendikasyon, kredi sözleşmeleri kısıtları (covenants), faiz/kur/likidite risk yönetimi.",
    },
    {
      t: "📈 M&A Veri Analitiği",
      d: "Veri temizleme, KPI setleri, kohort/segment analizleri, sinerji ölçümü ve hedefte anomali tespiti.",
    },
    // İsteğe bağlı ama çok faydalı ek başlıklar:
    {
      t: "📂 Data Room & Süreç PMO",
      d: "Veri odası kurulumu, doküman standardı, paydaş koordinasyonu ve işlemin uçtan uca yönetimi.",
    },
    {
      t: "🧩 İşlem Kurgusu & Müzakere",
      d: "Hisse/varlık alımı kurgusu, ödemeler, kapanış koşulları ve temsil/taahhüt (R&W) müzakereleri.",
    },
    {
      t: "🔗 Birleşme Sonrası Entegrasyon (PMI)",
      d: "Sinerji planı, 100-gün yol haritası, organizasyon/süreç/BT entegrasyonu ve değişim yönetimi.",
    },
  ];

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
            <span className="text-gray-900 font-medium">Şirket Birleşme ve Satın Alma</span>
          </nav>
        </div>
      </div>

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Şirket Birleşme ve Satın Alma (M&amp;A)
            </h1>
            <p className="mt-4 text-gray-700 leading-7">
              Büyüme hedeflerinize uygun M&amp;A stratejisi oluşturur, işlem öncesi–sırası–sonrası
              tüm aşamalarda ekibinizle birlikte çalışırız. Finansal model, değerleme, due diligence,
              işlem kurgusu ve entegrasyon (PMI) dahil uçtan uca bir yaklaşım sunarız.
            </p>
            <ul className="mt-6 space-y-3 text-gray-800">
              <li>• <b>Şeffaf & veri temelli:</b> Kararlar finansal model ve ölçülebilir KPI’larla desteklenir.</li>
              <li>• <b>Risk odaklı:</b> Deal-breaker riskler ve kritik bağımlılıklar erken aşamada görünür.</li>
              <li>• <b>Hızlı entegrasyon:</b> 100 gün planı ve sinerji takibiyle değer yaratımı hızlanır.</li>
            </ul>
          </div>

          {/* Görsel: /public/sirket-birlesme.jpg eklediğinde otomatik çıkar */}
          <img
            src="/sirket-birlesme.jpg"
            alt="Şirket birleşme ve satın alma danışmanlığı"
            className="w-full rounded-2xl border border-gray-200 shadow-sm object-cover"
          />
        </div>
      </section>

      {/* ALT HİZMETLER */}
      <section className="mx-auto max-w-7xl px-4 pb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
          Şirket Birleşme ve Satın Alma Hizmetlerimiz
        </h2>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SUBSERVICES.map((c) => (
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
