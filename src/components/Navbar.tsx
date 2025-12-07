import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * Navbar Component
 * Sticky navigation with smooth scroll links and mobile hamburger menu
 * Features: Glass morphism effect, responsive design, animated mobile menu
 */
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Navigation menu items with section IDs for smooth scrolling
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Quotes', href: '#quotes' },
    { label: 'Contact', href: '#contact' },
  ];

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-lg shadow-lg border-b border-primary/10 py-3' 
          : 'bg-background/60 backdrop-blur-sm py-5'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#home');
            }}
            className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
            aria-label="Cancer Awareness & Support - Home"
          >
            <span className="text-2xl group-hover:scale-110 transition-transform">🎗️</span>
            <span className="font-serif text-lg md:text-xl font-semibold text-primary">
              Cancer Awareness & Support
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="text-foreground/70 hover:text-secondary font-medium transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-primary/5 relative after:absolute after:bottom-1 after:left-3 after:right-3 after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-[calc(100%-24px)]"
              >
                {item.label}
              </a>
            ))}
            <Button
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-md hover:shadow-lg transition-all duration-200"
              size="sm"
              onClick={() => scrollToSection('#contact')}
            >
              Get Support
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-all"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-1 py-4 bg-card/95 backdrop-blur-lg rounded-2xl px-3 shadow-lg border border-primary/10">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="py-3 px-4 text-foreground/80 hover:text-secondary hover:bg-primary/5 rounded-xl font-medium transition-all duration-200"
              >
                {item.label}
              </a>
            ))}
            <Button
              className="mt-3 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
              onClick={() => scrollToSection('#contact')}
            >
              Get Support
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
