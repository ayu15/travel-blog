import * as React from 'react';
import DisqusEmbed from '../../components/disqus-embed';

const RightHalf = ({ data }) => {
  const { frontmatter, html, fields } = data;

  return (
    <div className="fifty-fifty-root-right-half">
      <h1>{frontmatter.title}</h1>
      <p>{frontmatter.subtitle}</p>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <DisqusEmbed config={{ slug: fields.slug, title: frontmatter.title }} />
    </div>
  );
};

export default RightHalf;
