'use client';

import React from 'react';

import classNames from 'classnames/bind';
import { usePathname } from 'next/navigation';

import BottomNavigation from '@/shared/components/navigation/bottom-navigation/bottom-navigation';

import styles from './responsive-root-layout.module.scss';

const cn = classNames.bind(styles);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  // bottom navigation 숨길 경로
  const hiddenRoutes = ['/auth', '/404'];

  const isShowBottomNav = !hiddenRoutes.some((route) =>
    pathname.includes(route),
  );

  return (
    <div className={styles.container}>
      <div
        className={cn(
          styles.content,
          isShowBottomNav ? styles.with_nav : styles.without_nav,
        )}
      >
        {children}
      </div>
      {isShowBottomNav && <BottomNavigation />}
    </div>
  );
}
