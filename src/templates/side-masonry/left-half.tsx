import * as React from 'react';
import * as PropTypes from 'prop-types';

const dummyDuplicate = {
  visibility: 'hidden'
};

const fixedContainer = {
  position: 'fixed',
  left: 0,
  width: '49vw',
  height: '100%'
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
      <div style={fixedContainer}>
        <img src={imageURL} alt={imageTitle} style={primaryImage} />
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
