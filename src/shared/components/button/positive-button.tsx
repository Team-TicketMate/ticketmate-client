import styles from './positive-button.module.scss';

interface PositiveButtonProps {
  size?: 'large' | 'medium' | 'small';
  label: string;
}

export default function PositiveButton({
  size = 'large',
  label,
}: PositiveButtonProps) {
  return (
    <button className={`${styles.button} ${styles[size]}`}>
      <span>{label}</span>
    </button>
  );
}
