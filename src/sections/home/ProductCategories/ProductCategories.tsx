'use client';
import { useInView } from 'react-intersection-observer';
import { productCategories } from '@/data/home';
import { FiArrowRight } from 'react-icons/fi';
import CountUp from 'react-countup';
import Image from 'next/image';
import styles from './ProductCategories.module.css';

function ProductCategories(){
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const totalProducts = productCategories.reduce((sum, cat) => sum + cat.productCount, 0);

  const formatProductCount = (count: number) => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}k`;
    }
    return count.toString();
  };

  return (
    <section className={styles.productCategories}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Shop by Category</h2>
          <p className={styles.subtitle}>
            Explore our wide range of product categories
          </p>
        </div>

        <div className={styles.categoriesGrid}>
          {productCategories.map((category) => (
            <div
              key={category.id}
              className={styles.categoryCard}
            >
              <div className={styles.categoryImage}>
                <Image
                  src={category.image}
                  alt={category.name}
                  className={styles.image}
                  width={100}
                  height={100}
                />
                <div className={styles.imageOverlay}>
                  <div className={styles.categoryIcon}>
                    {category.icon}
                  </div>
                </div>
              </div>

              <div className={styles.categoryContent}>
                <div className={styles.categoryInfo}>
                  <h3 className={styles.categoryName}>{category.name}</h3>
                  <p className={styles.categoryDescription}>
                    {category.description}
                  </p>
                  <div className={styles.productCount}>
                    {formatProductCount(category.productCount)} products
                  </div>
                </div>

                <button className={styles.exploreButton}>
                  <span>Explore</span>
                  <FiArrowRight className={styles.arrowIcon} />
                </button>
              </div>

              <div className={styles.categoryAccent}></div>
            </div>
          ))}
        </div>

        <div className={styles.footer}>
          <div className={styles.statsContainer} ref={ref}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>
                {inView ? <CountUp 
                  end={totalProducts} 
                  duration={2.5} 
                  formattingFn={(value) => formatProductCount(value)}
                /> : "0"}
              </span>
              <span className={styles.statLabel}>Total Products</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>
                {inView ? <CountUp end={productCategories.length} duration={2} /> : "0"}
              </span>
              <span className={styles.statLabel}>Categories</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>
                {inView ? <CountUp end={50} duration={2.5} /> : "0"}+
              </span>
              <span className={styles.statLabel}>Brands</span>
            </div>
          </div>
          
          <button className={styles.viewAllButton}>
            View All Categories
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;