import { Locales } from "../../context/app-context/app.types";

const getInitialLanguage = () => {
  const preferredLanguage = globalThis.navigator?.languages[0]?.split('-')[0];

  if (preferredLanguage && Object.values(Locales).some(locale => locale === preferredLanguage)) {
    return preferredLanguage as Locales;
  }

  return Locales.ENGLISH;
};

export { getInitialLanguage };
