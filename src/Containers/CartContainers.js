import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from '../Component/Cart';
import CartItem from '../Component/CartItem';
import Message from '../Component/Message';
import CartResult from '../Component/CartResult';
import * as action from '../actions/index';

class CartContainers extends Component {
  showCartItem = (cart) => {
    var result = Message.MSG_CART_EMPTY;
    if (cart.length) {
      result = cart.map((item, index) => {
        return (
          <CartItem
            key={index}
            item={item}
            index={index}
            onDelete={this.props.onDelete}
            onChangeMessage={this.props.onChangeMessage}
            onChangeQuantity={this.props.onChangeQuantity}
          />
        );
      })
    }
    return result;
  }

  showTotalAmount = (cart) => {
    var result = null;
    if (cart.length > 0) {
      return <CartResult cart={cart} />
    }
    return result;
  }


  render() {
    return (
      <div >
        <Cart>
          {this.showCartItem(this.props.cart)}
          {this.showTotalAmount(this.props.cart)}
        </Cart>
      </div>
    );
  }
}

CartContainers.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape({
    Product: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      images: PropTypes.string.isRequired,
      describe: PropTypes.string.isRequired,
      inventory: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired
    })
  })).isRequired,
  onDelete: PropTypes.func.isRequired,
  onChangeMessage: PropTypes.func.isRequired,
  onChangeQuantity: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  }
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onDelete: (product) => {
      dispatch(action.deleteCart(product));
    },
    onChangeMessage: (message) => {
      dispatch(action.changeMessage(message));
    },
    onChangeQuantity: (product, quantity) => {
      dispatch(action.changeQuantity(product, quantity));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CartContainers);
