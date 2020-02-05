import { useState, useEffect } from 'react';
import { getQuotes, getQuotesCharacter } from '../services/futuramaApi';

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

  const characterQuotes = () => {
    event.preventDefault();
    getQuotesCharacter().then(quotes => {
      setQuotesHook(quotes);
    });
  };
  const handleCharacterClick = () => {
    event.preventDefault();
    characterQuotes();
  };
  const handleClick = () => {
    fetchQuotes();
  };

  return { handleClick, quotes, handleCharacterClick };
};
