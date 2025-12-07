import { Heart, Users, BookOpen, Shield } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import awarenessImage from '@/assets/awareness-illustration.png';

/**
 * About Section Component
 * Two-column layout with illustration and informational content
 * Features: Scroll-triggered animations, icon grid, responsive design
 */
const About = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.2);

  // Feature cards with icons and descriptions
  const features = [
    {
      icon: Heart,
      title: 'Emotional Support',
      description: 'Connect with counselors and support groups who understand your journey.',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Join a caring community of survivors, families, and advocates.',
    },
    {
      icon: BookOpen,
      title: 'Education',
      description: 'Access resources about prevention, treatment, and healthy living.',
    },
    {
      icon: Shield,
      title: 'Prevention',
      description: 'Learn about early detection and lifestyle choices that reduce risk.',
    },
  ];

  return (
    <section
      id="about"
      className="py-20 md:py-32 bg-muted/30"
      aria-label="About cancer awareness"
    >
      <div className="container mx-auto px-4">
        <div
          ref={sectionRef}
          className={`grid md:grid-cols-2 gap-12 lg:gap-20 items-center ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Left Column - Illustration */}
          <div
            className={`relative ${
              isVisible ? 'animate-slide-in-left' : ''
            }`}
          >
            <div className="relative">
              {/* Decorative background shape */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl" />
              
              {/* Main image */}
              <img
                src={awarenessImage}
                alt="Community of people supporting each other in cancer awareness"
                className="relative rounded-2xl shadow-elevated w-full max-w-lg mx-auto"
              />
              
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 bg-card rounded-2xl p-4 shadow-card">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full gradient-button flex items-center justify-center">
                    <Heart className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">10M+</p>
                    <p className="text-sm text-muted-foreground">Lives Touched</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div
            className={`${
              isVisible ? 'animate-slide-in-right' : ''
            }`}
          >
            {/* Section Label */}
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              About Us
            </span>

            {/* Heading */}
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Together, We Make a{' '}
              <span className="gradient-text">Difference</span>
            </h2>

            {/* Description */}
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Cancer affects millions of lives every year. Our mission is to spread 
              awareness, provide emotional support, and empower individuals and families 
              facing this challenge. We believe that no one should face cancer alone.
            </p>

            {/* Feature Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`p-4 rounded-xl bg-card shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 ${
                    isVisible ? 'animate-fade-in-up' : ''
                  }`}
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
