import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { useState } from 'react';

export const Header = () => {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
  <header className="fixed top-0 left-0 right-0 z-50 site-header bg-secondary text-white shadow-md animate-fade-in-down">
      <nav className="container mx-auto py-4">
        <div className="flex items-center justify-between">
          <div className="text-lg sm:text-2xl font-bold font-playfair tracking-wider transition-transform duration-300 hover:scale-105">
            <span className="text-white">Law agency</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 font-sans">
            <button
              onClick={() => scrollToSection('home')}
              className="text-white/90 hover:text-white transition-colors uppercase text-sm tracking-wide font-medium"
            >
              {t('nav.home')}
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-white/90 hover:text-white transition-colors uppercase text-sm tracking-wide font-medium"
            >
              {t('nav.services')}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-white/90 hover:text-white transition-colors uppercase text-sm tracking-wide font-medium"
            >
              {t('nav.about')}
            </button>
            {/* Team link removed */}
            <button
              onClick={() => scrollToSection('contact')}
              className="text-white/90 hover:text-white transition-colors uppercase text-sm tracking-wide font-medium"
            >
              {t('nav.contact')}
            </button>
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? t('nav.closeMenu', 'Close menu') : t('nav.openMenu', 'Open menu')}
              aria-expanded={mobileMenuOpen}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div 
            className="md:hidden mt-3 bg-background/95 px-4 py-4 rounded-b-md border-t border-border flex flex-col gap-3 animate-fade-in-down"
            role="menu"
            aria-label={t('nav.menu', 'Navigation menu')}
          >
            <button
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary transition-colors text-left py-2"
            >
              {t('nav.home')}
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-primary transition-colors text-left py-2"
            >
              {t('nav.services')}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors text-left py-2"
            >
              {t('nav.about')}
            </button>
            {/* Team link removed */}
            <button
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors text-left py-2"
            >
              {t('nav.contact')}
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};
