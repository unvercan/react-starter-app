import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MessageStyle from './message.css';

class Message extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <p style={MessageStyle}>{this.props.text}</p>;
  }
}

Message.propTypes = {
  text: PropTypes.string
};

Message.defaultProps = {
  text: 'Hello World!'
};

export default Message;
