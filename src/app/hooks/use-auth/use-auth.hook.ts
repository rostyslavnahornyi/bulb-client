import { useAppContext } from '../../context';

/**
 * Is authorized
 * @return boolean value.
 */
const useAuth = () => {
  const { auth } = useAppContext();

  return true;
};

export { useAuth };
