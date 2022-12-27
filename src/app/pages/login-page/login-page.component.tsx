import { FC, MouseEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Input } from '../../components';
import styles from './login-page.module.scss';
import LogoIcon from '../../../assets/imgs/logo.png';
import axios from 'axios';
import { BACKEND_URL } from '../../utils';
import { useAppContext } from '../../context';
import { JwtParse } from '../../utils/jwt-parse';

const LoginPage: FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const { dispatch } = useAppContext();
  const navigate = useNavigate();

  const onLogin = async (event: MouseEvent<HTMLButtonElement>) => {
    event.nativeEvent.preventDefault();

    try {
      const { data } = await axios.post(`${BACKEND_URL}/api/auth/signin`, {
        email: username,
        password,
      });

      dispatch({ type: 'SET_AUTH', payload: JwtParse(data.token.split('.')[1]) });
    } catch (error: any) {
      setError(error.message);
    }
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <img src={LogoIcon} alt="logo" />
          <span>Bulb</span>
        </div>

        <form className={styles.form}>
          <div className={styles.wrapper}>
            <h2>Welcome back</h2>
            <h3>Welcome back! Please enter your details</h3>

            <Input
              onChange={value => setUsername(value)}
              className={styles.emailInput}
              label="Username"
              variant={'light'}
              placeholder="Enter your username"
              value={username}
              min={4}
              type={'email'}
            />
            <Input
              className={styles.passwordInput}
              min={6}
              variant={'light'}
              label="Password"
              placeholder="* * * * * *"
              type="password"
              value={password}
              onChange={value => setPassword(value)}
            />

            <p style={{ color: 'red' }}>{error}</p>
            <div className={styles.optional}>
              <p>Forgot password</p>
            </div>

            <Button
              size={'large'}
              variant="filledPurple"
              style={{ marginBottom: '10px' }}
              onClick={onLogin}
              text={'Sign in'}
            />
            <Button
              size={'large'}
              variant="filledPurple"
              style={{ marginBottom: '10px' }}
              onClick={e => {
                
                e.preventDefault();
                window.open('https://www.facebook.com/login');
              }}
              text={'Sign in with facebook'}
            />
            {/* <Button type={'google'}>Sign in with Google</Button> */}

            <p className={styles.dontHaveAccount}>
              Don`t have an account?<Link to={'/register'}>&nbsp;Sign up</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export { LoginPage };
