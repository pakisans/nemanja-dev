'use client';

import { motion } from 'framer-motion';
import useLanguage from '@/hooks/useLanguage';
import SectionLabel from '@/components/ui/SectionLabel';
import AnimatedSection from '@/components/ui/AnimatedSection';
import AnimatedItem from '@/components/ui/AnimatedItem';
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/animations';

const ICONS = ['⬡', '⬢', '○', '◈', '◉', '◎'];

const WhyMeSection = () => {
  const { t } = useLanguage();
  const { sectionLabel, heading, subheading, items } = t.whyme;

  return (
    <section
      id="why-me"
      aria-labelledby="whyme-heading"
      className="section-pad relative"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, rgba(129,140,248,0.5) 0px, rgba(129,140,248,0.5) 1px, transparent 1px, transparent 40px)',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(99,102,241,0.06) 0%, transparent 100%)',
        }}
      />

      <div className="relative z-10 max-w-300 mx-auto px-5 md:px-8">
        <motion.div
          className="flex flex-col gap-4 mb-14 text-center items-center"
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.div variants={fadeUp}>
            <SectionLabel>{sectionLabel}</SectionLabel>
          </motion.div>
          <motion.h2
            id="whyme-heading"
            className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold tracking-tight text-text-primary max-w-150"
            variants={fadeUp}
          >
            {heading}
          </motion.h2>
          <motion.p
            className="text-text-secondary text-base max-w-120"
            variants={fadeUp}
          >
            {subheading}
          </motion.p>
        </motion.div>

        <AnimatedSection
          stagger
          staggerDelay={0.08}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {items.map(({ title, desc }, i) => (
            <AnimatedItem key={title}>
              <article className="card-premium p-6 h-full group cursor-default relative overflow-hidden">
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(circle at 50% 0%, rgba(129,140,248,0.08) 0%, transparent 70%)',
                  }}
                  aria-hidden="true"
                />
                <div className="flex flex-col gap-3 relative z-10">
                  <span
                    className="text-accent text-xl font-mono opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                    aria-hidden="true"
                  >
                    {ICONS[i % ICONS.length]}
                  </span>
                  <h3 className="font-semibold text-text-primary text-[15px] leading-snug">
                    {title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {desc}
                  </p>
                </div>
              </article>
            </AnimatedItem>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
};

export default WhyMeSection;
