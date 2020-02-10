import React from 'react';
import Quotes from '../components/Quote/Quotes';
import Button from '../components/Button/Button';
import { useQuotes } from '../hooks/quoteHook';
import styles from '../containers/FuturamaQuoteFn.css';
import CharacterMenu from '../components/Menu/CharacterMenu';
import NumberOfQuotesMenu from '../components/QuoteMenu';

const FuturamaQuoteFn = () => {
  const {
    handleClick,
    quotes,
    handleCharacterClick,
    changeNumber,
    changeCharacter
  } = useQuotes();

  return (
    <>
      <div className={styles.contain}>
        <NumberOfQuotesMenu
          onChange={({ target }) => changeNumber(target.value)}
        />
        <CharacterMenu
          onChange={({ target }) => changeCharacter(target.value)}
          onClick={handleCharacterClick}
        />
        <Quotes quotes={quotes} />
        <Button handleClick={handleClick} />
      </div>
    </>
  );
};

export default FuturamaQuoteFn;
