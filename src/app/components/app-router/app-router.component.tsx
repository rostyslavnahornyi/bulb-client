import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { FC, Suspense, lazy } from 'react';

import { EmptyPage } from './components';
import { Preloader } from '../preloader';
import { ProtectedRoutes } from '../protected-route';
import { ROUTES } from '../../utils';
import classNames from 'classnames';
import styles from './app-router.module.scss';
import { useAuth } from '../../hooks';

const LoginPage = lazy(() => import('../../pages/login-page'));
const RegisterPage = lazy(() => import('../../pages/register-page'));
const ProfilePage = lazy(() => import('../../pages/profile-page'));
const MarketplacePage = lazy(() => import('../../pages/marketplace-page'));
const TasksPage = lazy(() => import('../../pages/tasks-page'));
const TaskByIdPage = lazy(() => import('../../pages/tasks-page/subpages/id-task-page'));
const CreateTaskPage = lazy(() => import('../../pages/tasks-page/subpages/create-task-page'));
const EditTaskPage = lazy(() => import('../../pages/tasks-page/subpages/edit-task-page'));

const AppRouter: FC = () => {
  const isAuth = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        {/* 
          Login and Register.
         */}
        <Route
          path={ROUTES.LOGIN}
          element={
            isAuth ? (
              <Navigate to={ROUTES.MARKETPLACE} />
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
              <Navigate to={ROUTES.MARKETPLACE} />
            ) : (
              <Suspense fallback={<Preloader className={styles.center} />}>
                <RegisterPage />
              </Suspense>
            )
          }
        />

        {/*
          Protected routes.
         */}

        <Route
          path={ROUTES.PROFILE}
          element={
            <ProtectedRoutes
              element={
                <Suspense
                  fallback={<Preloader className={classNames(styles.center, styles.darkBg)} />}>
                  <ProfilePage />
                </Suspense>
              }
            />
          }
        />
        <Route
          path={ROUTES.MARKETPLACE}
          element={
            <ProtectedRoutes
              element={
                <Suspense
                  fallback={<Preloader className={classNames(styles.center, styles.darkBg)} />}>
                  <MarketplacePage />
                </Suspense>
              }
            />
          }
        />
        <Route
          path={ROUTES.TASKS}
          element={
            <ProtectedRoutes
              element={
                <Suspense
                  fallback={<Preloader className={classNames(styles.center, styles.darkBg)} />}>
                  <TasksPage />
                </Suspense>
              }
            />
          }
        />

        <Route
          path={ROUTES.TASK_BY_ID}
          element={
            <ProtectedRoutes
              element={
                <Suspense
                  fallback={<Preloader className={classNames(styles.center, styles.darkBg)} />}>
                  <TaskByIdPage />
                </Suspense>
              }
            />
          }
        />

        <Route
          path={ROUTES.CREATE_TASK}
          element={
            <ProtectedRoutes
              element={
                <Suspense
                  fallback={<Preloader className={classNames(styles.center, styles.darkBg)} />}>
                  <CreateTaskPage />
                </Suspense>
              }
            />
          }
        />

        <Route
          path={ROUTES.EDIT_TASK}
          element={
            <ProtectedRoutes
              element={
                <Suspense
                  fallback={<Preloader className={classNames(styles.center, styles.darkBg)} />}>
                  <EditTaskPage />
                </Suspense>
              }
            />
          }
        />

        {/* 
          Auxiliary routes.
         */}
        <Route path="/" element={<Navigate to={ROUTES.LOGIN} />} />
        <Route path="*" element={<EmptyPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export { AppRouter };
