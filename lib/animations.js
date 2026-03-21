const ease = [0.21, 0.47, 0.32, 0.98];
const easeOut = [0.0, 0.0, 0.2, 1.0];

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: easeOut } },
};

export const fadeLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease } },
};

export const fadeRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease } },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.55, ease } },
};

export const staggerContainer = (
  staggerChildren = 0.09,
  delayChildren = 0,
) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren, delayChildren },
  },
});

export const letterContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.3 } },
};

export const letterReveal = {
  hidden: { opacity: 0, y: 40, rotateX: -20 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.55, ease },
  },
};

export const sectionLabelVariant = {
  hidden: { opacity: 0, x: -16, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.5, ease },
  },
};

export const cardHover = {
  rest: { y: 0, scale: 1 },
  hover: { y: -4, scale: 1.005, transition: { duration: 0.3, ease } },
};

export const viewportOnce = { once: true, amount: 0 };
export const viewportRepeat = { once: false, amount: 0 };
