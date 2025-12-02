import React from 'react';
import styles from './Skeleton.module.css';

export const Skeleton = ({ width, height, borderRadius = '4px', className = '', ...props }) => {
  return (
    <div
      className={`${styles.skeleton} ${className}`}
      style={{ width, height, borderRadius }}
      aria-busy="true"
      aria-live="polite"
      {...props}
    />
  );
};

export const SkeletonCard = () => {
  return (
    <div className={styles.skeletonCard}>
      <Skeleton height="200px" borderRadius="8px 8px 0 0" />
      <div className={styles.skeletonCardContent}>
        <Skeleton width="80%" height="24px" />
        <Skeleton width="100%" height="16px" />
        <Skeleton width="90%" height="16px" />
        <div className={styles.skeletonTags}>
          <Skeleton width="60px" height="24px" borderRadius="9999px" />
          <Skeleton width="80px" height="24px" borderRadius="9999px" />
        </div>
      </div>
    </div>
  );
};

export const SkeletonText = ({ lines = 3 }) => {
  return (
    <div className={styles.skeletonText}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          width={i === lines - 1 ? '70%' : '100%'}
          height="16px"
        />
      ))}
    </div>
  );
};

export default Skeleton;

