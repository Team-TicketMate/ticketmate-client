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
          <HomeIcon fill="var(--gray-4)" width={24} height={24} />
          <Link href="/">홈</Link>
        </li>
        <li className={styles.nav_item}>
          <ChatIcon fill="var(--gray-4)" width={24} height={24} />
          <Link href="/">채팅</Link>
        </li>
        <li className={styles.nav_item}>
          <MyIcon fill="var(--gray-4)" width={24} height={24} />
          <Link href="/">마이</Link>
        </li>
      </ul>
    </nav>
  );
}
