'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import useScrollY from '@/hooks/useScrollY';
import useActiveSection from '@/hooks/useActiveSection';
import useLanguage from '@/hooks/useLanguage';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';
import Button from '@/components/ui/Button';
import LogoIcon from '../icons/LogoIcon';
import ScrollProgress from '@/components/ui/ScrollProgress';
import { trackEvent } from '@/lib/analytics';

const NAV_SECTIONS = ['about', 'skills', 'experience', 'projects', 'contact'];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrollY = useScrollY();
  const activeSection = useActiveSection(NAV_SECTIONS);
  const { t, locale } = useLanguage();

  const isScrolled = scrollY > 40;

  const navItems = NAV_SECTIONS.map((id) => ({
    id,
    label: t.nav[id],
    href: `#${id}`,
  }));

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.6,
          ease: [0.21, 0.47, 0.32, 0.98],
          delay: 0.1,
        }}
        className={[
          'fixed top-0 inset-x-0 z-50 transition-all duration-500 overflow-hidden',
          isScrolled
            ? 'bg-[rgba(7,7,10,0.88)] backdrop-blur-xl border-b border-border shadow-[0_8px_32px_rgba(0,0,0,0.3)]'
            : 'bg-transparent',
        ].join(' ')}
        role="banner"
      >
        <div className="max-w-300 mx-auto px-5 md:px-8 h-16 flex items-center justify-between gap-6">
          <Link
            href={`/${locale}`}
            className="flex items-center gap-2 shrink-0 group"
            aria-label="Nemanja Nakomčić — Home"
          >
            <LogoIcon />
            <span className="hidden sm:block font-semibold text-text-primary text-sm tracking-tight">
              Nemanja<span className="text-accent">.</span>
            </span>
          </Link>

          <nav
            className="hidden md:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {navItems.map(({ id, label, href }) => (
              <Link
                key={id}
                href={href}
                className={[
                  'px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                  activeSection === id
                    ? 'text-accent bg-[rgba(129,140,248,0.08)]'
                    : 'text-text-secondary hover:text-text-primary hover:bg-surface',
                ].join(' ')}
                aria-current={activeSection === id ? 'page' : undefined}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <Button
              variant="primary"
              href="/cv/nemanja-nakomcic-cv.pdf"
              download="Nemanja-Nakomcic-CV.pdf"
              className="hidden md:inline-flex py-2! px-4! text-xs! rounded-lg!"
              aria-label="Download CV"
              onClick={() => trackEvent('click_cv_download', { location: 'header' })}
            >
              {t.nav.downloadCV}
            </Button>

            <button
              type="button"
              className="md:hidden p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-surface transition-colors"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        <ScrollProgress />
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-nav"
            role="dialog"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed top-16 inset-x-0 z-40 bg-[rgba(7,7,10,0.97)] backdrop-blur-2xl border-b border-border md:hidden"
          >
            <nav className="max-w-300 mx-auto px-5 py-6 flex flex-col gap-1">
              {navItems.map(({ id, label, href }) => (
                <Link
                  key={id}
                  href={href}
                  onClick={closeMobile}
                  className={[
                    'px-4 py-3 rounded-xl text-base font-medium transition-all duration-200',
                    activeSection === id
                      ? 'text-accent bg-[rgba(129,140,248,0.08)]'
                      : 'text-text-secondary hover:text-text-primary hover:bg-surface',
                  ].join(' ')}
                >
                  {label}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-border">
                <Button
                  variant="primary"
                  href="/cv/nemanja-nakomcic-cv.pdf"
                  download="Nemanja-Nakomcic-CV.pdf"
                  className="w-full"
                  onClick={() => trackEvent('click_cv_download', { location: 'mobile_menu' })}
                >
                  {t.nav.downloadCV}
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
