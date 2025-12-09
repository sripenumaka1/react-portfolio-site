import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import styles from './ThemeToggle.module.css';

const ThemeToggle = () => {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <button
      className={styles.toggleSwitch}
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      role="switch"
      aria-checked={isDark}
    >
      {/* Sun Icon */}
      <span className={`${styles.icon} ${styles.sunIcon}`}>
        <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
          <path
            d="M10 2V4M10 16V18M4 10H2M6.31412 6.31412L4.8999 4.8999M13.6859 6.31412L15.1001 4.8999M6.31412 13.69L4.8999 15.1042M13.6859 13.69L15.1001 15.1042M18 10H16M14 10C14 12.2091 12.2091 14 10 14C7.79086 14 6 12.2091 6 10C6 7.79086 7.79086 6 10 6C12.2091 6 14 7.79086 14 10Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>

      {/* Toggle Knob */}
      <motion.span 
        className={styles.toggleKnob}
        layout
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30
        }}
      />

      {/* Moon Icon */}
      <span className={`${styles.icon} ${styles.moonIcon}`}>
        <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
          <path
            d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
            fill="currentColor"
          />
        </svg>
      </span>
    </button>
  );
};

export default ThemeToggle;
