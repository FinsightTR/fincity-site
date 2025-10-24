// app/about/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımızda | Fincity",
  description:
    "Fincity, yönetim danışmanlığı, finansal planlama (FP&A), muhasebe & vergi ve teknoloji entegrasyonlarında uzmanlaşmış bir ekiptir.",
};

export default function AboutPage() {
  return (
    <main className="bg-white text-gray-900">
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-8">
          Hakkımızda
        </h1>

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
    </main>
  );
}
