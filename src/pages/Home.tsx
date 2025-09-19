import HeroSection from "@/components/sections/HeroSection";
import FeaturesOverview from "@/components/sections/FeaturesOverview";
import TrustedBySection from "@/components/sections/TrustedBySection";
import CTASection from "@/components/sections/CTASection";

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesOverview />
      <TrustedBySection />
      <CTASection />
    </div>
  );
};

export default Home;