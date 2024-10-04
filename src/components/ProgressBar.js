import React, { useEffect, useState } from 'react';

const ProgressBar = () => {
    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / windowHeight) * 100;
      setScrollY(scrollPercent);
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
      <div className="h-2 ">
        <div
          className="h-full bg-PE500"
          style={{ width: `${scrollY}%` }}
        ></div>
      </div>
    );
}
 
export default ProgressBar;