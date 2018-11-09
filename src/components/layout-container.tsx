import * as React from 'react';
import * as PropTypes from 'prop-types';
import HalfBox from './half-box';

const LayoutContainer = props => {
  const { children } = props;
  const childElements = children.map((child, index) => {
    return <HalfBox key={index.toString()}>{child()}</HalfBox>;
  });

  return <div className="layout-root">{childElements}</div>;
};

LayoutContainer.propTypes = {
  children: PropTypes.object.isRequired
};

export default LayoutContainer;
