import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SkillsPreview from '@/components/SkillsPreview';
import FeaturedProjects from '@/components/FeaturedProjects';
import ServicesGoals from '@/components/ServicesGoals';
import CallToAction from '@/components/CallToAction';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <SkillsPreview />
      <FeaturedProjects />
      <ServicesGoals />
      <CallToAction />
    </div>
  );
};

export default Index;
