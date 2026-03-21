const BASE_URL = 'https://nemanjanakomcic.dev';

export const personJsonLd = () => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${BASE_URL}/#person`,
  name: 'Nemanja Nakomčić',
  alternateName: 'Nemanja Nakomcic',
  url: BASE_URL,
  image: `${BASE_URL}/og-image.png`,
  jobTitle: 'Full-Stack Web Developer',
  description:
    'Full-Stack Web Developer with 6+ years of experience in React, Next.js, ERP systems, scalable business applications, and headless CMS architectures.',
  knowsAbout: [
    'React',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'Node.js',
    'PHP',
    'Symfony',
    'WordPress Headless',
    'Drupal',
    'ASP.NET Core',
    'PostgreSQL',
    'GraphQL',
    'Docker',
    'SEO',
    'Web Accessibility',
    'Headless CMS',
    'Frontend Development',
    'Full-Stack Development',
  ],
  sameAs: [
    'https://github.com/pakisans',
    'https://linkedin.com/in/nemanja-nakomcic-4596313ab/',
  ],
  email: 'pakisakac@gmail.com',
  nationality: {
    '@type': 'Country',
    name: 'Serbia',
  },
  worksFor: {
    '@type': 'Organization',
    name: 'Lilly021',
    url: 'https://lilly021.com',
  },
});

export const websiteJsonLd = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${BASE_URL}/#website`,
  name: 'Nemanja Nakomčić — Portfolio',
  url: BASE_URL,
  description:
    'Personal portfolio of Nemanja Nakomčić, Full-Stack Web Developer specializing in React, Next.js, and headless CMS architectures.',
  author: {
    '@id': `${BASE_URL}/#person`,
  },
  inLanguage: ['en', 'sr'],
});

export const profilePageJsonLd = () => ({
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  '@id': `${BASE_URL}/#profile`,
  url: BASE_URL,
  name: 'Nemanja Nakomčić — Full-Stack Web Developer Portfolio',
  about: {
    '@id': `${BASE_URL}/#person`,
  },
  mainEntity: {
    '@id': `${BASE_URL}/#person`,
  },
});
