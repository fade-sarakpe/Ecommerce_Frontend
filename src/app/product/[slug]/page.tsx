import { notFound } from 'next/navigation';
import { allProducts } from '@/data/products/products';
import { IProduct } from '@/interfaces/home';
import ProductDetail from '@/sections/product/ProductDetail/ProductDetail';

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Helper function to find product by slug
function findProductBySlug(slug: string): IProduct | undefined {
  return allProducts.find(product => product.slug === slug);
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = findProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return <ProductDetail product={product} />;
}

// Generate metadata for SEO
export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = findProductBySlug(slug);

  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  return {
    title: `${product.name} - E-Commerce Store`,
    description: `Buy ${product.name} for $${product.price}. ${product.rating} stars with ${product.reviewCount} reviews.`,
  };
}