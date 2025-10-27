'use client';
import { MiddleSection } from './MiddleSection';
import { RightSection } from './RightSection';
import { LeftSection } from './LeftSection';
import { MobileMenu } from './MobileMenu';
import { navigationLinks } from '@/data';
import styles from './Header.module.css';
import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <LeftSection />
        
        <MiddleSection navigationLinks={navigationLinks} />
        
        <RightSection 
          isMobileMenuOpen={isMobileMenuOpen}
          onMobileMenuToggle={toggleMobileMenu}
        />

        <MobileMenu 
          navigationLinks={navigationLinks}
          isOpen={isMobileMenuOpen}
          onClose={closeMobileMenu}
        />
      </div>
    </header>
  );
};