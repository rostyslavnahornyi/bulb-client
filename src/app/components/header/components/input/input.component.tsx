import { ChangeEvent, FC, useEffect, useRef, useState } from 'react';

import Icon from '@mdi/react';
import classNames from 'classnames';
import { mdiMagnify } from '@mdi/js';
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
      <Icon path={mdiMagnify} className={styles.icon} />
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
