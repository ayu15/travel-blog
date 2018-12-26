import Typography from 'typography';
import usWebDesignStandardsTheme from 'typography-theme-us-web-design-standards';

usWebDesignStandardsTheme.baseFontSize = '16px';
usWebDesignStandardsTheme.baseLineHeight = 1.48;
usWebDesignStandardsTheme.scale = 2;
usWebDesignStandardsTheme.rhythm = 1;

const typography = new Typography(usWebDesignStandardsTheme);
export default typography;
