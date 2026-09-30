import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './sections/HeroSection';
import { SustainabilitySection } from './sections/SustainabilitySection';
import { AdventureSection } from './sections/AdventureSection';
import { FeatureBannerSection } from './sections/FeatureBannerSection';
import { WhyChooseSection } from './sections/WhyChooseSection';
import { CollectionsSection } from './sections/CollectionsSection';
import { BlogSection } from './sections/BlogSection';
import { NewsletterSection } from './sections/NewsletterSection';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <SustainabilitySection />
        <AdventureSection />
        <FeatureBannerSection />
        <WhyChooseSection />
        <CollectionsSection />
        <BlogSection />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
}
