import React from 'react';

// Performance monitoring utility
export const performanceMonitor = {
  // Track page load time
  trackPageLoad: (pageName) => {
    const startTime = performance.now();
    
    // Return a function to call when page is fully loaded
    return () => {
      const endTime = performance.now();
      const loadTime = endTime - startTime;
      
      console.log(`🚀 ${pageName} loaded in: ${loadTime.toFixed(2)}ms`);
      
      // Also log to browser performance API
      if (window.performance && window.performance.mark) {
        window.performance.mark(`${pageName}-loaded`);
        window.performance.measure(
          `${pageName}-load-time`,
          'navigationStart',
          `${pageName}-loaded`
        );
      }
      
      return loadTime;
    };
  },

  // Track component render time
  trackComponentRender: (componentName) => {
    const startTime = performance.now();
    
    return () => {
      const endTime = performance.now();
      const renderTime = endTime - startTime;
      
      console.log(`⚡ ${componentName} rendered in: ${renderTime.toFixed(2)}ms`);
      return renderTime;
    };
  },

  // Get all performance metrics
  getMetrics: () => {
    if (window.performance && window.performance.getEntriesByType) {
      const navigation = window.performance.getEntriesByType('navigation')[0];
      const paint = window.performance.getEntriesByType('paint');
      
      return {
        domContentLoaded: navigation?.domContentLoadedEventEnd - navigation?.domContentLoadedEventStart,
        loadComplete: navigation?.loadEventEnd - navigation?.loadEventStart,
        firstPaint: paint.find(p => p.name === 'first-paint')?.startTime,
        firstContentfulPaint: paint.find(p => p.name === 'first-contentful-paint')?.startTime,
      };
    }
    return null;
  }
};

// Hook for React components
export const usePerformanceMonitor = (pageName) => {
  const [loadTime, setLoadTime] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);
  
  React.useEffect(() => {
    setIsLoading(true);
    const endTracking = performanceMonitor.trackPageLoad(pageName);
    
    // Mark as loaded when component mounts
    const timer = setTimeout(() => {
      const time = endTracking();
      setLoadTime(time);
      setIsLoading(false);
    }, 600); // Increased delay to show loading animation
    
    return () => clearTimeout(timer);
  }, [pageName]);
  
  return { loadTime, isLoading };
};
