import React, { useState } from 'react';
import { Button, Input } from '../../../../../components';
import styles from './step-three.module.scss';

const StepThree = ({ onClick, setStep }) => {
  const [first, setFirst] = useState('');
  const [second, setSecond] = useState('');

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Input
          className={styles.firstName}
          label={'First name'}
          variant={'light'}
          value={first}
					style={{width: '100%', marginBottom: '10px'}}
          onChange={value => setFirst(value)}
        />
        <Input
          variant="light"
          className={styles.lastName}
					style={{width: '100%', marginBottom: '10px'}}
          label={'Last name'}
          value={second}
          onChange={value => setSecond(value)}
        />

        <Button
          variant="filledPurple"
          size="large"
          text="Continue"
          onClick={() => {
            onClick({ firstName: first, lastName: second });
            setStep(3);
          }}></Button>
      </div>
    </div>
  );
};

export { StepThree };
