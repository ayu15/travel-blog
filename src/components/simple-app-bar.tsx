import * as React from 'react';
import * as PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { StaticQuery, graphql, Link } from 'gatsby';

const style = {
  backgroundColor: '#333',
  color: '#fff'
};

const _simpleAppBar = ({ data }) => {
  const appbarHeader = data.site.siteMetadata.appbarHeader;
  return (
    <React.Fragment>
      <AppBar position="fixed" style={style}>
        <Toolbar>
          <Link to={'/'} style={{ textDecoration: 'none', color: 'inherit' }}>
            <h2 style={{ margin: 'auto' }}>{appbarHeader}</h2>
          </Link>
        </Toolbar>
      </AppBar>
      <AppBar position="static" className="hidden">
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
            appbarHeader
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
        appbarHeader: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  }).isRequired
};

export default SimpleAppBar;
