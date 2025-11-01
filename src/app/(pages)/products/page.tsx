import { Suspense } from 'react';
import { Spinner } from '@/components/ui';
import { ProductsSection } from '@/sections/products';

export default function ProductsPage() {
  return (
    <Suspense fallback={<Spinner />}>
      <ProductsSection />
    </Suspense>
  );
}