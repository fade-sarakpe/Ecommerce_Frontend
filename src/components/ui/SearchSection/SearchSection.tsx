'use client';
import { categoryFilters, sortOptions, quickCategories } from '@/data/home';
import { ISearchSectionProps } from '@/interfaces/component';
import { FiSearch, FiFilter, FiX } from 'react-icons/fi';
import { useState } from 'react';
import styles from './SearchSection.module.css';

function SearchSection({ 
  onSearch, 
  onFilterChange, 
  showQuickCategories = true,
  className = ''
}: ISearchSectionProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: '0-25', label: 'Under $25' },
    { value: '25-50', label: '$25 - $50' },
    { value: '50-100', label: '$50 - $100' },
    { value: '100+', label: '$100+' },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(searchQuery);
  };

  const handleFilterChange = (newFilters: Partial<{
    category: string;
    priceRange: string;
    sortBy: string;
  }>) => {
    const updatedFilters = {
      category: newFilters.category ?? selectedCategory,
      priceRange: newFilters.priceRange ?? priceRange,
      sortBy: newFilters.sortBy ?? sortBy,
    };
    
    if (newFilters.category !== undefined) setSelectedCategory(newFilters.category);
    if (newFilters.priceRange !== undefined) setPriceRange(newFilters.priceRange);
    if (newFilters.sortBy !== undefined) setSortBy(newFilters.sortBy);
    
    onFilterChange?.(updatedFilters);
  };

  const clearFilters = () => {
    const defaultFilters = {
      category: 'all',
      priceRange: 'all',
      sortBy: 'popular'
    };
    
    setSelectedCategory(defaultFilters.category);
    setPriceRange(defaultFilters.priceRange);
    setSortBy(defaultFilters.sortBy);
    
    onFilterChange?.(defaultFilters);
  };

  return (
    <section className={`${styles.searchSection} ${className}`}>
      <div className={styles.container}>
        {/* Search Bar */}
        <div className={styles.searchContainer}>
          <form onSubmit={handleSearch} className={styles.searchForm}>
            <div className={styles.searchInputWrapper}>
              <FiSearch className={styles.searchIcon} />
              <input
                type="text"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.searchInput}
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className={styles.clearButton}
                >
                  <FiX />
                </button>
              )}
            </div>
            <button type="submit" className={styles.searchButton}>
              Search
            </button>
          </form>

          {/* Filter Toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`${styles.filterToggle} ${showFilters ? styles.active : ''}`}
          >
            <FiFilter />
            Filters
          </button>
        </div>

        {/* Filters Panel */}
        {showFilters && (
          <div className={styles.filtersPanel}>
            <div className={styles.filtersHeader}>
              <h3 className={styles.filtersTitle}>Filter Products</h3>
              <button onClick={clearFilters} className={styles.clearFilters}>
                Clear All
              </button>
            </div>

            <div className={styles.filtersGrid}>
              {/* Category Filter */}
              <div className={styles.filterGroup}>
                <label className={styles.filterLabel}>Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => handleFilterChange({ category: e.target.value })}
                  className={styles.filterSelect}
                >
                  {categoryFilters.map((category) => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Range Filter */}
              <div className={styles.filterGroup}>
                <label className={styles.filterLabel}>Price Range</label>
                <select
                  value={priceRange}
                  onChange={(e) => handleFilterChange({ priceRange: e.target.value })}
                  className={styles.filterSelect}
                >
                  {priceRanges.map((range) => (
                    <option key={range.value} value={range.value}>
                      {range.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort By Filter */}
              <div className={styles.filterGroup}>
                <label className={styles.filterLabel}>Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => handleFilterChange({ sortBy: e.target.value })}
                  className={styles.filterSelect}
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Quick Categories */}
        {showQuickCategories && (
          <div className={styles.quickCategories}>
            <span className={styles.quickCategoriesLabel}>Popular:</span>
            <div className={styles.quickCategoryTags}>
              {quickCategories.slice(0, 4).map((category) => (
                <button
                  key={category}
                  onClick={() => handleFilterChange({ category: category.toLowerCase() })}
                  className={`${styles.quickCategoryTag} ${
                    selectedCategory === category.toLowerCase() ? styles.active : ''
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SearchSection;