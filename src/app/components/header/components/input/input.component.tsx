import { FC, useEffect, useRef, useState } from 'react';

import MagnifyIcon from '../../../../../assets/icons/magnify.svg';
import classNames from 'classnames';
import styles from './input.module.scss';
import { InputProps } from './input.types';

const Input: FC<InputProps> = ({ onChange, placeholder, type, className, ...inputProps }) => {
  const ref = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState<string>('');

  /**
   * TODO: Add useDebounce.
   */
  useEffect(() => {
    onChange(value);
  }, [value]);

  /**
   * Focus input when clicked on container.
   */
  const clickContainerHandler = () => ref.current?.focus();

  return (
    <div className={styles.wrapper} onClick={clickContainerHandler}>
      <img src={MagnifyIcon} className={styles.icon} />
      <input
        ref={ref}
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={({ currentTarget: { value } }) => setValue(value)}
        className={classNames(styles.input, className)}
        {...inputProps}
      />
    </div>
  );
};

export { Input };
