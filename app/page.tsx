 "use client";
import { useState, useEffect } from "react";
import { ArrowRight, Briefcase, BarChart3, Layers as StackIcon, Check, Layers } from "lucide-react";

export default function Home() {
  // 🔹 BURAYA ekle
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  
  // 🔹 RETURN buradan başlıyor
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      ...

 
 
 
 // Yukarıdaki importlar aynı kalsın

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

// ...

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