import { notFound } from 'next/navigation';
import { isValidLocale } from '@/lib/i18n';
import { generatePageMetadata } from '@/lib/seo/metadata';
import {
  personJsonLd,
  websiteJsonLd,
  profilePageJsonLd,
} from '@/lib/seo/jsonld';
import { geistSans, geistMono } from '@/app/layout';
import LanguageProvider from '@/components/providers/LanguageProvider';
import Header from '@/components/layout/Header';
import Link from 'next/link';

export const generateStaticParams = () => [{ locale: 'en' }, { locale: 'sr' }];

export const generateMetadata = async ({ params }) => {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  return generatePageMetadata(locale);
};

const LocaleLayout = async ({ children, params }) => {
  const { locale } = await params;

  if (!isValidLocale(locale)) notFound();

  const htmlLang = locale === 'en' ? 'en' : 'sr';

  return (
    <html
      lang={htmlLang}
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              personJsonLd(),
              websiteJsonLd(),
              profilePageJsonLd(),
            ]),
          }}
        />
        <LanguageProvider locale={locale}>
          <Link
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:rounded-md focus:bg-surface-1 focus:text-accent focus:font-medium focus:outline-none focus:ring-2 focus:ring-accent"
          >
            {locale === 'sr' ? 'Preskoči na sadržaj' : 'Skip to content'}
          </Link>
          <Header />
          <main id="main-content" tabIndex={-1}>
            {children}
          </main>
        </LanguageProvider>
      </body>
    </html>
  );
};

export default LocaleLayout;
