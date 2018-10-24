import * as React from 'react';
import Button from '@material-ui/core/Button';

export default class LayoutContainer extends React.Component {
  render() {
    return (
      <div>
        <Button variant="contained" color="primary">
          Hello World
        </Button>
      </div>
    );
  }
}
