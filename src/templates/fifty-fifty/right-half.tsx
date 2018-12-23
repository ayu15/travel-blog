import * as React from 'react';

const RightHalf = ({ data }) => {
  const { frontmatter, html } = data;
  return (
    <div className="fifty-fifty-root-right-half">
      <h1>{frontmatter.title}</h1>
      <p>{frontmatter.subtitle}</p>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};

export default RightHalf;
