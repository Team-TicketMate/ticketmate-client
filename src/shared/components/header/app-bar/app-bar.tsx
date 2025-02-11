'use client';

import { useRouter } from 'next/navigation';

import LeftArrowIcon from '@/assets/icons/left_arrow.svg';
import { useAppBarStore } from '@/shared/components/header/app-bar/use-app-bar-store';

import styles from './app-bar.module.scss';

const AppBar = () => {
  const { title, backURL } = useAppBarStore();
  const router = useRouter();

  const handleBack = () => {
    if (backURL) {
      router.push(backURL);
    } else {
      router.back();
    }
  };

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={handleBack}>
        <span className={styles.icon}>
          <LeftArrowIcon width={16} height={16} fill="var(--gray-5)" />
        </span>
        {title && <span className={styles.title}>{title}</span>}
      </button>
    </div>
  );
};

export default AppBar;
