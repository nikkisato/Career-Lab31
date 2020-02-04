export const getQuotes = () => {
  return fetch('http://futuramaapi.herokuapp.com/api/quotes/1').then(res =>
    res.json()
  );
  // .then(({ quote, character, image }) => ({
  //   quote: quote,
  //   character: character,
  //   image: image
  // }));
};
