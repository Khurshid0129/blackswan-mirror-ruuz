import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import buildingImage from './building.png';

export const Hero = () => {
  const { t } = useTranslation();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-[80vh] md:min-h-screen relative overflow-hidden flex flex-col lg:flex-row"
    >
      {/* Левая часть с изображением */}
      {/* Left-side decorative/background image: shown on lg and up, hidden on small screens */}
      <div className="hidden lg:block w-full lg:w-1/2 min-h-[50vh] lg:min-h-full relative order-1">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${buildingImage}')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-l from-primary/30 to-transparent" />
      </div>

      {/* Правая часть с текстом */}
      <div className="w-full lg:w-1/2 bg-primary flex items-center justify-center px-6 py-20 lg:py-0 order-2">
        <div className="max-w-xl mx-auto lg:mx-0 lg:mr-auto lg:ml-20">
          {/* Mobile: show image inside the content area (hidden on lg and up) */}
          <div className="mb-6 lg:hidden">
            <img
              src={buildingImage}
              alt="Office building"
              className="w-full rounded-md object-cover shadow-elegant"
            />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-6 sm:mb-8 leading-tight animate-fade-in-up font-serif" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            {t('hero.title')}
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-4 sm:mb-6 leading-relaxed font-light animate-fade-in-up max-w-lg font-sans" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
            {t('hero.subtitle')}
          </p>
          
          <p className="text-sm sm:text-base md:text-lg text-white/90 mb-6 sm:mb-12 leading-relaxed font-light animate-fade-in-up max-w-lg font-sans" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
            {t('hero.paragraph')}
          </p>
          
          <Button
            size="lg"
            onClick={scrollToContact}
            className="bg-white text-primary hover:bg-white/90 shadow-elegant text-base px-8 py-4 group animate-scale-in hover-lift font-medium"
            style={{ animationDelay: '0.6s', animationFillMode: 'both' }}
          >
            {t('hero.cta')}
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </section>
  );
};
