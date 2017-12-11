import React, { Component } from 'react';

class BasketForm extends Component {

  addItemToShoppingList = (e) => {
    let itemArray = this.props.items;
    let textVal = this.textInput.value;

    if (textVal !== "") {
      let duplicate = itemArray.find((item) => {
        return item.text === textVal
      });

      let numVal = parseInt(this.numInput.value, 10) || 1;

      if ( duplicate ) {
        duplicate.number += numVal;
        duplicate.timeStamp = Date.now();
      } else {
        itemArray.unshift(
          // timestamps is being recorded incase someday we want to sort by date added
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
      <form onSubmit={ this.addItemToShoppingList }
        className="basketForm"
      >
        <input ref={ (input) => this.textInput = input }
          className="textInput"
          placeholder="What do you need to buy?" />
        <div className="secondRowSmall">
          <input ref={ (input) => this.numInput = input }
            className="numInput"
            type="number"
            min="1"
            placeholder="How many?" />
          <button type="submit">
            +
          </button>
        </div>
      </form>
    )
  }
}

export default BasketForm;
