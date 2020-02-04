import React, { useState, UseEffect } from 'react';
import Quotes from '../components/Quote/Quotes';
import { getQuotes } from '../services/futuramaApi';
import Button from '../components/Button/Button';

const FuturamaQuoteFn = () => {
  const [quotes, setQuotes] = useState([]);

  const newQuote = quotes => setQuotes(quotes);

  return (
    <>
      <Quotes quotes={quotes} />
      <Button onClick={newQuote} />
    </>
  );
};

export default FuturamaQuoteFn;
