'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download, ChevronDown } from 'lucide-react';
import useLanguage from '@/hooks/useLanguage';
import Button from '@/components/ui/Button';
import { fadeUp, staggerContainer } from '@/lib/animations';

const ease = [0.21, 0.47, 0.32, 0.98];

const TECH_BADGES = [
  'React',
  'Next.js',
  'TypeScript',
  'ASP.NET Core',
  'PHP',
  'WordPress Headless',
];

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      aria-label="Hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div
          className="absolute -top-[20%] -left-[15%] w-175 h-175 rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 70%)',
            animation: 'pulse-soft 4s ease-in-out infinite',
          }}
        />

        <div
          className="absolute -bottom-[10%] -right-[10%] w-125 h-125 rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(192,132,252,0.12) 0%, transparent 70%)',
            animation: 'pulse-soft 5s ease-in-out infinite 1.5s',
          }}
        />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div
          className="absolute inset-x-0 h-px opacity-20"
          style={{
            background:
              'linear-gradient(90deg, transparent, rgba(129,140,248,0.8), transparent)',
            top: '40%',
          }}
        />
      </div>

      <motion.div
        className="relative z-10 max-w-300 mx-auto px-5 md:px-8 flex flex-col items-start gap-8 w-full"
        variants={staggerContainer(0.1, 0.2)}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={fadeUp}>
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[rgba(129,140,248,0.08)] border border-[rgba(129,140,248,0.2)] text-accent text-xs font-semibold tracking-wide">
            <span
              className="w-1.5 h-1.5 rounded-full bg-[#4ade80]"
              style={{ boxShadow: '0 0 8px rgba(74,222,128,0.8)' }}
              aria-hidden="true"
            />
            {t.hero.badge}
          </span>
        </motion.div>

        <motion.div variants={fadeUp} className="flex flex-col gap-2">
          <p className="text-text-secondary text-lg font-medium">
            {t.hero.greeting}
          </p>
          <h1 className="text-[clamp(2.8rem,8vw,6rem)] font-bold leading-[1.05] tracking-[-0.03em] text-text-primary">
            {t.hero.name.split(' ').map((word, wi) => (
              <span key={wi} className="inline-block mr-[0.2em] last:mr-0">
                {word.split('').map((char, ci) => (
                  <motion.span
                    key={ci}
                    className="inline-block"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      ease,
                      delay: 0.4 + wi * 0.12 + ci * 0.04,
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>
        </motion.div>

        <motion.div variants={fadeUp}>
          <p className="text-[clamp(1.1rem,3vw,1.5rem)] font-semibold tracking-tight">
            <span className="gradient-text">{t.hero.role}</span>
          </p>
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="max-w-140 text-text-secondary text-base md:text-lg leading-relaxed"
        >
          {t.hero.tagline}
        </motion.p>

        <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
          <Button
            variant="primary"
            href="#projects"
            icon={<ArrowRight size={16} />}
          >
            {t.hero.cta.projects}
          </Button>
          <Button variant="secondary" href="#contact">
            {t.hero.cta.contact}
          </Button>
          <Button
            variant="ghost"
            href="/cv/nemanja-nakomcic-cv.pdf"
            download="Nemanja-Nakomcic-CV.pdf"
            icon={<Download size={15} />}
            iconPosition="left"
          >
            {t.hero.cta.cv}
          </Button>
        </motion.div>

        <motion.div variants={fadeUp} className="flex flex-wrap gap-2 pt-2">
          {TECH_BADGES.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-lg bg-surface border border-border text-text-muted text-xs font-mono tracking-wide"
            >
              {tech}
            </span>
          ))}
          <span className="px-3 py-1 text-text-muted text-xs font-mono tracking-wide">
            + more
          </span>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-2 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
        aria-hidden="true"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase font-medium">
          {t.hero.scrollHint}
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
