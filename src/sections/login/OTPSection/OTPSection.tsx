import { IOTPSection } from '@/interfaces/component';
import styles from '@/sections/login/login.module.css';
import { useState } from 'react';

export default function OTPSection({ onSwitchView }: IOTPSection) {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const otpValue = otp.join('');
    console.log('OTP submitted:', otpValue);
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length <= 1 && /^[0-9]*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      
      // Auto-focus next input
      if (value && index < 5) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      prevInput?.focus();
    }
  };

  const handleResendOtp = () => {
    console.log('Resending OTP...');
  };

  return (
    <div className={styles.signInContainer}>
      <h2 className={styles.title}>Enter Verification Code</h2>
      <p className={styles.subtitle}>We&apos;ve sent a 6-digit code to your email address.</p>
      
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.otpContainer}>
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              className={styles.otpInput}
              type="text"
              value={digit}
              onChange={(e) => handleOtpChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              maxLength={1}
              autoComplete="off"
            />
          ))}
        </div>
        
        <button type="submit" className={styles.submitButton}>
          Verify Code
        </button>
      </form>
      
      <div className={styles.resendContainer}>
        <p className={styles.resendText}>
          Didn&apos;t receive the code?{' '}
          <button
            type="button"
            className={styles.switchLink}
            onClick={handleResendOtp}
          >
            Resend
          </button>
        </p>
      </div>
      
      <div className={styles.divider}>or</div>
      
      <p className={styles.switchText}>
        Back to{' '}
        <button
          className={styles.switchLink}
          onClick={() => onSwitchView('forgot')}
        >
          Reset Password
        </button>
      </p>
    </div>
  );
}