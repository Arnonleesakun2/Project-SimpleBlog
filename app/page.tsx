'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Homecontainer from '@/components/home/Homecontainer';

const Page = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get('category') || '';

  return (
    <Suspense fallback={<div>กำลังโหลด...</div>}>
      <main>
        <Homecontainer category={category} />
      </main>
    </Suspense>
  );
};

export default Page;
