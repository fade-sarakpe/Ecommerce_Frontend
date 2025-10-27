import { ISignUpSection } from '@/app/interfaces/component';
import styles from '@/sections/login/login.module.css';

export default function SignUpSection({ onSwitchView }: ISignUpSection) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className={styles.signInContainer}>
      <h2 className={styles.title}>Sign Up</h2>
      <p className={styles.subtitle}>Create your account to get started.</p>
      
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="fullName">Full Name</label>
          <input
            className={styles.input}
            type="text"
            id="fullName"
            placeholder="Enter your full name"
            required
          />
        </div>
        
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
            placeholder="Create a password"
            required
          />
        </div>
        
        <button type="submit" className={styles.submitButton}>
          Sign Up
        </button>
      </form>
      
      <div className={styles.divider}>or</div>
      
      <p className={styles.switchText}>
        Already have an account?{' '}
        <button
          className={styles.switchLink}
          onClick={() => onSwitchView('signin')}
        >
          Sign in
        </button>
      </p>
    </div>
  );
}
