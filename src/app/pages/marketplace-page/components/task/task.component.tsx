import React, { FC } from 'react';

import CalendarIcon from '../../../../../assets/icons/calendar.svg';
import LocationIcon from '../../../../../assets/icons/location.svg';
import ParticipantIcon from '../../../../../assets/icons/participant.svg';

import TimeIcon from '../../../../../assets/icons/time.svg';
import styles from './task.module.scss';
import { useNavigate } from 'react-router-dom';
import { Task as TaskProps } from '../../marketplace-page.component';

const tags = ['Common', 'IT', 'Marketing', 'Designer', 'Cleaning'];

const Task: FC<TaskProps> = ({
  id,
  price,
  creatorId,
  dateClosed,
  dateCreated,
  dateUpdated,
  endDate,
  name,
  taskStatus,
}) => {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <div className={styles.leftBorder}></div>

      <div className={styles.content}>
        <div className={styles.main}>
          <div className={styles.header}>
            <span className={styles.title} onClick={() => navigate(`/tasks/${id}`)}>
              {name}
            </span>
            <div className={styles.price}>{price}$</div>
          </div>
          <div className={styles.tag}>#{tags[+(Math.random() * 5).toFixed()]}</div>
          <div className={styles.info}>
            <div className={styles.participants}>
              <img src={ParticipantIcon} className={styles.icon} />
              <span className={styles.span}>{+(Math.random() * 15).toFixed()} participants</span>
            </div>
            <div className={styles.date}>
              <img src={TimeIcon} className={styles.icon} />
              <span className={styles.span}>{new Date(endDate).toLocaleDateString()}</span>
            </div>
          </div>
        </div>

        <div className={styles.rightAuthor}>
          <div className={styles.creationDate}>
            <span>{new Date(dateCreated).toLocaleDateString()}</span>
            <img src={CalendarIcon} className={styles.icon} />
          </div>
          <span className={styles.author}>Michael</span>
        </div>
      </div>
    </div>
  );
};

export { Task };
