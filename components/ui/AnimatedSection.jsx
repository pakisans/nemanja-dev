'use client';

import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/animations';

const AnimatedSection = ({
  children,
  className = '',
  variant,
  stagger = false,
  staggerDelay = 0.09,
  delay = 0,
  as = 'div',
}) => {
  const MotionEl = motion[as] ?? motion.div;

  const resolvedVariant = stagger
    ? staggerContainer(staggerDelay, delay)
    : (variant ?? fadeUp);

  return (
    <MotionEl
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={resolvedVariant}
    >
      {children}
    </MotionEl>
  );
};

export default AnimatedSection;
