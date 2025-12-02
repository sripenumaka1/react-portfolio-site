import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className={styles.container} id="main-content">
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className={styles.number}
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, type: 'spring' }}
        >
          404
        </motion.div>
        
        <h1 className={styles.title}>Page Not Found</h1>
        
        <p className={styles.description}>
          Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>
        
        <div className={styles.illustration}>
          <svg
            width="200"
            height="200"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="100" cy="100" r="80" stroke="var(--color-gray-300)" strokeWidth="4" />
            <path
              d="M70 85C70 85 80 75 100 75C120 75 130 85 130 85"
              stroke="var(--color-gray-400)"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <circle cx="75" cy="95" r="5" fill="var(--color-gray-400)" />
            <circle cx="125" cy="95" r="5" fill="var(--color-gray-400)" />
            <path
              d="M70 130C70 130 80 120 100 120C120 120 130 130 130 130"
              stroke="var(--color-gray-400)"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
        </div>
        
        <div className={styles.actions}>
          <Link to="/" className={styles.homeButton}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 10L10 3L17 10M5 8V17H8V13H12V17H15V8"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Go Home
          </Link>
          
          <Link to="/portfolio" className={styles.portfolioButton}>
            View Portfolio
          </Link>
        </div>
        
        <div className={styles.suggestions}>
          <p className={styles.suggestionsTitle}>You might be looking for:</p>
          <div className={styles.links}>
            <Link to="/" className={styles.link}>Home</Link>
            <Link to="/about" className={styles.link}>About</Link>
            <Link to="/portfolio" className={styles.link}>Portfolio</Link>
            <Link to="/contact" className={styles.link}>Contact</Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;

