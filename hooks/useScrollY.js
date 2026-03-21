'use client';

import { useState, useEffect } from 'react';

const useScrollY = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let rafId = null;

    const onScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        setScrollY(window.scrollY);
        rafId = null;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return scrollY;
};

export default useScrollY;
