 import Link from "next/link";
import type { Metadata } from "next";
import { Check, FileText, Shield, Workflow, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Vergi Danışmanlığı | Fincity",
  description:
    "Vergi planlaması, e-Fatura/e-Defter ve mevzuat uyum süreçlerinde uçtan uca danışmanlık. Riskleri azaltır, süreçleri sadeleştiririz.",
};

export default function TaxServicePage() {
  return (
    <main className="bg-white">
      <div className="border-b bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 text-sm">
          <nav className="text-gray-600">
            <Link href="/" className="hover:text-gray-900">Ana Sayfa</Link> <span className="mx-1">/</span>
            <Link href="/services" className="hover:text-gray-900">Hizmetlerimiz</Link> <span className="mx-1">/</span>
            <span className="text-gray-900 font-medium">Vergi Danışmanlığı</span>
          </nav>
        </div>
      </div>

      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
              Vergi Danışmanlığı
            </h1>
            <p className="mt-3 text-lg text-gray-700">
              Vergi planlaması, e-Fatura/e-Defter ve mevzuat uyum süreçlerinde <span className="font-semibold">uçtan uca danışmanlık</span>. 
              Riskleri azaltır, süreçleri sadeleştiririz. Kurulumdan sürekli yönetime kadar yanınızdayız.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}