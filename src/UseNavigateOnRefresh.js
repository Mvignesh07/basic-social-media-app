import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UseNavigateOnRefresh = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handlePageShow = (event) => {
      if (!event.persisted) { // Page is not loaded from the back-forward cache
        const navigationEntries = performance.getEntriesByType('navigation');
        if (navigationEntries.length > 0 && navigationEntries[0].type === 'reload') {
          navigate('/');
        }
      }
    };

    window.addEventListener('pageshow', handlePageShow);
    return () => {
      window.removeEventListener('pageshow', handlePageShow);
    };
  }, [navigate]);
};

export default UseNavigateOnRefresh;
