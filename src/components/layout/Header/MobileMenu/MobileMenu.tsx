import { IMobileMenuProps } from '@/interfaces/component';
import styles from './MobileMenu.module.css';
import Link from 'next/link';

export default function MobileMenu({ navigationLinks, isOpen, onClose }: IMobileMenuProps) {
  return (
    <nav className={`${styles.mobileNav} ${isOpen ? styles.mobileNavOpen : ''}`}>
      <ul className={styles.mobileNavList}>
        {navigationLinks.map((link) => (
          <li key={link.href} className={styles.mobileNavItem}>
            <Link 
              href={link.href} 
              className={styles.mobileNavLink}
              onClick={onClose}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
