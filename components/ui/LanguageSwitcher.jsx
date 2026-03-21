'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import useLanguage from '@/hooks/useLanguage';

const FLAGS = {
  en: (
    <svg viewBox="0 0 20 15" width="20" height="15" aria-hidden="true">
      <rect width="20" height="15" fill="#012169" />
      <path d="M0,0 L20,15 M20,0 L0,15" stroke="#fff" strokeWidth="3" />
      <path d="M0,0 L20,15 M20,0 L0,15" stroke="#C8102E" strokeWidth="1.8" />
      <path d="M10,0 V15 M0,7.5 H20" stroke="#fff" strokeWidth="5" />
      <path d="M10,0 V15 M0,7.5 H20" stroke="#C8102E" strokeWidth="3" />
    </svg>
  ),
  sr: (
    <svg viewBox="0 0 20 15" width="20" height="15" aria-hidden="true">
      <rect width="20" height="5" fill="#C6363C" y="0" />
      <rect width="20" height="5" fill="#0C4076" y="5" />
      <rect width="20" height="5" fill="#fff" y="10" />
    </svg>
  ),
};

const LABELS = { en: 'EN', sr: 'SR' };

const LanguageSwitcher = ({ className = '' }) => {
  const { locale } = useLanguage();

  return (
    <div
      className={`flex items-center gap-0.5 p-0.5 rounded-lg bg-surface border border-border ${className}`}
      role="navigation"
      aria-label="Language switcher"
    >
      {['en', 'sr'].map((lang) => {
        const isActive = lang === locale;
        return (
          <Link key={lang} href={`/${lang}`}>
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={[
                'flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-[11px] font-semibold tracking-wide transition-all duration-200 cursor-pointer',
                isActive
                  ? 'bg-card text-text-primary shadow-sm'
                  : 'text-text-muted hover:text-text-secondary',
              ].join(' ')}
              aria-current={isActive ? 'true' : undefined}
              aria-label={`Switch to ${lang === 'en' ? 'English' : 'Serbian'}`}
            >
              <span className="rounded-[2px] overflow-hidden shrink-0">
                {FLAGS[lang]}
              </span>
              <span>{LABELS[lang]}</span>
            </motion.span>
          </Link>
        );
      })}
    </div>
  );
};

export default LanguageSwitcher;
