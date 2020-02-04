import React from 'react';
import { useQuotes } from '../../hooks/quoteHook';

const Button = () => {
  const { handleClick } = useQuotes();
  return <button onClick={() => handleClick()}>new one</button>;
};

export default Button;
