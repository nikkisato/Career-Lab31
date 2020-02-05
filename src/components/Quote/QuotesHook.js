import React from 'react';
import Quote from './Quotes';
import { useQuotes } from '../../hooks/quoteHook';

const Quotes = () => {
  const { quotes } = useQuotes();

  const quoteElements = quotes.map(quote => (
    <li key={quote.quote}>
      <Quote {...quote} />
    </li>
  ));

  return 
  
  
  
  <ul>{quoteElements}</ul>;
};

export default Quotes;
