import * as React from 'react';
import Helmet from 'react-helmet';
import Button from '@material-ui/core/Button';

export default class Main extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
        </Helmet>
        <div>Hello sahi h!</div>
        <Button variant="contained" color="primary">
          Hello World
        </Button>
      </div>
    );
  }
}
