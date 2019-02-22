import * as React from 'react';
import { Link } from 'gatsby';
import { withPrefix } from 'gatsby';

const PostPreview = props => {
  const { postInfo } = props;
  return (
    <div className="card post-preview-card">
      <Link to={postInfo.slug} className="card post-preview-card simple-link">
        <div className="card-image">
          <figure className="is-16by9" aria-label={postInfo.imageTitle}>
            <img className="preview-image" src={withPrefix(postInfo.thumbURL)} alt={postInfo.imageTitle} />
          </figure>
        </div>
        <div className="card-content content">
          <h2 className="content-title">{postInfo.title}</h2>
          <p className="content-date"> {postInfo.date}</p>
          <div>{postInfo.subtitle}</div>
        </div>
      </Link>
    </div>
  );
};

export default PostPreview;
