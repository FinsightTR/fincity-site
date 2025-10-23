 import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vergi Danışmanlığı | Fincity",
  description:
    "Fincity Vergi Hizmetleri Ekibi olarak işletmelerin vergi yönetiminde stratejik çözüm ortağıyız.",
};

export default function TaxServicePage() {
  return (
    <main className="bg-white">
      {/* Breadcrumb */}
      <div className="border-b bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 text-sm">
          <nav className="text-gray-600">
            <Link href="/" className="hover:text-gray-900">Ana Sayfa</Link> <span className="mx-1">/</span>
            <Link href="/#hizmetler" className="hover:text-gray-900">Hizmetlerimiz</Link> <span className="mx-1">/</span>
            <span className="text-gray-900 font-medium">Vergi Danışmanlığı</span>
          </nav>
        </div>
      </div>

      {/* Ana içerik */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Sol taraf: metin */}
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Vergi Danışmanlığı
            </h1>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Fincity Vergi Hizmetleri Ekibi olarak temel hedefimiz, vergiyi bir işletme yükü olmaktan çıkarıp,
              şirketinizin sürdürülebilir büyümesini destekleyen stratejik bir unsur haline getirmektir.
              Bu doğrultuda, her kurumun yapısına, sektörüne ve uzun vadeli hedeflerine uygun çözümler geliştiriyor;
              mevzuatın karmaşıklığını sadeleştirerek yönetilebilir hale getiriyoruz.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Teknoloji odaklı yaklaşımımız sayesinde süreçlerinizi dijitalleştiriyor, raporlama ve uyum süreçlerinde
              şeffaflığı artırıyor, böylece karar alma mekanizmalarınızın daha hızlı ve isabetli işlemesini sağlıyoruz.
              Fincity olarak, değişen vergi ortamına uyum sağlama konusunda işletmenizin stratejik çözüm ortağı olmayı,
              riskleri öngörüp fırsatları yakalamanızda proaktif bir destek sunmayı amaçlıyoruz.
            </p>
          </div>

          {/* Sağ taraf: resim */}
          <Image src="/vergi.jpg" alt="Fincity Vergi Danışmanlığı Ekibi" fill className="object-cover rounded-xl shadow-md" />

            />
          </div>
        </div>

        {/* Alt bölüm: hizmet listesi */}
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 mt-14">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Vergi Danışmanlığı Hizmetlerimiz
        <h2 className="text-2xl font-bold text-center mt-16 mb-10">
  Vergi Danışmanlığı Hizmetlerimiz
</h2>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
  {/* Sol sütun */}
  <ul className="space-y-2 text-gray-700">
    <li>Şirket Birleşme ve Satın Alımları Vergi Hizmetleri</li>
    <li>Transfer Fiyatlandırması Hizmetleri</li>
    <li>Ar-Ge Hizmetleri</li>
  </ul>

  {/* Orta sütun */}
  <ul className="space-y-2 text-gray-700">
    <li>Dolaylı Vergi Hizmetleri</li>
    <li>Tam Tasdik Hizmetleri</li>
    <li>KDV İade Hizmetleri</li>
  </ul>

  {/* Sağ sütun */}
  <ul className="space-y-2 text-gray-700">
    <li>Vergi Teknolojileri Hizmetleri</li>
    <li>Muhasebe ve Mali Danışmanlık Hizmetleri</li>
    <li>Uluslararası Vergi Hizmetleri</li>
  </ul>
</div>

          </ul>
        </div>
      </section>
    </main>
  );
}
