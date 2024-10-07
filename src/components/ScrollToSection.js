import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToSection() {
  const { hash } = useLocation();

  useEffect(() => {
    
    if (hash && hash.startsWith('#/')) {
        const cleanHash = hash.replace('#/', '#'); // Convert '#/section' to '#section'
        const element = document.querySelector(cleanHash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else if (hash) {
        // Handle regular hashes like '#section'
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, [hash]);

  return null;
}

export default ScrollToSection;
