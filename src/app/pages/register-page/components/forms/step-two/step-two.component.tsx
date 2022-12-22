import React, { useState } from 'react';
import { Button, Input } from '../../../../../components';

import styles from './step-two.module.scss';

const StepTwo = ({ setStep, onClick, onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className={styles.wrapper}>
      <form className={styles.content}>
        <Input
          onChange={value => setEmail(value)}
          className={styles.emailInput}
          label="Email"
          variant="light"
          placeholder="Enter your email"
          value={email}
					style={{width: '100%'}}
          type={'email'}
        />
        <Input
          className={styles.passwordInput}
          label="Password"
          variant="light"
          placeholder="* * * * * *"
          type="password"
					style={{width: '100%', marginBottom: '10px'}}
          value={password}
          onChange={value => setPassword(value)}
        />

        <Button
          variant={'filledPurple'}
          size={'large'}
          style={{ marginBottom: '10px' }}
          text={'Save and Go next'}
          onClick={e => {
            e.preventDefault();
            setStep(2);
            onClick({ email, password });
          }}></Button>
      </form>
    </div>
  );
};

export { StepTwo };
