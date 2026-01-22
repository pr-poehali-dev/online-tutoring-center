import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import MainSections from '@/components/MainSections';
import ContactForm from '@/components/ContactForm';
import FooterWithChat from '@/components/FooterWithChat';

export default function Index() {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.animate-on-scroll');
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          section.classList.add('animate-fade-in-up');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <MainSections />
      <ContactForm />
      <FooterWithChat />
    </div>
  );
}
