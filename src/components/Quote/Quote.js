import React from 'react';
import PropTypes from 'prop-types';

const Quote = ({ quote, character, image }) => {
  return (
    <div>
      <h2>{character}</h2>
      <img src={image} />
      <p>{quote}</p>
    </div>
  );
};

Quote.propTypes = {
  quote: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired
};

export default Quote;
