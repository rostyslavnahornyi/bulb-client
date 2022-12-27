import React, { useEffect, useState } from 'react';
import styles from './id-task.module.scss';
import { Description, Details, Participants } from './components';
import { useNavigate, useParams } from 'react-router-dom';
import LeftArrowIcon from '../../../../../assets/icons/left_arrow.svg';
import axios from 'axios';
import { BACKEND_URL } from '../../../../utils';
import { Roles, useAppContext } from '../../../../context';
import { Button } from '../../../../components';

const mocketData = [
  {
    type: 'today',
    title: 'Driver',
    price: 8,
    tag: 'Taxi',
    participants: '9',
    date: 'Today',
    creationDate: '25.10',
    author: 'John Walker',
    location: 'Ukrainska st., 29',
  },
  {
    type: 'today',
    title: 'Driver',
    price: 8,
    tag: 'Taxi',
    participants: '9',
    date: 'Today',
    creationDate: '25.10',
    author: 'John Walker',
    location: 'Ukrainska st., 29',
  },
  {
    type: 'today',
    title: 'Driver',
    price: 8,
    tag: 'Taxi',
    participants: '9',
    date: 'Today',
    creationDate: '25.10',
    author: 'John Walker',
    location: 'Ukrainska st., 29',
  },
  {
    type: 'today',
    title: 'Driver',
    price: 8,
    tag: 'Taxi',
    participants: '9',
    date: 'Today',
    creationDate: '25.10',
    author: 'John Walker',
    location: 'Ukrainska st., 29',
  },
  {
    type: 'today',
    title: 'Driver',
    price: 8,
    tag: 'Taxi',
    participants: '9',
    date: 'Today',
    creationDate: '25.10',
    author: 'John Walker',
    location: 'Ukrainska st., 29',
  },
  {
    type: 'today',
    title: 'Driver',
    price: 8,
    tag: 'Taxi',
    participants: '9',
    date: 'Today',
    creationDate: '25.10',
    author: 'John Walker',
    location: 'Ukrainska st., 29',
  },
  {
    type: 'today',
    title: 'Driver',
    price: 8,
    tag: 'Taxi',
    participants: '9',
    date: 'Today',
    creationDate: '25.10',
    author: 'John Walker',
    location: 'Ukrainska st., 29',
  },
  {
    type: 'today',
    title: 'Driver',
    price: 8,
    tag: 'Taxi',
    participants: '9',
    date: 'Today',
    creationDate: '25.10',
    author: 'John Walker',
    location: 'Ukrainska st., 29',
  },
  {
    type: 'today',
    title: 'Driver',
    price: 8,
    tag: 'Taxi',
    participants: '9',
    date: 'Today',
    creationDate: '25.10',
    author: 'John Walker',
    location: 'Ukrainska st., 29',
  },
  {
    type: 'today',
    title: 'Driver',
    price: 8,
    tag: 'Taxi',
    participants: '9',
    date: 'Today',
    creationDate: '25.10',
    author: 'John Walker',
    location: 'Ukrainska st., 29',
  },
  {
    type: 'today',
    title: 'Driver',
    price: 8,
    tag: 'Taxi',
    participants: '9',
    date: 'Today',
    creationDate: '25.10',
    author: 'John Walker',
    location: 'Ukrainska st., 29',
  },
  {
    type: 'today',
    title: 'Driver',
    price: 8,
    tag: 'Taxi',
    participants: '9',
    date: 'Today',
    creationDate: '25.10',
    author: 'John Walker',
    location: 'Ukrainska st., 29',
  },
  {
    type: 'today',
    title: 'Driver',
    price: 8,
    tag: 'Taxi',
    participants: '9',
    date: 'Today',
    creationDate: '25.10',
    author: 'John Walker',
    location: 'Ukrainska st., 29',
  },
  {
    type: 'today',
    title: 'Driver',
    price: 8,
    tag: 'Taxi',
    participants: '9',
    date: 'Today',
    creationDate: '25.10',
    author: 'John Walker',
    location: 'Ukrainska st., 29',
  },
];

const TaskByIdPage = () => {
  const { id } = useParams();
  const {auth} = useAppContext();
  const [data, setData] = useState<unknown>();
  const [isLoading, setIsLoading] = useState<boolean>();
  const navigate = useNavigate();

  useEffect(() => {
    setData(mocketData as unknown);

    // axios.get(`${BACKEND_URL}/api/taks/getbyid?id=`)
    axios.get(`${BACKEND_URL}/api/task/alltasks`).then((e) => console.log(e.data))
    // axios.post(`${BACKEND_URL}/api/task/`, {
    //   id: '123',
    //   dateCreated: '2022-12-27T14:01:16.221Z',
    //   dateUpdated: '2022-12-27T14:01:16.221Z',
    //   name: 'test1',
    //   creatorId: auth?.userId,
    //   price: 112,
    //   endDate: '2022-12-27T14:01:16.221Z',
    //   dateClosed: '2022-12-27T14:01:16.221Z',
    //   taskStatus: 0,
    // }).then(e => console.log(e.data));
  }, []);

  useEffect(() => {
    setIsLoading(true);
  }, [data]);

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.backButton}
        onClick={() => navigate('/marketplace', { replace: true })}>
        <img src={LeftArrowIcon} className={styles.icon} />
        Marketplace
      </div>
      <div className={styles.titleWrapper}>
        <span className={styles.title}>Driver</span>
        <Button size='small' variant='filledPurple'  text={auth?.role === Roles.CUSTOMER ? 'Edit' : 'App'} />
      </div>
      <div className={styles.content}>
        <Description />
        <div className={styles.rightSide}>
          <Details />
          <Participants />
        </div>
      </div>
    </div>
  );
};

export { TaskByIdPage };
