import React from 'react';
import styles from './ProjectDetails.module.css';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from "../components/ScrollReveal";
import Breadcrumb from "../components/Breadcrumb";
import SEO from "../components/SEO";

// Use global ScrollReveal

const ProjectDetails = ({
  title,
  subtitle,
  image,
  role,
  tools,
  duration,
  year,
  category,
  description,
  liveDemoLink,
  prevProject,
  nextProject,
  children
}) => (
  <div className={styles.wrapper}>
    <SEO 
      title={title}
      description={subtitle || `View ${title} project details, including role, tools used, and live demo.`}
    />
    <ScrollReveal className={styles.headerBar} duration={1} delay={0}>
      <div className={styles.headerContent}>
        <Breadcrumb items={[
          { label: 'Home', path: '/' },
          { label: 'Portfolio', path: '/portfolio' },
          { label: title, path: '#' }
        ]} />
      </div>
    </ScrollReveal>
    <ScrollReveal className={styles.heroSection} duration={1} delay={0.2}>
      <motion.h1 
        className={styles.projectTitle}
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >{title}</motion.h1>
      <motion.div 
        className={styles.projectSubtitle}
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >{subtitle}</motion.div>
    </ScrollReveal>
    <ScrollReveal className={styles.imageSection} duration={1} delay={0.4}>
      <motion.div 
        className={styles.imageWrapper}
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <img className={styles.projectImage + (title === 'Floating Goku' ? ' ' + styles.projectImageCropTop : '')} src={image} alt={title} />
      </motion.div>
    </ScrollReveal>
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
          <div className={styles.infoValue}>{role}</div>
        </div>
        <div className={styles.infoBlock}>
          <div className={styles.infoLabel}>Tools Used</div>
          <div className={styles.toolsRow}>
            {tools.map(tool => (
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
        <div className={styles.infoRow}><span className={styles.infoSmallLabel}>Duration</span><span className={styles.infoSmallValue}>{duration}</span></div>
        <div className={styles.infoRow}><span className={styles.infoSmallLabel}>Year</span><span className={styles.infoSmallValue}>{year}</span></div>
        <div className={styles.infoRow}><span className={styles.infoSmallLabel}>Category</span><span className={styles.infoSmallValue}>{category}</span></div>
      </motion.div>
    </ScrollReveal>
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
    {children}
    <ScrollReveal className={styles.demoSection} duration={1} delay={0.2}>
      <motion.a 
        className={styles.demoBtn} 
        href={liveDemoLink} 
        target="_blank" 
        rel="noopener noreferrer"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ scale: 1.05 }}
      >View Live Demo</motion.a>
    </ScrollReveal>
    <ScrollReveal className={styles.projectNavSection} duration={1} delay={0.2}>
      {prevProject && (
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link className={styles.projectNavPrev} to={prevProject.link}>&larr; Previous Project</Link>
        </motion.div>
      )}
      {nextProject && (
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link className={styles.projectNavNext} to={nextProject.link}>Next Project &rarr;</Link>
        </motion.div>
      )}
    </ScrollReveal>
  </div>
);

export default ProjectDetails;