import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import lumoraBrownImg from '../assets/images/LumoraBrown.png';
import styles from './ProjectDetails.module.css';
import ScrollReveal from "../components/ScrollReveal";
import Breadcrumb from "../components/Breadcrumb";
import SEO from "../components/SEO";

const description = `Lumora is a responsive landing page created for a fictional home décor brand focused on elegance, simplicity, and modern living. The goal was to design a clean and calming user experience that reflects the brand's minimalist identity while guiding users through featured products and key information with ease.<br/><br/>The landing page was built using HTML, CSS, and JavaScript, with GSAP powering smooth scroll-based animations to enhance interactivity. Special attention was given to visual hierarchy, typography, and whitespace to create a refined aesthetic that feels both professional and inviting across all screen sizes.<br/><br/>This project showcases my ability to design and develop cohesive user experiences — from layout and branding to front-end functionality — with a strong emphasis on responsive design and subtle visual storytelling.`;

export default function Lumora() {
  return (
    <div className={styles.wrapper}>
      <SEO 
        title="Lumora – Responsive Landing Page"
        description="A modern, responsive landing page design with smooth animations and intuitive user experience"
      />
      
      {/* Breadcrumb Header */}
      <ScrollReveal className={styles.headerBar} duration={1} delay={0}>
        <div className={styles.headerContent}>
          <Breadcrumb items={[
            { label: 'Home', path: '/' },
            { label: 'Portfolio', path: '/portfolio' },
            { label: 'Lumora', path: '#' }
          ]} />
        </div>
      </ScrollReveal>

      {/* Hero Section with Image Background */}
      <motion.div 
        style={{
          position: 'relative',
          width: '100%',
          height: '70vh',
          minHeight: '500px',
          maxHeight: '700px',
          overflow: 'hidden',
          marginBottom: '60px',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Background Image */}
        <img 
          src={lumoraBrownImg} 
          alt="Lumora Project"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
        
        {/* Dark Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.6) 100%)',
        }} />
        
        {/* Title Content */}
        <div style={{
          position: 'absolute',
          bottom: '60px',
          left: '0',
          right: '0',
          padding: '0 60px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}>
          <motion.h1 
            style={{
              color: '#FFFFFF',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 700,
              marginBottom: '16px',
              textShadow: '0 4px 20px rgba(0,0,0,0.4)',
              lineHeight: 1.1,
            }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            Lumora – Responsive Landing Page
          </motion.h1>
          <motion.p 
            style={{
              color: 'rgba(255,255,255,0.9)',
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              maxWidth: '600px',
              textShadow: '0 2px 10px rgba(0,0,0,0.3)',
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            A modern, responsive landing page design with smooth animations and intuitive user experience
          </motion.p>
        </div>
      </motion.div>

      {/* Project Info Section */}
      <ScrollReveal className={styles.infoSection} duration={1} delay={0.2}>
        <motion.div 
          className={styles.infoLeft}
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={styles.infoBlock}>
            <div className={styles.infoLabel}>Role</div>
            <div className={styles.infoValue}>Front End Developer</div>
          </div>
          <div className={styles.infoBlock}>
            <div className={styles.infoLabel}>Tools Used</div>
            <div className={styles.toolsRow}>
              {["HTML", "CSS", "JavaScript"].map(tool => (
                <span className={styles.toolTag} key={tool}>{tool}</span>
              ))}
            </div>
          </div>
        </motion.div>
        <motion.div 
          className={styles.infoRight}
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={styles.infoRow}><span className={styles.infoSmallLabel}>Duration</span><span className={styles.infoSmallValue}>3 weeks</span></div>
          <div className={styles.infoRow}><span className={styles.infoSmallLabel}>Year</span><span className={styles.infoSmallValue}>2025</span></div>
          <div className={styles.infoRow}><span className={styles.infoSmallLabel}>Category</span><span className={styles.infoSmallValue}>Web Design</span></div>
        </motion.div>
      </ScrollReveal>

      {/* Description */}
      <ScrollReveal className={styles.descriptionSection} duration={1} delay={0.2}>
        <motion.div 
          className={styles.descriptionText} 
          dangerouslySetInnerHTML={{__html: description}}
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0, ease: [0.22, 1, 0.36, 1] }}
        />
      </ScrollReveal>

      {/* Live Demo Button */}
      <ScrollReveal className={styles.demoSection} duration={1} delay={0.2}>
        <motion.a 
          className={styles.demoBtn} 
          href="https://lumora.sripenumaka.ca/" 
          target="_blank" 
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.05 }}
        >View Live Demo</motion.a>
      </ScrollReveal>

      {/* Navigation to Other Projects */}
      <ScrollReveal className={styles.projectNavSection} duration={1} delay={0.2}>
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link className={styles.projectNavNext} to="/temple-redesign">Next Project &rarr;</Link>
        </motion.div>
      </ScrollReveal>
    </div>
  );
}
