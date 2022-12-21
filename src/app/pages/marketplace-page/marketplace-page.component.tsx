import { FC, useEffect, useState } from 'react';

import { Preloader } from '../../components';
import { Select } from './components/select';
import { Task } from './components';
import { TaskProps } from './components/task/task.types';
import styles from './marketplace-page.module.scss';

const sortOptions = [
  {
    label: 'Date',
    value: 'date',
  },
  {
    label: 'Participants in desc',
    value: 'participants_desc',
  },
  {
    label: 'Participants in asc',
    value: 'pay_desc',
  },
  {
    label: 'Pay in desc',
    value: 'participants_asc',
  },
  {
    label: 'Pay asc',
    value: 'pay_asc',
  },
];

const typeOptions = [
  {
    label: 'All',
    value: 'all',
  },
  {
    label: 'One time',
    value: 'one_time',
  },
  {
    label: 'Long term',
    value: 'long_term',
  },
  {
    label: 'Location only',
    value: 'location_only',
  },
  {
    label: 'Locations',
    value: 'locations',
  },
  {
    label: 'Time only',
    value: 'time_only',
  },
  {
    label: 'Times',
    value: 'times',
  },
];

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
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [filter, setFilter] = useState<{ sort: string; type: string }>({
    sort: sortOptions[0].value,
    type: typeOptions[0].value,
  });

  useEffect(() => {
    setTimeout(() => {
      setTasks(mockedTasks);
    }, 1500);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.controlButtons}>
        <Select
          onSelect={sortOption => setFilter({ ...filter, sort: sortOption })}
          label="Sort by:"
          defaultValue={sortOptions[0].value}
          options={sortOptions}
        />

        <Select
          onSelect={typeOption => setFilter({ ...filter, type: typeOption })}
          label="Type:"
          defaultValue={typeOptions[0].value}
          options={typeOptions}
        />

        {/* <input
          className={styles.inputKeyWordSearch}
          placeholder="Enter your key word"
          value={keyword}
          onChange={e => setKeyword(e.target.value)}
        /> */}
      </div>

      <div className={styles.tasksWrapper}>
        {tasks && !tasks.length && <Preloader className={styles.loader} />}
        {tasks && tasks.map((task, index) => <Task key={index} {...task} />)}
      </div>
    </div>
  );
};

export { MarketplacePage };
