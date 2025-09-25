import React, { useEffect, useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { useLocation } from 'react-router-dom';

const RouteWrapper = ({ children }) => {
  const { startLoading, stopLoading } = useRouter();
  const location = useLocation();
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const isHomePage = location.pathname === '/';
    
    if (isFirstLoad) {
      console.log('Initial load', { isHomePage });
      setIsFirstLoad(false);
      if (isHomePage) {
        setShowContent(true);
        return;
      }
    }

    console.log('Starting navigation transition');
    startLoading();
    setShowContent(false);
    
    const timer = setTimeout(() => {
      console.log('Transition complete');
      stopLoading();
      setShowContent(true);
    }, 800);

    return () => clearTimeout(timer);
  }, [location.pathname, isFirstLoad, startLoading, stopLoading]);

  if (!showContent) {
    return null;
  }

  return children;
};

export default RouteWrapper;
