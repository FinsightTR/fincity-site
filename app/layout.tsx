// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";

export const metadata: Metadata = {
  title: "Fincity",
  description: "Fincity başlangıç",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className="bg-white text-gray-900">
        {/* Üst Menü */}
        <header className="border-b bg-white/80 backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            {/* Sol kısım: logo */}
            <Link href="/" className="flex items-center gap-2 hover:opacity-80">
              <span className="font-semibold text-lg">Fincity</span>
            </Link>

            {/* Sağ kısım: navbar */}
            <Navbar />
          </div>
        </header>

        {/* Sayfa İçeriği */}
        <main>{children}</main>
      </body>
    </html>
  );
}

