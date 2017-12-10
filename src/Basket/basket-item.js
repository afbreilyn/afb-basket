import React, { Component } from 'react';
import { string, number, bool, func } from 'prop-types';

class BasketItem extends Component {
  static propTypes = {
    text: string.isRequired,
    timeStamp: number.isRequired,
    number: number.isRequired,
    inBasket: bool.isRequired,
    toggleInBasket: func.isRequired
  }

  render() {
    let {
      toggleInBasket,
      text,
      timeStamp,
      number,
      inBasket
    } = this.props;

    return(
      <div onClick={ e => toggleInBasket(text, !inBasket) }>
        { text } || { number } || { `${inBasket}` }
      </div>
    )
  }
}

export default BasketItem;
