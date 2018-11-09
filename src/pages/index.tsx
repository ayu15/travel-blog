import * as React from 'react';
import 'normalize.css';
import '../styles/main.css';
import { MuiThemeProvider } from '@material-ui/core/styles';
import SalmonCeleryHoney from '../theme/salmon-celery-honey';
import LayoutContainer from '../components/layout-container';
import LeftHalf from '../components/left-half';
import RightHalf from '../components/right-half';
import SimpleAppBar from '../components/simple-app-bar';
import Head from '../components/head';

export default class Main extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Head />
        <MuiThemeProvider theme={SalmonCeleryHoney}>
          <div className="app-root">
            <SimpleAppBar />
            <LayoutContainer children={[LeftHalf, RightHalf]} />
          </div>
        </MuiThemeProvider>
      </React.Fragment>
    );
  }
}
