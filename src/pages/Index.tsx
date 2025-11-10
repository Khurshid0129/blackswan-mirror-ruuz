import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { WhoWeSupport } from '@/components/WhoWeSupport';
import { AboutIntro } from '@/components/AboutIntro';
import { Services } from '@/components/Services';
import { About } from '@/components/About';
// Team section removed per request
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <WhoWeSupport />
      <AboutIntro />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
