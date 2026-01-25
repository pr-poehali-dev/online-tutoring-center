import { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import MainSections from '@/components/MainSections';
import ContactForm from '@/components/ContactForm';
import FooterWithChat from '@/components/FooterWithChat';
import AccessibilityBar from '@/components/AccessibilityBar';
import Accessible from '@/pages/Accessible';

export default function Index() {
  const [isAccessible, setIsAccessible] = useState(false);

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

  const toggleAccessibility = () => {
    setIsAccessible(!isAccessible);
    window.scrollTo(0, 0);
  };

  if (isAccessible) {
    return <Accessible onToggle={toggleAccessibility} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <AccessibilityBar isAccessible={isAccessible} onToggle={toggleAccessibility} />
      <Navigation />
      <MainSections />
      <ContactForm />
      <FooterWithChat />
    </div>
  );
}