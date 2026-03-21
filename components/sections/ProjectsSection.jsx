'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import useLanguage from '@/hooks/useLanguage';
import SectionLabel from '@/components/ui/SectionLabel';
import Badge from '@/components/ui/Badge';
import AnimatedSection from '@/components/ui/AnimatedSection';
import AnimatedItem from '@/components/ui/AnimatedItem';
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/animations';
import Link from 'next/link';

const ProjectCard = ({ project, viewLabel }) => (
  <Link
    href={project.url}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`Visit ${project.name} — opens in new tab`}
    className="block h-full"
  >
    <motion.article
      className="card-premium group relative overflow-hidden flex flex-col h-full cursor-pointer"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      <div
        className="absolute top-0 inset-x-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            'linear-gradient(90deg, transparent, var(--color-accent), transparent)',
        }}
        aria-hidden="true"
      />

      <div className="p-6 flex flex-col gap-5 flex-1">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-semibold tracking-[0.16em] uppercase text-text-muted">
            {project.type}
          </span>
          <span
            className="text-text-muted text-[10px] font-mono px-2 py-0.5 rounded-md bg-surface-2 border border-border"
            aria-label="Project angle"
          >
            {project.angle}
          </span>
        </div>

        <div>
          <h3 className="text-xl font-bold text-text-primary tracking-tight group-hover:text-accent transition-colors duration-300">
            {project.name}
          </h3>
        </div>

        <p className="text-text-secondary text-sm leading-relaxed flex-1">
          {project.desc}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((tech) => (
            <Badge key={tech} variant="default">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="inline-flex items-center gap-1.5 text-sm font-medium text-text-muted group-hover:text-accent transition-colors duration-200 mt-auto pt-1">
          <span>{viewLabel}</span>
          <ArrowUpRight
            size={14}
            className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </div>
      </div>
    </motion.article>
  </Link>
);

const ProjectsSection = () => {
  const { t } = useLanguage();
  const { sectionLabel, heading, subheading, items, viewProject } = t.projects;

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="section-pad relative"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 40% at 80% 50%, rgba(192,132,252,0.05) 0%, transparent 70%)',
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
            id="projects-heading"
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
          staggerDelay={0.12}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {items.map((project) => (
            <AnimatedItem key={project.id}>
              <ProjectCard project={project} viewLabel={viewProject} />
            </AnimatedItem>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ProjectsSection;
