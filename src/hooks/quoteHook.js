import { useState, useEffect } from 'react';
import { getQuotes } from '../services/futuramaApi';

export const useQuotes = () => {
  const [quotes, setQuotesHook] = useState([]);

  useEffect(() => {
    fetchQuotes();
  }, []);

  const fetchQuotes = () => {
    getQuotes().then(quotes => {
      setQuotesHook(quotes);
    });
  };

  const handleClick = () => {
    fetchQuotes();
  };

  return { handleClick, quotes };
};
