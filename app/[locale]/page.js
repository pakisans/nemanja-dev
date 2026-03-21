import { notFound } from 'next/navigation';
import { isValidLocale } from '@/lib/i18n';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import WhyMeSection from '@/components/sections/WhyMeSection';
import ContactSection from '@/components/sections/ContactSection';
import FooterSection from '@/components/sections/FooterSection';

const PortfolioPage = async ({ params }) => {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <WhyMeSection />
      <ContactSection />
      <FooterSection />
    </>
  );
};

export default PortfolioPage;

export const dynamic = 'force-static';
