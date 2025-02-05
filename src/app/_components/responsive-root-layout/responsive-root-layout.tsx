'use client';

import React from 'react';

import { usePathname } from 'next/navigation';

import BottomNavigation from '@/shared/components/navigation/bottom-navigation/bottom-navigation';

import styles from './responsive-root-layout.module.scss';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  // bottom navigation 숨길 경로
  const hiddenRoutes = ['/auth', '/404'];

  const isShowBottomNav = !hiddenRoutes.includes(pathname);

  return (
    <div className={styles.container}>
      {children}
      {isShowBottomNav && <BottomNavigation />}
    </div>
  );
}
