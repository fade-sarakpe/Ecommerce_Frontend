import { ISpinnerProps } from '@/app/interfaces/component';
import styles from './Spinner.module.css';



export default function Spinner({ size = 'medium', className }: ISpinnerProps) {
  return (
    <div className={`${styles.spinnerContainer} ${className || ''}`}>
      <div className={`${styles.spinner} ${styles[size]}`}></div>
    </div>
  );
};

