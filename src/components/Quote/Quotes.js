import React from 'react';
import PropTypes from 'prop-types';
import Quote from './Quote';

const Quotes = ({ quotes }) => {
  const quoteElements = quotes.map(quote => (
    <li key={quote.quote}>
      <Quote {...quote} />
    </li>
  ));

  return <ul>{quoteElements}</ul>;
};

Quotes.propTypes = {
  quotes: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired
    })
  ).isRequired
};
export default Quotes;
