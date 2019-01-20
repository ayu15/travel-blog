import * as React from 'react';
import { DiscussionEmbed } from 'disqus-react';

const DisqusEmbed = props => {
  const { config } = props;
  const disqusShortname = 'travel-blog-4';
  const disqusConfig = {
    identifier: config.slug,
    title: config.title
  };
  return <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />;
};

export default DisqusEmbed;
