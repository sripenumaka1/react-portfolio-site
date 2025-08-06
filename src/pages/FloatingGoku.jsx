import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './FloatingGoku.module.css';
import gokuImg from '../assets/images/goku.png';
import bgImg from '../assets/images/background.gif';

export default function FloatingGoku() {
  const navigate = useNavigate();
  return (
    <div className={styles.wrapper}>
      <button
        className={styles.backButton}
        onClick={() => (window.history.length > 1 ? navigate(-1) : navigate('/portfolio'))}
      >
        ← Back
      </button>
      <div
        className={styles.background}
        style={{ backgroundImage: `url(${bgImg})` }}
      />
      <div
        className={styles.goku}
        style={{ backgroundImage: `url(${gokuImg})` }}
      />
    </div>
  );
}