import Link from 'next/link';
import Image from 'next/image';
import { blackLogo } from '@/assets/images';
import styles from './LeftSection.module.css';

export default function LeftSection() {
  return (
    <div className={styles.leftSection}>
      <Link href="/" className={styles.logoLink}>
        <div className={styles.logo}>
          <Image src={blackLogo} height={50} width={50} alt='logo'/>
        </div>
      </Link>
    </div>
  );
};
