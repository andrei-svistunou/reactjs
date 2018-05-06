import React from 'react';
import PropTypes from 'prop-types';

class Error extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      errorMSg: null
    };
  }

  componentDidCatch(error, errorMSg) {
    this.setState({
      error,
      errorMSg
    });
  }

  render() {
    if (this.state.error) {
      return (
        <div>
          <h2>{'Error...'}</h2>
          <p>
            {this.state.error && this.state.error.toString()}
          </p>
          <div>{'Component Stack Error Details: '}</div>
          <p>{this.state.errorMSg.componentStack}</p>
        </div>
      );
    }

    return this.props.children;
  }
}

Error.propTypes = {
  children: PropTypes.element,
};

export default Error;
