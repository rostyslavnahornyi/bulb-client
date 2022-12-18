import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage, ProfilePage, RegisterPage } from '../../pages';

import { FC } from 'react';
import { ProtectedRoute } from '../protected-route';
import { ROUTES } from '../../utils';
import { useAuth } from '../../hooks';

const AppRouter: FC = () => {
  const isAuth = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        {/* 
          TODO: Change Navigate to marketplace when isAuth.
         */}
        <Route path={ROUTES.LOGIN} element={isAuth ? <Navigate to={ROUTES.PROFILE} /> : <LoginPage />} />
        <Route path={ROUTES.REGISTER} element={isAuth ? <Navigate to={ROUTES.PROFILE} /> : <RegisterPage />} />

        <Route path={ROUTES.PROFILE} element={<ProtectedRoute element={<ProfilePage />} />} />

        <Route path="/" element={<Navigate to={ROUTES.LOGIN} />} />
      </Routes>
    </BrowserRouter>
  );
};

export { AppRouter };
