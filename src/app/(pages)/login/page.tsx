'use client';

import { Suspense } from 'react';
import { LoginFormSection } from '@/sections/login';
import { Spinner } from '@/components/ui/Spinner';

export default function LoginPage() {
  return (
    <Suspense fallback={<Spinner />}>
      <LoginFormSection />
    </Suspense>
  );
}