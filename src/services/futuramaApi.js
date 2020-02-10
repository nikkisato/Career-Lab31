export const getQuotes = () => {
  return fetch('http://futuramaapi.herokuapp.com/api/quotes/1').then(res =>
    res.json()
  );
  // .then(quotes =>
  //   quotes.map(({ quote, character, image }) => ({
  //     text: quote,
  //     name: character,
  //     image
  //   }))
  // );
};

export const getQuotesCharacter = character => {
  return fetch(
    `http://futuramaapi.herokuapp.com/api/characters/${character}`
  ).then(res => res.json());
  // .then(quotes =>
  //   quotes.map(({ quote, character, image }) => ({
  //     quote: quote,
  //     name: character,
  //     image
  //   }))
  // );
};

export const getQuotesCharacterCount = (character, count) => {
  return fetch(
    `http://futuramaapi.herokuapp.com/api/characters/${character}/${count}`
  ).then(res => res.json());
};
