'use client';

import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/animations';

const AnimatedItem = ({ children, className = '', variant }) => (
  <motion.div className={className} variants={variant ?? fadeUp}>
    {children}
  </motion.div>
);

export default AnimatedItem;
