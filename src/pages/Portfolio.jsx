import React, { useState } from "react";
import './Portfolio.css';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from "../components/ScrollReveal";
import { FaPaintBrush, FaCode, FaBolt, FaHtml5, FaCss3Alt, FaJs, FaFigma, FaMagic, FaReact, FaLinkedin, FaEnvelope, FaTimes, FaArrowRight, FaStar, FaRocket, FaSatellite, FaMoon, FaSun } from 'react-icons/fa';
import { SiJavascript, SiReact, SiCss3, SiHtml5 } from 'react-icons/si';
import { Link } from 'react-router-dom';
import { usePerformanceMonitor } from '../utils/performance';
import LoadingBar from '../components/LoadingBar';
import SEO from '../components/SEO';
import profileImg from '../assets/images/profile.jpg';
import lumoraImg from '../assets/images/Lumora.png';
import lumoraCircleImg from '../assets/images/LumoraCircle.png';
import lumoraBrownImg from '../assets/images/LumoraBrown.png';
import sskdImg from '../assets/images/SSKD (2).png';
import sskdOrangeImg from '../assets/images/SSKDOrange.png';
import floatingGokuImg from '../assets/images/floating-goku.png';
import studyBuddyImg from '../assets/images/studybuddy.png';
import studyBuddyModalImg from '../assets/images/StudyBuddyBlue.png';

const projects = [
  {
    title: 'Lumora Landing Page',
    description: 'Lumora is a sleek, responsive landing page for a fictional home décor brand.',
    tags: ['UI/UX', 'Development'],
    image: lumoraCircleImg,
    modalImage: lumoraBrownImg,
    link: '/lumora',
    color: '#D4AF7A',
    imagePosition: 'center 40%',
  },
  {
    title: 'Local Temple Redesign',
    description: 'Shri Sai Kripa Dham is a redesigned website for my local temple in Surrey, BC',
    tags: ['UI/UX', 'Figma', 'Prototyping'],
    image: sskdImg,
    modalImage: sskdOrangeImg,
    link: '/temple-redesign',
    color: '#94A9B3',
  },
  {
    title: 'Floating Goku',
    description: 'Animation using CSS keyframes.',
    tags: ['HTML5', 'CSS', 'Animation'],
    image: floatingGokuImg,
    link: '/project-details-1',
    color: '#F97316',
  },
  {
    title: 'StudyBuddy',
    description: 'A UI/UX Figma prototype to help students connect, collaborate, and stay accountable in their studies.',
    tags: ['UI/UX', 'Figma', 'Prototyping'],
    image: studyBuddyImg,
    modalImage: studyBuddyModalImg,
    link: '/project-details-2',
    color: '#A855F7',
  },
];

const techStack = [
  { name: 'HTML', color: '#F97316', icon: <FaHtml5 size={24} color="#F7F7F7" /> },
  { name: 'CSS', color: '#3B82F6', icon: <FaCss3Alt size={24} color="#F7F7F7" /> },
  { name: 'JavaScript', color: '#FACC15', icon: <FaJs size={24} color="#F7F7F7" /> },
  { name: 'React', color: '#61DAFB', icon: <FaReact size={24} color="#222" /> },
  { name: 'Figma', color: '#A855F7', icon: <FaFigma size={24} color="#F7F7F7" /> },
  { name: 'GSAP', color: '#22C55E', icon: <FaMagic size={24} color="#F7F7F7" /> },
];

// Floating particles
const PARTICLE_COUNT = 15;
function getRandom(min, max) { return Math.random() * (max - min) + min; }
const particles = Array.from({ length: PARTICLE_COUNT }).map((_, i) => ({
  size: getRandom(6, 16),
  top: `${getRandom(5, 95)}%`,
  left: `${getRandom(5, 95)}%`,
  duration: getRandom(5, 9),
  delay: getRandom(0, 4),
  opacity: getRandom(0.1, 0.25),
}));

// Space-themed floating icons for orbital section
const spaceIcons = [
  { icon: <FaStar />, top: '8%', left: '12%', size: '1.8rem', duration: 5, delay: 0, color: '#FFD700' },
  { icon: <FaStar />, top: '15%', left: '85%', size: '1.4rem', duration: 6, delay: 1, color: '#FFD700' },
  { icon: <FaRocket />, top: '25%', left: '8%', size: '2.2rem', duration: 7, delay: 0.5, color: '#F97316' },
  { icon: <FaSatellite />, top: '12%', left: '70%', size: '1.8rem', duration: 6, delay: 1.5, color: '#60A5FA' },
  { icon: <FaMoon />, top: '75%', left: '15%', size: '2rem', duration: 5.5, delay: 0.8, color: '#E2E8F0' },
  { icon: <FaStar />, top: '80%', left: '80%', size: '1.6rem', duration: 5, delay: 2, color: '#FFD700' },
  { icon: <FaStar />, top: '60%', left: '5%', size: '1.2rem', duration: 4.5, delay: 1.2, color: '#FBBF24' },
  { icon: <FaRocket />, top: '85%', left: '60%', size: '1.8rem', duration: 6.5, delay: 0.3, color: '#F97316' },
  { icon: <FaSatellite />, top: '40%', left: '92%', size: '1.5rem', duration: 5.8, delay: 1.8, color: '#60A5FA' },
  { icon: <FaStar />, top: '50%', left: '3%', size: '1.3rem', duration: 4.8, delay: 2.2, color: '#FFD700' },
  { icon: <FaMoon />, top: '20%', left: '45%', size: '1.2rem', duration: 6.2, delay: 0.7, color: '#CBD5E1' },
  { icon: <FaStar />, top: '90%', left: '25%', size: '1.5rem', duration: 5.3, delay: 1.4, color: '#FBBF24' },
];

const Portfolio = () => {
  const { isLoading } = usePerformanceMonitor('Portfolio');
  const [focusedProject, setFocusedProject] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  // Calculate orbital positions for 4 projects
  const orbitRadius = 280; // Distance from center
  const getOrbitalPosition = (index, total) => {
    const angle = (index / total) * 2 * Math.PI - Math.PI / 2; // Start from top
    return {
      x: Math.cos(angle) * orbitRadius,
      y: Math.sin(angle) * orbitRadius,
    };
  };

  const handleProjectClick = (index) => {
    setFocusedProject(index);
    setIsPaused(true);
  };

  const handleClose = () => {
    setFocusedProject(null);
    setIsPaused(false);
  };

  return (
    <div className="container">
      <SEO 
        title="Portfolio"
        description="Explore my web design and development projects including UI/UX designs, responsive websites, and interactive web applications."
      />
      <LoadingBar isLoading={isLoading} />
      
      {/* Hero Section */}
      <ScrollReveal duration={1.2}>
        <section className="heroSection">
          <motion.div
            style={{
              position: 'absolute',
              top: 0, left: 0, width: '100%', height: '100%',
              zIndex: 0,
              pointerEvents: 'none',
            }}
          >
            {particles.slice(0, 8).map((p, idx) => (
              <motion.div
                key={idx}
                initial={{ y: 0, opacity: 0 }}
                animate={{
                  y: [0, getRandom(-60, 60), 0],
                  x: [0, getRandom(-80, 80), 0],
                  opacity: [0, p.opacity, p.opacity * 0.7, p.opacity, 0],
                }}
                transition={{
                  duration: p.duration,
                  repeat: Infinity,
                  repeatType: 'loop',
                  ease: 'easeInOut',
                  delay: p.delay,
                }}
                style={{
                  position: 'absolute',
                  top: p.top,
                  left: p.left,
                  width: p.size,
                  height: p.size,
                  borderRadius: '50%',
                  background: 'var(--text-primary)',
                  boxShadow: '0 0 16px 4px rgba(148, 169, 179, 0.4)',
                }}
              />
            ))}
          </motion.div>
          <div className="codingBg">
            <motion.span 
              className="codingIcon icon1"
              animate={{ y: [0, -30, 0], scale: [1, 1.1, 1], rotate: [0, 8, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            >{'<>'}</motion.span>
            <motion.span 
              className="codingIcon icon2"
              animate={{ y: [0, -30, 0], scale: [1, 1.1, 1], rotate: [0, 8, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            >{'{}'}</motion.span>
            <motion.span 
              className="codingIcon icon3"
              animate={{ y: [0, -30, 0], scale: [1, 1.1, 1], rotate: [0, 8, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 3 }}
            >{'</>'}</motion.span>
            <motion.span 
              className="codingIcon icon4"
              animate={{ y: [0, -30, 0], scale: [1, 1.1, 1], rotate: [0, 8, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            ><SiReact /></motion.span>
            <motion.span 
              className="codingIcon icon5"
              animate={{ y: [0, -30, 0], scale: [1, 1.1, 1], rotate: [0, 8, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 4 }}
            ><SiJavascript /></motion.span>
          </div>
          <motion.div
            className="heroContent"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.h1 
              className="heroTitle"
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >Web Design & Development</motion.h1>
            <motion.p 
              className="heroSubtitle"
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              Creating intuitive, responsive, and visually compelling digital experiences that connect brands with their audiences.
            </motion.p>
          </motion.div>
        </section>
      </ScrollReveal>

      {/* Technical Expertise Section */}
      <ScrollReveal duration={1.2}>
        <section className="techSection">
          <motion.h2 
            className="techTitle"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0, ease: [0.22, 1, 0.36, 1] }}
          >Technical Expertise</motion.h2>
          <div className="techGrid">
            {techStack.map((tech, index) => (
              <motion.div
                className="techCard"
                key={tech.name}
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.3 + index * 0.15, 
                  ease: [0.22, 1, 0.36, 1] 
                }}
                whileHover={{ 
                  scale: 1.15,
                  rotate: [0, -10, 10, -5, 5, 0],
                  transition: {
                    duration: 0.4,
                    rotate: {
                      duration: 0.6,
                      repeat: 0,
                      ease: "easeInOut"
                    }
                  }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="techIcon" style={{ backgroundColor: tech.color }}>{tech.icon}</div>
                <span className="techName">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Orbital Projects Showcase */}
      <ScrollReveal duration={1.2}>
        <section className="orbitalSection">
          <motion.h2 
            className="projectsTitle"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0, ease: [0.22, 1, 0.36, 1] }}
          >My Portfolio</motion.h2>
          <motion.p 
            className="orbitalSubtitle"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >Click on a project to explore</motion.p>
          
          <div className="orbitalContainer">
            {/* Floating space icons */}
            {spaceIcons.map((item, idx) => (
              <motion.div
                key={`space-icon-${idx}`}
                initial={{ opacity: 0 }}
                animate={{
                  y: [0, -20, -10, -25, 0],
                  x: [0, 10, -8, 5, 0],
                  opacity: [0.5, 0.8, 0.6, 0.8, 0.5],
                  rotate: [0, 5, -5, 3, 0],
                }}
                transition={{
                  duration: item.duration,
                  repeat: Infinity,
                  repeatType: 'loop',
                  ease: 'easeInOut',
                  delay: item.delay,
                }}
                style={{
                  position: 'absolute',
                  top: item.top,
                  left: item.left,
                  fontSize: item.size,
                  color: item.color,
                  filter: `drop-shadow(0 0 12px ${item.color}80) drop-shadow(0 0 24px ${item.color}40)`,
                  pointerEvents: 'none',
                  zIndex: 1,
                }}
              >
                {item.icon}
              </motion.div>
            ))}

            {/* Floating particles in orbital area */}
            {particles.map((p, idx) => (
              <motion.div
                key={`orbital-particle-${idx}`}
                initial={{ opacity: 0 }}
                animate={{
                  y: [0, getRandom(-40, 40), 0],
                  x: [0, getRandom(-40, 40), 0],
                  opacity: [0, p.opacity * 0.6, p.opacity * 0.4, p.opacity * 0.6, 0],
                }}
                transition={{
                  duration: p.duration,
                  repeat: Infinity,
                  repeatType: 'loop',
                  ease: 'easeInOut',
                  delay: p.delay,
                }}
                style={{
                  position: 'absolute',
                  top: p.top,
                  left: p.left,
                  width: p.size,
                  height: p.size,
                  borderRadius: '50%',
                  background: 'var(--text-primary)',
                  boxShadow: '0 0 12px 3px rgba(148, 169, 179, 0.3)',
                  pointerEvents: 'none',
                }}
              />
            ))}

            {/* Orbit ring */}
            <div className="orbitRing" />
            <div className="orbitRingInner" />

            {/* Center Profile Image */}
            <motion.div
              className="orbitalCenter"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.img
                src={profileImg}
                alt="Sri Penumaka"
                className="orbitalProfileImg"
                animate={{ 
                  boxShadow: [
                    '0 0 30px rgba(191, 161, 74, 0.4), 0 0 60px rgba(191, 161, 74, 0.2)',
                    '0 0 50px rgba(191, 161, 74, 0.6), 0 0 100px rgba(191, 161, 74, 0.3)',
                    '0 0 30px rgba(191, 161, 74, 0.4), 0 0 60px rgba(191, 161, 74, 0.2)',
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />
            </motion.div>

            {/* Orbiting Projects */}
            <motion.div
              className="orbitingProjects"
              animate={{ rotate: isPaused ? 0 : 360 }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
            >
              {projects.map((project, index) => {
                const pos = getOrbitalPosition(index, projects.length);
                return (
                  <motion.div
                    key={project.title}
                    className="orbitingProject"
                    style={{
                      left: `calc(50% + ${pos.x}px)`,
                      top: `calc(50% + ${pos.y}px)`,
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                      scale: 1, 
                      opacity: 1,
                      rotate: isPaused ? 0 : -360,
                    }}
                    transition={{
                      scale: { duration: 0.5, delay: 0.3 + index * 0.1 },
                      opacity: { duration: 0.5, delay: 0.3 + index * 0.1 },
                      rotate: { duration: 30, repeat: Infinity, ease: 'linear' },
                    }}
                    whileHover={{ 
                      scale: 1.15,
                      zIndex: 10,
                    }}
                    onClick={() => handleProjectClick(index)}
                  >
                    <div 
                      className="orbitingProjectInner"
                      style={{ borderColor: project.color }}
                    >
                      <img src={project.image} alt={project.title} style={project.imagePosition ? { objectPosition: project.imagePosition } : {}} />
                    </div>
                    <div className="orbitingProjectOverlay">
                      <span className="orbitingProjectTitle">{project.title}</span>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Focused Project Modal */}
          <AnimatePresence>
            {focusedProject !== null && (
              <motion.div
                className="projectModal"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={handleClose}
              >
                <motion.div
                  className="projectModalContent"
                  initial={{ scale: 0.8, opacity: 0, y: 50 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.8, opacity: 0, y: 50 }}
                  transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <button className="modalClose" onClick={handleClose}>
                    <FaTimes />
                  </button>
                  
                  <div className="modalImageWrapper">
                    <img 
                      src={projects[focusedProject].modalImage || projects[focusedProject].image} 
                      alt={projects[focusedProject].title}
                      className={`modalImage ${projects[focusedProject].title === 'StudyBuddy' ? 'modalImageCropTop' : ''}`}
                    />
                  </div>
                  
                  <div className="modalInfo">
                    <h3 className="modalTitle">{projects[focusedProject].title}</h3>
                    <p className="modalDescription">{projects[focusedProject].description}</p>
                    
                    <div className="modalTags">
                      {projects[focusedProject].tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="modalTag"
                          style={{ borderColor: projects[focusedProject].color }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <Link 
                      to={projects[focusedProject].link} 
                      className="modalButton"
                      style={{ background: projects[focusedProject].color }}
                    >
                      View Project
                      <FaArrowRight />
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      </ScrollReveal>

      {/* CTA Section */}
      <ScrollReveal duration={1.2}>
        <section className="ctaSection">
          <div className="ctaContent">
            <motion.h2 
              className="ctaTitle"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0, ease: [0.22, 1, 0.36, 1] }}
            >Let's Create Something Amazing Together</motion.h2>
            <motion.p 
              className="ctaSubtitle"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </motion.p>
            <motion.div 
              className="ctaButtons"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.a
                href="https://www.linkedin.com/in/sri-datta-penumaka-693143328/"
                target="_blank"
                rel="noopener noreferrer"
                className="downloadBtn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ display: 'flex', alignItems: 'center', gap: 8 }}
              >
                <FaLinkedin size={18} />
                Let's connect!
              </motion.a>
              <motion.a
                href="/contact"
                className="portfolioBtn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ display: 'flex', alignItems: 'center', gap: 8 }}
              >
                Contact Me
                <FaEnvelope size={18} />
              </motion.a>
            </motion.div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
};

export default Portfolio;
