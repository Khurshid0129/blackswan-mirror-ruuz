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
          <div className="relative flex items-center justify-center transition-transform duration-300 hover:scale-105 cursor-pointer" onClick={() => scrollToSection('home')}>
            {/* Main logo content */}
            <div className="relative flex flex-col items-center justify-center z-10">
              {/* Top line - extends beyond text */}
              <div className="w-[140%] h-[0.5px] bg-white mb-2"></div>
              
              {/* Logo text */}
              <div className="text-xs sm:text-sm md:text-base font-normal tracking-[0.25em] uppercase text-white font-serif whitespace-nowrap px-2">
                JUSTICE CAPITAL
              </div>
              
              {/* Bottom line - extends beyond text */}
              <div className="w-[140%] h-[0.5px] bg-white mt-2"></div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-white/90 hover:text-white transition-colors uppercase text-sm tracking-wide font-medium"
            >
              {t('nav.home')}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-white/90 hover:text-white transition-colors uppercase text-sm tracking-wide font-medium"
            >
              {t('nav.about')}
            </button>
            <button
              onClick={() => scrollToSection('solutions')}
              className="text-white/90 hover:text-white transition-colors uppercase text-sm tracking-wide font-medium"
            >
              {t('nav.solutions')}
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
              className="text-white hover:text-white/80"
            >
              <Menu className="h-6 w-6 text-white" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 bg-secondary/98 backdrop-blur-sm px-4 py-4 rounded-b-md border-t border-white/20 flex flex-col gap-3 animate-fade-in-down">
            <button
              onClick={() => scrollToSection('home')}
              className="text-white/90 hover:text-white transition-colors text-left py-2 uppercase text-sm tracking-wide font-medium"
            >
              {t('nav.home')}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-white/90 hover:text-white transition-colors text-left py-2 uppercase text-sm tracking-wide font-medium"
            >
              {t('nav.about')}
            </button>
            <button
              onClick={() => scrollToSection('solutions')}
              className="text-white/90 hover:text-white transition-colors text-left py-2 uppercase text-sm tracking-wide font-medium"
            >
              {t('nav.solutions')}
            </button>
            {/* Team link removed */}
            <button
              onClick={() => scrollToSection('contact')}
              className="text-white/90 hover:text-white transition-colors text-left py-2 uppercase text-sm tracking-wide font-medium"
            >
              {t('nav.contact')}
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};
