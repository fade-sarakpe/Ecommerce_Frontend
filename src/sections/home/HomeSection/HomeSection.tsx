import React from 'react';
import { HeroSection, SearchSection, FeaturedProducts, ProductCategories } from '@/sections/home';
import styles from './HomeSection.module.css';

const HomeSection: React.FC = () => {
  return (
    <main className={styles.homeSection}>
      {/* Hero Section - Main banner with call-to-action */}
      <HeroSection />
      
      {/* Search & Filters Section - Product search and filtering */}
      <SearchSection />
      
      {/* Featured Products Section - Highlighted products */}
      <FeaturedProducts />
      
      {/* Product Categories Section - Browse by category */}
      <ProductCategories />
    </main>
  );
};

export default HomeSection;