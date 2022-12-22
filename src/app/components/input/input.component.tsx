import classNames from 'classnames';
import { FC } from 'react';
import styles from './input.module.scss';
import { InputProps } from './input.types';

const Input: FC<InputProps> = ({
  onChange,
  label,
  tailingLabel,
  tailingIcon,
  innerLabel,
  iconLabel,
  variant = 'dark',
  placeholder,
  value,
  type,
  style
}) => (
  <div className={classNames(styles.wrapper, styles[variant])} style={style}>
    <div className={styles.header}>
      <div className={styles.label}>
        <div className={styles.icon}>{iconLabel}</div>
        <span className={styles.value}>{label}</span>
      </div>
      <span className={styles.tailingLabel}>{tailingLabel}</span>
    </div>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={event => onChange(event.target.value)}
    />
  </div>
);

export { Input };
