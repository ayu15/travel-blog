import * as React from 'react';
import { DiscussionEmbed } from 'disqus-react';

const RightHalf = ({ data }) => {
  const { frontmatter, html, fields } = data;
  const disqusShortname = 'travel-blog-4';
  const disqusConfig = {
    identifier: fields.slug,
    title: frontmatter.title
  };
  return (
    <div className="fifty-fifty-root-right-half">
      <h1>{frontmatter.title}</h1>
      <p>{frontmatter.subtitle}</p>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </div>
  );
};

export default RightHalf;
