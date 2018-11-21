import * as React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import SalmonCeleryHoney from '../../theme/salmon-celery-honey';
import SimpleAppBar from '../../components/simple-app-bar';
import Head from '../../components/head';
import { graphql, Link } from 'gatsby';

const SimpleAppBarLayout = ({ data }) => {
  const { frontmatter } = data;
  const title = frontmatter.title;
  return (
    <React.Fragment>
      <Head />
      <MuiThemeProvider theme={SalmonCeleryHoney}>
        <div className="app-root">
          <SimpleAppBar />
        </div>
      </MuiThemeProvider>
    </React.Fragment>
  );
};

export default SimpleAppBarLayout;
