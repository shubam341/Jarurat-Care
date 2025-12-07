import { Heart, ArrowUp, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

/**
 * Footer Component
 * Site footer with social links, navigation, and back-to-top button
 * Features: Social icons, copyright, smooth scroll back to top
 */
const Footer = () => {
  // Scroll to top of page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Footer navigation links
  const footerLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Quotes', href: '#quotes' },
    { label: 'Contact', href: '#contact' },
  ];

  // Social media links (placeholders)
  const socialLinks = [
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
  ];

  // Smooth scroll to section
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-foreground text-background relative" role="contentinfo">
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full gradient-button shadow-elevated flex items-center justify-center hover:scale-110 transition-transform duration-300"
        aria-label="Scroll back to top"
      >
        <ArrowUp className="w-5 h-5 text-accent-foreground" />
      </button>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <span className="text-3xl">🎗️</span>
              <span className="font-serif text-xl font-semibold">
                Cancer Awareness
              </span>
            </div>
            <p className="text-background/70 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              Spreading hope, awareness, and support for those affected by cancer. 
              Together, we can make a difference.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2">
                {footerLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      className="text-background/70 hover:text-primary transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-end gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary hover:text-accent-foreground flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label={`Follow us on ${social.label}`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <p className="text-background/50 text-sm mt-4">
              Join our community for updates
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-background/10 my-8" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/60">
          <p>
            © {new Date().getFullYear()} Cancer Awareness & Support. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-primary fill-primary" /> for a cause that matters
          </p>
        </div>
      </div>

      {/* Decorative gradient at bottom */}
      <div className="h-1 gradient-button" />
    </footer>
  );
};

export default Footer;
