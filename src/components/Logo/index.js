import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Logo = props => (
  <a>
    <span className="main-logo__text">{props.text}</span>
  </a>
);

Logo.propTypes = {
  text: PropTypes.string
};

Logo.defaultProps = {
  text: 'netflixroulett'
};

export default Logo;
