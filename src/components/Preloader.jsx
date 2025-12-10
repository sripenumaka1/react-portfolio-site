import React from 'react';
import { motion } from 'framer-motion';
import styles from './Preloader.module.css';

const Preloader = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={styles.preloader}
    >
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
        className={styles.spinner}
      />
    </motion.div>
  );
};

export default Preloader;
