import React from 'react';
import Quote from './Quote';
import PropTypes from 'prop-types';

const Quotes = ({ quotes }) => {
  console.log('!!!!!', quotes);
  const quoteElements = quotes.map(quote => (
    <li key={quote.quote}>
      <Quote quote={quote} />
    </li>
  ));

  return <ul>{quoteElements}</ul>;
};

Quotes.propTypes = {
  quotes: PropTypes.array.isRequired
};

export default Quotes;
