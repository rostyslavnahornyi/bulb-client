import axios from 'axios';
import { useState } from 'react';
import { Button, Input } from '../../../../components';
import { useAppContext } from '../../../../context';
import { BACKEND_URL } from '../../../../utils';
import styles from './id-task.module.scss';

interface Task {
  title: string;
  price: number;
  tag?: string;
  participants: number;
  date: string;
  dateCreated: string;
  description: string;
}

const EditTaskPage = () => {
  const [data, setData] = useState<Task>({
    title: '',
    price: 0,
    participants: Math.floor(Math.random() * 100),
    date: '',
    dateCreated: new Date().toString(),
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est quas veniam doloremque error, incidunt odio unde esse illo ratione, suscipit quo facilis sapiente cum autem libero voluptatibus accusantium officiis. Sint?',
  });

  const {auth} = useAppContext();

  // axios.get(`${BACKEND_URL}/api/taks/getbyid?id=`)
  // axios.get(`${BACKEND_URL}/api/task/alltasks`).then(e => console.log(e.data));
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

  return (
    <div className={styles.wrapper}>
      <Input
        variant="dark"
        onChange={value => setData({ ...data, title: value })}
        label={'Title'}
        type={'text'}
      />
      <Input
        variant="dark"
        onChange={value => setData({ ...data, price: +value })}
        label={'Price'}
        type={'number'}
      />
      <Input
        variant="dark"
        onChange={value => setData({ ...data, date: value })}
        label={'Title'}
        type={'date'}
      />
      <textarea className={styles.textarea} cols={30} rows={10}></textarea>
      <Button
        onClick={() => {
          axios.post(`${BACKEND_URL}/api/task`, {
            dateCreated: new Date(new Date).toISOString(),
            dateUpdated: '2022-12-27T14:01:16.221Z',
            name: data.title,
            creatorId: auth?.userId,
            price: data.price,
            endDate: data.date,
            dateClosed: '2022-12-27T14:01:16.221Z',
            taskStatus: 0,
          });
        }}
        size="small"
        variant="outlineGreen"
        text="Create"
      />
    </div>
  );
};

export { EditTaskPage };
