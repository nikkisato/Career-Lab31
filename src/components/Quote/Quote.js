import React from 'react';
import PropTypes from 'prop-types';

const Quote = ({ quote }) => (
  <section>
    <h2>{quote.character}</h2>
    <img src={quote.image} />
    <p>{quote.quote}</p>
  </section>
);

Quote.propTypes = {
  quote: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired
};

export default Quote;
