import Link from 'next/link';

import ChatIcon from '@/assets/icons/chat.svg';
import HomeIcon from '@/assets/icons/home.svg';
import MyIcon from '@/assets/icons/my.svg';

import styles from './bottom-navigation.module.scss';

export default function BottomNavigation() {
  return (
    <nav className={styles.container}>
      <ul>
        <li className={styles.nav_item}>
          <Link href="/" className={styles.nav_link}>
            <HomeIcon fill="var(--gray-4)" width={28} height={28} />
            <span>홈</span>
          </Link>
        </li>
        <li className={styles.nav_item}>
          <Link href="/" className={styles.nav_link}>
            <ChatIcon fill="var(--gray-4)" width={28} height={28} />
            <span>채팅</span>
          </Link>
        </li>
        <li className={styles.nav_item}>
          <Link href="/" className={styles.nav_link}>
            <MyIcon fill="var(--gray-4)" width={28} height={28} />
            <span>마이</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
