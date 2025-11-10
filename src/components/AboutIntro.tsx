import { useTranslation } from 'react-i18next';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import introImage from './new-suit.png';

export const AboutIntro = () => {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section className="py-20 md:py-24 bg-white" ref={ref}>
      {/* Text Content - above image, aligned with image left edge */}
      <div className="mb-8 md:mb-16 px-6 md:px-[62px]">
        <div className={`max-w-6xl ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-normal text-primary mb-4 md:mb-6 font-serif leading-tight">
            {t('aboutIntro.title')}
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-foreground leading-relaxed font-sans">
            {t('aboutIntro.description')}
          </p>
        </div>
      </div>

      {/* Image - full width, outside container */}
      <div className={`w-full ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
        <div className="px-4 md:px-5 mb-8 md:mb-[92.4px]">
          <img 
            src={introImage} 
            alt="Team" 
            className="w-full h-[400px] sm:h-[500px] md:h-[700px] lg:h-[900px] object-cover object-[85%_50%] md:object-center"
          />
        </div>
      </div>

      {/* Bottom line with gradient edges */}
      <div className="w-full px-6 md:px-[62px] mt-8 md:mt-[92.4px]">
        <div 
          className="w-full h-[1px]" 
          style={{ 
            background: 'linear-gradient(to right, transparent, rgb(147 197 253), transparent)'
          }}
        ></div>
      </div>
    </section>
  );
};

