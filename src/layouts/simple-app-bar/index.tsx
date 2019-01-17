import * as React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import SalmonCeleryHoney from '../../theme/salmon-celery-honey';
import SimpleAppBar from '../../components/simple-app-bar';
import Head from '../../components/head';

const SimpleAppBarLayout = ({ data }) => {
  const { meta } = data;
  return (
    <React.Fragment>
      <Head meta={meta} />
      <MuiThemeProvider theme={SalmonCeleryHoney}>
        <SimpleAppBar />
      </MuiThemeProvider>
    </React.Fragment>
  );
};

export default SimpleAppBarLayout;
