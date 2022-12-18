import { Locales } from '../context';
import { en, uk } from './languages';

const dictionary: Record<Locales, Record<string, string>> = {
  en,
  uk,
};

export { dictionary };
