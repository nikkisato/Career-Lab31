export const getQuotes = () => {
  fetch('http://futuramaapi.herokuapp.com/api/quotes/10')
    .then(res => res.json())
    .then(([{ quote, character, image }]) => ({
      quote: quote,
      character: character,
      image: image
    }));
};
