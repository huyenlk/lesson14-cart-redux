import React, { Component } from 'react';

class Products extends Component {

  render() {
    //(Array.isArray) de kiem tra xem phan tu do co phai Một mảng  khong
    return (
      <section className="section">
        <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
        <div className='row'>
         {this.props.children}
        </div>
      </section>
    );
  }
}

export default Products;
