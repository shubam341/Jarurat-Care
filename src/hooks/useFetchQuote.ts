import { useState, useEffect, useCallback } from 'react';

/**
 * Custom hook to fetch motivational quotes from the Quotable API
 * Handles loading states, errors, and provides a refresh function
 */

interface Quote {
  content: string;
  author: string;
}

interface UseFetchQuoteReturn {
  quote: Quote | null;
  loading: boolean;
  error: string | null;
  refreshQuote: () => void;
}

export const useFetchQuote = (): UseFetchQuoteReturn => {
  const [quote, setQuote] = useState<Quote | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchQuote = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      // Using quotable.io API for random inspirational quotes
      const response = await fetch('https://api.quotable.io/random?tags=inspirational|motivational|wisdom');
      
      if (!response.ok) {
        throw new Error('Failed to fetch quote');
      }
      
      const data = await response.json();
      setQuote({
        content: data.content,
        author: data.author,
      });
    } catch (err) {
      // Fallback quotes in case API fails
      const fallbackQuotes: Quote[] = [
        { content: "The human spirit is stronger than anything that can happen to it.", author: "C.C. Scott" },
        { content: "You are braver than you believe, stronger than you seem, and smarter than you think.", author: "A.A. Milne" },
        { content: "Hope is the thing with feathers that perches in the soul.", author: "Emily Dickinson" },
        { content: "Every day may not be good, but there is something good in every day.", author: "Alice Morse Earle" },
        { content: "You never know how strong you are until being strong is the only choice you have.", author: "Bob Marley" },
      ];
      
      const randomFallback = fallbackQuotes[Math.floor(Math.random() * fallbackQuotes.length)];
      setQuote(randomFallback);
      setError(null); // Use fallback silently
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchQuote();
  }, [fetchQuote]);

  return {
    quote,
    loading,
    error,
    refreshQuote: fetchQuote,
  };
};
