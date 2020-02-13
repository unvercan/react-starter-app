import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ExampleComponentStyle from './ExampleComponent.css';

class ExampleComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <p style={ExampleComponentStyle}>{this.props.text}</p>;
  }
}

ExampleComponent.propTypes = {
  text: PropTypes.string
};

ExampleComponent.defaultProps = {
  text: 'Hello World!'
};

export default ExampleComponent;
