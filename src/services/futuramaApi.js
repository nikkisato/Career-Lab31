export const getQuotes = () => {
  return fetch('http://futuramaapi.herokuapp.com/api/quotes/1').then(res =>
    res.json()
  );
};
