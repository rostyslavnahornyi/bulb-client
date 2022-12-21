import { FC } from 'react';
import { Button, Review } from '../../../../components';
import styles from './reviews.module.scss';
import { ReviewsProps } from './reviews.types';

const Reviews: FC<ReviewsProps> = ({ reviews }) => {
  return (
    <div className={styles.wrapper}>
      <h3>Reviews</h3>
      {reviews && reviews.slice(0, 2).map((review, index) => <Review {...review} key={index} />)}
      {reviews && !(reviews?.length >= 0 && reviews?.length < 2) && (
        <div className={styles.footer}>
          <Button size='small' variant='filledGray' text='View more...' />
        </div>
      )}
    </div>
  );
};

export { Reviews };
