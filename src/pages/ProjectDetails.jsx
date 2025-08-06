import React from 'react';
import styles from './ProjectDetails.module.css';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { motion } from 'framer-motion';

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
    <FadeInSection className={styles.headerBar}>
      <div className={styles.headerContent}>
        <Link to="/portfolio" className={styles.backLink}>&larr; Back to Portfolio</Link>
      </div>
    </FadeInSection>
    <FadeInSection className={styles.heroSection}>
      <h1 className={styles.projectTitle}>{title}</h1>
      <div className={styles.projectSubtitle}>{subtitle}</div>
    </FadeInSection>
    <FadeInSection className={styles.imageSection}>
      <div className={styles.imageWrapper}>
        <img className={styles.projectImage + (title === 'Floating Goku' ? ' ' + styles.projectImageCropTop : '')} src={image} alt={title} />
      </div>
    </FadeInSection>
    <FadeInSection className={styles.infoSection}>
      <div className={styles.infoLeft}>
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
      </div>
      <div className={styles.infoRight}>
        <div className={styles.infoRow}><span className={styles.infoSmallLabel}>Duration</span><span className={styles.infoSmallValue}>{duration}</span></div>
        <div className={styles.infoRow}><span className={styles.infoSmallLabel}>Year</span><span className={styles.infoSmallValue}>{year}</span></div>
        <div className={styles.infoRow}><span className={styles.infoSmallLabel}>Category</span><span className={styles.infoSmallValue}>{category}</span></div>
      </div>
    </FadeInSection>
    <FadeInSection className={styles.descriptionSection}>
      <div className={styles.descriptionText} dangerouslySetInnerHTML={{__html: description}} />
    </FadeInSection>
    {children}
    <FadeInSection className={styles.demoSection}>
      <a className={styles.demoBtn} href={liveDemoLink} target="_blank" rel="noopener noreferrer">View Live Demo</a>
    </FadeInSection>
    <FadeInSection className={styles.projectNavSection}>
      {prevProject && (
        <Link className={styles.projectNavPrev} to={prevProject.link}>&larr; Previous Project</Link>
      )}
      {nextProject && (
        <Link className={styles.projectNavNext} to={nextProject.link}>Next Project &rarr;</Link>
      )}
    </FadeInSection>
  </div>
);

export default ProjectDetails;