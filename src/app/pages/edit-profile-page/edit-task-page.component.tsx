import axios from 'axios';
import { useState } from 'react';
import { Button, Input } from '../../components';
import PlusIcon from '../../../assets/icons/plus.svg';
import { useAppContext } from '../../context';
import styles from './id-task.module.scss';
import { getRandomColor } from '../../utils/random-color';

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
  const [title, setTitle] = useState('');
  const [bio, setBio] = useState('');
  const [skills, setSkills] = useState<string[]>([]);
  const [skill, setSkill] = useState('');

  const { auth } = useAppContext();

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
        label="Job title"
        onChange={value => setTitle(value)}
        placeholder={'Enter your job title'}
      />

      <Input
        variant="dark"
        label="Biography"
        onChange={value => setBio(value)}
        placeholder={'Enter your biography'}
      />

      <div className={styles.skills}>
        <div className={styles.input}>
          <Input
            variant="dark"
            label="Skills"
            onChange={value => setSkill(value)}
            placeholder={'Enter your skill'}
          />
          <button className={styles.addTaskButton} onClick={() => setSkills([...skills, skill])}>
            <img src={PlusIcon} alt="add-task" className={styles.plusIcon} />
          </button>
        </div>
        <div className={styles.list}>
          {skills.map((skill, index) => (
            <div key={index} className={styles.item} style={{ background: getRandomColor() }}>
              {skill}
            </div>
          ))}
        </div>
      </div>

      <Input onChange={() => console} label={'Instagram'} variant={'dark'} />
      <Input onChange={() => console} label={'Website'} variant={'dark'} />

      <Button size='small' variant='outlineGreen' text='Save changes' />
    </div>
  );
};

export { EditTaskPage };
