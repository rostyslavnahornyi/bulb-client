import { FC } from 'react';
import AvatarIcon from '../../../../../assets/icons/user.svg';
import { useAppContext } from '../../../../context';
import styles from './profile-info.module.scss';
import { ProfileInfoProps } from './profile-info.types';
import StarIcon from '../../../../../assets/icons/star.svg';
import { getRatingColor } from '../../../../utils';
import { Button } from '../../../../components';

/**
 * TODO: move to utils
 */
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

const ProfileInfo: FC<ProfileInfoProps> = ({ avatar, stats, user }) => {
  const { auth } = useAppContext();

  return (
    <div className={styles.wrapper}>
      <div className={styles.avatar}>{avatar ?? <img src={AvatarIcon} alt="avatar-icon" />}</div>
      <div className={styles.description}>
        <span>
          {user.firstName} {user.lastName}
        </span>
        <span>{user.position}</span>
      </div>
      <Button size='small' variant='filledGray' text='Edit profile' className={styles.buttonControl} />
      <div className={styles.stats}>
        <div className={styles.data}>
          <div className={styles.col}>
            <span className={styles.value}>{stats.completedTasks}</span>
            <span className={styles.label}>Completed</span>
          </div>
          <div className={styles.col}>
            <span className={styles.value}>{stats.contacts}</span>
            <span className={styles.label}>Contacts</span>
          </div>
          <div className={styles.col}>
            <span className={styles.value}>{stats.reviews}</span>
            <span className={styles.label}>Reviews</span>
          </div>
        </div>
        <div className={styles.rating}>
          <span style={{ color: getRatingColor(stats.rating) }}>{stats.rating}</span>
          <div className={styles.stars}>{renderStars({ stars: stats.rating })}</div>
        </div>
      </div>
    </div>
  );
};

export { ProfileInfo };
