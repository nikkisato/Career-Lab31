import React from 'react';
import PropTypes from 'prop-types';

const Quote = ({ text, name, img }) => {
  <figure>
    <img src={img} />
    <figcaption>
      &quot;{text}&quot;{name ? ` -- by ${name}` : ''}
    </figcaption>
  </figure>;
};

Quote.PropTypes = {
  text: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};
