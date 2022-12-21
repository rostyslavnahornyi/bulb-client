import { FC, useEffect, useState } from 'react';

import DownArrowIcon from '../../../assets/icons/down-arrow.svg';
import { Task } from './components';
import { TaskProps } from './components/task/task.types';
import styles from './profile-page.module.scss';

export const mockedTasks = [
  {
    id: '1',
    title: 'Driver',
    price: 8,
    tag: 'Taxi',
    participants: 9,
    date: 1671648231681,
    creationDate: 1671648231681,
    author: 'John Walker',
    location: 'Ukrainska st., 29',
  },
  {
    id: '2',
    title: 'Driver',
    price: 8,
    tag: 'Taxi',
    participants: 9,
    date: 1671648231681,
    creationDate: 1671648231681,
    author: 'John Walker',
    location: 'Ukrainska st., 29',
  },
  {
    id: '3',
    title: 'Driver',
    price: 8,
    tag: 'Taxi',
    participants: 9,
    date: 1671648231681,
    creationDate: 1671648231681,
    author: 'John Walker',
    location: 'Ukrainska st., 29',
  },
  {
    id: '4',
    title: 'Driver',
    price: 8,
    tag: 'Taxi',
    participants: 9,
    date: 1671648231681,
    creationDate: 1671648231681,
    author: 'John Walker',
    location: 'Ukrainska st., 29',
  },
  {
    id: '5',
    title: 'Driver',
    price: 8,
    tag: 'Taxi',
    participants: 9,
    date: 1671648231681,
    creationDate: 1671648231681,
    author: 'John Walker',
    location: 'Ukrainska st., 29',
  },
  {
    id: '6',
    title: 'Driver',
    price: 8,
    tag: 'Taxi',
    participants: 9,
    date: 1671648231681,
    creationDate: 1671648231681,
    author: 'John Walker',
    location: 'Ukrainska st., 29',
  },
  {
    id: '7',
    title: 'Driver',
    price: 8,
    tag: 'Taxi',
    participants: 9,
    date: 1671648231681,
    creationDate: 1671648231681,
    author: 'John Walker',
    location: 'Ukrainska st., 29',
  },
  {
    id: '8',
    title: 'Driver',
    price: 8,
    tag: 'Taxi',
    participants: 9,
    date: 1671648231681,
    creationDate: 1671648231681,
    author: 'John Walker',
    location: 'Ukrainska st., 29',
  },
  {
    id: '9',
    title: 'Driver',
    price: 8,
    tag: 'Taxi',
    participants: 9,
    date: 1671648231681,
    creationDate: 1671648231681,
    author: 'John Walker',
    location: 'Ukrainska st., 29',
  },
  {
    id: '10',
    title: 'Driver',
    price: 8,
    tag: 'Taxi',
    participants: 9,
    date: 1671648231681,
    creationDate: 1671648231681,
    author: 'John Walker',
    location: 'Ukrainska st., 29',
  },
  {
    id: '11',
    title: 'Driver',
    price: 8,
    tag: 'Taxi',
    participants: 9,
    date: 1671648231681,
    creationDate: 1671648231681,
    author: 'John Walker',
    location: 'Ukrainska st., 29',
  },

  {
    id: '12',
    title: 'Driver',
    price: 8,
    tag: 'Taxi',
    participants: 9,
    date: 1671648231681,
    creationDate: 1671648231681,
    author: 'John Walker',
    location: 'Ukrainska st., 29',
  },
  {
    id: '13',
    title: 'Driver',
    price: 8,
    tag: 'Taxi',
    participants: 9,
    date: 1671648231681,
    creationDate: 1671648231681,
    author: 'John Walker',
    location: 'Ukrainska st., 29',
  },
];

const MarketplacePage: FC = () => {
  const [tasks, setTasks] = useState<TaskProps[]>();
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setTasks(mockedTasks);
    }, 1500);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.controlButtons}>
        <div className={styles.select}>
          <span>Sort by:</span>
          <select defaultValue={'date'} className={styles.select}>
            <option value="date">Date</option>
            <option value="participants_desc">Participants in desc</option>
            <option value="participants_asc">Participants in asc</option>
            <option value="pay_desc">Pay in desc</option>
            <option value="pay_asc">Pay asc</option>
          </select>
          <img src={DownArrowIcon} className={styles.icon} />
        </div>

        <div className={styles.select}>
          <span>Type:</span>
          <select defaultValue={'all'} className={styles.select}>
            <option value="all">All</option>
            <option value="one_time">One time</option>
            <option value="long_term">Long term</option>
            <option value="location_only">Location only</option>
            <option value="locations">Locations</option>
            <option value="time_only">Time only</option>
            <option value="times">Times</option>
          </select>
          <img src={DownArrowIcon} className={styles.icon} />
        </div>

        <input
          className={styles.inputKeyWordSearch}
          placeholder="Enter your key word"
          value={keyword}
          onChange={e => setKeyword(e.target.value)}
        />
      </div>

      <div className={styles.tasksWrapper}>
        {/* {!tasks.length && <FadeLoader className={styles.loader} color={'#fff'} />} */}
        {tasks && tasks.map((task, index) => <Task key={index} {...task} />)}
      </div>
    </div>
  );
};

export { MarketplacePage };
