'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Building2, Calendar } from 'lucide-react';
import useLanguage from '@/hooks/useLanguage';
import SectionLabel from '@/components/ui/SectionLabel';
import Badge from '@/components/ui/Badge';
import AnimatedSection from '@/components/ui/AnimatedSection';
import AnimatedItem from '@/components/ui/AnimatedItem';
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/animations';

const ProjectCard = ({ project, index }) => {
  const [expanded, setExpanded] = useState(index === 0);

  return (
    <div className="border border-border rounded-xl overflow-hidden bg-card transition-all duration-300 hover:border-border-strong">
      <button
        type="button"
        className="w-full flex items-center justify-between gap-4 p-5 text-left group cursor-pointer"
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
        aria-controls={`project-${index}-details`}
      >
        <div className="flex items-start gap-4">
          <span
            className="shrink-0 mt-0.5 w-1.5 h-1.5 rounded-full bg-accent opacity-70"
            aria-hidden="true"
          />
          <div>
            <p className="font-semibold text-text-primary text-sm group-hover:text-accent transition-colors">
              {project.name}
            </p>
            <p className="text-text-muted text-xs mt-0.5 font-mono">
              {project.type}
            </p>
          </div>
        </div>
        <motion.span
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0 text-text-muted"
          aria-hidden="true"
        >
          <ChevronDown size={16} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            id={`project-${index}-details`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pl-9 flex flex-col gap-4">
              <ul className="flex flex-col gap-2" role="list">
                {project.points.map((point, pi) => (
                  <li
                    key={pi}
                    className="flex items-start gap-2.5 text-sm text-text-secondary leading-relaxed"
                  >
                    <span
                      className="shrink-0 mt-1.5 w-1 h-1 rounded-full bg-text-muted"
                      aria-hidden="true"
                    />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((tech) => (
                  <Badge key={tech} variant="default">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ExperienceSection = () => {
  const { t } = useLanguage();
  const exp = t.experience;
  const { notableProjects } = exp;

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="section-pad relative"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 0% 50%, rgba(99,102,241,0.05) 0%, transparent 70%)',
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
            <SectionLabel>{exp.sectionLabel}</SectionLabel>
          </motion.div>
          <motion.h2
            id="experience-heading"
            className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold tracking-tight text-text-primary"
            variants={fadeUp}
          >
            {exp.heading}
          </motion.h2>
          <motion.p
            className="text-text-secondary text-base max-w-140"
            variants={fadeUp}
          >
            {exp.subheading}
          </motion.p>
        </motion.div>

        <AnimatedSection
          stagger
          staggerDelay={0.08}
          className="flex flex-col gap-6"
        >
          <AnimatedItem>
            <div className="card-premium p-7">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-surface-2 border border-border flex items-center justify-center shrink-0">
                    <Building2 size={22} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-text-primary text-xl tracking-tight">
                      {exp.company}
                    </h3>
                    <p className="text-accent text-sm font-medium mt-0.5">
                      {exp.role}
                    </p>
                    <p className="text-text-muted text-sm mt-1 leading-relaxed max-w-95">
                      {exp.companyDesc}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 shrink-0 text-text-muted text-sm font-mono">
                  <Calendar size={14} />
                  <span>{exp.period}</span>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-text-muted mb-1">
                  {notableProjects}
                </p>
                {exp.projects.map((project, i) => (
                  <ProjectCard key={project.name} project={project} index={i} />
                ))}
              </div>
            </div>
          </AnimatedItem>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ExperienceSection;
