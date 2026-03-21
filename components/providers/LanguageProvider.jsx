'use client';

import { createContext, useMemo } from 'react';
import { getTranslations } from '@/lib/i18n';

export const LanguageContext = createContext(null);

const LanguageProvider = ({ locale, children }) => {
  const value = useMemo(
    () => ({
      locale,
      t: getTranslations(locale),
      alternateLocale: locale === 'en' ? 'sr' : 'en',
    }),
    [locale],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
