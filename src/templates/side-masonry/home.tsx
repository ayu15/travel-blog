import * as React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import SimpleAppBarLayout from '../../layouts/simple-app-bar';
import LeftHalf from './left-half';
import RightHalf from './right-half';

const _sideMasonryHome = ({ data }) => {
  const { allMarkdownRemark } = data;
  const homepage = allMarkdownRemark.edges.find(edge => {
    return edge.node.frontmatter.title === 'HOMEPAGE';
  });
  return (
    <React.Fragment>
      <div className="app-root">
        <SimpleAppBarLayout />
        <div className="fifty-fifty-root">
          <LeftHalf data={homepage.node.frontmatter} />
          <RightHalf allMarkdownRemark={allMarkdownRemark} />
        </div>
      </div>
    </React.Fragment>
  );
};

const SideMasonryHome = () => {
  return (
    <StaticQuery
      query={graphql`
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
                }
                fields {
                  slug
                }
              }
            }
          }
        }
      `}
      render={data => <_sideMasonryHome data={data} />}
    />
  );
};

export default SideMasonryHome;
