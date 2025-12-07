/**
 * Cancer Awareness & Support - Main Landing Page
 * A modern, responsive single-page website promoting cancer awareness
 * Features: Smooth animations, API integration, form validation
 */

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Quotes from '@/components/Quotes';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Sticky Navigation */}
      <Navbar />
      
      {/* Hero Section - Full screen with banner */}
      <Hero />
      
      {/* About Section - Two column layout */}
      <About />
      
      {/* Quotes Section - API-powered inspirational quotes */}
      <Quotes />
      
      {/* Contact Form Section */}
      <ContactForm />
      
      {/* Footer with social links */}
      <Footer />
    </main>
  );
};

export default Index;
