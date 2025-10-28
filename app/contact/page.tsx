// app/contact/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim | Fincity",
  description: "Fincity ile iletişime geçin.",
};

export default function ContactPage() {
  return (
    <main className="bg-white text-gray-900">
      <section className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">İletişim</h1>
        <p className="text-gray-700 mb-8">
          Sorularınız veya iş birliği talepleriniz için formu doldurun; en kısa sürede dönüş yapalım.
        </p>

        <form
          action="https://formspree.io/f/mnnojaej"
          method="POST"
          className="space-y-5 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm"
        >
          {/* Gönderim sonrası teşekkür sayfasına yönlendirme */}
          <input
            type="hidden"
            name="_next"
            value="https://fincity-site.vercel.app/contact/thanks"
          />
          {/* E-posta konu satırı (opsiyonel) */}
          <input type="hidden" name="_subject" value="Fincity Web Formu – Yeni Mesaj" />
          {/* Formspree captcha (ücretsiz planda kapama denemesi), sorun olursa kaldırabilirsiniz */}
          <input type="hidden" name="_captcha" value="false" />
          {/* Honeypot (spam) */}
          <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Ad Soyad *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Adınız Soyadınız"
                className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900/10"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                E-posta *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="ornek@firma.com"
                className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900/10"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                Şirket
              </label>
              <input
                id="company"
                name="company"
                type="text"
                placeholder="Şirket adı (opsiyonel)"
                className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900/10"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Telefon
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+90 ..."
                className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900/10"
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
              Konu
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="Kısa konu başlığı"
              className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900/10"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Mesajınız *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              placeholder="Kısaca ihtiyacınızı anlatabilirsiniz."
              className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900/10"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-gray-900 text-white px-6 py-3 font-medium hover:bg-gray-800"
          >
            Gönder
          </button>
        </form>

        <p className="text-xs text-gray-500 mt-4">
          Bu form Formspree tarafından iletilir. Gönderiminiz e-posta olarak bize ulaşır.
        </p>
      </section>
    </main>
  );
}
