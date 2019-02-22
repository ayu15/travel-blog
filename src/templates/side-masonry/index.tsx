import * as React from 'react';
import { graphql } from 'gatsby';
import SimpleAppBarLayout from '../../layouts/simple-app-bar';
import LeftHalf from './left-half';
import RightHalf from './right-half';

const SideMasonryTemplate = ({ data }) => {
  const { allMarkdownRemark } = data;
  const homepage = allMarkdownRemark.edges.find(edge => {
    return edge.node.frontmatter.title === 'HOMEPAGE';
  });
  return (
    <React.Fragment>
      <div className="app-root">
        <SimpleAppBarLayout data={homepage.node.frontmatter} />
        <div className="fifty-fifty-root">
          <LeftHalf data={homepage.node.frontmatter} />
          <RightHalf allMarkdownRemark={allMarkdownRemark} />
        </div>
      </div>
      <script type="text/javascript" async defer src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
    </React.Fragment>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            imageURL
            imageTitle
            subtitle
            date
            thumbURL
            meta {
              title
              description
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default SideMasonryTemplate;
