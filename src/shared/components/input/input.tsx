import { InputHTMLAttributes, ReactNode } from 'react';

import classNames from 'classnames/bind';

import styles from './input.module.scss';

interface IconProps {
  icon: ReactNode;
  onIconClick?: () => void;
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  iconProps?: IconProps;
}

const cn = classNames.bind(styles);

const Input = ({ label, id, iconProps, ...props }: InputProps) => {
  return (
    <div className={styles.container}>
      {label && <label htmlFor={id}>{label}</label>}
      <div className={styles.input_container}>
        <input
          className={cn(
            styles.input,
            iconProps ? styles.with_icon : styles.without_icon,
          )}
          id={id}
          {...props}
        />
        {iconProps && (
          <span className={styles.icon} onClick={iconProps.onIconClick}>
            {iconProps.icon}
          </span>
        )}
      </div>
    </div>
  );
};

export default Input;
