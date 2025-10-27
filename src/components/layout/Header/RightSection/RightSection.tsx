import { IRightSectionProps } from '@/interfaces/component';
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { FiUser, FiMenu, FiX } from 'react-icons/fi';
import styles from './RightSection.module.css';

export default function RightSection({ 
  isDarkMode = false, 
  onThemeToggle,
  isMobileMenuOpen,
  onMobileMenuToggle
}: IRightSectionProps) {
  return (
    <div className={styles.rightSection}>
       <button className={styles.profileButton} aria-label="Shopping cart">
        <PiShoppingCartSimpleBold className={styles.cartIcon} />
      </button>
      
      <button
        className={styles.themeToggle}
        onClick={onThemeToggle}
        aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {isDarkMode ? (
          <MdLightMode className={styles.themeIcon} />
        ) : (
          <MdDarkMode className={styles.themeIcon} />
        )}
      </button>
      
      <button className={styles.profileButton} aria-label="User profile">
        <FiUser className={styles.profileIcon} />
      </button>

      {/* Mobile Menu Toggle Button */}
      <button
        className={styles.mobileMenuToggle}
        onClick={onMobileMenuToggle}
        aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
      >
        {isMobileMenuOpen ? (
          <FiX className={styles.menuIcon} />
        ) : (
          <FiMenu className={styles.menuIcon} />
        )}
      </button>
    </div>
  );
};