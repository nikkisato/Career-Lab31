import { useState, useEffect } from 'react';
import { getQuotes } from '../services/futuramaApi';

export const useQuotes = () => {
  const [quotes, setQuotesHook] = useState([]);

  useEffect(() => {
    fetchQuotes();
  }, []);

  const fetchQuotes = () => {
    event.preventDefault();
    getQuotes().then(quotes => {
      setQuotesHook(quotes);
    });
  };

  const handleClick = () => {
    event.preventDefault();
console.log('hi');
    fetchQuotes();
  };

  return { handleClick, quotes };
};
