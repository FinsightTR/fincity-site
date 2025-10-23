 // app/services/[slug]/page.tsx
import { notFound } from "next/navigation";
import DijitalPage from "../dijital/page";
import VergiPage from "../vergi/page";

const pages: Record<string, React.FC> = {
  dijital: DijitalPage,
  vergi: VergiPage,
  // ileride başka sayfalar eklersen buraya ekle
};

export default function ServiceSlugPage({
  params,
}: {
  params: { slug: string };
}) {
  const PageComponent = pages[params.slug];

  if (!PageComponent) {
    notFound();
  }

  return <PageComponent />;
}
