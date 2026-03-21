'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import useLanguage from '@/hooks/useLanguage';
import { fadeUp, staggerContainer } from '@/lib/animations';

export default function NotFound() {
  const { t, locale } = useLanguage();
  const nf = t.notFound;

  return (
    <section className="min-h-[80vh] flex items-center justify-center relative section-pad">
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(99,102,241,0.08) 0%, transparent 70%)',
        }}
      />

      <motion.div
        className="relative z-10 flex flex-col items-center text-center gap-6 px-5"
        variants={staggerContainer(0.1)}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={fadeUp}
          className="text-[clamp(6rem,20vw,12rem)] font-bold leading-none tracking-tight text-accent opacity-15 select-none"
          aria-hidden="true"
        >
          {nf.code}
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="flex flex-col gap-3 -mt-8"
        >
          <h1 className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold tracking-tight text-text-primary">
            {nf.heading}
          </h1>
          <p className="text-text-secondary text-base md:text-lg leading-relaxed max-w-md">
            {nf.subheading}
          </p>
        </motion.div>

        <motion.div variants={fadeUp}>
          <Link
            href={`/${locale}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-[#07070a] font-semibold text-sm hover:bg-[#a5b0ff] hover:shadow-[0_0_32px_rgba(129,140,248,0.35)] transition-all duration-300 active:scale-[0.97]"
          >
            <ArrowLeft size={16} />
            {nf.cta}
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
