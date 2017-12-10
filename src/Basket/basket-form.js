import React, { Component } from 'react';

class BasketForm extends Component {

  addItemToShoppingList = (e) => {
    let itemArray = this.props.items;
    let textVal = this.textInput.value;

    if (textVal !== "") {
      // let dupArr = itemArray.filter(item => (item.text === textVal));
      let duplicate = itemArray.find((item) => {
        return item.text === textVal
      });

      let numVal = parseInt(this.numInput.value, 10) || 1;

      if ( duplicate ) {
        duplicate.number += numVal;
        duplicate.timeStamp = Date.now();
      } else {
        itemArray.unshift(
          {
            text: textVal,
            timeStamp: Date.now(),
            number: numVal,
            inBasket: false
          }
        );
      }

      this.props.updateShoppingList( itemArray )

      this.textInput.value = "";
      this.numInput.value = ""
    }
   
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={ this.addItemToShoppingList }>
        <input ref={ (input) => this.textInput = input } 
          placeholder="What do you need to buy?" />
        <input ref={ (input) => this.numInput = input }
          type="number" />
        <button type="submit">
          Add to shopping list
        </button>
      </form>
    )
  }
}

export default BasketForm;
