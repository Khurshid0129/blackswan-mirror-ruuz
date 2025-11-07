import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';

export const Team = () => {
  const { t } = useTranslation();

  const team = [
    {
      name: 'Alexander Morrison',
      role: 'managing',
      specialty: 'Corporate Law',
    },
    {
      name: 'Victoria Chen',
      role: 'senior',
      specialty: 'International Law',
    },
    {
      name: 'David Williams',
      role: 'partner',
      specialty: 'Litigation',
    },
    {
      name: 'Sarah Anderson',
      role: 'partner',
      specialty: 'Intellectual Property',
    },
  ];

  return (
    <section id="team" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-playfair">
            {t('team.title')}
          </h2>
          <p className="text-xl text-muted-foreground font-sans">{t('team.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary transition-all duration-300 group"
            >
              <CardContent className="p-0">
                <div className="aspect-square bg-secondary flex items-center justify-center text-6xl font-bold text-primary/20 group-hover:text-primary/30 transition-colors">
                  {member.name.charAt(0)}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2 font-playfair">{member.name}</h3>
                  <p className="text-primary text-sm mb-1 font-sans">{t(`team.role.${member.role}`)}</p>
                  <p className="text-muted-foreground text-sm font-sans">{member.specialty}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
