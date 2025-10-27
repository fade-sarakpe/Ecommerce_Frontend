import { IForgotPasswordSection } from '@/interfaces/component';
import styles from '@/sections/login/login.module.css';

export default function ForgotPasswordSection({ onSwitchView }: IForgotPasswordSection) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSwitchView('otp');
  };

  return (
    <div className={styles.signInContainer}>
      <h2 className={styles.title}>Reset Password</h2>
      <p className={styles.subtitle}>Enter your email to receive a password reset link.</p>
      
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
        
        <button type="submit" className={styles.submitButton}>
          Send Reset Link
        </button>
      </form>
      
      <div className={styles.divider}>or</div>
      
      <p className={styles.switchText}>
        Remember your password?{' '}
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
