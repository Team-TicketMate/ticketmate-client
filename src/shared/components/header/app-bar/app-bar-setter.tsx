'use client';

import { useLayoutEffect } from 'react';

import { useAppBarStore } from '@/shared/components/header/app-bar/use-app-bar-store';

interface AppBarSetterProps {
  title: string;
  backURL?: string | null;
}

const AppBarSetter = ({ title, backURL }: AppBarSetterProps) => {
  const { setTitle, setbackURL } = useAppBarStore();

  useLayoutEffect(() => {
    setTitle(title);
    setbackURL(backURL ?? null);
  }, [title, backURL, setTitle, setbackURL]);

  return null;
};

export default AppBarSetter;
