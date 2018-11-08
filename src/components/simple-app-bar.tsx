import * as React from 'react';
import * as PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { StaticQuery, graphql } from 'gatsby';

const style = {
  backgroundColor: '#333',
  color: '#fff'
};

const _simpleAppBar = ({ data }) => {
  const title = data.site.siteMetadata.title;
  return (
    <div>
      <AppBar position="static" style={style}>
        <Toolbar>
          <Typography variant="h5" color="inherit">
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const SimpleAppBar = () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => <_simpleAppBar data={data} />}
  />
);

_simpleAppBar.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  }).isRequired
};

export default SimpleAppBar;
