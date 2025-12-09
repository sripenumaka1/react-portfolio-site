import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className={styles.container} id="main-content">
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className={styles.number}
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          404
        </motion.div>
        
        <motion.h1 
          className={styles.title}
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >Page Not Found</motion.h1>
        
        <motion.p 
          className={styles.description}
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
        </motion.p>
        
        <motion.div 
          className={styles.illustration}
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
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
        </motion.div>
        
        <motion.div 
          className={styles.actions}
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1, ease: [0.22, 1, 0.36, 1] }}
        >
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
        </motion.div>
        
        <motion.div 
          className={styles.suggestions}
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className={styles.suggestionsTitle}>You might be looking for:</p>
          <div className={styles.links}>
            <Link to="/" className={styles.link}>Home</Link>
            <Link to="/about" className={styles.link}>About</Link>
            <Link to="/portfolio" className={styles.link}>Portfolio</Link>
            <Link to="/contact" className={styles.link}>Contact</Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound;

