import React from 'react';
import Quote from './Quote';
import PropTypes from 'prop-types';
import styles from './Quote.css';

const Quotes = ({ quotes }) => {
  const quoteElements = quotes.map(quote => (
    <li className={styles.div} key={quote.quote}>
      <Quote quote={quote} />
    </li>
  ));

  return <ul>{quoteElements}</ul>;
};

Quotes.propTypes = {
  quotes: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired
    })
  ).isRequired
};

export default Quotes;
