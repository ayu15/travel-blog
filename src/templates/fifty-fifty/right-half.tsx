import * as React from 'react';
import DisqusEmbed from '../../components/disqus-embed';

const RightHalf = ({ data }) => {
  const { frontmatter, html, fields } = data;
  console.log('frontmatter is', frontmatter);

  return (
    <div className="fifty-fifty-root-right-half">
      <h1 className="post-title">{frontmatter.title}</h1>
      <p className="post-date">
        <em>updated at - {frontmatter.date}</em>
      </p>
      <p>{frontmatter.subtitle}</p>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <DisqusEmbed config={{ slug: fields.slug, title: frontmatter.title }} />
    </div>
  );
};

export default RightHalf;
