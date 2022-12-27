import classNames from 'classnames';
import { FC } from 'react';
import styles from './button.module.scss';
import { ButtonProps } from './button.types';

const Button: FC<ButtonProps> = ({ size, style, variant, disabled, text, onClick, className }) => {
  return (
    <button
      className={classNames(styles.wrapper, styles[size], styles[variant], className)}
      disabled={disabled}
      style={style}
      onClick={onClick}>
      {text}
    </button>
  );
};

export { Button };
