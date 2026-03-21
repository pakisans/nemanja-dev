const BASE_URL = 'https://nemanjanakomcic.dev';

const robots = () => ({
  rules: [
    {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/'],
    },
  ],
  sitemap: `${BASE_URL}/sitemap.xml`,
  host: BASE_URL,
});

export default robots;
