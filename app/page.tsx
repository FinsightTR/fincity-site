"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Briefcase, BarChart3, Layers as StackIcon, Check, Layers } from "lucide-react";

/** GÜNDEM KARTLARI — JSX DIŞINDA TANIMLI */
const NEWS = [
  {
    date: "2025-10-23",
    title: "Finansal planlamada hızlı kazanımlar",
    text: "FP&A’de 4 haftalık kurulum ve standart dashboard yaklaşımımız.",
  },
  {
    date: "2025-10-15",
    title: "ERP seçimi için pratik kontrol listesi",
    text: "Bulut ERP seçiminde 7 kriter: kapsam, raporlama, toplam sahip olma maliyeti…",
  },
  {
    date: "2025-10-05",
    title: "Nakit akışında görünürlük nasıl sağlanır?",
    text: "Haftalık CFO dashboard’ı ve kapanış takvimi ile pratik yöntemler.",
  },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("section[id]");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b bg-white/70 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <a href="#" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gray-900 text-white">
                <Layers size={18} />
              </div>
              <div className="leading-tight">
                <p className="text-lg font-bold tracking-tight">Fincity</p>
                <p className="-mt-1 text-[10px] uppercase tracking-widest text-gray-500">YÖNETİM & FİNANS</p>
              </div>
            </a>

            {/* ÜST MENÜ */}
            <nav className="hidden items-center gap-6 md:flex">
              {[
                { id: "about", label: "Hakkımızda" },
                { id: "services", label: "Hizmetlerimiz" },
                { id: "news", label: "Gündem" },
              ].map((l) => (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  className={`text-sm font-medium transition ${
                    activeSection === l.id
                      ? "text-gray-900 font-semibold"
                      : "text-gray-700 hover:text-gray-900"
                  }`}
                >
                  {l.label}
                </a>
              ))}

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-black"
              >
                Teklif Al <ArrowRight size={16} />
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* HERO */}
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
      Uzmanlık ve teknolojiyi bir araya getiriyoruz
    </h1>
    <p className="mt-4 text-lg text-gray-700 sm:text-xl">
      Böylece siz <span className="font-semibold text-gray-900">daha akıllı</span>,{" "}
      <span className="font-semibold text-gray-900">daha hızlı</span> ve{" "}
      <span className="font-semibold text-gray-900">daha başarılı</span> olabilirsiniz.
    </p>
  </div>
</section>


      {/* HAKKIMIZDA */}
      <section id="about" className="scroll-mt-24 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Hakkımızda</h2>
            <p className="mt-3 text-base text-gray-600 sm:text-lg">Kısaca biz.</p>
          </div>
          <div className="mt-10 mx-auto max-w-3xl space-y-4 text-gray-700 text-[15px]/7">
            <p>
              Fincity; yönetim danışmanlığı, finansal planlama (FP&A), muhasebe & vergi ve teknoloji entegrasyonlarında
              uzmanlaşmış bir danışmanlık ekibidir. Hedefimiz; yalın süreçler, şeffaf raporlama ve öngörülebilir nakit akışıyla
              işletmelerin daha hızlı ve sağlıklı karar almasını sağlamaktır.
            </p>
            <p>
              4–8 hafta içinde kurulum ve standart rapor setleriyle görünür sonuç üretir, sonrasında aylık gözden geçirme
              oturumlarıyla sürdürülebilirliği sağlarız.
            </p>
          </div>
        </div>
      </section>

    {/* HİZMETLER */}
<section id="services" className="scroll-mt-24 py-16 sm:py-24 bg-gray-50">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Hizmetlerimiz
      </h2>
      <p className="mt-3 text-base text-gray-600 sm:text-lg">
        Uzmanlık ve teknolojiyi bir araya getiriyoruz — böylece siz daha akıllı, daha hızlı ve daha başarılı olabilirsiniz.
      </p>
    </div>

    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {[
        {
          title: "Dijital Hizmetler",
          desc: "Süreç otomasyonu (RPA), veri analitiği ve ERP/CRM entegrasyonlarıyla iş süreçlerinizi hızlandırıyor ve görünürlük sağlıyoruz.",
          icon: <BarChart3 size={18} />,
        },
        {
          title: "Vergi Danışmanlığı",
          desc: "Vergi planlaması, e-Fatura/e-Defter ve mevzuat uyum süreçlerinde uçtan uca çözümler sunuyoruz. Riskleri azaltır, süreçleri sadeleştiririz.",
          icon: <StackIcon size={18} />,
        },
        {
          title: "İnsan Yönetimi ve Organizasyon Danışmanlığı",
          desc: "Performans, OKR/KPI sistemleri ve organizasyonel dönüşüm ile sürdürülebilir büyüme kültürü inşa ediyoruz.",
          icon: <Briefcase size={18} />,
        },
        {
          title: "Risk, Süreç ve Teknoloji",
          desc: "İç kontrol, süreç analizi ve teknoloji temelli optimizasyonlarla güvenli ve verimli operasyonlar kuruyoruz.",
          icon: <Check size={18} />,
        },
        {
          title: "Şirket Birleşme ve Satın Alma",
          desc: "Değerleme, finansal due diligence ve birleşme sonrası entegrasyon süreçlerinde uçtan uca danışmanlık sağlıyoruz.",
          icon: <Layers size={18} />,
        },
        {
          title: "Suistimal, Uyum ve Kriz Yönetimi Danışmanlığı",
          desc: "Etik, uyum ve kriz senaryolarında politika, eğitim ve süreçlerle proaktif risk yönetimi sunuyoruz.",
          icon: <Check size={18} />,
        },
        {
          title: "Strateji ve Yönetim Danışmanlığı",
          desc: "Kurumsal hedeflerinize uygun strateji, büyüme planı ve operasyonel verimlilik çözümleriyle sürdürülebilir başarıyı destekliyoruz.",
          icon: <Briefcase size={18} />,
        },
        {
          title: "Finansal Raporlama ve Muhasebe Danışmanlığı",
          desc: "IFRS/BOBİ FRS uyumlu raporlama sistemleri kurarak finansal görünürlük ve analitik karar desteği sağlıyoruz.",
          icon: <BarChart3 size={18} />,
        },
        {
          title: "Aile Şirketi Hizmetleri",
          desc: "Aile anayasası, yönetişim modelleri ve nesiller arası geçiş planlamasıyla sürdürülebilir aile şirketleri oluşturuyoruz.",
          icon: <Layers size={18} />,
        },
      ].map((item) => (
        <div
          key={item.title}
          className="rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-md"
        >
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-900 text-white">
            {item.icon}
          </div>
          <h3 className="text-lg font-semibold">{item.title}</h3>
          <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>




      {/* GÜNDEM */}
      <section id="news" className="scroll-mt-24 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Gündem</h2>
            <p className="mt-3 text-base text-gray-600 sm:text-lg">Duyuru, makale ve haberler.</p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {NEWS.map((n) => (
              <article key={n.title} className="rounded-2xl border bg-white p-6 shadow-sm">
                <p className="text-xs text-gray-500">{n.date}</p>
                <h3 className="mt-1 text-lg font-semibold">{n.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{n.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-3 py-6 text-sm text-gray-600 md:flex-row">
            <p>© {new Date().getFullYear()} Fincity. Tüm hakları saklıdır.</p>
            <div className="flex items-center gap-4">
              <a href="#about" className="hover:text-gray-900">Hakkımızda</a>
              <a href="#services" className="hover:text-gray-900">Hizmetler</a>
              <a href="#news" className="hover:text-gray-900">Gündem</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}