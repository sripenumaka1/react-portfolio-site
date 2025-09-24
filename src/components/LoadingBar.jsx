import React, { useEffect, useState } from 'react';
import styles from './LoadingBar.module.css';

const LoadingBar = ({ isLoading }) => {
  const [progress, setProgress] = useState(0);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    let timer;
    if (isLoading) {
      setComplete(false);
      setProgress(0);
      
      // Quickly jump to 30%
      timer = setTimeout(() => setProgress(30), 50);
      
      // Slowly progress to 70%
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev < 70) {
            return prev + 1;
          }
          clearInterval(interval);
          return prev;
        });
      }, 20);

      return () => {
        clearTimeout(timer);
        clearInterval(interval);
      };
    } else {
      // When loading completes, quickly fill to 100%
      setProgress(100);
      timer = setTimeout(() => setComplete(true), 200);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  if (!isLoading && progress === 0) return null;

  return (
    <div className={styles.loadingBarContainer}>
      <div 
        className={`${styles.loadingBar} ${complete ? styles.loadingBarComplete : ''}`}
        style={{ transform: `scaleX(${progress / 100})` }}
      />
    </div>
  );
};

export default LoadingBar;
