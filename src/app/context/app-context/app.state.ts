import { Cache, I18n } from 'aws-amplify';
import { getInitialLanguage } from '../../utils';
import { Action, State } from './app.types';

const initialState: State = {
  auth: Cache.getItem('auth') ?? null,
  lang: Cache.getItem('lang') ?? getInitialLanguage(),
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_AUTH': {
      return { ...state };
    }

    case 'LOGOUT': {
      return { ...state };
    }

    case 'SET_LANG': {
      return { ...state };
    }

    default: {
      return state;
    }
  }
};

export { reducer, initialState };
