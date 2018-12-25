import * as React from 'react';
import Helmet from 'react-helmet';

export default function Head() {
  return (
    <Helmet>
      {/* <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" /> */}
      <script type="text/javascript" src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
    </Helmet>
  );
}
