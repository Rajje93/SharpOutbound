import { useState, useEffect } from 'react';

interface ResponsiveConfig {
  mobile: number;
  tablet: number;
  desktop: number;
}

const defaultBreakpoints: ResponsiveConfig = {
  mobile: 768,
  tablet: 1024,
  desktop: 1280,
};

export const useResponsive = (customBreakpoints?: Partial<ResponsiveConfig>) => {
  const breakpoints = { ...defaultBreakpoints, ...customBreakpoints };
  
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    isMobile: windowWidth <= breakpoints.mobile,
    isTablet: windowWidth > breakpoints.mobile && windowWidth <= breakpoints.tablet,
    isDesktop: windowWidth > breakpoints.tablet,
    windowWidth,
  };
}; 