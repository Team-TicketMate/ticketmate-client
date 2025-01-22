import React from 'react';

import localFont from 'next/font/local';

import type { Metadata } from 'next';

import '@/styles/base/_index.scss';

const notoSansKR = localFont({
  src: '../assets/fonts/NotoSansKR-VariableFont.ttf',
  variable: '--font-noto-sans-kr',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: '티켓메이트',
  description:
    '티켓메이트는 공연, 스포츠 경기 등 각종 이벤트의 티켓을 원하는 시간에 대신 예매해줄 메이트를 쉽게 찾아 연결해주는 대리 티켓팅 플랫폼입니다. 신속하고 신뢰할 수 있는 서비스로 효율적인 티켓팅 경험을 제공합니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${notoSansKR.variable}`}>{children}</body>
    </html>
  );
}
