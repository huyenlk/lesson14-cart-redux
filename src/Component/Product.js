import React, { Component } from 'react';
import * as types from '../Constants/Message';
//import * as action from '../actions/index';

class Product extends Component {

  showRatings = (rating) => {
    var result = [];
    for (var i = 1; i <= rating; i++) {
      result.push(<i key={i} className='fa fa-star'></i>)
    }
    for (var j = 1; j <= (5 - rating); j++) {
      result.push(<i key={j + i} className='fa fa-star-o'></i>)
    }
    return result;
  }


  onAddToCart = (product) => {
    this.props.onAddToCart(product);
    this.props.onChangeMessage(types.MSG_ADD_TO_CARD_SUCCESS);
  }


  render() {
    return (
      <div className='col-md-4 col-lg-4 col-sm-4 col-xs-4'>
        <div className="card text-center card-cascade narrower">
          <div className="view overlay hm-white-slight z-depth-1">
            <img src={this.props.product.images}
              className="img-fluid" alt={this.props.product.name} />
            <a>
              <div className="mask waves-light waves-effect waves-light"></div>
            </a>
          </div>
          <div className="card-body">
            <h4 className="card-title">
              <strong>
                <a>{this.props.product.name}</a>
              </strong>
            </h4>
            <ul className="rating">
              {this.showRatings(this.props.product.rating)}
            </ul>
            <p className="card-text">
              {this.props.describe}
            </p>
            <div className="card-footer">
              <span className="left">{this.props.product.price}$</span>
              <span className="right">
                <a className="btn-floating blue-gradient" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add to Cart" onClick={() => this.onAddToCart(this.props.product)}>
                  <i className="fa fa-shopping-cart"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
