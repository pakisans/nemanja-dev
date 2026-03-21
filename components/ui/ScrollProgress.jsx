'use client';

import { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import useScrollProgress from '@/hooks/useScrollProgress';

export default function ScrollProgress() {
  const raw = useScrollProgress();
  const mv = useMotionValue(0);
  const scaleX = useSpring(mv, { stiffness: 280, damping: 32, restDelta: 0.001 });
  const opacity = useTransform(scaleX, [0, 0.015], [0, 1]);

  useEffect(() => {
    mv.set(raw);
  }, [raw, mv]);

  return (
    <motion.div
      aria-hidden="true"
      style={{
        scaleX,
        opacity,
        transformOrigin: 'left',
        boxShadow:
          '0 0 6px rgba(129,140,248,0.65), 0 0 18px rgba(129,140,248,0.25)',
      }}
      className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent"
    />
  );
}
