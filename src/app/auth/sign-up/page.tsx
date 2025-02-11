import SignUpForm from '@/app/auth/sign-up/_components/sign-up-form';
import AppBarSetter from '@/shared/components/header/app-bar/app-bar-setter';

import styles from './page.module.scss';

export default function Page() {
  return (
    <>
      <AppBarSetter title="회원가입" />

      <div className={styles.container}>
        <div className={styles.form}>
          <SignUpForm />
        </div>
      </div>
    </>
  );
}
