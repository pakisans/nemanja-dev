'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';

const LinkedInSvg = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GitHubSvg = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S9.1 17.44 9 18v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);
import useLanguage from '@/hooks/useLanguage';
import SectionLabel from '@/components/ui/SectionLabel';
import Button from '@/components/ui/Button';
import AnimatedSection from '@/components/ui/AnimatedSection';
import AnimatedItem from '@/components/ui/AnimatedItem';
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/animations';
import Link from 'next/link';

const inputClass =
  'w-full bg-surface border border-border rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors duration-200';

const ContactSection = () => {
  const { t } = useLanguage();
  const ct = t.contact;

  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? 'success' : 'error');
      if (res.ok) setForm({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const links = [
    {
      icon: <Mail size={18} />,
      label: ct.emailLabel,
      value: ct.email,
      href: `mailto:${ct.email}`,
    },
    {
      icon: <LinkedInSvg />,
      label: ct.linkedIn,
      value: 'nemanja-nakomcic',
      href: 'https://linkedin.com/in/nemanja-nakomcic/',
    },
    {
      icon: <GitHubSvg />,
      label: ct.gitHub,
      value: 'pakisans',
      href: 'https://github.com/pakisans',
    },
  ];

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="section-pad relative"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 60% at 50% 100%, rgba(99,102,241,0.1) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-300 mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <motion.div
            className="flex flex-col gap-8"
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <div className="flex flex-col gap-4">
              <motion.div variants={fadeUp}>
                <SectionLabel>{ct.sectionLabel}</SectionLabel>
              </motion.div>
              <motion.h2
                id="contact-heading"
                className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold tracking-tight text-text-primary"
                variants={fadeUp}
              >
                {ct.heading}
              </motion.h2>
              <motion.p
                className="text-text-secondary text-base leading-relaxed"
                variants={fadeUp}
              >
                {ct.subheading}
              </motion.p>
              <motion.div variants={fadeUp}>
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[rgba(74,222,128,0.08)] border border-[rgba(74,222,128,0.2)] text-[#4ade80] text-xs font-semibold tracking-wide">
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-[#4ade80]"
                    style={{ boxShadow: '0 0 8px rgba(74,222,128,0.8)' }}
                    aria-hidden="true"
                  />
                  {ct.availability}
                </span>
              </motion.div>
            </div>

            <AnimatedSection
              stagger
              staggerDelay={0.1}
              className="flex flex-col gap-3"
            >
              {links.map(({ icon, label, value, href }) => (
                <AnimatedItem key={label}>
                  <Link
                    href={href}
                    target={href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={
                      href.startsWith('mailto:')
                        ? undefined
                        : 'noopener noreferrer'
                    }
                    className="group flex items-center gap-4 p-4 rounded-xl border border-border hover:border-[rgba(129,140,248,0.3)] bg-surface hover:bg-surface-2 transition-all duration-300"
                  >
                    <span className="w-10 h-10 rounded-xl bg-surface-2 border border-border flex items-center justify-center text-text-muted group-hover:text-accent group-hover:border-[rgba(129,140,248,0.3)] transition-all duration-300 shrink-0">
                      {icon}
                    </span>
                    <div>
                      <p className="text-xs font-semibold text-text-muted tracking-wide uppercase mb-0.5">
                        {label}
                      </p>
                      <p className="text-sm text-text-secondary group-hover:text-accent transition-colors duration-200 font-mono tracking-wide">
                        {value}
                      </p>
                    </div>
                  </Link>
                </AnimatedItem>
              ))}
            </AnimatedSection>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="card-premium p-8"
          >
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
                <CheckCircle size={48} className="text-[#4ade80]" />
                <p className="text-text-primary font-semibold text-lg">
                  {ct.form.successTitle}
                </p>
                <p className="text-text-secondary text-sm">
                  {ct.form.successDesc}
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-2 text-accent text-sm hover:underline cursor-pointer"
                >
                  {ct.form.sendAnother}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="name"
                      className="text-xs font-semibold text-text-muted tracking-wide uppercase"
                    >
                      {ct.form.name}
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder={ct.form.namePlaceholder}
                      className={inputClass}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="email"
                      className="text-xs font-semibold text-text-muted tracking-wide uppercase"
                    >
                      {ct.form.email}
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder={ct.form.emailPlaceholder}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="subject"
                    className="text-xs font-semibold text-text-muted tracking-wide uppercase"
                  >
                    {ct.form.subject}
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder={ct.form.subjectPlaceholder}
                    className={inputClass}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="message"
                    className="text-xs font-semibold text-text-muted tracking-wide uppercase"
                  >
                    {ct.form.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder={ct.form.messagePlaceholder}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-400 text-sm bg-[rgba(248,113,113,0.08)] border border-[rgba(248,113,113,0.2)] rounded-xl px-4 py-3">
                    <AlertCircle size={16} className="shrink-0" />
                    {ct.form.error}
                  </div>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  icon={<Send size={15} />}
                  disabled={status === 'loading'}
                  className="w-full justify-center py-3.5!"
                >
                  {status === 'loading' ? ct.form.sending : ct.form.submit}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
