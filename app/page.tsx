 "use client";
import { Layers, ArrowRight, Briefcase, BarChart3, Layers as StackIcon, Check, Mail, Phone, Globe } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-white/70 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <a href="#" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gray-900 text-white">
                <Layers size={18} />
              </div>
              <div className="leading-tight">
                <p className="text-lg font-bold tracking-tight">Fincity</p>
                <p className="-mt-1 text-[10px] uppercase tracking-widest text-gray-500">Yönetim & Finans</p>
              </div>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-black"
            >
              Teklif Al <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </header>

      {/* Hero / Intro */}
      <main>
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold">Hoş geldin Fincity!</h1>
            <p className="mt-2 max-w-2xl text-gray-600">
              Bu, sitenin çalışan temel iskeleti. Aşağıda Hizmetler ve İletişim bölümleri hazır.
            </p>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Uzmanlık Alanlarımız</h2>
              <p className="mt-3 text-base text-gray-600 sm:text-lg">İhtiyacınıza göre modüler servis paketleri.</p>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* Yönetim Danışmanlığı */}
              <div className="rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-md">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-900 text-white">
                  <Briefcase size={18} />
                </div>
                <h3 className="text-lg font-semibold">Yönetim Danışmanlığı</h3>
                <p className="mt-2 text-sm text-gray-600">Stratejiden uygulamaya, ölçülebilir çıktılarla ilerleriz.</p>
                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  {["Operasyon & süreç tasarımı", "OKR/KPI kurulumu", "Değişim yönetimi"].map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <Check className="mt-0.5" size={16} /> <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Finansal Hizmetler */}
              <div className="rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-md">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-900 text-white">
                  <BarChart3 size={18} />
                </div>
                <h3 className="text-lg font-semibold">Finansal Hizmetler</h3>
                <p className="mt-2 text-sm text-gray-600">FP&A, mali analiz ve yatırım danışmanlığı.</p>
                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  {["Bütçe & forecasting", "Nakit akış optimizasyonu", "Kârlılık analizi"].map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <Check className="mt-0.5" size={16} /> <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Muhasebe & Vergi */}
              <div className="rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-md">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-900 text-white">
                  <StackIcon size={18} />
                </div>
                <h3 className="text-lg font-semibold">Muhasebe & Vergi</h3>
                <p className="mt-2 text-sm text-gray-600">Uçtan uca muhasebe ve mevzuat uyumu.</p>
                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  {["e-Fatura/e-Defter", "Vergi planlaması", "Denetim desteği"].map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <Check className="mt-0.5" size={16} /> <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">İletişim</h2>
              <p className="mt-3 text-base text-gray-600 sm:text-lg">
                Talebinizi gönderin; kısa sürede dönüş yapalım.
              </p>
            </div>

            <div className="mx-auto mt-10 max-w-2xl">
              <form
                action="https://formspree.io/f/mvgwjzro"
  // <-- Formspree endpoint’inle değiştir
                method="POST"
                className="rounded-2xl border bg-white p-6 shadow-sm"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium text-gray-700">Ad Soyad</label>
                    <input name="name" required className="mt-1 w-full rounded-xl border px-3 py-2" placeholder="Yasin Yılmaz" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Email</label>
                    <input name="email" type="email" required className="mt-1 w-full rounded-xl border px-3 py-2" placeholder="info@fincity.com.tr" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="text-sm font-medium text-gray-700">Mesajınız</label>
                    <textarea name="message" required rows={5} className="mt-1 w-full rounded-xl border px-3 py-2" placeholder="İhtiyacınızı ve hedefinizi kısaca anlatın…" />
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <Mail size={16} /> contact@fincity.com.tr
                    <Phone size={16} /> +90 (___) ___ __ __
                    <Globe size={16} /> fincity.com.tr
                  </div>
                  <button
                    className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-5 py-3 text-sm font-semibold text-white hover:bg-black"
                    type="submit"
                  >
                    Gönder <ArrowRight size={16} />
                  </button>
                </div>
              </form>

              <p className="mt-4 text-xs text-gray-500">
                Not: Formspree hesabında oluşturduğun formun endpoint’ini buraya yazmalısın.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-3 py-6 text-sm text-gray-600 md:flex-row">
            <p>© {new Date().getFullYear()} Fincity. Tüm hakları saklıdır.</p>
            <div className="flex items-center gap-4">
              <a href="#services" className="hover:text-gray-900">Hizmetler</a>
              <a href="#contact" className="hover:text-gray-900">İletişim</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}