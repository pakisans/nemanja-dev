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
