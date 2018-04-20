import React from 'react';
import PropTypes from 'prop-types';

const TextField = props => (<p>{props.text}</p>);

TextField.propTypes = {
  text: PropTypes.string.isRequired
};

export default TextField;
