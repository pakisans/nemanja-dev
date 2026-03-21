'use client';

import { motion } from 'framer-motion';
import useLanguage from '@/hooks/useLanguage';
import SectionLabel from '@/components/ui/SectionLabel';
import AnimatedSection from '@/components/ui/AnimatedSection';
import AnimatedItem from '@/components/ui/AnimatedItem';
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/animations';

const AboutSection = () => {
  const { t } = useLanguage();
  const { heading, bio1, bio2, bio3, values, sectionLabel } = t.about;

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="section-pad relative"
    >
      <div className="max-w-300 mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-[1fr_440px] gap-16 lg:gap-24 items-start">
          <motion.div
            className="flex flex-col gap-6"
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <AnimatedItem>
              <SectionLabel>{sectionLabel}</SectionLabel>
            </AnimatedItem>

            <motion.h2
              id="about-heading"
              className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold tracking-tight leading-[1.15] text-text-primary"
              variants={fadeUp}
            >
              {heading}
            </motion.h2>

            <motion.p
              className="text-text-secondary text-base md:text-lg leading-relaxed"
              variants={fadeUp}
            >
              {bio1}
            </motion.p>

            <motion.p
              className="text-text-secondary text-base leading-relaxed"
              variants={fadeUp}
            >
              {bio2}
            </motion.p>

            <motion.p
              className="text-text-secondary text-base leading-relaxed"
              variants={fadeUp}
            >
              {bio3}
            </motion.p>
          </motion.div>

          <AnimatedSection
            stagger
            staggerDelay={0.1}
            className="grid grid-cols-1 gap-4"
          >
            {values.map(({ label, desc }) => (
              <AnimatedItem key={label}>
                <div className="card-premium p-5 group cursor-default">
                  <div className="flex items-start gap-3">
                    <span
                      className="mt-0.5 w-2 h-2 rounded-full bg-accent shrink-0 opacity-80 group-hover:opacity-100 transition-opacity"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="font-semibold text-text-primary text-sm mb-1">
                        {label}
                      </p>
                      <p className="text-text-muted text-sm leading-relaxed">
                        {desc}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedItem>
            ))}
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
