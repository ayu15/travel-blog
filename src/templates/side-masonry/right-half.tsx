import * as React from 'react';
import * as PropTypes from 'prop-types';

const RightHalf = ({ data }) => {
  const { title, subtitle } = data;
  return (
    <div className="fifty-fifty-right-half-root">
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
};

RightHalf.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string
  }).isRequired
};

export default RightHalf;
