import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Img extends PureComponent {
  render() {
    return <img className="info-img" src={this.props.imgSrc} />;
  }
}

Img.propTypes = {
  imgSrc: PropTypes.string.isRequired
};

export default Img;
