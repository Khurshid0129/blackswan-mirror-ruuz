import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="text-2xl font-bold text-foreground mb-4 font-playfair tracking-wider">
              <span className="text-primary">BLACK SWAN</span> LAW
            </div>
            <p className="text-muted-foreground font-sans">{t('footer.description')}</p>
          </div>

          <div>
            <h4 className="text-lg font-bold text-foreground mb-4 font-playfair">{t('nav.services')}</h4>
            <ul className="space-y-2 text-muted-foreground font-sans">
              <li>{t('services.corporate.title')}</li>
              <li>{t('services.litigation.title')}</li>
              <li>{t('services.international.title')}</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-foreground mb-4 font-playfair">{t('contact.info.address')}</h4>
            <ul className="space-y-2 text-muted-foreground font-sans">
              <li>{t('contact.info.addressText')}</li>
              <li>+1 (555) 123-4567</li>
              <li>contact@blackswan.law</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm font-sans">{t('footer.copyright')}</p>
          <div className="flex gap-6 text-sm text-muted-foreground font-sans">
            <a href="#" className="hover:text-primary transition-colors">
              {t('footer.privacy')}
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              {t('footer.terms')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
