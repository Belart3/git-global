import { useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
export const RedirectOnRefresh = () => {
    const history = useHistory();

    useEffect(() => {
      const navigationType = performance.getEntriesByType('navigation')[0]?.type;
  
      if (navigationType === 'reload') {
        // Redirect to the homepage
        history.push('/');
  
        // Scroll to the top of the page
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, [history]);

    return (null);
}