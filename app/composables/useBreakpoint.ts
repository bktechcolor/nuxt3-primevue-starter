import { reactive } from 'vue';
import { useBreakpoints } from '@vueuse/core';

export type UseBreakpointsResponsive = {
  sm: boolean;
  md: boolean;
  lg: boolean;
  xl: boolean;
  mobile: boolean;
  mobileMd: boolean;
  mobileSm: boolean;
  xxl: boolean;
  xxxl: boolean;
  xxxxl: boolean;
};

export const useFsBreakpoints = () => {
  const breakpoints = useBreakpoints({
    md: 641,
    lg: 769,
    xl: 1025,
    xxl: 1200,
    xxxl: 1400,
    xxxxl: 1600,
  });

  const breakpointSm = breakpoints.smaller('md');
  const breakpointMd = breakpoints.between('md', 'lg');
  const breakpointLg = breakpoints.between('lg', 'xl');
  const breakpointXl = breakpoints.greaterOrEqual('xl');
  const isMobile = breakpoints.smaller('xl');
  const isMobileMd = breakpoints.smaller('lg');
  const isMobileSm = breakpoints.smaller('md');
  const breakpointXxl = breakpoints.between('xl', 'xxl');
  const breakpointXxxl = breakpoints.between('xxl', 'xxxl');
  const breakpointXxxxl = breakpoints.greaterOrEqual('xxxxl');

  const responsive = reactive({
    sm: breakpointSm,
    md: breakpointMd,
    lg: breakpointLg,
    xl: breakpointXl,
    mobile: isMobile,
    mobileMd: isMobileMd,
    mobileSm: isMobileSm,
    xxl: breakpointXxl,
    xxxl: breakpointXxxl,
    xxxxl: breakpointXxxxl,
  });

  return { responsive, breakpoints };
};
