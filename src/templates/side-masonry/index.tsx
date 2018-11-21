import * as React from 'react';
import { graphql } from 'gatsby';

const SideMasonryTemplate = ({ data }) => {
  const { markdownRemark } = data;
  const title = markdownRemark.frontmatter.title;
  return (
    <div>
      <h1>{title}</h1>
    </div>
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

export default SideMasonryTemplate;
