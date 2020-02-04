import React, { Component } from 'react';
import Quotes from '../components/Quote/Quotes';
import { getQuotes } from '../services/futuramaApi';

export default class FuturamaQuote extends Component {
  state = {
    quotes: []
  };
  componentDidMount() {
    this.fetch();
  }

  fetch = () => {
    return getQuotes().then(quotes => this.setState({ quotes: quotes }));
  };

  handleClick = event => {
    event.preventDefault();
    this.fetchQuote();
  };

  render() {
    const { quotes } = this.state;
    return (
      <>
        <Quotes quotes={quotes} />
      </>
    );
  }
}
