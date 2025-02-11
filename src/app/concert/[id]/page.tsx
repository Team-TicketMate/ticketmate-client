import AppBarSetter from '@/shared/components/header/app-bar/app-bar-setter';

import styles from './page.module.scss';

export default function Page() {
  return (
    <div className={styles.container}>
      <AppBarSetter title="콘서트 상세 페이지" />
    </div>
  );
}
