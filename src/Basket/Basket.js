import React, { Component } from 'react';
import BasketForm from './basket-form';
import BasketItem from './basket-item';

import './basket.css';

class Basket extends Component {
  state= {
    items: []
  }

  updateShoppingList = (items) => {
    this.setState({
      items: items
    });
  }

  clearInBasketItems = () => {
    let {
      items
    } = this.state;

    let newItems = items.filter(item => item.inBasket !== true);

    this.updateShoppingList( newItems );
  }

  toggleInBasket = (name, val) => {
    let newItems = this.state.items;

    let found = newItems.find((item) => {
      return item.text === name;
    })

    found.timeStamp = Date.now();
    found.inBasket = val;

    this.updateShoppingList( newItems );
  }

  render() {
    let {
      items
    } = this.state;

    let basketItems;

    if (items.length) {
      basketItems = items.map((item, idx) => {
        return (
          <BasketItem
            text={ item.text }
            number={ item.number }
            inBasket={ item.inBasket }
            timeStamp={ item.timeStamp }
            key={ idx }
            toggleInBasket={ this.toggleInBasket } />
        )
      })
    }

    return (
      <div className="basketContainer">
        <p>
          this is a basket
        </p>
        <BasketForm
          items={ items }
          updateShoppingList={ this.updateShoppingList } />
        { basketItems }
        <button onClick={ this.clearInBasketItems }>
          Clear Items in Basket
        </button>
      </div>
    )
  }
}

export default Basket;
