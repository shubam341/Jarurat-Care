import { RefreshCw, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useFetchQuote } from '@/hooks/useFetchQuote';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

/**
 * Quotes Section Component
 * Displays motivational quotes from API with refresh functionality
 * Features: API integration, loading states, error handling, animations
 */
const Quotes = () => {
  const { quote, loading, refreshQuote } = useFetchQuote();
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.2);

  return (
    <section
      id="quotes"
      className="py-20 md:py-32 bg-background relative overflow-hidden"
      aria-label="Inspirational quotes"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={sectionRef}
          className={`max-w-4xl mx-auto text-center ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          {/* Section Label */}
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Daily Inspiration
          </span>

          {/* Heading */}
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Words of <span className="gradient-text">Hope</span>
          </h2>

          <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Find strength and inspiration in these powerful words. 
            Refresh to discover a new quote that speaks to your heart.
          </p>

          {/* Quote Card */}
          <div
            className={`relative bg-card rounded-3xl p-8 md:p-12 shadow-elevated transition-all duration-500 ${
              loading ? 'opacity-50 scale-[0.98]' : 'opacity-100 scale-100'
            }`}
          >
            {/* Quote Icon */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2">
              <div className="w-12 h-12 rounded-full gradient-button flex items-center justify-center shadow-soft">
                <Quote className="w-6 h-6 text-accent-foreground" />
              </div>
            </div>

            {/* Quote Content */}
            <div className="min-h-[150px] flex flex-col justify-center">
              {loading ? (
                <div className="flex flex-col items-center gap-4">
                  <RefreshCw className="w-8 h-8 text-primary animate-spin" />
                  <p className="text-muted-foreground">Loading inspiration...</p>
                </div>
              ) : quote ? (
                <div className="animate-fade-in-up">
                  <blockquote className="font-serif text-xl md:text-2xl lg:text-3xl text-foreground leading-relaxed mb-6 italic">
                    "{quote.content}"
                  </blockquote>
                  <cite className="text-primary font-medium text-lg not-italic">
                    — {quote.author}
                  </cite>
                </div>
              ) : (
                <p className="text-muted-foreground">
                  Click refresh to load a new quote
                </p>
              )}
            </div>

            {/* Decorative gradient line */}
            <div className="absolute bottom-0 left-8 right-8 h-1 rounded-full gradient-button opacity-50" />
          </div>

          {/* Refresh Button */}
          <Button
            variant="soft"
            size="lg"
            onClick={refreshQuote}
            disabled={loading}
            className="mt-8"
            aria-label="Get a new inspirational quote"
          >
            <RefreshCw className={`w-5 h-5 mr-2 ${loading ? 'animate-spin' : ''}`} />
            Refresh Quote
          </Button>

          {/* Additional decorative quotes */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {[
              { text: "Hope is the only thing stronger than fear.", author: "Robert Ludlum" },
              { text: "Every day is a gift.", author: "Unknown" },
              { text: "Strength grows in the moments you can't go on.", author: "Unknown" },
            ].map((item, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl bg-muted/50 hover:bg-card hover:shadow-card transition-all duration-300 ${
                  isVisible ? 'animate-fade-in-up' : ''
                }`}
                style={{ animationDelay: `${(index + 3) * 100}ms` }}
              >
                <p className="text-foreground/80 italic mb-2">"{item.text}"</p>
                <p className="text-sm text-primary font-medium">— {item.author}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quotes;
