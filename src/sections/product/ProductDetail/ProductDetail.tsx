'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FaStar, FaStarHalfAlt, FaRegStar, FaMinus, FaPlus, FaShoppingCart, FaHeart, FaShare } from 'react-icons/fa';
import { IProduct } from '@/interfaces/home';
import styles from './ProductDetail.module.css';

interface ProductDetailProps {
  product: IProduct;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  // For demo purposes, we'll create multiple images from the same source
  const productImages = [
    product.image,
    product.image,
    product.image,
    product.image,
  ];

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} className={styles.starFilled} />);
    }

    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className={styles.starFilled} />);
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} className={styles.starEmpty} />);
    }

    return stars;
  };

  const handleQuantityChange = (change: number) => {
    setQuantity(prev => Math.max(1, prev + change));
  };

  const handleAddToCart = () => {
    // Add to cart logic here
    console.log(`Added ${quantity} of ${product.name} to cart`);
  };

  const calculateSavings = () => {
    if (product.originalPrice) {
      return product.originalPrice - product.price;
    }
    return 0;
  };

  const calculateSavingsPercentage = () => {
    if (product.originalPrice) {
      return Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
    }
    return 0;
  };

  return (
    <div className={styles.container}>
      <div className={styles.productDetail}>
        {/* Image Gallery */}
        <div className={styles.imageSection}>
          <div className={styles.mainImage}>
            <Image
              src={productImages[selectedImage]}
              alt={product.name}
              width={500}
              height={500}
              className={styles.productImage}
            />
          </div>
          
          <div className={styles.thumbnails}>
            {productImages.map((image, index) => (
              <button
                key={index}
                className={`${styles.thumbnail} ${selectedImage === index ? styles.activeThumbnail : ''}`}
                onClick={() => setSelectedImage(index)}
              >
                <Image
                  src={image}
                  alt={`${product.name} view ${index + 1}`}
                  width={80}
                  height={80}
                  className={styles.thumbnailImage}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Information */}
        <div className={styles.infoSection}>
          <div className={styles.breadcrumb}>
            <span>Home</span> / <span>Products</span> / <span>{product.category}</span> / <span>{product.name}</span>
          </div>

          <h1 className={styles.productName}>{product.name}</h1>

          <div className={styles.ratingSection}>
            <div className={styles.stars}>
              {renderStars(product.rating)}
            </div>
            <span className={styles.ratingText}>
              {product.rating} ({product.reviewCount} reviews)
            </span>
          </div>

          <div className={styles.priceSection}>
            <span className={styles.currentPrice}>${product.price}</span>
            {product.originalPrice && (
              <>
                <span className={styles.originalPrice}>${product.originalPrice}</span>
                <span className={styles.savings}>
                  Save ${calculateSavings().toFixed(2)} ({calculateSavingsPercentage()}%)
                </span>
              </>
            )}
          </div>

          {product.category && (
            <div className={styles.categorySection}>
              <span className={styles.categoryLabel}>Category:</span>
              <span className={styles.categoryBadge}>{product.category}</span>
            </div>
          )}

          <div className={styles.description}>
            <h3>Product Description</h3>
            <p>
              {product.description || `Experience premium quality with our ${product.name}. This exceptional product combines cutting-edge technology with elegant design to deliver outstanding performance.`}
            </p>
            {product.features && product.features.length > 0 ? (
              <ul>
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            ) : (
              <ul>
                <li>Premium build quality and materials</li>
                <li>Advanced features for enhanced performance</li>
                <li>Ergonomic design for comfort</li>
                <li>Comprehensive warranty coverage</li>
                <li>24/7 customer support</li>
              </ul>
            )}
          </div>

          <div className={styles.actionsSection}>
            <div className={styles.quantitySelector}>
              <label htmlFor="quantity">Quantity:</label>
              <div className={styles.quantityControls}>
                <button
                  onClick={() => handleQuantityChange(-1)}
                  className={styles.quantityButton}
                  disabled={quantity <= 1}
                >
                  <FaMinus />
                </button>
                <span className={styles.quantityDisplay}>{quantity}</span>
                <button
                  onClick={() => handleQuantityChange(1)}
                  className={styles.quantityButton}
                >
                  <FaPlus />
                </button>
              </div>
            </div>

            <div className={styles.buttonGroup}>
              <button
                onClick={handleAddToCart}
                className={styles.addToCartButton}
              >
                <FaShoppingCart />
                Add to Cart
              </button>
              
              <button className={styles.wishlistButton}>
                <FaHeart />
              </button>
              
              <button className={styles.shareButton}>
                <FaShare />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;