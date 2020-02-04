import React, { Component } from 'react';
import Quote from '../components/Quote/Quote';
import { getQuotes } from '../services/futuramaApi';
import Button from '../components/Button/Button';

export default class FuturamaQuote extends Component {
  state = {
    quote: {
      quote: '',
      character: '',
      image: ''
    }
  };
  componentDidMount() {
    this.fetchQuote();
  }

  fetchQuote = () => {
    return getQuotes().then(quote => this.setState({ quote }));
  };

  render() {
    return (
      <>
        <Quote quote={this.state.quote} />
        <Button onClick={this.getQuotes} />
      </>
    );
  }
}
