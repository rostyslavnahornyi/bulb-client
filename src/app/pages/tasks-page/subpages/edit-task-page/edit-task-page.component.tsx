import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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

  const navigate = useNavigate();
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
      <textarea
        className={styles.textarea}
        value={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }
        cols={50}
        rows={20}></textarea>
      <Button
        onClick={() => {
          axios.put(`${BACKEND_URL}/api/task`, data);
        }}
        size="small"
        variant="outlineGreen"
        text="Edit"
      />
      <Button
        onClick={async () => {
          await axios.delete(`${BACKEND_URL}/api/task?id=${id}`);
          navigate('/marketplace')          
        }}
        size="small"
        variant="outlineRed"
        text="Delete"
      />
    </div>
  );
};

export { EditTaskPage };
