import en from './translations/en';
import sr from './translations/sr';

export const translations = { en, sr };

export const locales = ['en', 'sr'];

export const defaultLocale = 'en';

export const getTranslations = (locale) =>
  translations[locale] ?? translations[defaultLocale];

export const isValidLocale = (locale) => locales.includes(locale);
