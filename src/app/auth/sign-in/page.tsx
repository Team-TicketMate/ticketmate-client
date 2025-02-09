import Link from 'next/link';

import SignInForm from '@/app/auth/sign-in/_components/sign-in-form/sign-in-form';
import GoogleIcon from '@/assets/icons/google.svg';

import styles from './page.module.scss';

export default function Page() {
  return (
    <div className={styles.container}>
      <div className={styles.login_container}>
        <span className={styles.title}>로그인</span>

        <div className={styles.form}>
          <SignInForm />
        </div>

        <div className={styles.link_container}>
          <span className={styles.link_text}>아직 회원이 아니신가요?</span>
          <Link className={styles.link} href="/auth/sign-up">
            회원가입
          </Link>
        </div>
      </div>

      <div className={styles.social_login}>
        <span>또는</span>

        <button className={styles.google_button}>
          <GoogleIcon />
        </button>
      </div>
    </div>
  );
}
