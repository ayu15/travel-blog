import * as React from 'react';
import { graphql } from 'gatsby';

import SimpleAppBarLayout from '../../layouts/simple-app-bar';
import LeftHalf from './left-half';
import RightHalf from './right-half';

const FiftyFiftyTemplate = ({ data }) => {
  const { markdownRemark } = data;
  return (
    <React.Fragment>
      <div className="app-root">
        <SimpleAppBarLayout />
        <div className="fifty-fifty-root">
          <LeftHalf data={markdownRemark.frontmatter} />
          <RightHalf data={markdownRemark.frontmatter} />
        </div>
      </div>
    </React.Fragment>
  );
};

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(fields: { slug: { eq: $pathSlug } }) {
      frontmatter {
        title
        imageURL
        imageTitle
        subtitle
      }
    }
  }
`;

export default FiftyFiftyTemplate;
