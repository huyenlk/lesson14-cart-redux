import React, { Component } from 'react';
import CartItem from './CartItem';
//import * as action from '../actions/index';

class Cart extends Component {

  showTotalAmountLast = (cart) => {
    var total = 0
    if (cart.length > 0) {
      for (var i = 0; i < cart.length; i++) {
        total += cart[i].product.price * cart[i].quantity
      }
    }
    return total
  }

  render() {
    return (
      <tr>
        <td colSpan="3"></td>
        <td>
          <h4>
            <strong>Tổng Tiền</strong>
          </h4>
        </td>
        <td>
          <h4>
            <strong>{this.showTotalAmountLast(this.props.cart)}$</strong>
          </h4>
        </td>
        <td colSpan="3">
          <button type="button" className="btn btn-primary waves-effect waves-light">Complete purchase
            <i className="fa fa-angle-right right"></i>
          </button>
        </td>
      </tr>
    );
  }
}

export default Cart;
