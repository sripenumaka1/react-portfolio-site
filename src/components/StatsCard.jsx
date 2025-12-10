import React from 'react';
import { motion } from 'framer-motion';
import styles from './StatsCard.module.css';

const StatsCard = ({ value, label, icon, delay = 0 }) => {
  return (
    <motion.div
      className={styles.statsCard}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {icon && <div className={styles.icon}>{icon}</div>}
      <div className={styles.value}>{value}</div>
      <div className={styles.label}>{label}</div>
    </motion.div>
  );
};

export default StatsCard;

