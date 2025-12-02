import React, { useState, useEffect, useRef } from 'react';
import styles from './LazyImage.module.css';

const LazyImage = ({ 
  src, 
  alt, 
  className = '', 
  style = {}, 
  aspectRatio = '16/9',
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '50px',
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={imgRef}
      className={`${styles.imageWrapper} ${className}`}
      style={{ ...style, aspectRatio }}
    >
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={`${styles.image} ${isLoaded ? styles.loaded : ''}`}
          onLoad={() => setIsLoaded(true)}
          loading="lazy"
          {...props}
        />
      )}
      {!isLoaded && (
        <div className={styles.placeholder}>
          <div className={styles.spinner}></div>
        </div>
      )}
    </div>
  );
};

export default LazyImage;

