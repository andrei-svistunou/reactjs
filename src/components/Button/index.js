import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Button = props => (
  <input type="button" className={`btn ${props.classes} upper-text`} value={props.value} onClick={props.onClick}/>
);

Button.propTypes = {
  value: PropTypes.string.isRequired,
  classes: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export default Button;
