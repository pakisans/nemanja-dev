'use client';

import { motion } from 'framer-motion';
import useLanguage from '@/hooks/useLanguage';
import SectionLabel from '@/components/ui/SectionLabel';
import AnimatedSection from '@/components/ui/AnimatedSection';
import AnimatedItem from '@/components/ui/AnimatedItem';
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/animations';

const CATEGORY_ICONS = {
  Frontend: '◈',
  Backend: '◉',
  'CMS / Platforms': '◎',
  'Databases / Infra': '◫',
  'Quality / Performance': '◌',
  'DevOps / Deployment': '◧',
  'CMS / Platforme': '◎',
  'Baze / Infrastruktura': '◫',
  'Kvalitet / Performanse': '◌',
};

const SkillsSection = () => {
  const { t } = useLanguage();
  const { sectionLabel, heading, subheading, categories } = t.skills;

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="section-pad relative"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 40% at 50% 100%, rgba(99,102,241,0.06) 0%, transparent 100%)',
        }}
      />

      <div className="relative z-10 max-w-300 mx-auto px-5 md:px-8">
        <motion.div
          className="flex flex-col gap-4 mb-14"
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.div variants={fadeUp}>
            <SectionLabel>{sectionLabel}</SectionLabel>
          </motion.div>
          <motion.h2
            id="skills-heading"
            className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold tracking-tight text-text-primary"
            variants={fadeUp}
          >
            {heading}
          </motion.h2>
          <motion.p
            className="text-text-secondary text-base max-w-125"
            variants={fadeUp}
          >
            {subheading}
          </motion.p>
        </motion.div>

        <AnimatedSection
          stagger
          staggerDelay={0.1}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {categories.map((cat) => (
            <AnimatedItem key={cat.name}>
              <article className="card-premium p-6 h-full group">
                <div className="flex items-center gap-2.5 mb-5">
                  <span
                    className="text-accent text-lg font-mono"
                    aria-hidden="true"
                  >
                    {CATEGORY_ICONS[cat.name] ?? '◆'}
                  </span>
                  <h3 className="font-semibold text-text-primary text-sm tracking-wide">
                    {cat.name}
                  </h3>
                </div>
                <ul className="flex flex-wrap gap-2" role="list">
                  {cat.skills.map((skill) => (
                    <li key={skill}>
                      <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-surface-2 border border-border text-text-secondary text-[11px] font-mono tracking-wide transition-all duration-200 group-hover:border-border-strong hover:text-accent hover:border-[rgba(129,140,248,0.3)] cursor-default">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            </AnimatedItem>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
};

export default SkillsSection;
