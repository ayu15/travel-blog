import * as React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import { withPrefix } from 'gatsby';

const _head = ({ data }) => {
  const { site, meta } = data;
  const title = `${meta.title}${site.siteMetadata.title}`;
  const favicon = site.siteMetadata.favicon;
  return (
    <Helmet>
      <title>{title}</title>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="author" content={site.siteMetadata.author} />
      <meta name="description" content={meta.description} />
      <link rel="shortcut icon" type="image/png" href={withPrefix(favicon)} />
      {/* <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" /> */}
      <script type="text/javascript" src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
    </Helmet>
  );
};

const Head = ({ meta }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            favicon
          }
        }
      }
    `}
    render={data => <_head data={{ ...data, meta }} />}
  />
);

export default Head;
