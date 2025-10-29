'use client';
import Protected from '../components/Protected';

export default function MukellefPage() {
  return (
    <Protected requireRole={['admin']}>
      <div className="flex flex-col items-center justify-center h-[70vh]">
        <h1 className="text-3xl font-bold mb-4">💼 Mükellef Uygulaması</h1>
        <p className="text-gray-600 text-lg text-center max-w-xl">
          Mükellef işlemleri ve bağlantılar yakında burada olacak.
        </p>
      </div>
    </Protected>
  );
}
