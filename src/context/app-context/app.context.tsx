import { Amplify } from 'aws-amplify';
import { createContext, FC, PropsWithChildren, useContext, useReducer } from 'react';
import { dictionary } from '../../dictionary';
import { initialState, reducer } from './app.state';
import { AppContextProps } from './app.types';

const AppContext = createContext<AppContextProps>({ dispatch: () => '' });

const useAppContext = () => useContext(AppContext);

const AppContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  Amplify.I18n.putVocabularies(dictionary);

  return <AppContext.Provider value={{ ...state, dispatch }}>{children}</AppContext.Provider>;
};

export { useAppContext, AppContextProvider };
