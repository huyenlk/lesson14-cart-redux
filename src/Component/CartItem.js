import React, { Component } from 'react';
import * as Message from '../Constants/Message';
//import * as action from '../actions/index';

class CartItem extends Component {

  showSubTotal = (price, quantity) => {
    return price * quantity
  }

  onDelete = (product) => {
    this.props.onDelete(product);
    this.props.onChangeMessage(Message.MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
  }

  onChangeQuantity = (product, quantity) => {
    if (quantity > 0) {
    }
    this.props.onChangeQuantity(product, quantity);
    this.props.onChangeMessage(Message.MSG_UPDATE_CARD_SUCCESS);
  }

  render() {
    var { quantity } = this.props.item;
    return (
      <tr>
        <th scope="row">
          <img src={this.props.item.product.images}
            alt="" className="img-fluid z-depth-0" />
        </th>
        <td>
          <h5>
            <strong>{this.props.item.product.name}</strong>
          </h5>
        </td>
        <td>{this.props.item.product.price}$</td>
        <td className="center-on-small-only">
          <span className="qty">{quantity} </span>
          <div className="btn-group radio-group" data-toggle="buttons">
            <label className="btn btn-sm btn-primary btn-rounded waves-effect waves-light" onClick={() => this.onChangeQuantity(this.props.item.product, this.props.item.quantity - 1)}>
              <a>—</a>
            </label>
            <label className="btn btn-sm btn-primary btn-rounded waves-effect waves-light" onClick={() => this.onChangeQuantity(this.props.item.product, this.props.item.quantity + 1)}>
              <a>+</a>
            </label>
          </div>
        </td>
        <td>{this.showSubTotal(this.props.item.product.price, this.props.item.quantity)}$</td>
        <td>
          <button type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top"
            title="" data-original-title="Remove item" onClick={() => this.onDelete(this.props.item.product)}>
            X
          </button>
        </td>
      </tr>
    );
  }
}

export default CartItem;
