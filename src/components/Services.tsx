import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { Scale, Briefcase, DollarSign, Search, AlertTriangle, Shield } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

export const Services = () => {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollAnimation(0.1);

  const services = [
    {
      icon: Scale,
      key: 'singleCase',
    },
    {
      icon: Briefcase,
      key: 'portfolio',
    },
    {
      icon: DollarSign,
      key: 'judgment',
    },
    {
      icon: Search,
      key: 'enforcement',
    },
    {
      icon: AlertTriangle,
      key: 'insolvency',
    },
    {
      icon: Shield,
      key: 'riskSharing',
    },
  ];

  return (
    <section 
      id="solutions" 
      className="py-20 md:py-24 relative overflow-hidden bg-cover bg-center bg-no-repeat bg-secondary"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1920&q=80')",
      }}
      ref={ref}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/95 via-secondary/90 to-secondary/95"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-normal text-white mb-4 font-serif">
            {t('solutions.title')}
          </h2>
        </div>

        <div className={`max-w-4xl mx-auto mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
          <p className="text-lg text-white/90 leading-relaxed font-sans text-center">
            {t('solutions.intro')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.key}
                className={`bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 hover:border-white/30 hover:shadow-lg transition-all duration-300 group cursor-pointer hover-lift ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-white/20 flex items-center justify-center mb-6 rounded-lg group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
                    <Icon className="w-8 h-8 text-white transition-transform duration-300 group-hover:rotate-6" />
                  </div>
                  <h3 className="text-2xl font-normal text-white mb-4 font-serif">
                    {t(`solutions.${service.key}.title`)}
                  </h3>
                  <p className="text-white/90 leading-relaxed font-sans">
                    {t(`solutions.${service.key}.description`)}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
