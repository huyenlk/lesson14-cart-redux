import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions';
import Product from '../Component/Product';
import Products from '../Component/Products';
import * as action from '../actions/index';
import PropTypes from 'prop-types';

class ProductContainers extends Component {
  render() {
    return (
      <div >
        <Products>
          {Array.isArray(this.props.products) && this.props.products.map((product, index) => {
            return <Product
              key={index}
              product={product}
              onAddToCart={this.props.onAddToCart}
              onChangeMessage={this.props.onChangeMessage}
            />
          })};
        </Products>
      </div>
    );
  }
}

 ProductContainers.propTypes = {
  onChangeMessage: PropTypes.func.isRequired,
  onAddToCart: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    products: state.products
  }
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddToCart: (product) => {
      dispatch(action.addToCart(product, 1));
    },
    onChangeMessage: (message) => {
      dispatch(action.changeMessage(message));
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainers);
