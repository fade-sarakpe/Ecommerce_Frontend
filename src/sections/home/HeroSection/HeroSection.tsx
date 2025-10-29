import React from 'react';
import Link from 'next/link';
import styles from './HeroSection.module.css';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h1 className={styles.title}>
              Discover Amazing Products
              <span className={styles.highlight}> Just For You</span>
            </h1>
            <p className={styles.subtitle}>
              Explore our curated collection of premium products with unbeatable prices 
              and exceptional quality. Your perfect shopping experience starts here.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/products" className={styles.primaryButton}>
                Shop Now
              </Link>
              <Link href="/categories" className={styles.secondaryButton}>
                Browse Categories
              </Link>
            </div>
          </div>
          <div className={styles.imageContent}>
            <div className={styles.heroImage}>
              <Image 
                src="/test.jpg" 
                alt="Hero - Discover Amazing Products" 
                className={styles.heroImageImg}
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
        
        {/* Featured Stats */}
        <div className={styles.stats}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>10K+</span>
            <span className={styles.statLabel}>Happy Customers</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>500+</span>
            <span className={styles.statLabel}>Products</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>24/7</span>
            <span className={styles.statLabel}>Support</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>99%</span>
            <span className={styles.statLabel}>Satisfaction</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;