// app/page.tsx
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fincity | Yönetim & Finans Danışmanlığı",
  description:
    "Yönetim danışmanlığı, FP&A, muhasebe & vergi ve teknoloji entegrasyonlarıyla uçtan uca çözümler.",
};

export default function HomePage() {
  return (
    <main className="bg-white text-gray-900">
      {/* HERO BÖLÜMÜ */}
      <section className="relative w-full h-[420px] sm:h-[500px]">
        <Image
          src="/hero-home.jpg"
          alt="Fincity ekip görseli"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay ve Metin */}
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
            Uzmanlık ve teknolojiyi bir araya getiriyoruz
          </h1>
          <p className="mt-4 max-w-3xl text-white/90 text-lg">
            Böylece siz{" "}
            <span className="font-semibold text-white">daha akıllı</span>,{" "}
            <span className="font-semibold text-white">daha hızlı</span> ve{" "}
            <span className="font-semibold text-white">daha başarılı</span>{" "}
            olabilirsiniz.
          </p>

          {/* Sadece Hakkımızda butonu */}
          <div className="mt-6">
            <Link
              href="/about"
              className="rounded-xl bg-white/90 px-6 py-3 text-gray-900 font-medium hover:bg-white"
            >
              Hakkımızda
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
