import * as React from 'react';
import SimpleAppBar from '../../components/simple-app-bar';
import Head from '../../components/head';
import 'bulma/css/bulma.css';

const SimpleAppBarLayout = ({ data }) => {
  const { meta } = data;
  return (
    <React.Fragment>
      <Head meta={meta} />
      <SimpleAppBar />
    </React.Fragment>
  );
};

export default SimpleAppBarLayout;
