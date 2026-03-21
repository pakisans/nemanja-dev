'use client';

import { motion } from 'framer-motion';
import { sectionLabelVariant, viewportOnce } from '@/lib/animations';

const SectionLabel = ({ children, className = '' }) => (
  <motion.div
    className={`inline-flex items-center gap-2 ${className}`}
    initial="hidden"
    whileInView="visible"
    viewport={viewportOnce}
    variants={sectionLabelVariant}
  >
    <span className="w-1.5 h-1.5 rounded-full bg-accent" aria-hidden="true" />
    <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-accent">
      {children}
    </span>
  </motion.div>
);

export default SectionLabel;
