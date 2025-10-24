 import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hizmetlerimiz | Fincity",
  description: "Fincity'nin sunduğu profesyonel hizmetleri keşfedin.",
};

// İkonlar (inline SVG)
function IconShieldCheck(props: any) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M12 3.75l7.5 3v4.5c0 5.25-3.75 8.25-7.5 9.75-3.75-1.5-7.5-4.5-7.5-9.75v-4.5L12 3.75z"
      />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M9.75 12l1.5 1.5 3-3"
      />
    </svg>
  );
}
function IconScale(props: any) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M12 3v18M5 21h14M7 7l-4 6h8l-4-6zM17 7l-4 6h8l-4-6z"
      />
    </svg>
  );
}
function IconBanknotes(props: any) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect
        x="3"
        y="7"
        width="14"
        height="10"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <rect
        x="7"
        y="5"
        width="14"
        height="10"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="14" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

const ICONS: Record<string, any> = {
  erp: IconShieldCheck,
  finansal: IconScale,
  hazine: IconBanknotes,
};

const SERVICES = [
  {
    slug: "dijital",
    title: "Dijital Hizmetler",
    desc:
      "RPA/low-code, ERP/CRM entegrasyonları, veri ambarı ve dashboard çözümleri.",
  },
  {
    slug: "vergi",
    title: "Vergi Danışmanlığı",
    desc:
      "Vergi uyumu, beyannameler, stratejik vergi planlaması ve inceleme danışmanlığı.",
  },
  {
    slug: "insan-yonetimi",
    title: "İnsan Yönetimi ve Organizasyon Danışmanlığı",
    desc:
      "Performans, organizasyonel yapı, uyum ve İK süreçlerinin dijital dönüşümü.",
  },
  {
    slug: "risk-surec",
    title: "Risk, Süreç ve Teknoloji Danışmanlığı",
    desc:
      "Kurumsal risk, iç denetim, BT yönetişimi ve finansal risk/regülasyon çözümleri.",
    subservices: [
      {
        key: "erp",
        title: "ERP Risk Hizmetleri",
        desc: "ERP süreçlerinin risk haritaları, veri bütünlüğü ve kontrol güvenliği.",
      },
      {
        key: "finansal",
        title: "Finansal Risk ve Regülasyon Hizmetleri",
        desc: "Basel, IFRS 9, MASAK ve SPK regülasyonlarına uygun risk raporlama.",
      },
      {
        key: "hazine",
        title: "Kurumsal Hazine Yönetimi Hizmetleri",
        desc: "Nakit, likidite, türev ürün ve banka ilişkileri yönetimi çözümleri.",
      },
    ],
  },
];

export default function ServicesIndexPage() {
  return (
    <main className="bg-white">
      <div className="border-b bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-3 text-sm">
          <nav className="text-gray-600">
            <Link href="/" className="hover:text-gray-900">
              Ana Sayfa
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Hizmetlerimiz</span>
          </nav>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900">Hizmetlerimiz</h1>
        <p className="mt-4 text-gray-700">
          İş hedeflerinize uygun çözümler sunuyoruz. Aşağıdan ilgilendiğiniz
          hizmeti seçebilirsiniz.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.slug}
              className="rounded-2xl border border-gray-200 p-5 bg-white hover:shadow-sm transition-shadow"
            >
              <Link href={`/services/${service.slug}`}>
                <h2 className="text-lg font-semibold text-gray-900">
                  {service.title}
                </h2>
              </Link>
              <p className="mt-2 text-sm text-gray-600">{service.desc}</p>

              {service.subservices && (
                <ul className="mt-4 border-t border-gray-100 pt-4 space-y-3">
                  {service.subservices.map((sub) => {
                    const Icon = ICONS[sub.key] || IconShieldCheck;
                    return (
                      <li key={sub.key} className="flex items-start gap-2">
                        <Icon className="h-4 w-4 mt-1 text-gray-900" />
                        <div>
                          <h4 className="font-medium text-gray-800 text-sm">
                            {sub.title}
                          </h4>
                          <p className="text-gray-600 text-xs">{sub.desc}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
