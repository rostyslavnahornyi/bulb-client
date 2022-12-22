import React from 'react';
import styles from './step-four.module.scss';
import final from '../../../../../../assets/icons/cong.png';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../../../../components';

const StepFour = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <img className={styles.icon} src={final} />
      <div className={styles.label}>
        <span>Congratulations</span>
        <div>You did a great job!</div>
      </div>
      <Button
        className={styles.button}
        size={'large'}
        variant="filledPurple"
        text="Continue"
        onClick={() => {
          navigate('/marketplace');
        }}></Button>
    </div>
  );
};

export { StepFour };
