import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Message from '../Component/Message';

class MessageContainers extends Component {

  render() {
    return (
      <div >
        <Message message={this.props.message} />
      </div>
    );
  }
}

MessageContainers.propTypes = {
  message: PropTypes.string.isRequired
}

const mapStateToProps = (state) => {
  return {
    message: state.message
  }
};

const mapDispatchToProps = (dispatch, props) => {
  return {
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageContainers);
