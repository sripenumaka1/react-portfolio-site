import React from 'react';
import { motion } from 'framer-motion';
import styles from './FeatureCard.module.css';

const FeatureCard = ({ icon, title, description, delay = 0 }) => {
  return (
    <motion.div
      className={styles.featureCard}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={styles.iconWrapper}>
        {icon}
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </motion.div>
  );
};

export default FeatureCard;

