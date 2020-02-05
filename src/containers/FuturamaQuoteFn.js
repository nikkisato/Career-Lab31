import React from 'react';
import Quotes from '../components/Quote/Quotes';
import Button from '../components/Button/Button';
import { useQuotes } from '../hooks/quoteHook';
 
const FuturamaQuoteFn = () => {
  const { quotes, handleClick } = useQuotes();

  
  return (
    <>
      <Quotes quotes={quotes}/>
      <Button handleClick={handleClick}/>
    </>
  );
};

export default FuturamaQuoteFn;
