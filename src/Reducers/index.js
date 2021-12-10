import { combineReducers } from "redux";
import products from './products';
import cart from './cart';
import message from './message';

const myReducer = combineReducers({
  products: products,
  cart:cart,
  message:message,
});

export default myReducer;