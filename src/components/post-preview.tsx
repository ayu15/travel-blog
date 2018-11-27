import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from 'gatsby';

const cardStyle = {
  marginBottom: '1rem'
};

const PostPreview = props => {
  const { postInfo } = props;
  return (
    <Card style={cardStyle}>
      <Link to={postInfo.slug} style={{ textDecoration: 'none' }}>
        <CardActionArea>
          <CardMedia component="img" alt={postInfo.imageTitle} image={postInfo.imageURL} title={postInfo.imageTitle} />
          <CardContent>
            <Typography variant="headline" color="primary">
              {postInfo.title}
            </Typography>
            <Typography gutterBottom variant="caption" color="secondary" paragraph>
              {postInfo.date}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {postInfo.subtitle}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
};

export default PostPreview;
