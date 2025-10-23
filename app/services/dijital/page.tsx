 import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dijital Hizmetler | Fincity",
  description:
    "Süreç otomasyonu (RPA/low-code), veri & analitik, ERP/CRM entegrasyonları ve dashboard çözümleriyle hızlı görünür sonuçlar.",
};

export default function DigitalServicePage() {
  return (
    <main className="bg-white">
      {/* Breadcrumb */}
      <div className="border-b bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 text-sm">
          <nav className="text-gray-600">
            <Link href="/" className="hover:text-gray-900">Ana Sayfa</Link> <span className="mx-1">/</span>
            <Link href="/#hizmetler" className="hover:text-gray-900">Hizmetlerimiz</Link> <span className="mx-1">/</span>
            <span className="text-gray-900 font-medium">Dijital Hizmetler</span>
          </nav>
        </div>
      </div>

      {/* Üst bölüm: Metin + Görsel */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Sol: metin */}
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Dijital Hizmetler
            </h1>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Fincity olarak dijital dönüşümü, sadece teknoloji kurulumundan ibaret görmüyoruz. 
              İş hedeflerinize bağlanan, ölçülebilir çıktılar üreten ve ekibiniz tarafından sürdürülebilir şekilde
              kullanılan çözümler kuruyoruz. Düşük maliyetli ama etkili otomasyonlardan, uçtan uca veri görünürlüğüne kadar
              adım adım ilerleyen bir yol haritası uygularız.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              RPA/low-code otomasyonlar, ERP/CRM entegrasyonları, veri ambarı ve yönetim dashboard’larıyla 
              karar alma hızınızı artırır, operasyonel hataları azaltır ve süreçlerinizi ölçeklenebilir hale getiririz.
            </p>
          </div>

          {/* Sağ: görsel */}
          <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-md">
            <Image
              src="/dijital.jpg"          // public/dijital.jpg dosyasını ekleyeceğiz
              alt="Fincity Dijital Hizmetler"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Alt bölüm: 3 sütun liste */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mt-16 mb-10">
            Dijital Hizmetler Kapsamımız
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Sol sütun */}
            <ul className="space-y-2 text-gray-700">
              <li>RPA / Low-code Süreç Otomasyonu</li>
              <li>ERP/CRM Entegrasyonları</li>
              <li>API & veri akışı tasarımı</li>
            </ul>

            {/* Orta sütun */}
            <ul className="space-y-2 text-gray-700">
              <li>Veri Ambarı (DWH) kurulumu</li>
              <li>Yönetim Dashboard’ları (FP&A)</li>
              <li>Operasyon & satış raporları</li>
            </ul>

            {/* Sağ sütun */}
            <ul className="space-y-2 text-gray-700">
              <li>Bulut geçişi & mimari yönlendirme</li>
              <li>Veri kalite & yönetişim pratikleri</li>
              <li>Eğitim & devretme modeli</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
