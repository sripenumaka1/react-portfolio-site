import React from 'react';
import styles from './ProjectDetails.module.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ScrollReveal from "../components/ScrollReveal";
import Breadcrumb from "../components/Breadcrumb";
import SEO from "../components/SEO";
import SectionNav from "../components/SectionNav";
import FeatureCard from "../components/FeatureCard";
import ImageGallery from "../components/ImageGallery";
import StatsCard from "../components/StatsCard";

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
  // New enhanced sections
  problem,
  solution,
  features = [],
  designProcess,
  technicalImplementation,
  galleryImages = [],
  results,
  lessonsLearned,
  stats = [],
  children
}) => {
  // Define sections for navigation
  const sections = [
    { id: 'project-hero', label: 'Overview' },
    { id: 'project-info', label: 'Info' },
    ...(problem ? [{ id: 'project-problem', label: 'Problem' }] : []),
    ...(solution ? [{ id: 'project-solution', label: 'Solution' }] : []),
    ...(features.length > 0 ? [{ id: 'project-features', label: 'Features' }] : []),
    ...(designProcess ? [{ id: 'project-design', label: 'Design' }] : []),
    ...(technicalImplementation ? [{ id: 'project-technical', label: 'Technical' }] : []),
    ...(galleryImages.length > 0 ? [{ id: 'project-gallery', label: 'Gallery' }] : []),
    ...(results ? [{ id: 'project-results', label: 'Results' }] : []),
    ...(lessonsLearned ? [{ id: 'project-lessons', label: 'Lessons' }] : []),
  ];

  return (
    <div className={styles.wrapper}>
      <SEO 
        title={title}
        description={subtitle || `View ${title} project details, including role, tools used, and live demo.`}
      />
      
      {/* Section Navigation */}
      {sections.length > 2 && <SectionNav sections={sections} />}

      <ScrollReveal className={styles.headerBar} duration={1} delay={0}>
        <div className={styles.headerContent}>
          <Breadcrumb items={[
            { label: 'Home', path: '/' },
            { label: 'Portfolio', path: '/portfolio' },
            { label: title, path: '#' }
          ]} />
        </div>
      </ScrollReveal>

      {/* Hero Section with Image Background */}
      <section id="project-hero" className={styles.heroSection}>
        <motion.div 
          className={styles.heroImageWrapper}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Background Image */}
          <img 
            className={styles.heroImage + (title === 'Floating Goku' ? ' ' + styles.projectImageCropTop : '')} 
            src={image} 
            alt={title} 
          />
          
          {/* Dark Overlay */}
          <div className={styles.heroOverlay} />
          
          {/* Title Content */}
          <div className={styles.heroContent}>
            <motion.h1 
              className={styles.projectTitle}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >{title}</motion.h1>
            <motion.div 
              className={styles.projectSubtitle}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >{subtitle}</motion.div>
          </div>
        </motion.div>
      </section>

      {/* Project Info Section */}
      <section id="project-info" className={styles.infoSection}>
        <ScrollReveal duration={1} delay={0.2}>
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
      </section>

      {/* Stats Section */}
      {stats.length > 0 && (
        <section className={styles.statsSection}>
          <ScrollReveal duration={1} delay={0.2}>
            <div className={styles.statsGrid}>
              {stats.map((stat, index) => (
                <StatsCard key={index} {...stat} delay={index * 0.1} />
              ))}
            </div>
          </ScrollReveal>
        </section>
      )}

      {/* Description/Overview */}
      {description && (
        <section className={styles.descriptionSection}>
          <ScrollReveal duration={1} delay={0.2}>
            <motion.div 
              className={styles.descriptionText} 
              dangerouslySetInnerHTML={{__html: description}}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0, ease: [0.22, 1, 0.36, 1] }}
            />
          </ScrollReveal>
        </section>
      )}

      {/* Problem Section */}
      {problem && (
        <section id="project-problem" className={styles.contentSection}>
          <ScrollReveal duration={1} delay={0.2}>
            <h2 className={styles.sectionTitle}>The Problem</h2>
            <motion.div 
              className={styles.sectionContent}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              dangerouslySetInnerHTML={{__html: problem}}
            />
          </ScrollReveal>
        </section>
      )}

      {/* Solution Section */}
      {solution && (
        <section id="project-solution" className={styles.contentSection}>
          <ScrollReveal duration={1} delay={0.2}>
            <h2 className={styles.sectionTitle}>The Solution</h2>
            <motion.div 
              className={styles.sectionContent}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              dangerouslySetInnerHTML={{__html: solution}}
            />
          </ScrollReveal>
        </section>
      )}

      {/* Key Features Section */}
      {features.length > 0 && (
        <section id="project-features" className={styles.featuresSection}>
          <ScrollReveal duration={1} delay={0.2}>
            <h2 className={styles.sectionTitle}>Key Features</h2>
            <div className={styles.featuresGrid}>
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} delay={index * 0.1} />
              ))}
            </div>
          </ScrollReveal>
        </section>
      )}

      {/* Design Process Section */}
      {designProcess && (
        <section id="project-design" className={styles.contentSection}>
          <ScrollReveal duration={1} delay={0.2}>
            <h2 className={styles.sectionTitle}>Design Process</h2>
            <motion.div 
              className={styles.sectionContent}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              dangerouslySetInnerHTML={{__html: designProcess}}
            />
          </ScrollReveal>
        </section>
      )}

      {/* Technical Implementation Section */}
      {technicalImplementation && (
        <section id="project-technical" className={styles.contentSection}>
          <ScrollReveal duration={1} delay={0.2}>
            <h2 className={styles.sectionTitle}>Technical Implementation</h2>
            <motion.div 
              className={styles.sectionContent}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              dangerouslySetInnerHTML={{__html: technicalImplementation}}
            />
          </ScrollReveal>
        </section>
      )}

      {/* Image Gallery Section */}
      {galleryImages.length > 0 && (
        <section id="project-gallery" className={styles.gallerySection}>
          <ScrollReveal duration={1} delay={0.2}>
            <h2 className={styles.sectionTitle}>Project Gallery</h2>
            <ImageGallery images={galleryImages} delay={0.2} />
          </ScrollReveal>
        </section>
      )}

      {/* Results Section */}
      {results && (
        <section id="project-results" className={styles.contentSection}>
          <ScrollReveal duration={1} delay={0.2}>
            <h2 className={styles.sectionTitle}>Results & Impact</h2>
            <motion.div 
              className={styles.sectionContent}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              dangerouslySetInnerHTML={{__html: results}}
            />
          </ScrollReveal>
        </section>
      )}

      {/* Lessons Learned Section */}
      {lessonsLearned && (
        <section id="project-lessons" className={styles.contentSection}>
          <ScrollReveal duration={1} delay={0.2}>
            <h2 className={styles.sectionTitle}>Lessons Learned</h2>
            <motion.div 
              className={styles.sectionContent}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              dangerouslySetInnerHTML={{__html: lessonsLearned}}
            />
          </ScrollReveal>
        </section>
      )}

      {/* Custom Children Content */}
      {children}

      {/* Live Demo Button */}
      {liveDemoLink && (
        <section className={styles.demoSection}>
          <ScrollReveal duration={1} delay={0.2}>
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
        </section>
      )}

      {/* Navigation to Other Projects */}
      <section className={styles.projectNavSection}>
        <ScrollReveal duration={1} delay={0.2}>
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
      </section>
    </div>
  );
};

export default ProjectDetails;
