import { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { ProtectedRouteProps } from './protected-route.types';
import { ROUTES } from '../../utils';
import { useAuth } from '../../hooks';

const ProtectedRoute: FC<ProtectedRouteProps> = ({ element }) => {
  const isAuth = useAuth();

  return isAuth ? element : <Navigate to={ROUTES.LOGIN} />;
};

export { ProtectedRoute };
