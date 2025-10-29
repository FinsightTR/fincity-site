 'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { useRouter } from 'next/navigation';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

type Role = 'admin' | 'manager' | 'user';

export default function Protected({
  children,
  requireRole,
}: {
  children: React.ReactNode;
  requireRole?: Role[];
}) {
  const router = useRouter();
  const [ok, setOk] = useState(false);

  useEffect(() => {
    const run = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (error || !data.user) {
        router.replace('/login');
        return;
      }
      if (requireRole?.length) {
        const role = (data.user.user_metadata?.role ?? 'user') as Role;
        if (!requireRole.includes(role)) {
          router.replace('/panel?m=unauthorized');
          return;
        }
      }
      setOk(true);
    };
    run();
  }, [router, requireRole]);

  if (!ok) return null;
  return <>{children}</>;
}
