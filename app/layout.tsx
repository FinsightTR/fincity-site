// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Fincity",
  description: "Fincity başlangıç",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className="bg-white text-gray-900">
        {/* Sabit (fixed) header */}
        <header className="fixed inset-x-0 top-0 z-50 border-b bg-white/80 backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80">
              <span className="font-semibold text-lg">Fincity</span>
            </Link>
            <Navbar />
          </div>
        </header>

        {/* Header yüksekliği kadar üst boşluk (overlap olmasın) */}
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}

