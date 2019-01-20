import Typography from 'typography';
import usWebDesignStandardsTheme from 'typography-theme-us-web-design-standards';

usWebDesignStandardsTheme.baseFontSize = '16px';
usWebDesignStandardsTheme.baseLineHeight = 1.25;
usWebDesignStandardsTheme.scale = 1.6;
usWebDesignStandardsTheme.rhythm = 1;
usWebDesignStandardsTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  h5: {
    marginBottom: rhythm(1 / 4)
  },
  hr: {
    marginBottom: rhythm(1 / 2)
  },
  blockquote: {
    fontSize: rhythm(4 / 5),
    lineHeight: rhythm(5 / 4)
  }
});

const typography = new Typography(usWebDesignStandardsTheme);
export default typography;
