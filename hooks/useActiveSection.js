'use client';

import { useState, useEffect, useCallback } from 'react';

const useActiveSection = (sectionIds, offset = 100) => {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? '');

  const findActive = useCallback(() => {
    const scrollY = window.scrollY + offset;

    let current = sectionIds[0] ?? '';
    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (!el) continue;
      if (el.offsetTop <= scrollY) {
        current = id;
      }
    }
    setActiveSection(current);
  }, [sectionIds, offset]);

  useEffect(() => {
    let rafId = null;

    const onScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        findActive();
        rafId = null;
      });
    };

    rafId = requestAnimationFrame(() => {
      findActive();
      rafId = null;
    });
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [findActive]);

  return activeSection;
};

export default useActiveSection;
