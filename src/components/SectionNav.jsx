import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './SectionNav.module.css';

const SectionNav = ({ sections }) => {
  const [activeSection, setActiveSection] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset for better detection
      
      // Check which section is in view
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(sections[i].id);
            break;
          }
        }
      }

      // Show nav after scrolling past hero
      const heroSection = document.getElementById('project-hero');
      if (heroSection) {
        setIsVisible(window.scrollY > heroSection.offsetHeight - 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Account for sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.nav
      className={`${styles.sectionNav} ${isVisible ? styles.visible : ''}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className={styles.navContent}>
        {sections.map((section) => (
          <button
            key={section.id}
            className={`${styles.navItem} ${activeSection === section.id ? styles.active : ''}`}
            onClick={() => scrollToSection(section.id)}
            aria-label={`Navigate to ${section.label}`}
          >
            <span className={styles.navLabel}>{section.label}</span>
            {activeSection === section.id && (
              <motion.div
                className={styles.activeIndicator}
                layoutId="activeIndicator"
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>
    </motion.nav>
  );
};

export default SectionNav;

