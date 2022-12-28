import React from 'react';
import styles from './details.module.scss';
import AvatarExample from '../../../../../../../assets/imgs/participant_avatar.jpg';

/**
 * Renders Description
 */
const Details = (props: any) => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>Additional details</span>

      <div className={styles.content}>
        <div className={styles.row}>
          <span className={styles.name}>Customer</span>
          <div className={styles.customer}>
            <img src={AvatarExample} />
            <span>John Walker</span>
          </div>
        </div>
        <div className={styles.row}>
          <span className={styles.name}>Published</span>
          <span className={styles.name}>25.10.2022</span>
        </div>
        <div className={styles.row}>
          <span className={styles.name}>Date</span>
          <span className={styles.name}>Today</span>
        </div>
        </div>
        <div className={styles.row}>
          <span className={styles.name}>Payment</span>
          <span className={styles.name}>${props.price}</span>
        </div>
      </div>
  );
};

export { Details };
