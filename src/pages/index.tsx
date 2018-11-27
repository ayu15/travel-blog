import * as React from 'react';
import 'normalize.css';
import '../styles/main.scss';
import { graphql } from 'gatsby';
import SideMasonryTemplate from '../templates/side-masonry';

const Main = ({ data }) => {
  const { allMarkdownRemark } = data;
  return <SideMasonryTemplate data={allMarkdownRemark} />;
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
            thumb
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default Main;
