import { locales } from '@/lib/i18n';

const BASE_URL = 'https://nemanjanakomcic.dev';

const sitemap = () => {
  const now = new Date();

  return locales.map((locale) => ({
    url: `${BASE_URL}/${locale}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: locale === 'en' ? 1.0 : 0.9,
    alternates: {
      languages: Object.fromEntries(
        locales.map((loc) => [loc, `${BASE_URL}/${loc}`]),
      ),
    },
  }));
};

export default sitemap;
