import * as React from 'react';
import 'normalize.css';
import '../styles/main.css';
import { MuiThemeProvider } from '@material-ui/core/styles';
import SalmonCeleryHoney from '../theme/salmon-celery-honey';
import SimpleAppBar from '../components/simple-app-bar';
import Head from '../components/head';
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
