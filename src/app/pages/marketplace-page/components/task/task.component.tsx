import Icon from '@mdi/react';
import React, { FC } from 'react';
import styles from './task.module.scss';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import { TaskProps } from './task.types';
import CalendarIcon from '../../../../../assets/icons/calendar.svg';
import LocationIcon from '../../../../../assets/icons/location.svg';
import ParticipantIcon from '../../../../../assets/icons/participant.svg';
import TimeIcon from '../../../../../assets/icons/time.svg';

/**
 * type: "today" | "tomorrow" | "after"
 *
 */
const Task: FC<TaskProps> = ({
  id,
  price,
  title,
  participants,
  tag,
  creationDate,
  author,
  date,
  location,
  locationEnd,
  locationStart,
  time,
  timeEnd,
  timeStart,
}) => {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <div className={styles.leftBorder}></div>

      <div className={styles.right}>
        <div className={styles.main}>
          <div className={styles.header}>
            <span className={styles.title} onClick={() => navigate(`/tasks/${id}`)}>
              {title}
            </span>
            <div className={styles.price}>{price}$</div>
          </div>
          <div className={styles.tag}>{tag}</div>
          <div className={styles.info}>
            <div className={styles.participants}>
              <img src={ParticipantIcon} className={styles.icon} />
              <span className={styles.span}>{participants} participants</span>
            </div>
            <div className={styles.date}>
              <img src={TimeIcon} className={styles.icon} />
              <span className={styles.span}>{date}</span>
            </div>
          </div>
        </div>

        <div className={styles.desc}>
          <div className={styles.left}>
            {locationStart && (
              <div className={styles.cond}>
                <img src={LocationIcon} className={styles.icon} />
                <span>Start: {locationStart}</span>
              </div>
            )}

            {locationEnd && (
              <div className={styles.cond}>
                <img src={LocationIcon} className={styles.icon} />
                <span>End: {locationEnd}</span>
              </div>
            )}

            {location && (
              <div className={styles.cond}>
                <img src={LocationIcon} className={styles.icon} />
                <a
                  target={'_blank'}
                  rel="noopener noreferrer"
                  href={`https://www.google.com/maps/search/${location}`}>
                  Location: {location}
                </a>
              </div>
            )}

            {timeStart && (
              <div className={styles.cond}>
                <img src={TimeIcon} className={styles.icon} />
                <span>End: {timeStart}</span>
              </div>
            )}
            {timeEnd && (
              <div className={styles.cond}>
                <img src={TimeIcon} className={styles.icon} />
                <span>End: {timeEnd}</span>
              </div>
            )}

            {time && (
              <div className={styles.cond}>
                <img src={TimeIcon} className={styles.icon} />
                <span>Time: {time}</span>
              </div>
            )}
          </div>

          <div className={styles.rightAuthor}>
            <div className={styles.creationDate}>
              <span>{creationDate}</span>
              <img src={CalendarIcon} className={styles.icon} />
            </div>
            <span className={styles.author}>{author}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Task };
