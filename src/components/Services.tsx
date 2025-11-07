import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { Scale, Users, Globe2, Lightbulb, Building2, Calculator } from 'lucide-react';

export const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Building2,
      key: 'corporate',
    },
    {
      icon: Scale,
      key: 'litigation',
    },
    {
      icon: Globe2,
      key: 'international',
    },
    {
      icon: Lightbulb,
      key: 'intellectual',
    },
    {
      icon: Users,
      key: 'real',
    },
    {
      icon: Calculator,
      key: 'tax',
    },
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t('services.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.key}
                className="bg-card border-border hover:border-primary transition-all duration-300 group cursor-pointer"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {t(`services.${service.key}.title`)}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t(`services.${service.key}.description`)}
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
