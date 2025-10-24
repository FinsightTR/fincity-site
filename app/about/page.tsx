// app/about/page.tsx
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımızda | Fincity",
  description:
    "Fincity, yönetim danışmanlığı, finansal planlama (FP&A), muhasebe & vergi ve teknoloji entegrasyonlarında uzmanlaşmış bir ekiptir.",
};

export default function AboutPage() {
  return (
    <main className="bg-white text-gray-900">
      {/* HERO GÖRSELİ */}
      <div className="relative w-full h-[400px]">
        <Image
          src="/hero-home.jpg"
          alt="Fincity ekibi"
          fill
          className="object-cover brightness-90"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">
            Hakkımızda
          </h1>
        </div>
      </div>

      {/* METİN KISMI */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20">
        <p className="text-lg text-gray-800 leading-8 mb-6">
          Fincity; yönetim danışmanlığı, finansal planlama (FP&A), muhasebe ve
          vergi danışmanlığı ile teknoloji entegrasyonlarında uzmanlaşmış bir
          ekiptir. İşletmelerin finansal görünürlüğünü artırmak, operasyonel
          verimliliğini güçlendirmek ve karar alma süreçlerini desteklemek için
          stratejik çözümler sunar.
        </p>

        <p className="text-lg text-gray-800 leading-8 mb-6">
          Hedefimiz yalın süreçler, şeffaf raporlama ve öngörülebilir nakit
          akışıyla işletmelerin daha hızlı ve sağlıklı karar almasını
          sağlamaktır. 4–8 hafta içinde kurulum ve standart rapor setleriyle
          görünür sonuç üretir, aylık gözden geçirme oturumlarıyla
          sürdürülebilirliği sağlarız.
        </p>

        <p className="text-lg text-gray-800 leading-8">
          Fincity, yalnızca danışman değil; aynı zamanda büyüme yolculuğunuzda
          stratejik iş ortağınızdır.
        </p>
      </section>

      {/* VİZYON & MİSYON */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Vizyon & Misyon</h2>

          <div className="grid sm:grid-cols-2 gap-8 text-left">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">🌍 Vizyonumuz</h3>
              <p className="text-gray-700 leading-7">
                İşletmelerin finansal ve operasyonel yönetiminde teknolojiyle
                entegre, veri odaklı ve sürdürülebilir çözümler sunarak
                danışmanlıkta yeni bir standart oluşturmak.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">🚀 Misyonumuz</h3>
              <p className="text-gray-700 leading-7">
                Her ölçekten işletmenin stratejik hedeflerine ulaşmasını
                kolaylaştıran yalın süreçler, şeffaf raporlama sistemleri ve
                sürdürülebilir yönetim modelleri geliştirmek.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
