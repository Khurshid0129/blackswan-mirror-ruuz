import { useTranslation } from 'react-i18next';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { Building2, Scale, Globe2 } from 'lucide-react';

export const WhoWeSupport = () => {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollAnimation(0.1);

  const supports = [
    {
      icon: Building2,
      key: 'businesses',
    },
    {
      icon: Scale,
      key: 'lawFirms',
    },
    {
      icon: Globe2,
      key: 'crossBorder',
    },
  ];

  const reasons = [
    { key: 'meritDriven' },
    { key: 'nonRecourse' },
    { key: 'alignedInterests' },
    { key: 'localRoots' },
  ];

  return (
    <section id="who-we-support" className="py-20 md:py-24 bg-white" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Who We Support - Left */}
          <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-normal text-secondary mb-4 font-serif">
                {t('whoWeSupport.title')}
              </h2>
            </div>

            <div className="space-y-6">
              {supports.map((support, index) => {
                const Icon = support.icon;
                return (
                  <div
                    key={support.key}
                    className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                    style={{ animationDelay: `${0.1 + index * 0.1}s`, animationFillMode: 'both' }}
                  >
                    <div className="w-12 h-12 bg-accent/30 flex items-center justify-center mb-4 rounded-lg">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-normal text-secondary mb-3 font-serif">
                      {t(`whoWeSupport.${support.key}.title`)}
                    </h3>
                    <p className="text-base text-secondary/80 leading-relaxed font-sans">
                      {t(`whoWeSupport.${support.key}.description`)}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Why Justice Capital - Right */}
          <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-normal text-secondary mb-4 font-serif">
                {t('whyJusticeCapital.title')}
              </h2>
            </div>

            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <div
                  key={reason.key}
                  className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${0.5 + index * 0.1}s`, animationFillMode: 'both' }}
                >
                  <h3 className="text-lg font-normal text-secondary font-serif mb-2 border-b border-secondary/20 pb-2">
                    {t(`whyJusticeCapital.${reason.key}.title`)}
                  </h3>
                  <p className="text-sm text-secondary/80 leading-relaxed font-sans mt-2">
                    {t(`whyJusticeCapital.${reason.key}.description`)}
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
