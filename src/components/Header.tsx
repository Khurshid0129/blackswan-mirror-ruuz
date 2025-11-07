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
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-foreground font-playfair tracking-wider">
            <span className="text-primary">BLACK SWAN</span> LAW
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 font-poppins">
            <button
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary transition-colors uppercase text-sm tracking-wide"
            >
              {t('nav.home')}
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-primary transition-colors uppercase text-sm tracking-wide"
            >
              {t('nav.services')}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors uppercase text-sm tracking-wide"
            >
              {t('nav.about')}
            </button>
            <button
              onClick={() => scrollToSection('team')}
              className="text-foreground hover:text-primary transition-colors uppercase text-sm tracking-wide"
            >
              {t('nav.team')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors uppercase text-sm tracking-wide"
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
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary transition-colors text-left"
            >
              {t('nav.home')}
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-primary transition-colors text-left"
            >
              {t('nav.services')}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors text-left"
            >
              {t('nav.about')}
            </button>
            <button
              onClick={() => scrollToSection('team')}
              className="text-foreground hover:text-primary transition-colors text-left"
            >
              {t('nav.team')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors text-left"
            >
              {t('nav.contact')}
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};
