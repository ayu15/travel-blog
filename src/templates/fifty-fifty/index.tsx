import * as React from 'react';
import { graphql } from 'gatsby';

import SimpleAppBarLayout from '../../layouts/simple-app-bar';
import LeftHalf from './left-half';
import RightHalf from './right-half';
import { MdPostFrontmatterI } from '../../types';

const FiftyFiftyTemplate = ({ data }: MdPostFrontmatterI) => {
  const { markdownRemark } = data;
  return (
    <React.Fragment>
      <div className="app-root">
        <SimpleAppBarLayout data={markdownRemark.frontmatter} />
        <div className="fifty-fifty-root">
          <LeftHalf data={markdownRemark.frontmatter} />
          <RightHalf data={markdownRemark} />
        </div>
      </div>
      <script type="text/javascript" async defer src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
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
        date
        meta {
          title
          description
        }
      }
      html
      fields {
        slug
      }
    }
  }
`;

export default FiftyFiftyTemplate;
