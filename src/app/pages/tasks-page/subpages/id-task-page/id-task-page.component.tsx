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
  const { auth } = useAppContext();
  const [data, setData] = useState<{ name: string, price: number, dateCreated: string }>();
  const [isLoading, setIsLoading] = useState<boolean>();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${BACKEND_URL}/api/task/getbyid?id=${id}`).then(e => setData(e.data));
  }, []);

  useEffect(() => {
    setIsLoading(true);
    console.log(data);
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
        <span className={styles.title}>{data?.name}</span>
        <Button
          size="small"
          variant="filledPurple"
          text={auth?.role === Roles.CUSTOMER ? 'Edit' : 'App'}
          onClick={() => navigate(`/tasks/edit/${id}`)}
        />
      </div>
      <div className={styles.content}>
        <Description />
        <div className={styles.rightSide}>
          <Details {...data} />
          <Participants />
        </div>
      </div>
    </div>
  );
};

export { TaskByIdPage };
