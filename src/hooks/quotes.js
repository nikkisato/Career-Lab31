import { useState, useEffect } from 'react';

export const useQuotes = quotes => {
const [quotes, setQuotes] = useState([]);

const fetchQuotes = () => {
    getQuotes(quotes).then(quotes => setQuotes(quotes));
  };
}