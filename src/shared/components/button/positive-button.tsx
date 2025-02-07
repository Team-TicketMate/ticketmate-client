import styles from './positive-button.module.scss';

interface PositiveButtonProps {
  size?: 'large' | 'medium' | 'small'; // 버튼 크기 props 추가
}

export default function PositiveButton({
  size = 'large',
}: PositiveButtonProps) {
  return (
    <button className={`${styles.button} ${styles[size]}`}>
      <span>로그인</span>
    </button>
  );
}
