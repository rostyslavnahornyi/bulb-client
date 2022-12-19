import { FC, Fragment, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { ProtectedRoutesProps } from './protected-route.types';
import { ROUTES } from '../../utils';
import { useAuth } from '../../hooks';
import { Header } from '../header';
import { LeftBar } from '../left-bar';

const ProtectedRoutes: FC<ProtectedRoutesProps> = ({ element }) => {
  const isAuth = useAuth();

  const [leftBarIsOpened, setLeftBarIsOpened] = useState<boolean>(false);

  return isAuth ? (
    <Fragment>
      <Header leftBarIsOpened={leftBarIsOpened} setLeftBarIsOpened={setLeftBarIsOpened} />
      <LeftBar isOpened={leftBarIsOpened} />
      {element}
    </Fragment>
  ) : (
    <Navigate to={ROUTES.LOGIN} />
  );
};

export { ProtectedRoutes };
