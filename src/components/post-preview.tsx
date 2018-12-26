import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Link } from 'gatsby';
import { withPrefix } from 'gatsby';

const cardStyle = {
  marginBottom: '1rem'
};

const PostPreview = props => {
  const { postInfo } = props;
  return (
    <Card style={cardStyle} className="post-preview-card">
      <Link to={postInfo.slug} style={{ textDecoration: 'none', color: 'inherit' }}>
        <CardMedia
          component="img"
          className="preview-image"
          alt={postInfo.imageTitle}
          image={withPrefix(postInfo.thumbURL)}
          title={postInfo.imageTitle}
        />
        <CardActionArea>
          <CardContent className="content">
            <h2 className="content-title">{postInfo.title}</h2>
            <p className="content-date"> {postInfo.date}</p>
            <div>{postInfo.subtitle}</div>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
};

export default PostPreview;
