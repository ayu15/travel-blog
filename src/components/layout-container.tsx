import * as React from 'react';
import * as PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import HalfBox from './half-box';

const styles = {
  root: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    maxHeight: '100%'
  }
};

function LayoutContainer(props) {
  const { classes, children } = props;
  const childElements = children.map((child, index) => {
    return <HalfBox key={index.toString()}>{child()}</HalfBox>;
  });

  return <div className={classes.root}>{childElements}</div>;
}

LayoutContainer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LayoutContainer);
