import { IMiddleSectionProps } from '@/interfaces/component';
import styles from './MiddleSection.module.css';
import Link from 'next/link';


export default function MiddleSection ({ navigationLinks }: IMiddleSectionProps) {
  return (
    <nav className={styles.middleSection}>
      <ul className={styles.navList}>
        {navigationLinks.map((link) => (
          <li key={link.href} className={styles.navItem}>
            <Link href={link.href} className={styles.navLink}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
