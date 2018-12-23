import * as React from 'react';
import * as PropTypes from 'prop-types';
import { withPrefix } from 'gatsby';

const dummyDuplicate = {
  visibility: 'hidden'
};

const primaryImage = {
  objectFit: 'cover',
  objectPosition: 'center top',
  height: '100%',
  width: '100%'
};

const LeftHalf = ({ data }) => {
  const { imageURL, imageTitle } = data;
  return (
    <React.Fragment>
      <div style={dummyDuplicate} />
      <div className="primary-image-container">
        <img src={withPrefix(imageURL)} alt={imageTitle} style={primaryImage} />
      </div>
    </React.Fragment>
  );
};

LeftHalf.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    imageURL: PropTypes.string,
    imageTitle: PropTypes.string
  }).isRequired
};

export default LeftHalf;
