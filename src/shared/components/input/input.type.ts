import type { InputHTMLAttributes, ReactNode } from 'react';

interface IconProps {
  icon: ReactNode;
  onIconClick?: () => void;
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  iconProps?: IconProps;
}

export type { InputProps, IconProps };
