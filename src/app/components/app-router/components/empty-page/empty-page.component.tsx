import { FC } from 'react';
import { Preloader } from '../../../preloader';
import styles from './empty-page.module.scss';

const EmptyPage: FC = () => (
  <div className={styles.wrapper}>
    {/* <h1>404 Page not found</h1> */}
    <Preloader />
  </div>
);

export { EmptyPage };
