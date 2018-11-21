import * as React from 'react';
import * as PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

const primaryImage = {
  objectFit: 'cover',
  objectPosition: 'center top',
  height: '100%',
  width: '100%'
};

const _leftHalf = ({ data }) => {
  const homePage = data.allMarkdownRemark.edges.find(x => x.node.frontmatter.title === 'HOMEPAGE');
  const imageURL = homePage.node.frontmatter.imageURL;
  const imageTitle = homePage.node.frontmatter.imageTitle;
  return <img src={imageURL} alt={imageTitle} style={primaryImage} />;
};

const LeftHalf = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allMarkdownRemark {
            edges {
              node {
                id
                frontmatter {
                  title
                  date
                  subtitle
                  thumb
                  imageTitle
                  imageURL
                }
              }
            }
          }
        }
      `}
      render={data => <_leftHalf data={data} />}
    />
  );
};

_leftHalf.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string,
              imageURL: PropTypes.string,
              imageTitle: PropTypes.string
            }).isRequired
          }).isRequired
        }).isRequired
      )
    }).isRequired
  }).isRequired
};

export default LeftHalf;
