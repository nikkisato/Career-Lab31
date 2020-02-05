export const getQuotes = () => {
  return fetch('http://futuramaapi.herokuapp.com/api/quotes/1').then(res =>
    res.json()
  );
};

export const getQuotesCharacter = character => {
  return fetch(
    console.log(
      'hi'
    )`http://futuramaapi.herokuapp.com/api/characters/${character}`
  ).then(res => res.json());
};

export const getQuotesCharacterCount = (value, count) => {
  return fetch(
    `http://futuramaapi.herokuapp.com/api/characters/${value}/${count}`
  ).then(res => res.json());
};
