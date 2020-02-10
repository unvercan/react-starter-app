import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MessageStyle from './message.css';

class Message extends Component {
  constructor(props) {
    super(props);
    this.props.text = 'Hello World!';
  }

  render() {
    return <p style={MessageStyle}>{this.props.text}</p>;
  }
}

Message.propTypes = {
  text: PropTypes.string
};

export default Message;
