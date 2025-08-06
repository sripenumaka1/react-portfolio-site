import React from "react";
import styles from './About.module.css';
import profileImg from '../assets/images/profile.jpg';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { FaBasketballBall, FaFutbol, FaMusic, FaDumbbell } from 'react-icons/fa';

function FadeInSection({ children, ...props }) {
  const ref = useRef();
  const [inView, setInView] = React.useState(false);

  React.useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.unobserve(ref.current); };
  }, []);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
      {...props}
    >
      {children}
    </motion.section>
  );
}

const About = () => {
  const personalStack = [
    { name: 'Basketball', icon: <FaBasketballBall />, color: '#183153' },
    { name: 'Soccer', icon: <FaFutbol />, color: '#183153' },
    { name: 'Music', icon: <FaMusic />, color: '#183153' },
    { name: 'Gym', icon: <FaDumbbell />, color: '#183153' },
  ];

  const aboutIcons = [
    { icon: <FaBasketballBall />, style: { top: '10%', left: '15%', fontSize: '3.5rem', opacity: 0.13 } },
    { icon: <FaFutbol />, style: { top: '60%', left: '10%', fontSize: '2.8rem', opacity: 0.11 } },
    { icon: <FaMusic />, style: { top: '30%', left: '80%', fontSize: '3.2rem', opacity: 0.12 } },
    { icon: <FaDumbbell />, style: { top: '75%', left: '70%', fontSize: '2.7rem', opacity: 0.10 } },
    { icon: <FaBasketballBall />, style: { top: '20%', left: '60%', fontSize: '2.5rem', opacity: 0.09 } },
    { icon: <FaFutbol />, style: { top: '80%', left: '40%', fontSize: '3.1rem', opacity: 0.10 } },
    { icon: <FaMusic />, style: { top: '55%', left: '85%', fontSize: '2.6rem', opacity: 0.13 } },
    { icon: <FaDumbbell />, style: { top: '40%', left: '35%', fontSize: '2.9rem', opacity: 0.12 } },
    // Add more if desired
  ];

  return (
    <div className={styles.container}>
      <FadeInSection className={styles.aboutSection}>
        <div className={styles.aboutIconsBg}>
          {aboutIcons.map((item, i) => (
            <span
              key={i}
              className={styles.aboutBgIcon}
              style={item.style}
            >
              {item.icon}
            </span>
          ))}
        </div>
        <motion.div
          className={styles.profileImage}
          initial={{ scale: 0.9, boxShadow: '0 0 0 0 #bfa14a' }}
          animate={{ scale: 1, boxShadow: '0 0 40px 0 #bfa14a, 0 0 80px 0 #ffe9a7' }}
          transition={{ duration: 0.8, type: 'spring' }}
          whileHover={{ scale: 1.05, boxShadow: '0 0 60px 10px #bfa14a, 0 0 120px 20px #ffe9a7' }}
        >
          <motion.img
            src={profileImg}
            alt="Sri Penumaka Profile"
            className={styles.profileImg}
            initial={false}
            animate={false}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, type: 'spring' }}
          />
        </motion.div>
        
        <div className={styles.aboutContent}>
          <div className={styles.sectionLabel}>About Me</div>
          <h1 className={styles.mainHeading}>Hi, I'm Sri.</h1>
          
          <p className={styles.introText}>
            I'm a passionate developer dedicated to creating exceptional digital experiences that solve real-world problems. My journey in technology is driven by curiosity, innovation, and a commitment to continuous learning.
          </p>
          
          <p className={styles.secondaryText}>
            Through every project, I strive to blend technical expertise with creative problem-solving, ensuring that each solution not only meets requirements but exceeds expectations.
          </p>
          
          <p className={styles.descriptionText}>
            I'm a curious and creative individual who enjoys turning ideas into clean, engaging visuals. Whether I'm designing a layout or building a website, I find fulfillment in creating things that are both meaningful and easy to use.
          </p>
          <p className={styles.personalText}>
            Outside of coding, I love playing sports like <b>basketball</b> and <b>soccer</b>, lifting weights at the <b>gym</b>, and listening to or making <b>music</b>. These activities keep me energized, creative, and balanced.
          </p>
        </div>
      </FadeInSection>

      {/* Core Values Section */}
      <FadeInSection className={styles.coreValues}>
        <h2 className={styles.coreValuesTitle}>Core Values</h2>
        <div className={styles.valuesGrid}>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>
              {/* Clock Icon */}
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="15" stroke="#000" strokeWidth="2" fill="#fff" />
                <path d="M16 8v8l5 5" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className={styles.valueTitle}>Punctuality</h3>
            <p className={styles.valueDescription}>
              Delivering projects on time and meeting deadlines consistently
            </p>
          </div>
          
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>
              {/* Shield Icon */}
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 4L28 8v8c0 7.732-6.268 14-12 14S4 23.732 4 16V8l12-4z" stroke="#000" strokeWidth="2" fill="#fff" />
                <path d="M16 4v24" stroke="#000" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <h3 className={styles.valueTitle}>Accountability</h3>
            <p className={styles.valueDescription}>
              Taking ownership of decisions and being responsible for outcomes
            </p>
          </div>
          
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>
              {/* Arrow Up Icon */}
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="15" stroke="#000" strokeWidth="2" fill="#fff" />
                <path d="M16 22V10" stroke="#000" strokeWidth="2" strokeLinecap="round" />
                <path d="M12 14l4-4 4 4" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className={styles.valueTitle}>Continuous Improvement</h3>
            <p className={styles.valueDescription}>
              Always learning and evolving to stay ahead of industry trends
            </p>
          </div>
        </div>
      </FadeInSection>

      {/* CTA Section */}
      <FadeInSection className={styles.ctaSection}
        style={{
          width: "100vw",
          marginLeft: "calc(-50vw + 50%)",
          marginRight: "calc(-50vw + 50%)",
          padding: "48px 2rem",
          background: "#EEEEEE",
          boxSizing: "border-box",
          textAlign: "center",
          borderTop: "1px solid rgba(0,0,0,0.05)",
          borderBottom: "1px solid rgba(0,0,0,0.05)",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1.5rem"
          }}
        >
          {/* View LinkedIn Button on the left */}
          <a
            href="https://www.linkedin.com/in/sri-datta-penumaka-693143328/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.viewLinkedInBtn}
            style={{
              background: "#0077b5",
              color: "#fff",
              fontFamily: "Rubik, sans-serif",
              fontWeight: 500,
              fontSize: 16,
              padding: "12px 24px",
              borderRadius: 8,
              textDecoration: "none",
              display: "inline-block",
              minWidth: 140,
              textAlign: "center",
              boxShadow: "0px 2px 8px rgba(0,0,0,0.08)",
              transition: "background 0.2s, transform 0.2s",
              border: "none"
            }}
          >
            View LinkedIn
          </a>

          {/* Socials on the right */}
          <div style={{ display: "flex", gap: "1rem" }}>
            {/* Email Button */}
            <a
              href="mailto:sridattapenumaka@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              style={{
                background: "#fff",
                color: "#000",
                borderRadius: "50%",
                width: 44,
                height: 44,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 18,
                fontWeight: 600,
                boxShadow: "0px 2px 8px rgba(0,0,0,0.08)",
                border: "1px solid #ccc"
              }}
              title="Email"
            >
              &#9993;
            </a>
            {/* GitHub Button */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              style={{
                background: "#fff",
                color: "#000",
                borderRadius: "50%",
                width: 44,
                height: 44,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 18,
                fontWeight: 600,
                boxShadow: "0px 2px 8px rgba(0,0,0,0.08)",
                border: "1px solid #ccc"
              }}
              title="GitHub"
            >
              gh
            </a>
          </div>
        </div>
      </FadeInSection>
    </div>
  );
};

export default About;