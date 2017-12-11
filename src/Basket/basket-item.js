import React, { Component } from 'react';
import { string, number, bool, func } from 'prop-types';

class BasketItem extends Component {
  static propTypes = {
    text: string.isRequired,
    number: number.isRequired,
    inBasket: bool.isRequired,
    toggleInBasket: func.isRequired
  }

  render() {
    let {
      toggleInBasket,
      text,
      number,
      inBasket
    } = this.props;

    return(
      <div className="item">
        <p>
          { `${number} ${text}` }
        </p>
        <div>
          <label for={ `inBasket-${text}` }>In the basket?</label>
          <input type="checkbox"
            className="inBasketCheck"
            checked={ inBasket }
            id={ `inBasket-${text}` }
            onClick={ e => toggleInBasket(text, !inBasket) } />
        </div>
      </div>
    )
  }
}

export default BasketItem;
