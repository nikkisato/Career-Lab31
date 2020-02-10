import React, { Component } from 'react';
import Quotes from '../components/Quote/Quotes';
import { getQuotes } from '../services/futuramaApi';
import Button from '../components/Button/Button';

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
    this.fetch();
  };

  render() {
    const { quotes } = this.state;
    return (
      <>
        <Quotes quotes={quotes} />
        <Button text="Get a new one"  onClick={this.fetch} />
      </>
    );
  }
}
