import { Dispatch } from 'react';

/**
 * Types setting for AppContext.
 */

interface AppContextProps extends State {
  readonly dispatch: Dispatch<Action>;
}

type State = {
  readonly auth?: AuthProps;
  readonly lang?: LangProps;
};

type Action =
  | {
      type: 'SET_AUTH';
      payload: AuthProps;
    }
  | { type: 'LOGOUT' }
  | { type: 'SET_LANG'; payload: Locales };

/**
 * State types.
 */

type AuthProps = {
  exp: number;
  jwt: string;
  userId: string;
  role: Roles;
};

type LangProps = Locales;

/**
 * State enums.
 */

enum Roles {
  CUSTOMER = 'customer',
  EXECUTOR = 'executor',
}

enum Locales {
  ENGLISH = 'en',
  UKRAINIAN = 'uk',
}

export { Roles, Locales };
export type { AppContextProps, State, Action };
