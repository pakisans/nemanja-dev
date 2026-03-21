import { getTranslations } from '@/lib/i18n';

const BASE_URL = 'https://nemanjanakomcic.dev';

export const generatePageMetadata = (locale, slug = '') => {
  const t = getTranslations(locale);
  const canonical = slug
    ? `${BASE_URL}/${locale}/${slug}`
    : `${BASE_URL}/${locale}`;

  return {
    metadataBase: new URL(BASE_URL),
    title: {
      default: t.meta.title,
      template: `%s — Nemanja Nakomčić`,
    },
    description: t.meta.description,
    keywords: [
      'Full-Stack Web Developer',
      'React Developer',
      'Next.js Developer',
      'TypeScript Developer',
      'Node.js Developer',
      'Frontend Developer',
      'Remote Web Developer',
      'Freelance Web Developer',
      'Headless CMS',
      'WordPress Headless',
      'Drupal Developer',
      'Web Performance',
      'SEO Developer',
      'Serbia',
      'Nemanja Nakomcic',
      'Nemanja Nakomčić',
    ],
    authors: [{ name: 'Nemanja Nakomčić', url: BASE_URL }],
    creator: 'Nemanja Nakomčić',
    publisher: 'Nemanja Nakomčić',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical,
      languages: {
        en: `${BASE_URL}/en`,
        sr: `${BASE_URL}/sr`,
        'x-default': `${BASE_URL}/en`,
      },
    },
    openGraph: {
      type: 'website',
      locale: locale === 'sr' ? 'sr_RS' : 'en_US',
      alternateLocale: locale === 'sr' ? 'en_US' : 'sr_RS',
      url: canonical,
      siteName: 'Nemanja Nakomčić',
      title: t.meta.ogTitle,
      description: t.meta.ogDescription,
      images: [
        {
          url: `${BASE_URL}/og_image.png`,
          width: 1200,
          height: 630,
          alt: 'Nemanja Nakomčić — Full-Stack Web Developer',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t.meta.ogTitle,
      description: t.meta.ogDescription,
      images: [`${BASE_URL}/og_image.png`],
      creator: '@nemanjanakomcic',
    },
    icons: {
      icon: [
        { url: '/favicon.ico' },
        { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      ],
      apple: [{ url: '/apple-touch-icon.png' }],
    },
    manifest: '/site.webmanifest',
  };
};
