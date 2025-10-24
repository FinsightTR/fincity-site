import Link from "next/link";
import type { Metadata } from "next";
import type { SVGProps } from "react";

export const metadata: Metadata = {
  title: "Risk, Süreç ve Teknoloji Danışmanlığı | Fincity",
  description:
    "Kurumsal risk yönetimi, iç denetim, BT yönetişimi ve finansal risk süreçleriyle sürdürülebilir büyüme için danışmanlık hizmetleri.",
};

/* ---------- Küçük inline ikonlar (type-safe) ---------- */
function ShieldIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12 3.75l7.5 3v4.5c0 5.25-3.75 8.25-7.5 9.75-3.75-1.5-7.5-4.5-7.5-9.75v-4.5L12 3.75z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M9.75 12l1.5 1.5 3-3"
      />
    </svg>
  );
}
function ScaleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path stroke="currentColor" strokeWidth={1.5} d="M12 3v18M5 21h14" />
      <path stroke="currentColor" strokeWidth={1.5} d="M7 7l-4 6h8l-4-6z" />
      <path stroke="currentColor" strokeWidth={1.5} d="M17 7l-4 6h8l-4-6z" />
    </svg>
  );
}
function BankIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect
        x={3}
        y={7}
        width={14}
        height={10}
        rx={2}
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <rect
        x={7}
        y={5}
        width={14}
        height={10}
        rx={2}
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <circle cx={14} cy={10} r={2.5} stroke="currentColor" strokeWidth={1.5} />
    </svg>
  );
}
function LockIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect
        x={5}
        y={11}
        width={14}
        height={8}
        rx={2}
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M8 11V9a4 4 0 018 0v2" />
      <circle cx={12} cy={15} r={1.5} fill="currentColor" />
    </svg>
  );
}
function ClipboardCheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect
        x={6}
        y={4}
        width={12}
        height={16}
        rx={2}
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M9 4h6v3H9z" />
      <path stroke="currentColor" strokeWidth={1.5} d="M9 13l2 2 4-4" />
    </svg>
  );
}
function BuildingIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect
        x={5}
        y={3}
        width={10}
        height={18}
        rx={2}
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M9 7h2M9 10h2M9 13h2M9 16h2" />
      <path stroke="currentColor" strokeWidth={1.5} d="M15 19h4v-6h-4" />
    </svg>
  );
}

const ICONS = {
  Shield: ShieldIcon,
  Scale: ScaleIcon,
  Bank: BankIcon,
  Lock: LockIcon,
  Clipboard: ClipboardCheckIcon,
  Building: BuildingIcon,
};
type IconKey = keyof typeof ICONS;

/* ---------- İçerik ---------- */
type Subservice = { icon: IconKey; title: string; desc: string };

const SUBSERVICES: Subservice[] = [
  {
    icon: "Shield",
    title: "ERP Risk Hizmetleri",
    desc: "ERP süreçlerinin risk haritaları, veri bütünlüğü ve kontrol güvenliği.",
  },
  {
    icon: "Scale",
    title: "Finansal Risk ve Regülasyon",
    desc: "Basel, IFRS 9, MASAK ve SPK regülasyonlarına uygun risk raporlama.",
  },
  {
    icon: "Bank",
    title: "Kurumsal Hazine Yönetimi",
    desc: "Nakit, likidite, türev ürün ve banka ilişkileri yönetimi çözümleri.",
  },
  {
    icon: "Lock",
    title: "BT Risk ve Yönetişim",
    desc: "Siber güvenlik, veri gizliliği ve BT iç kontrol sistemleri.",
  },
  {
    icon: "Clipboard",
    title: "İç Denetim ve Kontrol",
    desc: "Süreç denetimi, iç kontrol olgunluk analizi ve sürekli denetim araçları.",
  },
  {
    icon: "Building",
    title: "Kurumsal Yönetim",
    desc: "Politika setleri, etik standartlar ve paydaş ilişkileri yönetimi.",
  },
  {
    icon: "Lock",
    title: "Veri Güvenliği & Süreç Olgunluğu",
    desc: "COSO/COBIT temelli süreç olgunluk ölçümü ve veri koruma danışmanlığı.",
  },
];

export default function RiskSurecPage() {
  return (
    <main className="bg-white">
      {/* Breadcrumb */}
      <div className="border-b bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-3 text-sm">
          <nav className="text-gray-600">
            <Link href="/" className="hover:text-gray-900">
              Ana Sayfa
            </Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-gray-900">
              Hizmetlerimiz
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">
              Risk, Süreç ve Teknoloji
            </span>
          </nav>
        </div>
      </div>

      {/* Hero + görsel alanı */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Risk, Süreç ve Teknoloji Danışmanlığı
            </h1>
            <p className="mt-4 text-gray-700 leading-7">
              Finansal, operasyonel ve teknoloji temelli risklerinizi bütünsel bir
              yaklaşımla yönetiyoruz. Kurumsal yönetişim, süreç olgunluğu ve dijital
              güvenlik standartlarınızı geliştirerek sürdürülebilir bir yapı
              oluşturuyoruz.
            </p>
          </div>
          <div>
            {/* Görsel yer tutucu — /public/risk-surec.jpg eklediğinde otomatik görünür */}
            <img
              src="/risk-surec.jpg"
              alt="Risk, süreç ve teknoloji danışmanlığı"
              className="w-full rounded-2xl border border-gray-200 shadow-sm object-cover"
            />
          </div>
        </div>
      </section>

      {/* Alt Hizmetler */}
      <section className="mx-auto max-w-7xl px-4 pb-16">
        <h2 className="text-2xl font-semibold text-gray-900">Hizmetlerimiz</h2>
        <p className="text-gray-700 mt-2">
          İhtiyacınıza göre modüler; tek tek ya da paket olarak uygulanır.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SUBSERVICES.map((s) => {
            const Ico = ICONS[s.icon] ?? ShieldIcon;
            return (
              <div
                key={s.title}
                className="rounded-2xl border border-gray-200 bg-white p-5 hover:shadow-sm transition"
              >
                <div className="flex items-start gap-3">
                  <Ico className="h-5 w-5 mt-1 text-gray-900" />
                  <div>
                    <h3 className="font-medium text-gray-900">{s.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{s.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}

