import { FC } from 'react';
import { SelectProps } from './select.types';
import styles from './select.module.scss';
import DownArrowIcon from '../../../../../assets/icons/down-arrow.svg';

const Select: FC<SelectProps> = ({ label, defaultValue, options, onSelect }) => {
  return (
    <div className={styles.select}>
      <span>{label}</span>
      <select
        onChange={e => onSelect(e.target.value)}
        defaultValue={defaultValue}
        className={styles.select}>
        {options.map(({ label, value }, index) => (
          <option key={index} value={value}>
            {label}
          </option>
        ))}
      </select>
      <img src={DownArrowIcon} className={styles.icon} />
    </div>
  );
};

export { Select };
