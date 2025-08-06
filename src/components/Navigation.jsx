import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navigation.module.css';
import logo from '../assets/images/logo.png';

const Navigation = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to="/" className={styles.logo}>
          <img src={logo} alt="Logo" className={styles.logoImg} />
          <span className={styles.logoText}>SRI PENUMAKA</span>
        </Link>
        <div className={styles.navLinks}>
          <Link
            to="/"
            className={`${styles.navLink} ${isActive('/') ? styles.active : ''}`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`${styles.navLink} ${isActive('/about') ? styles.active : ''}`}
          >
            About
          </Link>
          <Link
            to="/portfolio"
            className={`${styles.navLink} ${isActive('/portfolio') ? styles.active : ''}`}
          >
            Portfolio
          </Link>
          <Link
            to="/contact"
            className={`${styles.navLink} ${isActive('/contact') ? styles.active : ''}`}
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
