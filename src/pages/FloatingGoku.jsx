import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './FloatingGoku.module.css';
import gokuImg from '../assets/images/goku.png';
import bgImg from '../assets/images/background.gif';

export default function FloatingGoku() {
  const navigate = useNavigate();
  return (
    <div className={styles.wrapper}>
      <motion.button
        className={styles.backButton}
        onClick={() => (window.history.length > 1 ? navigate(-1) : navigate('/portfolio'))}
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ scale: 1.05 }}
      >
        ← Back
      </motion.button>
      <motion.div
        className={styles.background}
        style={{ backgroundImage: `url(${bgImg})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className={styles.goku}
        style={{ backgroundImage: `url(${gokuImg})` }}
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1,
          y: [0, -20, 0]
        }}
        transition={{ 
          opacity: { duration: 1.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] },
          y: { 
            duration: 3, 
            repeat: Infinity, 
            repeatType: 'loop',
            ease: 'easeInOut',
            delay: 1.5
          }
        }}
      />
    </div>
  );
}