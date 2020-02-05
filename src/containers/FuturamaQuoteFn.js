import React from 'react';
import Quotes from '../components/Quote/Quotes';
import Button from '../components/Button/Button';
import { useQuotes } from '../hooks/quoteHook';
import styles from '../containers/FuturamaQuoteFn.css';
import Input from '../components/Input';

const FuturamaQuoteFn = () => {
  const { quotes, handleClick } = useQuotes();

  return (
    <>
      <div className={styles.contain}>
        <Input />
        <Quotes quotes={quotes} />
        <Button handleClick={handleClick} />
      </div>
    </>
  );
};

export default FuturamaQuoteFn;
