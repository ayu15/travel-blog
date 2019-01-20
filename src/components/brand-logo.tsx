import * as React from 'react';

const BrandLogo = props => {
  const { fillColor } = props;
  return (
    <React.Fragment>
      <svg
        enable-background="new 0 0 24 24"
        version="1.0"
        viewBox="0 0 24 24"
        space="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xlink="http://www.w3.org/1999/xlink"
        className="brand-logo"
      >
        <circle cx="13" cy="4" r="2" stroke={fillColor} fill={fillColor} />
        <path
          d="M10.9,6.4l2.6,2L12.2,13l1.7,2.3L13.1,17l-3.2-2.6c-0.6-0.5-0.9-1.3-0.7-2.1L10.9,6.4z"
          stroke={fillColor}
          fill={fillColor}
        />
        <line
          fill="none"
          stroke={fillColor}
          stroke-linejoin="round"
          stroke-miterlimit="10"
          x1="18.5"
          x2="18.5"
          y1="7"
          y2="22"
        />
        <path
          d="M11,13l2.4,2.8c0.4,0.5,0.6,1.1,0.6,1.7  c0,1.6,0,4.5,0,4.5"
          fill="none"
          stroke={fillColor}
          stroke-miterlimit="10"
          stroke-width="2"
        />
        <path
          d="M10.6,7.3l1.3,0.4c0.8,0.2,1.5,0.6,2.1,1.2l0.8,0.8  c0.4,0.4,0.9,0.5,1.4,0.4c1-0.2,2.5-0.5,2.5-0.5"
          fill="none"
          stroke={fillColor}
          stroke-miterlimit="10"
          stroke-width="2"
        />
        <polygon points="9.2,22 11,17 9.4,15.6 7.1,22 " stroke={fillColor} fill={fillColor} />
        <path
          d="M6.2,12.7L6.2,12.7c-0.9-0.3-1.5-1.3-1.2-2.2l0.6-2C6.2,6.7,8.2,5.7,10,6.2l0,0l-1.6,5.3C8.1,12.5,7.2,13,6.2,12.7z"
          stroke={fillColor}
          fill={fillColor}
        />
      </svg>
    </React.Fragment>
  );
};

export default BrandLogo;
