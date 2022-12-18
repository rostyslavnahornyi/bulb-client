import { FC } from 'react';
import { AppRouter } from './components';
import { AppContextProvider } from './context';

const App: FC = () => (
  <AppContextProvider>
    <AppRouter />
  </AppContextProvider>
);

export { App };
