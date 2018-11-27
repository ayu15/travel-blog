import * as React from 'react';
import * as PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { StaticQuery, graphql, Link } from 'gatsby';

const style = {
  backgroundColor: '#333',
  color: '#fff'
};

const hiddenTrick = {
  visibility: 'hidden'
};

const _simpleAppBar = ({ data }) => {
  const title = data.site.siteMetadata.title;
  return (
    <React.Fragment>
      <AppBar position="fixed" style={style}>
        <Toolbar>
          <Link to={'/'} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography variant="h5" color="inherit">
              {title}
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
      <AppBar position="static" style={hiddenTrick}>
        <Toolbar />
      </AppBar>
    </React.Fragment>
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
