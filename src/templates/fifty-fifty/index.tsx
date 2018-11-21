import * as React from 'react';
import { graphql } from 'gatsby';
import LeftHalf from './left-half';
import RightHalf from './right-half';
import LayoutContainer from '../../components/layout-container';
import SimpleAppBarLayout from '../../layouts/simple-app-bar';

const FiftyFiftyTemplate = ({ data }) => {
  const { markdownRemark } = data;
  return (
    <React.Fragment>
      <SimpleAppBarLayout data={markdownRemark} />
      {/* <h1>{title}</h1>
      <LayoutContainer children={[LeftHalf, RightHalf]} /> */}
    </React.Fragment>
  );
};

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(fields: { slug: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

export default FiftyFiftyTemplate;
