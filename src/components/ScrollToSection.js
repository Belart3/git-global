import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToSection() {
  const { hash } = useLocation();

  useEffect(() => {
    
    if (hash && hash !== '#/') {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return null;
}

export default ScrollToSection;
