import * as React from 'react';
import Helmet from 'react-helmet';
import 'normalize.css';
import { MuiThemeProvider } from '@material-ui/core/styles';
import SalmonCeleryHoney from '../theme/salmon-celery-honey';
import LayoutContainer from '../components/layout-container';
import LeftHalf from '../components/left-half';
import RightHalf from '../components/right-half';
import SimpleAppBar from '../components/simple-app-bar';

const styles = {
  minHeight: '100vh',
  display: 'grid',
  gridTemplateRows: 'auto 1fr'
};

export default class Main extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
        </Helmet>
        <MuiThemeProvider theme={SalmonCeleryHoney}>
          <div style={styles}>
            <SimpleAppBar />
            <LayoutContainer children={[LeftHalf, RightHalf]} />
          </div>
        </MuiThemeProvider>
      </React.Fragment>
    );
  }
}
