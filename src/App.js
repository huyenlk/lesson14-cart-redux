import React, { Component } from 'react';
import Header from './Component/Header';
import MessageContainers from './Containers/MessageContainers';
import Footer from './Component/Footer';
import ProductContainer from './Containers/ProductContainer';
import CartContainers from './Containers/CartContainers';
//import * as action from '../actions/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Header />
        </div>
        <main id="mainContainer">
          <div className="container">
              <ProductContainer />
            <div className="App">
              <MessageContainers />
            </div>
            <CartContainers />
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
