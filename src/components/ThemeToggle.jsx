import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import styles from './ThemeToggle.module.css';

const ThemeToggle = () => {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <motion.button
      className={styles.themeToggle}
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <motion.div
        className={styles.iconWrapper}
        initial={false}
        animate={{
          rotate: isDark ? 180 : 0,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        {isDark ? (
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 2V4M10 16V18M4 10H2M6.31412 6.31412L4.8999 4.8999M13.6859 6.31412L15.1001 4.8999M6.31412 13.69L4.8999 15.1042M13.6859 13.69L15.1001 15.1042M18 10H16M14 10C14 12.2091 12.2091 14 10 14C7.79086 14 6 12.2091 6 10C6 7.79086 7.79086 6 10 6C12.2091 6 14 7.79086 14 10Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
              fill="currentColor"
            />
          </svg>
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;

