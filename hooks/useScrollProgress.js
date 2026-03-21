'use client';

import { useSyncExternalStore } from 'react';

// Module-level store — single scroll listener shared across all hook instances
let rafId = null;
const listeners = new Set();
let cachedProgress = 0;

const computeProgress = () => {
  const el = document.documentElement;
  const scrollable = el.scrollHeight - el.clientHeight;
  return scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0;
};

const notify = () => {
  cachedProgress = computeProgress();
  listeners.forEach((cb) => cb());
};

const onScroll = () => {
  if (rafId) return;
  rafId = requestAnimationFrame(() => {
    notify();
    rafId = null;
  });
};

const subscribe = (cb) => {
  if (listeners.size === 0) {
    window.addEventListener('scroll', onScroll, { passive: true });
  }
  listeners.add(cb);
  return () => {
    listeners.delete(cb);
    if (listeners.size === 0) {
      window.removeEventListener('scroll', onScroll);
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
    }
  };
};

const getSnapshot = () => cachedProgress;
const getServerSnapshot = () => 0;

const useScrollProgress = () =>
  useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

export default useScrollProgress;
