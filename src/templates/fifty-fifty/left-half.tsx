import * as React from 'react';
import * as PropTypes from 'prop-types';

const primaryImage = {
  objectFit: 'cover',
  objectPosition: 'center top',
  height: '100%',
  width: '100%'
};

const LeftHalf = ({ data }) => {
  const { imageURL, imageTitle } = data;
  return <img src={imageURL} alt={imageTitle} style={primaryImage} />;
};

LeftHalf.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    imageURL: PropTypes.string,
    imageTitle: PropTypes.string
  }).isRequired
};

export default LeftHalf;
