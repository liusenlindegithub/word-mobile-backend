import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultFooter extends Component {
  render() {
//    <span><a href="https://coreui.io">CoreUI</a> &copy; 2018 creativeLabs.</span>
//    <span className="ml-auto">Powered by <a href="https://coreui.io/react">CoreUI for React</a></span>

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
       </React.Fragment>
    );
  }
}

DefaultFooter.propTypes = propTypes;
DefaultFooter.defaultProps = defaultProps;

export default DefaultFooter;
