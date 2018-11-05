import * as React from 'react';
import Helmet from 'react-helmet';
import SimpleAppBar from '../components/simple-app-bar';
import 'normalize.css';
import { MuiThemeProvider } from '@material-ui/core/styles';
import SalmonCeleryHoney from '../theme/salmon-celery-honey';
import LayoutContainer from '../components/layout-container';
import LeftHalf from '../components/left-half';
import RightHalf from '../components/right-half';

export default class Main extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
        </Helmet>
        <MuiThemeProvider theme={SalmonCeleryHoney}>
          <SimpleAppBar />
          <LayoutContainer children={[LeftHalf, RightHalf]} />
        </MuiThemeProvider>
      </div>
    );
  }
}
