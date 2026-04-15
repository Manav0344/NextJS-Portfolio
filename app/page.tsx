import HeroSection from "@/components/sections/HeroSection";
import AboutPreview from "@/components/sections/AboutPreview";
import SkillsHighlight from "@/components/sections/SkillsHighlight";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Testimonials from "@/components/sections/Testimonials";
import ContactCTA from "@/components/sections/ContactCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <SkillsHighlight />
      <FeaturedProjects />
      <Testimonials />
      <ContactCTA />
    </>
  );
}
