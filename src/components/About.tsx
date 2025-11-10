import { useTranslation } from 'react-i18next';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

export const About = () => {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollAnimation(0.1);

  const values = [
    { key: 'integrity' },
    { key: 'transparency' },
    { key: 'discipline' },
    { key: 'partnership' },
  ];

  return (
    <section 
      id="about" 
      className="pt-12 md:pt-16 pb-20 md:pb-24 bg-white"
      ref={ref}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className={`text-center mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-normal text-secondary mb-4 font-serif">
              {t('about.title')}
            </h2>
            <p className="text-xl text-secondary/80 mb-8 font-sans">{t('about.subtitle')}</p>
          </div>

          {/* Text Blocks */}
          <div className={`space-y-8 mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            <p className="text-lg text-secondary/80 leading-relaxed font-sans">
              {t('about.textBlock1')}
            </p>
            <p className="text-lg text-secondary/80 leading-relaxed font-sans">
              {t('about.textBlock2')}
            </p>
          </div>

          {/* Values Grid */}
          <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div
                  key={value.key}
                  className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${0.5 + index * 0.1}s`, animationFillMode: 'both' }}
                >
                  <h3 className="text-xl font-normal text-secondary font-serif mb-3 border-b border-secondary/20 pb-2">
                    {t(`about.values.${value.key}.title`)}
                  </h3>
                  <p className="text-base text-secondary/80 leading-relaxed font-sans mt-3">
                    {t(`about.values.${value.key}.description`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
