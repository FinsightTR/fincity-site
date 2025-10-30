 export const metadata = { title: "Gündem | Fincity" };

export default function GundemPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Gündem</h1>
      <p className="text-gray-700 mb-8">
        Fincity gündemi, duyurular ve güncel içerikler burada yer alacak.
      </p>

      <div className="space-y-4">
        <article className="rounded-xl border p-4 bg-white shadow-sm">
          <h2 className="text-xl font-semibold mb-1">Ekim 2025 Güncellemeleri</h2>
          <p className="text-sm text-gray-500 mb-2">30 Ekim 2025</p>
          <p className="text-gray-700">
            Finansal raporlama süreçleri ve dijital dönüşüm araçları hakkında güncel bilgiler.
          </p>
        </article>
      </div>
    </main>
  );
}
