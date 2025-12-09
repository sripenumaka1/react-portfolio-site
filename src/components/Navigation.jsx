import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navigation.module.css';
import logo from '../assets/images/logofr.png';
import ThemeToggle from './ThemeToggle';
import MobileMenu from './MobileMenu';

const Navigation = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <header className={styles.header}>
        <nav className={styles.nav} aria-label="Main navigation">
          <Link to="/" className={styles.logo} aria-label="Home - Sri Penumaka Portfolio">
            <img src={logo} alt="Sri Penumaka Logo" className={styles.logoImg} />
            <span className={styles.logoText}>SRI PENUMAKA</span>
          </Link>
          
          {/* Desktop Navigation with Theme Toggle */}
          <div className={styles.navLinks}>
            <Link
              to="/"
              className={`${styles.navLink} ${isActive('/') ? styles.active : ''}`}
              aria-current={isActive('/') ? 'page' : undefined}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`${styles.navLink} ${isActive('/about') ? styles.active : ''}`}
              aria-current={isActive('/about') ? 'page' : undefined}
            >
              About
            </Link>
            <Link
              to="/portfolio"
              className={`${styles.navLink} ${isActive('/portfolio') ? styles.active : ''}`}
              aria-current={isActive('/portfolio') ? 'page' : undefined}
            >
              Portfolio
            </Link>
            <Link
              to="/contact"
              className={`${styles.navLink} ${isActive('/contact') ? styles.active : ''}`}
              aria-current={isActive('/contact') ? 'page' : undefined}
            >
              Contact
            </Link>
            <ThemeToggle />
          </div>

          {/* Right Side Actions (Mobile) */}
          <div className={styles.navActions}>
            
            {/* Hamburger Menu Button (Mobile) */}
            <button
              className={styles.hamburger}
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={isMobileMenuOpen}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 12H21M3 6H21M3 18H21"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
};

export default Navigation;
