import * as React from 'react';
import * as PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const RightHalf = ({ data }) => {
  const { frontmatter, html } = data;
  return (
    <div className="fifty-fifty-root-right-half">
      <Typography variant="display1">{frontmatter.title}</Typography>
      <Typography variant="subheading" gutterBottom>
        {frontmatter.subtitle}
      </Typography>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};

RightHalf.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string
  }).isRequired
};

export default RightHalf;
