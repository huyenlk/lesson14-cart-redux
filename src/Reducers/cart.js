import { addToCart } from '../actions';
import * as types from './../Constants/ActionTypes';

//var data = JSON.parse(localStorage.getItem('CART'));
var initialState = JSON.parse(localStorage.getItem('CART'));

var findProductInCart = (cart, product) => {
  var index = -1;
  if (cart.length > 0) {
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].product.id === product.id) {
        index = i;
        break
      }
    }
  }
  return index;
}

var myReducer = (state = initialState, action) => {
  var { product, quantity } = action;
  var index = -1
  switch (action.type) {
    case types.ADD_TO_CARD:
      index = findProductInCart(state, product)
      if (index !== -1) {
        state[index].quantity += quantity
      } else {
        state.push({
          product,
          quantity
        })
      }
      localStorage.setItem('CART', JSON.stringify(state));
      return [...state];
    case types.DELETE_PRODUCT_IN_CART:
      index = findProductInCart(state, product)
      if (index !== -1) {
        state.splice(index, 1)
      }
      localStorage.setItem('CART', JSON.stringify(state));
      return [...state];
    case types.CHANGE_QUANTITY:
      index = findProductInCart(state, product)
      if (index !== -1) {
        state[index].quantity = quantity
      }
      localStorage.setItem('CART', JSON.stringify(state));
      return [...state];
    default: return [...state];
  }
};

export default myReducer;