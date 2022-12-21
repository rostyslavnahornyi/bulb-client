import { FC } from 'react';
import { ReviewProps } from './review.types';
import styles from './review.module.scss';
import PersonIcon from '../../../assets/imgs/person.png';
import StarIcon from '../../../assets/icons/star.svg';
import { getRatingColor } from '../../utils';

const renderStars: FC<{ stars: number }> = ({ stars }) => {
  const fakeArray: number[] = Array.from(Array(Math.round(stars)).keys());

  return (
    <>
      {fakeArray.map(index => (
        <img src={StarIcon} alt="star" key={index}></img>
      ))}
    </>
  );
};

const Review: FC<ReviewProps> = ({ avatar, fullname, authorRating, publishedDate, content }) => (
  <div className={styles.wrapper}>
    <div className={styles.header}>
      <div className={styles.avatar}>{avatar ?? <img src={PersonIcon} alt="person-image" />}</div>
      <div className={styles.details}>
        <div className={styles.row}>
          <span className={styles.fullName}>{fullname}</span>
          <div className={styles.rating}>
            <span style={{ color: getRatingColor(authorRating) }}>{authorRating}</span>
            <div className={styles.stars}>{renderStars({ stars: authorRating })}</div>
          </div>
        </div>
        <div className={styles.row}>
          <span className={styles.publishedDate}>{publishedDate.toLocaleString()}</span>
        </div>
      </div>
    </div>
    <span className={styles.separatorLine} />
    <button tabIndex={0} className={styles.content}>
      {content}
    </button>
  </div>
);

export { Review };
