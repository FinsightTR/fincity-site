import Image from "next/image";

export default function DigitalServicesPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Sol metin */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              Dijital Hizmetler
            </h1>
            <p className="text-gray-600">
              Fincity olarak dijital dönüşümü, sadece teknoloji kurulumundan ibaret görmüyoruz.
              İş hedeflerinize bağlanan, ölçülebilir çıktılar üreten ve ekibiniz tarafından
              sürdürülebilir şekilde kullanılan çözümler kuruyoruz. Düşük maliyetli ama etkili
              otomasyonlardan, uçtan uca veri görünürlüğüne kadar adım adım ilerleyen bir yol haritası uygularız.
            </p>
            <p className="text-gray-600">
              RPA/low-code otomasyonlar, ERP/CRM entegrasyonları, veri ambarı ve yönetim dashboard’larıyla
              karar alma hızınızı artırır, operasyonel hataları azaltır ve süreçlerinizi ölçeklenebilir hale getiririz.
            </p>
          </div>

          {/* Sağ görsel */}
          <div className="relative w-full overflow-hidden rounded-2xl bg-white shadow-sm">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src="/dijital.jpg"
                alt="Dijital Dönüşüm"
                fill
                className="object-cover"
                sizes="(min-width:1024px) 560px, 100vw"
                quality={85}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Kapsam */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="text-2xl font-bold text-center text-gray-900">Dijital Hizmetler Kapsamımız</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-800">
          <ul className="space-y-3">
            <li>RPA / Low-code Süreç Otomasyonu</li>
            <li>ERP/CRM Entegrasyonları</li>
            <li>API & veri akışı tasarımı</li>
          </ul>
          <ul className="space-y-3">
            <li>Veri Ambarı (DWH) kurulumu</li>
            <li>Yönetim Dashboard’ları (FP&A)</li>
            <li>Operasyon & satış raporları</li>
          </ul>
          <ul className="space-y-3">
            <li>Bulut geçişi & mimari yönlendirme</li>
            <li>Veri kalite & yönetişim pratikleri</li>
            <li>Eğitim & devretme modeli</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
