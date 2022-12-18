import { BaseHTMLAttributes, FC } from 'react';

import PreloaderImg from '../../../assets/imgs/preloader.png';
import classNames from 'classnames';
import styles from './preloader.module.scss';

const Preloader: FC<BaseHTMLAttributes<HTMLDivElement>> = ({ className }) => (
  <div className={classNames(styles.wrapper, className)}>
    <img src={PreloaderImg} alt="preloader" />
  </div>
);

export { Preloader };
