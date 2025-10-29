import { FiShoppingCart, FiHeart, FiEye } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';
import { featuredProducts } from '@/data/home';
import Image from 'next/image';
import React from 'react';
import styles from './FeaturedProducts.module.css';

const FeaturedProducts: React.FC = () => {

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const partialStarPercentage = (rating % 1) * 100;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} className={styles.starFilled} />);
    }

    if (partialStarPercentage > 0) {
      stars.push(
        <div key="partial" className={styles.starPartialContainer}>
          <FaStar className={styles.starEmpty} />
          <FaStar 
            className={styles.starPartial} 
            style={{ '--fill-percentage': `${partialStarPercentage}%` } as React.CSSProperties}
          />
        </div>
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaStar key={`empty-${i}`} className={styles.starEmpty} />);
    }

    return stars;
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  return (
    <section className={styles.featuredProducts}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Featured Products</h2>
          <p className={styles.subtitle}>
            Discover our handpicked selection of premium products
          </p>
        </div>

        <div className={styles.productsGrid}>
          {featuredProducts.map((product) => (
            <div key={product.id} className={styles.productCard}>
              <div className={styles.imageContainer}>
                <Image
                  src={product.image}
                  alt={product.name}
                  className={styles.productImage}
                  width={200}
                  height={200}
                />
                <div className={styles.imageOverlay}>
                  <button className={styles.actionButton}>
                    <FiEye />
                  </button>
                  <button className={styles.actionButton}>
                    <FiHeart />
                  </button>
                  <button className={`${styles.actionButton} ${styles.primary}`}>
                    <FiShoppingCart />
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className={styles.productInfo}>
                <h3 className={styles.productName}>{product.name}</h3>
                
                <div className={styles.rating}>
                  <div className={styles.stars}>
                    {renderStars(product.rating)}
                  </div>
                  <span className={styles.ratingText}>
                    {product.rating} ({product.reviewCount} reviews)
                  </span>
                </div>

                <div className={styles.priceContainer}>
                  <span className={styles.currentPrice}>
                    {formatPrice(product.price)}
                  </span>
                  {product.originalPrice && (
                    <span className={styles.originalPrice}>
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                  {product.originalPrice && (
                    <span className={styles.discount}>
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% off
                    </span>
                  )}
                </div>

                <button className={styles.addToCartButton}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.footer}>
          <button className={styles.viewAllButton}>
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;