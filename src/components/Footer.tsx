import { useTranslation } from 'react-i18next';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

export const Footer = () => {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
  <footer className="site-footer border-t border-border py-12" ref={ref}>
      <div className="container mx-auto px-6">
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div>
            <div className="text-2xl font-bold text-foreground mb-4 font-playfair tracking-wider transition-transform duration-300 hover:scale-105">
              <span className="text-primary">LAW</span> AGENCY
            </div>
            <p className="text-muted-foreground font-sans">{t('footer.description')}</p>
          </div>

          <div>
            <h4 className="text-lg font-bold text-foreground mb-4 font-playfair">{t('nav.services')}</h4>
            <ul className="space-y-2 text-muted-foreground font-sans">
              <li className="transition-colors duration-300 hover:text-primary cursor-pointer">{t('services.corporate.title')}</li>
              <li className="transition-colors duration-300 hover:text-primary cursor-pointer">{t('services.litigation.title')}</li>
              <li className="transition-colors duration-300 hover:text-primary cursor-pointer">{t('services.international.title')}</li>
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

        <div className={`border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
          <p className="text-muted-foreground text-sm font-sans">{t('footer.copyright')}</p>
          <div className="flex gap-6 text-sm text-muted-foreground font-sans">
            <a href="#" className="hover:text-primary transition-colors duration-300">
              {t('footer.privacy')}
            </a>
            <a href="#" className="hover:text-primary transition-colors duration-300">
              {t('footer.terms')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
