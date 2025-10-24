// app/about/page.tsx
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımızda | Fincity",
  description:
    "Fincity; yönetim danışmanlığı, FP&A, muhasebe, vergi ve teknoloji entegrasyonlarında uzman bir danışmanlık ekibidir.",
};

export default function AboutPage() {
  return (
    <main className="bg-white text-gray-900">
      {/* HERO (isteğe bağlı görsel) */}
      <section className="relative w-full h-[320px] sm:h-[400px]">
        <Image
          src="/hero-home.jpg"
          alt="Fincity"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center px-4 text-center">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white">🏢 Hakkımızda</h1>
        </div>
      </section>

      {/* İÇERİK */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 space-y-10">

        {/* Hakkımızda metni */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-4">🏢 Hakkımızda</h2>
          <p className="text-gray-700 leading-7">
            Fincity, yönetim danışmanlığı, finansal planlama (FP&A), muhasebe ve vergi danışmanlığı ile teknoloji
            entegrasyonlarında uzmanlaşmış bir danışmanlık ekibidir. İşletmelerin finansal görünürlüğünü artırmak,
            operasyonel verimliliğini güçlendirmek ve karar alma süreçlerini hızlandırmak için teknolojiyle entegre
            stratejik çözümler sunar.
          </p>
          <p className="mt-4 text-gray-700 leading-7">
            Finansal süreçleri sadeleştirir, raporlamayı şeffaf hale getirir ve veri odaklı yönetim kültürü oluştururuz.
            Fincity’nin temel amacı; işletmelerin 4–8 hafta gibi kısa bir sürede görünür sonuçlara ulaşmasını ve aylık
            gözden geçirme oturumlarıyla sürdürülebilir performans yönetimini sağlamaktır.
          </p>
          <p className="mt-4 text-gray-700 leading-7">
            Her proje, Fincity’nin “yalın süreç – ölçülebilir sonuç – sürdürülebilir başarı” prensipleriyle yürütülür.
            Biz yalnızca danışman değil, büyüme yolculuğunuzda stratejik iş ortağınız olarak hareket ederiz.
          </p>
        </div>

        {/* Vizyonumuz */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-3">🌍 Vizyonumuz</h2>
          <p className="text-gray-700 leading-7">
            İşletmelerin finansal ve operasyonel yönetiminde teknolojiyle entegre, veri odaklı ve sürdürülebilir çözümler
            sunarak, danışmanlık alanında yeni bir standart oluşturmak. Fincity, modern işletmelerin geleceğe güvenle
            bakabilmesi için dijital dönüşümle yönetim danışmanlığını birleştiren öncü bir yapı olmayı hedefler.
          </p>
        </div>

        {/* Misyonumuz */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-3">🎯 Misyonumuz</h2>
          <p className="text-gray-700 leading-7">
            Her ölçekten işletmenin stratejik hedeflerine ulaşmasını kolaylaştıran;
          </p>
          <ul className="mt-3 space-y-1 text-gray-700 leading-7 list-disc pl-6">
            <li>yalın süreçler,</li>
            <li>şeffaf raporlama sistemleri,</li>
            <li>ölçülebilir performans göstergeleri ve</li>
            <li>sürdürülebilir yönetim modelleri</li>
          </ul>
          <p className="mt-3 text-gray-700 leading-7">
            geliştirerek kurumsal verimliliği kalıcı hale getirmek.
          </p>
        </div>

        {/* Amacımız */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-3">🎯 Amacımız</h2>
          <p className="text-gray-700 leading-7">
            Fincity olarak amacımız;
          </p>
          <ul className="mt-3 space-y-1 text-gray-700 leading-7 list-disc pl-6">
            <li>Finansal kararların veriye dayalı alınmasını sağlamak,</li>
            <li>İşletmelerin öngörülebilir nakit akışı ve sağlam finansal temeller üzerine büyümesini desteklemek,</li>
            <li>Yönetim ekiplerine gerçek zamanlı görünürlük ve kontrol imkânı sunmaktır.</li>
          </ul>
          <p className="mt-3 text-gray-700 leading-7">
            Böylece, her işletmenin kendi büyüme yolculuğunda sağlıklı, dengeli ve sürdürülebilir bir yapıya kavuşmasını
            hedefliyoruz.
          </p>
        </div>

        {/* Değerlerimiz */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-4">💡 Değerlerimiz</h2>
          <ol className="space-y-2 text-gray-700 leading-7 list-decimal pl-6">
            <li>
              <strong>Güven:</strong> Her iş ilişkimizin temeli karşılıklı güven ve şeffaflıktır.
            </li>
            <li>
              <strong>Profesyonellik:</strong> Her projede en yüksek standartta hizmet sunmayı ve ölçülebilir sonuç üretmeyi taahhüt ederiz.
            </li>
            <li>
              <strong>Teknoloji &amp; Yenilik:</strong> Süreçleri dijitalleştirir, teknolojiyi karar destek sistemlerinin merkezine taşırız.
            </li>
            <li>
              <strong>Sürdürülebilirlik:</strong> Kısa vadeli çözümler yerine uzun vadeli değer yaratmayı hedefleriz.
            </li>
            <li>
              <strong>İş Birliği:</strong> Müşterilerimizle yalnızca danışman olarak değil, aynı ekibin bir parçası olarak çalışırız.
            </li>
            <li>
              <strong>Etik ve Sorumluluk:</strong> Tüm faaliyetlerimizi dürüstlük, gizlilik ve etik değerler çerçevesinde yürütürüz.
            </li>
          </ol>
        </div>

        {/* Yaklaşımımız */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-3">🚀 Yaklaşımımız</h2>
          <p className="text-gray-700 leading-7">Fincity’de her proje;</p>
          <ul className="mt-3 space-y-1 text-gray-700 leading-7 list-disc pl-6">
            <li>analiz,</li>
            <li>kurulum,</li>
            <li>ölçümleme ve</li>
            <li>sürdürülebilirlik</li>
          </ul>
          <p className="mt-3 text-gray-700 leading-7">
            aşamalarıyla ilerler. Bu yaklaşım sayesinde işletmeler, yalnızca mevcut süreçlerini optimize etmekle kalmaz;
            aynı zamanda dijital dönüşüme hazır, çevik ve karar odaklı bir yapıya kavuşur.
          </p>
        </div>
      </section>
    </main>
  );
}
