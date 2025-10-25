// app/layout.tsx (kısım)
import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer"; // ← eklendi

export const metadata: Metadata = {
  title: "Fincity",
  description: "Fincity başlangıç",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className="bg-white text-gray-900">
        <header className="border-b bg-white/80 backdrop-blur sticky top-0 z-40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <Link href="/services" className="flex items-center gap-2">
              <span className="font-semibold text-lg">Fincity</span>
            </Link>
            <Navbar />
          </div>
        </header>

        <main>{children}</main>

        <Footer /> {/* ← altbilgi */}
      </body>
    </html>
  );
}

