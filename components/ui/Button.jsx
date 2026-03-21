'use client';

import { motion } from 'framer-motion';

const Button = ({
  children,
  variant = 'primary',
  href,
  target,
  rel,
  onClick,
  className = '',
  icon,
  iconPosition = 'right',
  download,
  type = 'button',
  disabled = false,
  'aria-label': ariaLabel,
}) => {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-xl font-medium text-sm transition-all duration-300 select-none cursor-pointer whitespace-nowrap focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-3';

  const variants = {
    primary: [
      'px-6 py-3',
      'bg-accent text-[#07070a]',
      'hover:bg-[#a5b0ff] hover:shadow-[0_0_32px_rgba(129,140,248,0.35)]',
      'active:scale-[0.97]',
    ].join(' '),
    secondary: [
      'px-6 py-3',
      'bg-surface-2 text-text-primary',
      'border border-border-strong',
      'hover:border-accent hover:text-accent',
      'active:scale-[0.97]',
    ].join(' '),
    ghost: [
      'px-5 py-2.5',
      'bg-transparent text-text-secondary',
      'hover:text-text-primary hover:bg-surface',
      'active:scale-[0.97]',
    ].join(' '),
  };

  const content = (
    <>
      {icon && iconPosition === 'left' && (
        <span className="shrink-0" aria-hidden="true">
          {icon}
        </span>
      )}
      <span>{children}</span>
      {icon && iconPosition === 'right' && (
        <span className="shrink-0" aria-hidden="true">
          {icon}
        </span>
      )}
    </>
  );

  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.97 },
    transition: { duration: 0.2 },
  };

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        download={download}
        aria-label={ariaLabel}
        className={`${base} ${variants[variant]} ${className}`}
        {...motionProps}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={`${base} ${variants[variant]} ${className} ${disabled ? 'opacity-60 cursor-not-allowed' : ''}`}
      {...(disabled ? {} : motionProps)}
    >
      {content}
    </motion.button>
  );
};

export default Button;
