import classNames from 'classnames';
import { FC } from 'react';
import styles from './button.module.scss';
import { ButtonProps } from './button.types';

const Button: FC<ButtonProps> = ({ size, variant, disabled, text, onChange, className }) => {
  console.log(styles, variant);
  return (
    <button
      className={classNames(styles.wrapper, styles[size], styles[variant], className)}
      disabled={disabled}
      onChange={onChange}>
      {text}
    </button>
  );
};

export { Button };
