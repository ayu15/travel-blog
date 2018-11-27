import * as React from 'react';
import * as PropTypes from 'prop-types';
import { PostCollectionI, PostInfoI } from '../../types';
import PostPreview from '../../components/post-preview';

const RightHalf = ({ allMarkdownRemark }: PostCollectionI) => {
  let items: PostInfoI[] = allMarkdownRemark.edges.map(post => {
    const itemModel = {
      title: post.node.frontmatter.title,
      subtitle: post.node.frontmatter.subtitle,
      imageURL: post.node.frontmatter.imageURL,
      imageTitle: post.node.frontmatter.imageTitle,
      date: post.node.frontmatter.date,
      slug: post.node.fields.slug
    };
    return itemModel;
  });
  items = items.filter(item => {
    return item.title !== 'HOMEPAGE';
  });
  const posts = items.map((item, index) => {
    return (
      <div className="masonry-item" key={index}>
        <PostPreview postInfo={item} />
      </div>
    );
  });
  return <div className="masonry-root">{posts}</div>;
};

RightHalf.propTypes = {
  allMarkdownRemark: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string
  }).isRequired
};

export default RightHalf;
