// app/services/[slug]/page.tsx
import { notFound } from "next/navigation";
import DijitalPage from "../dijital/page";
import VergiPage from "../vergi/page";

// Bileşen türü için FC yerine ComponentType kullanıyoruz (ekstra import gerekmez)
const pages: Record<string, React.ComponentType> = {
  dijital: DijitalPage,
  vergi: VergiPage,
  // ileride başka sayfalar eklersen buraya ekle
};

type Params = { slug: string };

export default async function ServiceSlugPage({
  params,
}: {
  // Next.js 15: params Promise olarak gelir
  params: Promise<Params>;
}) {
  const { slug } = await params;

  const PageComponent = pages[slug];

  if (!PageComponent) {
    notFound();
  }

  return <PageComponent />;
}
