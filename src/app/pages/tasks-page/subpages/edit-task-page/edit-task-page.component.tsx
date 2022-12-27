import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Input } from '../../../../components';
import { useAppContext } from '../../../../context';
import { BACKEND_URL } from '../../../../utils';
import styles from './id-task.module.scss';

interface Task {
  creatorId: string;
  dateClosed: string;
  dateCreated: string;
  dateUpdated: string;
  endDate: string;
  name: string;
  price: number;
  taskStatus: number;
}

const EditTaskPage = () => {
  const [data, setData] = useState<Task>({
    creatorId: '',
    dateClosed: '',
    dateCreated: '',
    dateUpdated: '',
    endDate: '',
    name: '',
    price: 0,
    taskStatus: 0,
  });

  const { id } = useParams();

  useEffect(() => {
    axios.get(`${BACKEND_URL}/api/task/getbyid?id=${id}`).then(e => setData(e.data));
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const { auth } = useAppContext();

  // axios.get(`${BACKEND_URL}/api/taks/getbyid?id=`)

  return (
    <div className={styles.wrapper}>
      <Input
        variant="dark"
        onChange={value => setData({ ...data, name: value })}
        label={'Title'}
        type={'text'}
        value={data.name}
      />
      <Input
        variant="dark"
        onChange={value => setData({ ...data, price: +value })}
        label={'Price'}
        type={'number'}
        value={data.price}
      />
      <Input
        variant="dark"
        onChange={value => setData({ ...data, dateClosed: value })}
        label={'Title'}
        type={'string'}
        value={data.endDate}
      />
      <textarea className={styles.textarea} cols={30} rows={10}></textarea>
      <Button
        onClick={() => {
          axios.put(`${BACKEND_URL}/api/task`, data);
        }}
        size="small"
        variant="outlineGreen"
        text="Edit"
      />
    </div>
  );
};

export { EditTaskPage };
