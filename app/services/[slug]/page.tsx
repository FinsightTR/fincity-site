 import { notFound } from "next/navigation";
import Link from "next/link";

type Service = {
  title: string;
  intro: string;
  offers: string[];
  scope: string[];
  who: string[];
  duration: string;
};

const DATA: Record<string, Service> = {
  dijital: {
    title: "Dijital Hizmetler",
    intro: "Süreç otomasyonu, veri analitiği ve entegrasyonlarla işinizi hızlandırıyoruz.",
    offers: ["Süreç otomasyonu (RPA/low-code)", "Veri ambarı ve dashboard", "ERP/CRM entegrasyonları"],
    scope: ["Mevcut durum analizi", "Hedef KPI’lar ve yol haritası", "Kurulum + eğitim", "Canlı kullanım sonrası destek"],
    who: ["Büyüme aşamasındaki KOBİ/scale-up’lar", "Raporlama ve görünürlük ihtiyacı olan ekipler"],
    duration: "Tipik kurulum: 4–8 hafta",
  },
  vergi: {
    title: "Vergi Danışmanlığı",
    intro: "Vergi planlaması, e-Fatura/e-Defter ve mevzuat uyum süreçlerinde yanınızdayız.",
    offers: ["Vergi planlama", "Beyan ve uyum kontrolü", "E-dönüşüm süreçleri"],
    scope: ["Risk analizi", "Yıllık takvim", "Raporlama ve dokümantasyon"],
    who: ["E-dönüşüm geçişi yapacak şirketler", "Kontrol ve standardizasyon isteyen finans ekipleri"],
    duration: "Sürekli danışmanlık + dönemsel çalışmalar",
  },
  "insan-yonetimi": {
    title: "İnsan Yönetimi ve Organizasyon Danışmanlığı",
    intro: "Performans yönetimi, OKR/KPI ve organizasyonel tasarım ile kurum kültürünü güçlendiriyoruz.",
    offers: ["OKR/KPI sistemi", "Yetkinlik ve performans çerçevesi", "Organizasyon tasarımı"],
    scope: ["Mevcut yapı analizi", "Politika ve süreç tasarımı", "İletişim ve değişim yönetimi"],
    who: ["Büyüyen ekipler", "Performans kültürü oluşturmak isteyen şirketler"],
    duration: "6–10 hafta (kurulum) + aylık takip",
  },
  "risk-surec-teknoloji": {
    title: "Risk, Süreç ve Teknoloji",
    intro: "İç kontrol ve süreç optimizasyonu ile güvenli ve verimli operasyonlar kuruyoruz.",
    offers: ["Süreç haritalama", "İç kontrol matrisi", "Siber ve erişim kontrolleri"],
    scope: ["Risk analizi", "Kontrol tasarımı", "Test ve iyileştirme"],
    who: ["Denetime hazırlık yapan şirketler", "Hızla ölçeklenen operasyonlar"],
    duration: "4–8 hafta",
  },
  "birlesme-satin-alma": {
    title: "Şirket Birleşme ve Satın Alma",
    intro: "Değerleme, finansal due diligence ve birleşme sonrası entegrasyon desteği.",
    offers: ["Değerleme", "Finansal/operasyonel DD", "PMI (entegrasyon)"],
    scope: ["Veri odası hazırlığı", "Analiz ve raporlama", "Entegrasyon planı"],
    who: ["Yatırım alacak/ yapacak şirketler", "Satın alma öncesi risk analizi isteyenler"],
    duration: "Proje kapsamına bağlı",
  },
  "suistimal-uyum-kriz": {
    title: "Suistimal, Uyum ve Kriz Yönetimi Danışmanlığı",
    intro: "Etik, uyum ve kriz senaryolarında politika ve süreçlerle riskleri azaltıyoruz.",
    offers: ["Etik hat ve politika seti", "Uyum denetimleri", "Kriz senaryoları ve tatbikatı"],
    scope: ["Boşluk analizi", "Politika ve eğitim", "İzleme ve raporlama"],
    who: ["Regüle sektörler", "İç denetim/uyum fonksiyonu güçlendirmek isteyenler"],
    duration: "4–6 hafta + periyodik testler",
  },
  "strateji-yonetim": {
    title: "Strateji ve Yönetim Danışmanlığı",
    intro: "Kurumsal hedefler, büyüme planı ve operasyonel verimlilikle sürdürülebilir kârlılık.",
    offers: ["Strateji ve OKR", "Operasyonel mükemmellik", "Kârlılık artışı programları"],
    scope: ["Keşif ve hedefler", "Yol haritası", "Uygulama ve takip"],
    who: ["Büyüme ve kârlılık hedefi olan şirketler"],
    duration: "8–12 hafta (fazlı)",
  },
  "finansal-raporlama-muhasebe": {
    title: "Finansal Raporlama ve Muhasebe Danışmanlığı",
    intro: "IFRS/BOBİ FRS uyumu, kapanış takvimi ve yönetim raporlaması.",
    offers: ["IFRS/BOBİ FRS uyumu", "Aylık kapanış takvimi", "Yönetim raporları"],
    scope: ["Hesap planı ve politika seti", "Standart raporlar", "Eğitim ve devretme"],
    who: ["Finansal görünürlük ve standart isteyenler"],
    duration: "4–8 hafta",
  },
  "aile-sirketi": {
    title: "Aile Şirketi Hizmetleri",
    intro: "Nesiller arası geçiş, aile anayasası ve kurumsal yönetişim.",
    offers: ["Aile anayasası", "Yönetim kurulu/ icra kurulu modeli", "Devir planı"],
    scope: ["Mevcut durum ve beklentiler", "Tasarım & mutabakat", "Uygulama planı"],
    who: ["Aile şirketleri ve hissedarlar"],
    duration: "8–12 hafta",
  },
};

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const data = DATA[params.slug];
  if (!data) return notFound();

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <Link href="/services" className="text-sm text-gray-600 hover:text-gray-900">← Tüm hizmetler</Link>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{data.title}</h1>
      <p className="mt-3 max-w-3xl text-gray-700">{data.intro}</p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <section className="rounded-2xl border bg-white p-6">
          <h2 className="text-lg font-semibold">Ne sunarız?</h2>
          <ul className="mt-3 list-disc pl-5 text-sm text-gray-700">
            {data.offers.map((i) => <li key={i}>{i}</li>)}
          </ul>
        </section>

        <section className="rounded-2xl border bg-white p-6">
          <h2 className="text-lg font-semibold">Kapsam</h2>
          <ul className="mt-3 list-disc pl-5 text-sm text-gray-700">
            {data.scope.map((i) => <li key={i}>{i}</li>)}
          </ul>
        </section>

        <section className="rounded-2xl border bg-white p-6">
          <h2 className="text-lg font-semibold">Kimler için?</h2>
          <ul className="mt-3 list-disc pl-5 text-sm text-gray-700">
            {data.who.map((i) => <li key={i}>{i}</li>)}
          </ul>
        </section>

        <section className="rounded-2xl border bg-white p-6">
          <h2 className="text-lg font-semibold">Süre & Teslimatlar</h2>
          <p className="mt-3 text-sm text-gray-700">{data.duration}</p>
        </section>
      </div>
    </main>
  );
}