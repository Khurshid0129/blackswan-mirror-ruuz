import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Clock, Linkedin, Instagram, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { useState } from 'react';

export const Contact = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Разрешаем только цифры
    const value = e.target.value.replace(/\D/g, '');
    e.target.value = value;
  };

  const handlePhoneKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Разрешаем: цифры, Backspace, Delete, Tab, Arrow keys, Home, End
    const allowedKeys = [
      'Backspace', 'Delete', 'Tab', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown',
      'Home', 'End'
    ];
    
    // Разрешаем Ctrl/Cmd + A, C, V, X для выделения, копирования, вставки и вырезания
    if ((e.ctrlKey || e.metaKey) && ['a', 'c', 'v', 'x'].includes(e.key.toLowerCase())) {
      return;
    }
    
    // Если это не разрешенная клавиша и не цифра, блокируем
    if (!allowedKeys.includes(e.key) && !/^\d$/.test(e.key)) {
      e.preventDefault();
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xkgkwazb', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json',
        },
      });

      if (response.ok) {
        toast({
          title: t('contact.success.title'),
          description: t('contact.success.description'),
        });
        form.reset();
      } else {
        const data = await response.json();
        if (data.errors) {
          toast({
            title: 'Error',
            description: data.errors.map((error: any) => error.message).join(', '),
            variant: 'destructive',
          });
        } else {
          throw new Error('Form submission failed');
        }
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Something went wrong. Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: t('contact.info.address'),
      value: t('contact.info.addressText'),
    },
    {
      icon: Phone,
      label: t('contact.info.phone'),
      value: '+998 (94) 241-21-02',
    },
    {
      icon: Mail,
      label: t('contact.info.email'),
      value: 'contact@justicecapital.uz',
    },
  ];

  return (
    <section 
      id="contact" 
      className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden bg-accent/30"
      ref={ref}
    >
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className={`text-center mb-8 sm:mb-10 md:mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-secondary mb-3 sm:mb-4 font-serif">
            {t('contact.title')}
          </h2>
        </div>

        <div className={`max-w-4xl mx-auto mb-10 sm:mb-12 md:mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
          <p className="text-base sm:text-lg text-secondary/80 leading-relaxed font-sans text-center">
            {t('contact.intro')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 max-w-6xl mx-auto">
          <Card className={`bg-white shadow-lg border-accent/20 hover-lift transition-all duration-300 ${
            isVisible ? 'animate-slide-in-left' : 'opacity-0'
          }`} style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            <CardContent className="p-6 sm:p-8 h-full flex flex-col">
              <form onSubmit={handleSubmit} className="flex flex-col h-full font-sans">
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <Input
                      name="name"
                      placeholder={t('contact.form.name')}
                      className="bg-white border border-gray-200 placeholder-gray-500 transition-all duration-300 focus:border-primary focus:ring-2 focus:ring-primary/20"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder={t('contact.form.email')}
                      className="bg-white border border-gray-200 placeholder-gray-500 transition-all duration-300 focus:border-primary focus:ring-2 focus:ring-primary/20"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      name="phone"
                      placeholder={t('contact.form.phone')}
                      className="bg-white border border-gray-200 placeholder-gray-500 transition-all duration-300 focus:border-primary focus:ring-2 focus:ring-primary/20"
                      onChange={handlePhoneChange}
                      onKeyDown={handlePhoneKeyDown}
                      inputMode="numeric"
                    />
                  </div>
                </div>
                <div className="flex-1 flex flex-col mt-4 sm:mt-6">
                  <Textarea
                    name="message"
                    placeholder={t('contact.form.message')}
                    className="bg-white border border-gray-200 placeholder-gray-500 transition-all duration-300 focus:border-primary focus:ring-2 focus:ring-primary/20 flex-1 resize-none"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-secondary text-white hover:bg-secondary/90 font-sans uppercase tracking-wide transition-all duration-300 hover:scale-105 mt-4 sm:mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? t('contact.form.submitting') : t('contact.form.submit')}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-4 sm:space-y-6">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card 
                  key={index} 
                  className={`bg-white shadow-lg border-accent/20 hover-lift transition-all duration-300 group ${
                    isVisible ? 'animate-slide-in-right' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${0.3 + index * 0.1}s`, animationFillMode: 'both' }}
                >
                  <CardContent className="p-5 sm:p-6 flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/30 flex items-center justify-center flex-shrink-0 rounded-lg transition-all duration-300 group-hover:bg-accent/50 group-hover:scale-110">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary transition-transform duration-300 group-hover:rotate-6" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-normal text-secondary mb-1 font-serif">{item.label}</h3>
                      <p className="text-sm sm:text-base text-secondary/80 font-sans">{item.value}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
              {/* Social links card (LinkedIn, Instagram, Telegram) */}
              <Card 
                className={`bg-white shadow-lg border-accent/20 hover-lift transition-all duration-300 group ${
                  isVisible ? 'animate-slide-in-right' : 'opacity-0'
                }`}
                style={{ animationDelay: `${0.3 + contactInfo.length * 0.1}s`, animationFillMode: 'both' }}
              >
                <CardContent className="p-5 sm:p-6">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/30 flex items-center justify-center flex-shrink-0 rounded-lg">
                      <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <div>
                        <h3 className="text-base sm:text-lg font-normal text-secondary mb-1">LinkedIn</h3>
                      <p className="text-sm sm:text-base text-secondary/80">
                        <a href="https://www.linkedin.com/company/justicecapital" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Visit our LinkedIn</a>
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 sm:mt-4 flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/30 flex items-center justify-center flex-shrink-0 rounded-lg">
                      <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <div>
                        <h3 className="text-base sm:text-lg font-normal text-secondary mb-1">Instagram</h3>
                      <p className="text-sm sm:text-base text-secondary/80">
                        <a href="https://www.instagram.com/justicecapital" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Follow us on Instagram</a>
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 sm:mt-4 flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/30 flex items-center justify-center flex-shrink-0 rounded-lg">
                      <Send className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <div>
                        <h3 className="text-base sm:text-lg font-normal text-secondary mb-1">Telegram</h3>
                      <p className="text-sm sm:text-base text-secondary/80">
                        <a href="https://t.me/justicecapital" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Join us on Telegram</a>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
