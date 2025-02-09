import Header from '@/shared/components/header/header';

import styles from './page.module.scss';

export default function Page() {
  return (
    <div className={styles.container}>
      <Header label="콘서트 상세 페이지" />
    </div>
  );
}
