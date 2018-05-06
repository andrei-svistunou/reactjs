import React from 'react';
import PropTypes from 'prop-types';
import SubHeader from '../SubHeader';
import Button from '../Button';
import './index.css';

const Header = props => (
  <header className='main-header'>
    <div>
      <SubHeader>
        <Button classes={`btn-invert ${!props.defaultStatus ? 'hide' : ''}`} value='Search' onClick={props.clickHandler}/>
      </SubHeader>
    </div>
    <div>
      {props.children}
    </div>
  </header>
);

Header.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element]),
  defaultStatus: PropTypes.bool,
  clickHandler: PropTypes.func
};

export default Header;
