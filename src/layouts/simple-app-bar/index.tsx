import * as React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import SalmonCeleryHoney from '../../theme/salmon-celery-honey';
import LayoutContainer from '../../components/layout-container';
import SimpleAppBar from '../../components/simple-app-bar';
import Head from '../../components/head';
import FiftyFifty from '../../templates/fifty-fifty';
import { graphql, Link } from 'gatsby';

const SimpleAppBarLayout = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  console.log('this is magic');
  return (
    <React.Fragment>
      <Head />
      <MuiThemeProvider theme={SalmonCeleryHoney}>
        <div className="app-root">
          <SimpleAppBar />
          {edges.map(edge => {
            const { frontmatter } = edge.node;
            return (
              <div key={frontmatter.path} style={{ marginBottom: '1rem' }}>
                <Link to={frontmatter.path}>{frontmatter.title}</Link>
              </div>
            );
          })}
        </div>
      </MuiThemeProvider>
    </React.Fragment>
  );
};

export const query = graphql`
  query HomepageQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
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

export default SimpleAppBarLayout;
