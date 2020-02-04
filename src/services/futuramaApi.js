export const getQuotes = () => {
  fetch('http://futuramaapi.herokuapp.com/api/quotes/10')
    .then(res => res.json())
    .then(([{ quote, character, image }]) => ({
      text: quote,
      character: character,
      img: image
    }));
};
