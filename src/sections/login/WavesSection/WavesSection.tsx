import Image from 'next/image';
import { whiteLogo } from '@/assets/images';
import styles from './WavesSection.module.css';
import React from 'react';

function WavesSection() {
  return (
    <div className={styles.wavesContainer}>
      <div className={styles.brandContent}>
        <Image src={whiteLogo} alt='logo'/>
        <h1 className={styles.brandTitle}>Welcome Back</h1>
        <p className={styles.brandSubtitle}>
          Sign in to access your account and continue your shopping journey
        </p>
      </div>
      
      <div className={styles.decorativeElements}>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
      </div>
      
      <svg 
        className={styles.wavesBackground}
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 1440 320"
      >
        <path 
          className={styles.wavePath}
          fillOpacity="0.1" 
          d="M0,96L24,96C48,96,96,96,144,101.3C192,107,240,117,288,144C336,171,384,213,432,208C480,203,528,149,576,138.7C624,128,672,160,720,181.3C768,203,816,213,864,202.7C912,192,960,160,1008,128C1056,96,1104,96,1152,112C1200,128,1248,160,1296,160C1344,160,1392,128,1416,112L1440,96L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"
        />
      </svg>
    </div>
  );
}

export default React.memo(WavesSection);
