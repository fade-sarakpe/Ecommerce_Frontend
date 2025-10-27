'use client';
import { ForgotPasswordSection, OTPSection, SignInSection, SignUpSection, WavesSection } from '@/sections/login';
import { useSearchParams, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import styles from './LoginFormSection.module.css';

export default function LoginFormSection() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const view = searchParams.get('view') || 'signin';
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentView, setCurrentView] = useState(view);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const hasSeenLoginAnimation = sessionStorage.getItem('hasSeenLoginAnimation');
    if (!hasSeenLoginAnimation) {
      setShouldAnimate(true);
      sessionStorage.setItem('hasSeenLoginAnimation', 'true');
    }
  }, []);

  useEffect(() => {
    if (view !== currentView) {
      setIsTransitioning(true);
      const timer = setTimeout(() => {
        setCurrentView(view);
        setIsTransitioning(false);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [view, currentView]);

  const switchView = (newView: string) => {
    router.push(`/login?view=${newView}`);
  };

  const renderFormSection = () => {
    switch (currentView) {
      case 'signup':
        return <SignUpSection onSwitchView={switchView} />;
      case 'forgot':
        return <ForgotPasswordSection onSwitchView={switchView} />;
      case 'otp':
        return <OTPSection onSwitchView={switchView} />;
      default:
        return <SignInSection onSwitchView={switchView} />;
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={`${styles.wavesSection} ${shouldAnimate ? styles.sessionAnimate : ''}`}>
        <WavesSection />
      </div>
      <div className={`${styles.formSection} ${shouldAnimate ? styles.sessionAnimate : ''}`}>
        <div className={`${styles.formWrapper} ${isTransitioning ? styles.entering : ''}`}>
          {renderFormSection()}
        </div>
      </div>
    </div>
  );
}
