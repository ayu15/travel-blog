import Typography from 'typography';
import usWebDesignStandardsTheme from 'typography-theme-us-web-design-standards';

usWebDesignStandardsTheme.baseFontSize = '16px';
usWebDesignStandardsTheme.baseLineHeight = 1.25;
usWebDesignStandardsTheme.scale = 1.6;
usWebDesignStandardsTheme.rhythm = 1;

const typography = new Typography(usWebDesignStandardsTheme);
export default typography;
