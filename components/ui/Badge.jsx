const Badge = ({ children, variant = 'default', className = '' }) => {
  const variants = {
    default: 'bg-surface-2 text-text-secondary border border-border',
    accent:
      'bg-[rgba(129,140,248,0.1)] text-accent border border-[rgba(129,140,248,0.2)]',
    ghost: 'bg-transparent text-text-muted border border-border',
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-[11px] font-medium font-mono tracking-wide ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;
