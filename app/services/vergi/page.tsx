// app/services/vergi/page.tsx
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vergi Danışmanlığı | Fincity",
  description:
    "Beyannameler, mevzuat uyumu, inceleme süreçleri ve stratejik vergi planlaması için uçtan uca danışmanlık.",
};

export default function VergiPage() {
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
            <span className="text-gray-900 font-medium">Vergi Danışmanlığı</span>
          </nav>
        </div>
      </div>

      {/* Hero + Intro */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Metin */}
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
              Vergi Danışmanlığı
            </h1>
            <p className="text-gray-700 leading-7">
              Vergi planlaması, e-Fatura/e-Defter, KDV/Kurumlar/KDV İadesi süreçleri ve
              mevzuat uyumunu kapsayan uçtan uca çözümler sunuyoruz. Amacımız, riskleri
              azaltmak, nakit akışını korumak ve süreçlerinizi sadeleştirmektir.
            </p>
            <p className="text-gray-700 leading-7">
              Denetim ve inceleme süreçlerinde yanınızdayız; ön kontrol listeleri,
              belge hazırlığı ve savunma yazılarıyla süreci yönetmenizi sağlarız.
            </p>
          </div>

          {/* Görsel */}
          <div className="relative w-full overflow-hidden rounded-2xl shadow-sm bg-white">
            <div className="relative w-full min-h-[280px] sm:min-h-[360px] lg:min-h-[420px]">
              <Image
                src="/vergi.jpg"      // public/vergi.jpg
                alt="Vergi danışmanlığı görseli"
                fill
                className="object-cover"
                priority
                sizes="(min-width:1024px) 560px, 100vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Kapsam */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="text-center text-2xl sm:text-3xl font-semibold text-gray-900">
          Vergi Hizmetlerimiz
        </h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-gray-200 p-5 hover:shadow-sm transition-shadow"
            >
              <h3 className="text-base font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

const FEATURES = [
  {
    title: "Mevzuat Uyum & Beyannameler",
    desc: "KDV, Muhtasar, Geçici Vergi ve Kurumlar beyannameleri için uçtan uca süreç ve kontrol listeleri.",
  },
  {
    title: "e-Fatura / e-Defter / e-Arşiv",
    desc: "Teknik kurulum, entegrasyon ve iç kontrol adımlarıyla eksiksiz uyum.",
  },
  {
    title: "KDV İadesi Süreçleri",
    desc: "Ön kontrol, belge seti, raporlama ve iletişim yönetimi.",
  },
  {
    title: "İnceleme & Uzlaşma Desteği",
    desc: "Ön hazırlık, savunma yazıları ve süreç yönetimi.",
  },
  {
    title: "Transfer Fiyatlandırması",
    desc: "Politika dokümanı, emsal analizi ve yıllık dokümantasyon.",
  },
  {
    title: "Vergi Planlaması",
    desc: "Teşvikler, istisnalar ve nakit akışı odaklı yapılandırmalar.",
  },
];
