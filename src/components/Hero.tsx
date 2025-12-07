import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBanner from '@/assets/hero-banner.jpg';

/**
 * Hero Section Component
 * Full-width banner with gradient overlay, animated headline, and CTA
 * Features: Fade-in animation, parallax-ready, responsive design
 */
const Hero = () => {
  // Smooth scroll to about section
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBanner}
          alt="Cancer awareness ribbon with hopeful sky"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Pink Ribbon Icon */}
          <div className="animate-fade-in-up mb-6">
            <span className="text-6xl md:text-7xl animate-float inline-block">🎗️</span>
          </div>

          {/* Main Headline */}
          <h1 className="animate-fade-in-up delay-100 font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Support. Awareness.{' '}
            <span className="gradient-text">Hope.</span>
          </h1>

          {/* Subheadline */}
          <p className="animate-fade-in-up delay-200 text-lg md:text-xl lg:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Together, we stand strong in the fight against cancer. 
            Join our community of survivors, caregivers, and advocates 
            spreading awareness and providing support.
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="hero"
              size="xl"
              onClick={scrollToAbout}
            >
              Learn More
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="border-foreground/20 text-foreground hover:bg-foreground/10 hover:text-foreground"
              onClick={() => {
                const contactSection = document.querySelector('#contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Get Support
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-fade-in-up delay-500 absolute bottom-8 left-1/2 -translate-x-1/2">
          <button
            onClick={scrollToAbout}
            className="flex flex-col items-center gap-2 text-foreground/60 hover:text-primary transition-colors group"
            aria-label="Scroll to learn more"
          >
            <span className="text-sm font-medium">Scroll</span>
            <ChevronDown className="w-6 h-6 animate-bounce-soft group-hover:text-primary" />
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
