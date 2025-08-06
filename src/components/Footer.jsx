import React from 'react';
import styles from './Footer.module.css';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.left}>
      <div className={styles.tagline}>
        Minimalist designer creating functional and meaningful digital experiences.
      </div>
      <div className={styles.email}>sridattapenumaka@gmail.com</div>
    </div>
    <div className={styles.center}>
      <div className={styles.heading}>Site Links</div>
      <ul>
        <li><Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link></li>
        <li><Link to="/about" style={{ color: 'inherit', textDecoration: 'none' }}>About</Link></li>
        <li><Link to="/portfolio" style={{ color: 'inherit', textDecoration: 'none' }}>Portfolio</Link></li>
        <li><Link to="/contact" style={{ color: 'inherit', textDecoration: 'none' }}>Contact</Link></li>
      </ul>
    </div>
    <div className={styles.right}>
      <div className={styles.heading}>Connect</div>
      <div className={styles.socialIcons} style={{ display: 'flex', gap: 16 }}>
        <a href="https://www.instagram.com/sri.d06/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram size={24} />
        </a>
        <a href="https://www.linkedin.com/in/sri-datta-penumaka-693143328/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin size={24} />
        </a>
        <a href="https://github.com/sripenumaka1" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub size={24} />
        </a>
      </div>
    </div>
    <div className={styles.bottom}>
      <p>&copy; {new Date().getFullYear()} Sri. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
