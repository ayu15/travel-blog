import { graphql } from 'gatsby';

export const SiteMetadata = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
