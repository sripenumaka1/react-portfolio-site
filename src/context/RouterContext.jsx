import React, { createContext, useContext, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Preloader from '../components/Preloader';

const RouterContext = createContext();

export const useRouter = () => useContext(RouterContext);

export const RouterProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const startLoading = React.useCallback(() => {
    console.log('RouterProvider: Starting loading');
    setIsLoading(true);
  }, []);

  const stopLoading = React.useCallback(() => {
    console.log('RouterProvider: Stopping loading');
    setIsLoading(false);
  }, []);

  console.log('RouterProvider render:', { isLoading });

  return (
    <RouterContext.Provider value={{ isLoading, startLoading, stopLoading }}>
      {children}
      <AnimatePresence mode="wait">
        {isLoading && <Preloader key="preloader" />}
      </AnimatePresence>
    </RouterContext.Provider>
  );
};

export default RouterContext;
