import React, { Component } from 'react';
//import * as action from '../actions/index';

class Message extends Component {
  render() {
    return (
      <h3>
        <span className="badge amber darken-2">{this.props.message}</span>
      </h3>
    );
  }
}

export default Message;
