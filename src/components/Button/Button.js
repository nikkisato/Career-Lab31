import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ fetchQuote }) => (
  <button onClick={() => fetchQuote()}>Get New Quote</button>
);

Button.propTypes = {
  fetchQuote: PropTypes.func.isRequired
};

export default Button;
