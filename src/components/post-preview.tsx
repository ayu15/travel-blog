import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const cardStyle = {
  marginBottom: '1rem'
};

const PostPreview = props => {
  const { postInfo } = props;
  return (
    <Card style={cardStyle}>
      <CardActionArea>
        <CardMedia component="img" alt={postInfo.imageTitle} image={postInfo.imageURL} title={postInfo.imageTitle} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {postInfo.title}
          </Typography>
          <Typography component="p">{postInfo.subtitle}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default PostPreview;
