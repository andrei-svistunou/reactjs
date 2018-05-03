import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const NotFound = props => (
  <h2 className="h2">{props.text}</h2>
);

NotFound.propTypes = {
  text: PropTypes.string
};

NotFound.defaultProps = {
  text: 'No films found'
};

export default NotFound;
