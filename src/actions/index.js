import * as types from '../Constants/ActionTypes';

export const addToCart = (product, quantity) => {
  return {
    type: types.ADD_TO_CARD,
    product: product,
    quantity: quantity,
  }
};
export const changeMessage = (message) => {
  return {
    type: types.CHANGE_MESSAGE,
    message: message,
  }
};
export const deleteCart = (product) => {
  return {
    type: types.DELETE_PRODUCT_IN_CART,
    product: product,
  }
};
export const changeQuantity = (product,quantity) => {
  return {
    type: types.CHANGE_QUANTITY,
    product:product,
    quantity:quantity
  }
};