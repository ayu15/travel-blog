import * as React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql, Link } from 'gatsby';

const _head = ({ data }) => {
  const title = data.site.siteMetadata.title;
  return (
    <Helmet>
      <title>{title}</title>
      <meta charset="UTF-8" />
      {/* <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" /> */}
      <script type="text/javascript" src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
    </Helmet>
  );
};

const Head = () => (
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
    render={data => <_head data={data} />}
  />
);

export default Head;
