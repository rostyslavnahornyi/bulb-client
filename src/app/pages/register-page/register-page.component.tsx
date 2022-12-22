import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useAppContext } from '../../context';
import { BACKEND_URL } from '../../utils';
import { Indicator, StepFour, StepOne, StepThree, StepTwo, Title } from './components';
import styles from './register.module.scss';

const RegisterPage = () => {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({
    type: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  });
  const navigate = useNavigate();

  useEffect(() => {
    const { email, firstName, lastName, password, type } = data;

    const fetchData = async () => {
      try {
        await axios.post(`${BACKEND_URL}/api/auth/register`, {
          username: `${firstName}_${lastName}`,
          email,
          password,
          role: type === 'customer' ? 1 : 0,
        });
        navigate('/login');
      } catch (error) {
        console.log(error);
      }
    };

    if (email && firstName && lastName && password && type) {
      fetchData();
    }
    console.log(data);
  }, [data]);

  const handleStepClick = value => {
    setStep(value);
  };

  return (
    <div className={styles.wrapper}>
      <Title />
      {(step === 0 && (
        <StepOne setStep={setStep} onClick={type => setData(state => ({ ...state, type }))} />
      )) ||
        (step === 1 && (
          <StepTwo setStep={setStep} onClick={data => setData(state => ({ ...state, ...data }))} />
        )) ||
        (step === 2 && (
          <StepThree
            setStep={setStep}
            onClick={data => setData(state => ({ ...state, ...data }))}
          />
        )) ||
        (step === 3 && <StepFour />) || <StepOne />}
      <Indicator value={step} onClick={handleStepClick} />
    </div>
  );
};

export { RegisterPage };
