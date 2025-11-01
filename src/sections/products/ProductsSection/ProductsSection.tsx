'use client';
import { useState, useMemo } from 'react';
import { SearchSection } from '@/components/ui';
import { allProducts } from '@/data/products';
import { FiHeart, FiShoppingCart, FiEye } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';
import styles from './ProductsSection.module.css';
import Image from 'next/image';

function ProductsSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    category: 'all',
    priceRange: 'all',
    sortBy: 'popular'
  });

  // Filter and sort products based on search and filters
  const filteredProducts = useMemo(() => {
    let filtered = [...allProducts];

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Category filter
    if (filters.category !== 'all') {
      // Simple category matching based on product names
      const categoryKeywords: { [key: string]: string[] } = {
        electronics: ['headphones', 'watch', 'camera', 'speaker', 'keyboard', 'webcam', 'mouse', 'hub', 'thermostat', 'purifier', 'vacuum', 'lamp', 'diffuser'],
        furniture: ['chair', 'desk', 'bookshelf', 'table'],
        clothing: ['shirt', 'jacket', 'shoes', 'coat', 'sneakers', 'sweater'],
        'home-garden': ['thermostat', 'purifier', 'vacuum', 'tool', 'lamp', 'diffuser'],
        'sports-outdoors': ['yoga', 'camping', 'bottle', 'resistance'],
        books: ['javascript', 'design', 'guide', 'book']
      };

      const keywords = categoryKeywords[filters.category] || [];
      filtered = filtered.filter(product =>
        keywords.some(keyword => product.name.toLowerCase().includes(keyword))
      );
    }

    // Price range filter
    if (filters.priceRange !== 'all') {
      const [min, max] = filters.priceRange.split('-').map(p => p === '+' ? Infinity : parseFloat(p));
      filtered = filtered.filter(product => {
        if (max === undefined) return product.price >= min;
        return product.price >= min && product.price <= max;
      });
    }

    // Sort products
    switch (filters.sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      case 'popular':
      default:
        filtered.sort((a, b) => b.reviewCount - a.reviewCount);
        break;
    }

    return filtered;
  }, [searchQuery, filters]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleFilterChange = (newFilters: typeof filters) => {
    setFilters(newFilters);
  };

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
    <div className={styles.productsPage}>
      {/* Search Section */}
      <SearchSection
        onSearch={handleSearch}
        onFilterChange={handleFilterChange}
        showQuickCategories={true}
        className={styles.searchSection}
      />

      {/* Products Section */}
      <section className={styles.productsSection}>
        <div className={styles.container}>
          {/* Results Header */}
          <div className={styles.resultsHeader}>
            <h1 className={styles.pageTitle}>
              All Products
              {searchQuery && (
                <span className={styles.searchQuery}> - {searchQuery}</span>
              )}
            </h1>
            <p className={styles.resultsCount}>
              Showing {filteredProducts.length} of {allProducts.length} products
            </p>
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className={styles.productsGrid}>
              {filteredProducts.map((product) => (
                <div key={product.id} className={styles.productCard}>
                  {/* Product Image */}
                  <div className={styles.productImageContainer}>
                    <Image
                      src={product.image}
                      alt={product.name}
                      className={styles.productImage}
                      width={200}
                      height={200}
                    />
                    
                    {/* Category Badge */}
                    {product.category && (
                      <span className={`${styles.badge} ${styles.badgeCustom}`}>
                        {product.category}
                      </span>
                    )}

                    {/* Action Buttons */}
                    <div className={styles.productActions}>
                      <button className={styles.actionButton} title="Quick View">
                        <FiEye />
                      </button>
                      <button className={styles.actionButton} title="Add to Wishlist">
                        <FiHeart />
                      </button>
                      <button className={styles.actionButton} title="Add to Cart">
                        <FiShoppingCart />
                      </button>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className={styles.productInfo}>
                    <h3 className={styles.productName}>{product.name}</h3>
                    
                    {/* Rating */}
                    <div className={styles.productRating}>
                      <div className={styles.stars}>
                        {renderStars(product.rating)}
                      </div>
                      <span className={styles.ratingText}>
                        {product.rating} ({product.reviewCount} reviews)
                      </span>
                    </div>

                    {/* Price */}
                    <div className={styles.productPrice}>
                      <span className={styles.currentPrice}>
                        {formatPrice(product.price)}
                      </span>
                      {product.originalPrice && (
                        <span className={styles.originalPrice}>
                          {formatPrice(product.originalPrice)}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.noResults}>
              <h3>No products found</h3>
              <p>Try adjusting your search or filters to find what you`re looking for.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default ProductsSection;