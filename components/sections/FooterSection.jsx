'use client';

import Link from 'next/link';
import useLanguage from '@/hooks/useLanguage';
import LogoIcon from '../icons/LogoIcon';

const FooterSection = () => {
  const { t, locale } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative border-t border-border py-10"
      role="contentinfo"
    >
      <div className="max-w-300 mx-auto px-5 md:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              href={`/${locale}`}
              className="flex items-center gap-2 group"
              aria-label="Nemanja Nakomčić — Back to top"
            >
              <LogoIcon />
            </Link>
            <p className="text-text-muted text-xs text-center sm:text-left leading-relaxed">
              {t.footer.copy}
            </p>
          </div>

          <p className="text-text-muted text-xs shrink-0">
            © {year} — {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
