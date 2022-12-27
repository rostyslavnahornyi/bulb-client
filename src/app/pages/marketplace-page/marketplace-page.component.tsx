import { FC, useEffect, useState } from 'react';

import { Preloader } from '../../components';
import { Select } from './components/select';
import { Task } from './components';
import { TaskProps } from './components/task/task.types';
import styles from './marketplace-page.module.scss';
import axios from 'axios';
import { useAppContext } from '../../context';
import { BACKEND_URL } from '../../utils';

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
    title: 'Part-time .Net Developer',
    price: 20,
    tag: 'IT',
    participants: 9,
    date: 1671648231681,
    creationDate: 1671648231681,
    author: 'Bob Brown',
    location: 'Nezalenosti st., 1',
  },
  {
    id: '2',
    title: 'Nanny',
    price: 8,
    tag: 'House',
    participants: 2,
    date: 1671648231681,
    creationDate: 1671648231681,
    author: 'Margaret Tetcher',
    location: 'Sadova st., 36/1',
  },
  {
    id: '3',
    title: 'Frontend Developer',
    price: 1500,
    tag: 'IT',
    participants: 71,
    date: 1671648231681,
    creationDate: 1671648231681,
    author: 'Jimmy Musk',
    location: 'Kharkivska st., 5',
  },
  {
    id: '4',
    title: 'Housekeeper',
    price: 1000,
    tag: 'House',
    participants: 16,
    date: 1671648231681,
    creationDate: 1671648231681,
    author: 'Jim Baldwin',
    location: 'Shkolnaya st., 4',
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
    title: 'Builder',
    price: 15,
    tag: 'Construction',
    participants: 17,
    date: 1671648231681,
    creationDate: 1671648231681,
    author: 'Fab Millin',
    location: 'Grusheva st., 10',
  },
  {
    id: '7',
    title: 'Nurse',
    price: 90,
    tag: 'Medicine',
    participants: 0,
    date: 1671648231681,
    creationDate: 1671648231681,
    author: 'Marco Robin',
    location: 'Mudrogo st., 1',
  },
  {
    id: '8',
    title: 'Football coach',
    price: 90,
    tag: 'Sport',
    participants: 1,
    date: 1671648231681,
    creationDate: 1671648231681,
    author: 'John Mac',
    location: 'Metalist st., 43/17',
  },
  {
    id: '9',
    title: 'Guide',
    price: 73,
    tag: 'Tour',
    participants: 5,
    date: 1671648231681,
    creationDate: 1671648231681,
    author: 'Bill Walker',
    location: 'Savanna st., 80',
  },
  {
    id: '10',
    title: 'Manager',
    price: 1300,
    tag: 'Finance',
    participants: 63,
    date: 1671648231681,
    creationDate: 1671648231681,
    author: 'Martin King',
    location: 'Bakery st., 18',
  },
  {
    id: '11',
    title: 'Private detective',
    price: 2000,
    tag: 'Investigation',
    participants: 3,
    date: 1671648231681,
    creationDate: 1671648231681,
    author: 'John Walker',
    location: 'Bankova st., 8',
  },
  {
    id: '12',
    title: 'Teacher',
    price: 500,
    tag: 'Education',
    participants: 21,
    date: 1671648231681,
    creationDate: 1671648231681,
    author: 'Svetlana Bringi',
    location: 'Hoverla st., 39',
  },
  {
    id: '13',
    title: 'Driver',
    price: 18,
    tag: 'Taxi',
    participants: 12,
    date: 1671648231681,
    creationDate: 1671648231681,
    author: 'Jim Beam',
    location: 'Ukrainska st., 29',
  },
];

interface Task {
  creatorId: string;
  dateClosed: string;
  dateCreated: string;
  dateUpdated: string;
  endDate: string;
  id: string;
  name: string;
  price: number;
  taskStatus: number;
}

export type { Task };

const MarketplacePage: FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<{ sort: string; type: string }>({
    sort: sortOptions[0].value,
    type: typeOptions[0].value,
  });

  const { auth } = useAppContext();

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/task/alltasksbyuser?userid=${auth?.userId}`)
      .then(e => setTasks(e.data));
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
