import * as React from 'react';
import SimpleAppBar from '../../components/simple-app-bar';
import Head from '../../components/head';
import 'normalize.css';
import 'bulma/css/bulma.min.css';
import '../../styles/main.scss';

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
