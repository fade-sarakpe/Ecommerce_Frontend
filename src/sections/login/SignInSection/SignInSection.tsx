import { ISignInSection } from '@/interfaces/component';
import styles from '@/sections/login/login.module.css';

export default function SignInSection({ onSwitchView }: ISignInSection) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className={styles.signInContainer}>
      <h2 className={styles.title}>Sign In</h2>
      <p className={styles.subtitle}>Welcome back! Please sign in to your account.</p>
      
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="email">Email</label>
          <input
            className={styles.input}
            type="email"
            id="email"
            placeholder="Enter your email"
            required
          />
        </div>
        
        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="password">Password</label>
          <input
            className={styles.input}
            type="password"
            id="password"
            placeholder="Enter your password"
            required
          />
        </div>
        
        <button
          type="button"
          className={styles.forgotLink}
          onClick={() => onSwitchView('forgot')}
        >
          Forgot your password?
        </button>
        
        <button type="submit" className={styles.submitButton}>
          Sign In
        </button>
      </form>
      
      <div className={styles.divider}>or</div>
      
      <p className={styles.switchText}>
        Don&apos;t have an account?{' '}
        <button
          className={styles.switchLink}
          onClick={() => onSwitchView('signup')}
        >
          Sign up
        </button>
      </p>
    </div>
  );
}
