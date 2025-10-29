 'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function PanelPage() {
  const [userName, setUserName] = useState('');
  const router = useRouter();

  useEffect(() => {
    const getUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (error || !data.user) {
        router.push('/login');
      } else {
        const fullName = data.user.user_metadata?.full_name || data.user.email;
        setUserName(fullName);
      }
    };
    getUser();
  }, [router]);

  return (
    <div className="flex flex-col items-center py-20">
      <h1 className="text-3xl font-semibold mb-4">
        Hoş geldin, {userName}
      </h1>
      <h2 className="text-2xl font-bold mb-12">Uygulamalarımız</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full px-6">
        {/* Fincity Web */}
        <Link href="/" className="border rounded-2xl p-6 shadow-sm hover:shadow-md transition bg-white">
          <h3 className="text-xl font-semibold mb-2">🏠 Fincity Web</h3>
          <p className="text-gray-600">Fincity yönetim danışmanlığı web sitesine dön.</p>
        </Link>

        {/* ERP Modülleri */}
        <Link href="/erp" className="border rounded-2xl p-6 shadow-sm hover:shadow-md transition bg-white">
          <h3 className="text-xl font-semibold mb-2">🧾 ERP Modülleri</h3>
          <p className="text-gray-600">Finsight ERP modüllerine erişim yakında burada olacak.</p>
        </Link>

        {/* Mükellef Uygulaması */}
        <Link href="/mukellef" className="border rounded-2xl p-6 shadow-sm hover:shadow-md transition bg-white">
          <h3 className="text-xl font-semibold mb-2">💼 Mükellef Uygulaması</h3>
          <p className="text-gray-600">Gelir gider, fatura ve müşteri yönetim ekranları burada olacak.</p>
        </Link>
      </div>
    </div>
  );
}
