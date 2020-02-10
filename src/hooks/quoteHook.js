import { useState, useEffect } from 'react';
import { getQuotes, getQuotesCharacter } from '../services/futuramaApi';

export const useQuotes = () => {
  const [quotes, setQuotesHook] = useState([]);
  const [character, setCharacter] = useState('');
  const [numQuotes, setNumQuotes] = useState('1');

  useEffect(() => {
    getQuotes().then(quotes => {
      setQuotesHook(quotes);
    });
  }, []);

  const changeNumber = newNumber => {
    setNumQuotes(newNumber);
  };

  const changeCharacter = newCharacter => {
    setCharacter(newCharacter);
  };
  // const characterQuotes = () => {
  //   event.preventDefault();
  //   getQuotesCharacter().then(quotes => {
  //     setQuotesHook(quotes);
  //   });
  // };
  const handleCharacterClick = () => {
    getQuotesCharacter(character, numQuotes).then(quotes => {
      setQuotesHook(quotes);
    });
  };

  const handleClick = () => {
    getQuotes().then(quotes => {
      setQuotesHook(quotes);
    });
  };

  return {
    handleClick,
    quotes,
    handleCharacterClick,
    changeNumber,
    changeCharacter
  };
};
