'use client';

import { useRouter } from 'next/navigation';

import ArrowIcon from '@/assets/icons/arrow.svg';

import styles from './header.module.scss';

interface HeaderProps {
  label: string;
}

export default function Header({ label }: HeaderProps) {
  const router = useRouter();

  return (
    <nav className={styles.container}>
      <button className={styles.header} onClick={() => router.back()}>
        <ArrowIcon fill="var(--black)" />
        <span>{label}</span>
      </button>
    </nav>
  );
}
