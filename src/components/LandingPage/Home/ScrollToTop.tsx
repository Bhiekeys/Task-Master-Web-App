import  { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const hash = pathname.split('#')[1];
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        // Scroll to the top of the section with smooth behavior
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // If no hash provided, scroll to the top of the page
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
