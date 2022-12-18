import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { FC, lazy, Suspense } from 'react';
import { Preloader } from '../preloader';
import { ProtectedRoute } from '../protected-route';
import { ROUTES } from '../../utils';
import styles from './app-router.module.scss';
import { useAuth } from '../../hooks';
import classNames from 'classnames';

const LoginPage = lazy(() => import('../../pages/login-page'));
const RegisterPage = lazy(() => import('../../pages/register-page'));
const ProfilePage = lazy(() => import('../../pages/profile-page'));

const AppRouter: FC = () => {
  const isAuth = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        {/* 
          TODO: Change Navigate to marketplace when isAuth.
         */}
        <Route
          path={ROUTES.LOGIN}
          element={
            isAuth ? (
              <Navigate to={ROUTES.PROFILE} />
            ) : (
              <Suspense fallback={<Preloader className={styles.center} />}>
                <LoginPage />
              </Suspense>
            )
          }
        />
        <Route
          path={ROUTES.REGISTER}
          element={
            isAuth ? (
              <Navigate to={ROUTES.PROFILE} />
            ) : (
              <Suspense fallback={<Preloader className={styles.center} />}>
                <RegisterPage />
              </Suspense>
            )
          }
        />

        <Route
          path={ROUTES.PROFILE}
          element={
            <ProtectedRoute
              element={
                <Suspense fallback={<Preloader className={classNames(styles.center, styles.darkBg)} />}>
                  <ProfilePage />
                </Suspense>
              }
            />
          }
        />

        <Route path="/" element={<Navigate to={ROUTES.LOGIN} />} />
        <Route path="*" element={<Preloader />} />
      </Routes>
    </BrowserRouter>
  );
};

export { AppRouter };
