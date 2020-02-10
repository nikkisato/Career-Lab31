import React from 'react';
import PropTypes from 'prop-types';
import styles from './Quote.css';

const Quote = ({ quote }) => (
  <section>
    <img className={styles.image} src={quote.image} />
    <h2>{quote.character}</h2>

    <p>{quote.quote}</p>
  </section>
);

Quote.propTypes = {
  quote: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired
};

export default Quote;
