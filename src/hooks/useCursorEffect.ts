import { useEffect } from 'react';

export const useCursorEffect = () => {
  useEffect(() => {
    const handleMouseEnter = () => {
      document.body.classList.add('link-hover');
    };

    const handleMouseLeave = () => {
      document.body.classList.remove('link-hover');
    };

    const links = document.querySelectorAll('a, button');
    
    links.forEach(link => {
      link.addEventListener('mouseenter', handleMouseEnter);
      link.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('mouseenter', handleMouseEnter);
        link.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);
}; 