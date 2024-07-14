// src/app/complaint/page.tsx
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const ComplaintPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/immersive/index.html');
  }, [router]);

  return null;
};

export default ComplaintPage;
