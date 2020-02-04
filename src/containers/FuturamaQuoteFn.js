import React, { useState, useEffect } from 'react';
import Quotes from '../components/Quote/Quotes';
import Button from '../components/Button/Button';
import { getQuotes } from '../services/futuramaApi';

const FuturamaQuoteFn = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    //similar to fetch
    fetchQuotes();
  }, []);

  const handleClick = () => {
    fetchQuotes();
  };
  const fetchQuotes = () => {
    getQuotes(quotes).then(quotes => setQuotes(quotes));
  };

  return (
    <>
      <Quotes quotes={quotes} />
      <Button onClick={handleClick} />
    </>
  );
};

export default FuturamaQuoteFn;
