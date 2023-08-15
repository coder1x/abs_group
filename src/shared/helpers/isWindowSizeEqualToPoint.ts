
import { getProperty } from '@/shared/helpers/readWriteProperties';

type breakpointsT = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl' | 'fhd';
const isWindowSizeEqualToPoint = (name: breakpointsT): boolean => {
  const breakpoints = {
    xxs: 320,
    xs: 375,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    xxl: 1440,
    xxxl: 1600,
    fhd: 1920
  };

  const size = window.innerWidth;

  return (getProperty(breakpoints, name) >= size) ?? false;
};

export default isWindowSizeEqualToPoint;
