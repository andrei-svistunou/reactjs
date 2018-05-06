import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../Logo';
import './index.css';

const SubHeader = props => (
  <div className="flex">
    <Logo />
    {props.children}
  </div>
);

SubHeader.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element])
};

export default SubHeader;
