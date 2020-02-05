import React from 'react';

const Button = ({ handleClick }) => {
  return <button onClick={() => handleClick()}>new one</button>;
};

export default Button;
