import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Hello extends Component {
  render() {
    return <h3>Hello, {this.props.name}</h3>;
  }
}

Hello.propTypes = {
  name: PropTypes.string.isRequired
};

export default Hello;
