import React, { useState } from "react";
import './Portfolio.css';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from "../components/ScrollReveal";
import { FaPaintBrush, FaCode, FaBolt, FaHtml5, FaCss3Alt, FaJs, FaFigma, FaMagic, FaReact, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiJavascript, SiReact, SiCss3, SiHtml5 } from 'react-icons/si';
import { Link } from 'react-router-dom';
import { usePerformanceMonitor } from '../utils/performance';
import LoadingBar from '../components/LoadingBar';
import lumoraImg from '../assets/images/lumora3.png';
import sskdImg from '../assets/images/sskd.png';
import floatingGokuImg from '../assets/images/floating-goku.png';
import studyBuddyImg from '../assets/images/studybuddy.png';
import lumora1Img from '../assets/images/lumora1.jpg';
import lumora3Img from '../assets/images/lumora3.png';

const projects = [
  {
    title: 'Lumora Landing Page',
    description: 'Lumora is a sleek, responsive landing page for a fictional home décor brand.',
    tags: ['UI/UX', 'Development'],
    image: lumora3Img,
    imageStyle: {},
    overlay: false,
    link: '/lumora',
  },
  {
    title: 'Shri Sai Kripa Dham Temple Website Redesign',
    description: 'Shri Sai Kripa Dham is a redesigned website for my local temple in Surrey, BC',
    tags: ['UI/UX', 'Figma', 'Prototyping'],
    image: sskdImg,
    imageStyle: { backgroundColor: '#85918B' },
    overlay: true,
    link: '/temple-redesign',
  },
  {
    title: 'Floating Goku',
    description: 'Animation using CSS keyframes.',
    tags: ['HTML5', 'CSS', 'Animation'],
    image: floatingGokuImg,
    imageStyle: { backgroundColor: '#111' },
    overlay: false,
    link: '/project-details-1',
  },
  {
    title: 'StudyBuddy',
    description: 'A UI/UX Figma prototype to help students connect, collaborate, and stay accountable in their studies.',
    tags: ['UI/UX', 'Figma', 'Prototyping'],
    image: studyBuddyImg,
    imageStyle: { backgroundColor: '#85918B' },
    overlay: false,
    link: '/project-details-2',
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

const allTags = ['All', ...Array.from(new Set(projects.flatMap(p => p.tags)))];

// Use global ScrollReveal

const Portfolio = () => {
  const { isLoading } = usePerformanceMonitor('Portfolio');
  const [selectedTag, setSelectedTag] = useState('All');
  const filteredProjects = selectedTag === 'All'
    ? projects
    : projects.filter(project => project.tags.includes(selectedTag));

  return (
    <div className="container">
      <LoadingBar isLoading={isLoading} />
      <ScrollReveal>
        {/* Hero Section */}
        <section className="heroSection">
          <div className="codingBg">
            <span className="codingIcon icon1">{'<>'}</span>
            <span className="codingIcon icon2">{'{}'}</span>
            <span className="codingIcon icon3">{'</>'}</span>
            <span className="codingIcon icon4"><SiReact /></span>
            <span className="codingIcon icon5"><SiJavascript /></span>
          </div>
          <motion.div
            className="heroContent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="heroTitle">Web Design & Development</h1>
            <p className="heroSubtitle">
              Creating intuitive, responsive, and visually compelling digital experiences that connect brands with their audiences.
            </p>
          </motion.div>
        </section>
      </ScrollReveal>

      {/* Technical Expertise Section */}
      <ScrollReveal>
        <section className="techSection">
          <h2 className="techTitle">Technical Expertise</h2>
          <div className="techGrid">
            {techStack.map((tech) => (
              <motion.div
                className="techCard"
                key={tech.name}
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

      {/* Filter Bar */}
      <ScrollReveal>
        <div className="portfolioFilterBar">
          {allTags.map(tag => (
            <button
              key={tag}
              className={`portfolioFilterBtn${selectedTag === tag ? ' active' : ''}`}
              onClick={() => setSelectedTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </ScrollReveal>

      {/* Projects Grid */}
      <ScrollReveal>
        <section className="projectsSection">
          <h2 className="projectsTitle">My Portfolio</h2>
          <div className="projectsGrid landscape">
            <AnimatePresence>
              {filteredProjects.map((project, idx) => (
                <motion.div
                  className="projectCard landscape"
                  key={project.title}
                  layout
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 40 }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  whileHover={{ 
                    scale: 1.02,
                    rotateY: 5,
                    rotateX: -2,
                    translateZ: "20px",
                    boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
                  }}
                  style={{
                    transformStyle: "preserve-3d",
                    perspective: "1000px"
                  }}
                >
                  <Link to={project.link} style={{ textDecoration: 'none', display: 'flex', width: '100%', height: '100%' }}>
                    <div className="projectImage landscape" style={project.imageStyle}>
                      <img
                        src={project.image}
                        alt={project.title}
                        style={{
                          width: project.title === 'Lumora Landing Page' ? '100%' : '100%',
                          height: project.title === 'Lumora Landing Page' ? 320 : 260,
                          objectFit: project.title === 'Lumora Landing Page' ? 'cover' : 'cover',
                          objectPosition: project.title === 'Lumora Landing Page' ? 'center 10%' : 'top',
                          borderRadius: 16,
                          transition: 'transform 0.3s'
                        }}
                      />
                      {project.overlay && <div className="projectImageOverlay"></div>}
                    </div>
                    <div className="projectContent landscape">
                      <h3 className="projectTitle">{project.title}</h3>
                      <p className="projectDescription">{project.description}</p>
                      <div className="projectTags">
                        {project.tags.map((tag) => (
                          <span className="tag" key={tag}>{tag}</span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </section>
      </ScrollReveal>

      {/* CTA Section */}
      <ScrollReveal>
        <section className="ctaSection">
          <div className="ctaContent">
            <h2 className="ctaTitle">Let's Create Something Amazing Together</h2>
            <p className="ctaSubtitle">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
            <div className="ctaButtons">
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
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
};

export default Portfolio; 