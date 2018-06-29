// @flow

import React from 'react';
import './index.css';

type ButtonProps = {
  value: string,
  classes: string,
  onClick: () => {}
}

const Button = (props: ButtonProps) => (
  <input type="button" className={`btn ${props.classes} upper-text`} value={props.value} onClick={props.onClick}/>
);

Button.defaultProps = {
  classes: '',
};

export default Button;
