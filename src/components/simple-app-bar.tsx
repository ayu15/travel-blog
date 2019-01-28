import { graphql, Link, StaticQuery } from 'gatsby';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import SocialMediaIcons from './social-media-icons';

const _simpleAppBar = ({ data }) => {
  const appbarHeader = data.site.siteMetadata.appbarHeader;
  return (
    <React.Fragment>
      <nav className="navbar is-fixed-top is-dark nav-container" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link to={'/'} className="navbar-item simple-link">
            <h1 className="brand-title">{appbarHeader}</h1>
          </Link>
        </div>
        <div className="social-media-icons-container">
          <SocialMediaIcons />
        </div>
      </nav>
      <nav className="navbar hidden" />
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
