'use client';

import { useSyncExternalStore } from 'react';

const MQ = '(prefers-reduced-motion: reduce)';

const subscribe = (cb) => {
  const mql = window.matchMedia(MQ);
  mql.addEventListener('change', cb);
  return () => mql.removeEventListener('change', cb);
};

const getSnapshot = () => window.matchMedia(MQ).matches;
const getServerSnapshot = () => false;

const useReducedMotion = () =>
  useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

export default useReducedMotion;
