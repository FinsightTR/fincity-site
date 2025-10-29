'use client';
// alias sorunlarına karşı relatif yol kullanalım:
import Protected from '../components/Protected';

export default function ERPPage() {
  return (
    <Protected requireRole={['admin']}>
      <div className="flex flex-col items-center justify-center h-[70vh]">
        <h1 className="text-3xl font-bold mb-4">🧾 ERP Modülleri</h1>
        <p className="text-gray-600 text-lg text-center max-w-xl">
          Finsight ERP entegrasyonları yakında burada olacak.
        </p>
      </div>
    </Protected>
  );
}
