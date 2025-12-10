import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";
import { Link } from "react-router-dom";
// import heroImg from '../assets/images/hero.jpg'; // Remove static image
import lumoraImg from '../assets/images/Lumora.png';
import sskdImg from '../assets/images/SSKD (2).png';
import { FaCode, FaPaintBrush, FaReact } from 'react-icons/fa';
import { SiFigma, SiJavascript, SiReact } from 'react-icons/si';
import { usePerformanceMonitor } from '../utils/performance';
import LoadingBar from '../components/LoadingBar';
import SEO from '../components/SEO';
import { useTheme } from '../context/ThemeContext';


// Slide from left animation variants - slow and elegant
const slideFromLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: { opacity: 1, x: 0 },
};

const heroVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.2, delay: 0.2 } },
};

const buttonVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.2, delay: 0.5 } },
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

const cardContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.4,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } },
  hover: {
    y: -12,
    boxShadow: "0 20px 60px rgba(0,0,0,0.25), 0 0 60px rgba(191,169,122,0.8), 0 0 120px rgba(191,169,122,0.5)",
    transition: { 
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1]
    },
  },
};

const accentBrown = '#8B5C2A'; 
const PARTICLE_COUNT = 12;
function getRandom(min, max) { return Math.random() * (max - min) + min; }
const particles = Array.from({ length: PARTICLE_COUNT }).map((_, i) => ({
  size: getRandom(16, 32),
  top: getRandom(20, 500),
  left: getRandom(20, 1400),
  duration: getRandom(3, 6), // Much faster: 3-6 seconds instead of 10-22
  delay: getRandom(0, 2), // Shorter delays
  opacity: getRandom(0.12, 0.25),
}));

// Letter fade-in variants
const letterFadeVariants = {
  hidden: { 
    opacity: 0,
  },
  visible: { 
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1], // Smooth cinematic easing
    }
  }
};

const letterContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12, // Delay between each letter
      delayChildren: 0.2, // Initial delay
    }
  }
};

function CinematicFadeIn({ text, ...props }) {
  return (
    <motion.span
      {...props}
      variants={letterContainerVariants}
      initial="hidden"
      animate="visible"
      style={{
        display: 'inline-flex',
        whiteSpace: 'nowrap',
        ...props.style
      }}
    >
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          variants={letterFadeVariants}
          style={{
            display: 'inline-block',
            whiteSpace: char === ' ' ? 'pre' : 'normal',
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.span>
  );
}

// Use global ScrollReveal component instead of local implementation

export default function Home() {
  const [showName, setShowName] = useState(false);
  const { isLoading } = usePerformanceMonitor('Home');
  const { isDark } = useTheme();
  
  useEffect(() => {
    const timer = setTimeout(() => setShowName(true), 700); // match fade-in duration of Hi I'm
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <SEO 
        title="Home"
        description="Welcome to Sri Penumaka's portfolio. Designing clean, intuitive, and purposeful digital experiences."
      />
      <LoadingBar isLoading={isLoading} />
      <section
        style={{
          width: "100vw",
          marginLeft: "calc(-50vw + 50%)",
          marginRight: "calc(-50vw + 50%)",
          height: 561,
          minHeight: 300,
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          marginBottom: 32,
          overflow: "hidden",
          background: "var(--bg-secondary)",
          zIndex: 1,
        }}
      >
        {/* Floating particles across the whole hero section */}
        <motion.div
          style={{
            position: 'absolute',
            top: 0, left: 0, width: '100%', height: '100%',
            zIndex: 0,
            pointerEvents: 'none',
          }}
        >
          {particles.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 0, opacity: 0 }}
              animate={{
                y: [0, getRandom(-80, 80), 0],
                x: [0, getRandom(-120, 120), 0],
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
                opacity: p.opacity,
                boxShadow: '0 0 16px 4px rgba(148, 169, 179, 0.4)',
              }}
            />
          ))}
        </motion.div>
        
        {/* Large corner icons - Figma (bottom left), JavaScript (bottom right), React (top right) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 1, delay: 0.5, hover: { duration: 0.3 } }}
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            zIndex: 1,
            pointerEvents: 'auto',
            overflow: 'hidden',
            width: '280px',
            height: '280px',
            cursor: 'default',
          }}
        >
          <SiFigma 
            size={280} 
            style={{
              position: 'absolute',
              bottom: '-40px',
              left: '-40px',
              color: isDark ? 'var(--text-primary)' : '#6B7280',
              opacity: isDark ? 0.5 : 0.45,
              transform: 'rotate(-15deg)',
            }}
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 1, delay: 0.7, hover: { duration: 0.3 } }}
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            zIndex: 1,
            pointerEvents: 'auto',
            overflow: 'hidden',
            width: '280px',
            height: '280px',
            cursor: 'default',
          }}
        >
          <SiJavascript 
            size={280} 
            style={{
              position: 'absolute',
              bottom: '-40px',
              right: '-40px',
              color: isDark ? 'var(--text-primary)' : '#6B7280',
              opacity: isDark ? 0.5 : 0.45,
              transform: 'rotate(25deg)',
            }}
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 1, delay: 0.6, hover: { duration: 0.3 } }}
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            zIndex: 1,
            pointerEvents: 'auto',
            overflow: 'hidden',
            width: '250px',
            height: '250px',
            cursor: 'default',
          }}
        >
          <SiReact 
            size={250} 
            style={{
              position: 'absolute',
              top: '-60px',
              right: '-60px',
              color: isDark ? 'var(--text-primary)' : '#6B7280',
              opacity: isDark ? 0.35 : 0.3,
              transform: 'rotate(-20deg)',
            }}
          />
        </motion.div>
        <div
          style={{
            position: "relative",
            zIndex: 2,
            padding: "4vw 6vw",
            color: "var(--text-primary)",
            maxWidth: 1248,
            width: "100%",
            margin: "0 auto",
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          {/* Hi I'm - fade in */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontSize: "2.2rem",
              fontFamily: "Rubik, sans-serif",
              fontWeight: 400,
              color: 'var(--text-primary)',
              marginBottom: 0,
              letterSpacing: 1,
            }}
          >
            Hi, I'm
          </motion.div>
          {/* Name - typewriter, much larger and bolder, with floating particles */}
          <div style={{ position: 'relative', minHeight: 90, margin: '8px 0 0 0', width: '100%' }}>
            {/* Floating particles around name */}
            {particles.map((p, idx) => (
              <motion.div
                key={idx}
                initial={{ y: 0, opacity: p.opacity }}
                animate={{
                  y: [0, getRandom(-30, 30), 0],
                  x: [0, getRandom(-30, 30), 0],
                  opacity: [p.opacity, p.opacity * 0.7, p.opacity],
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
                  opacity: p.opacity,
                  boxShadow: '0 0 16px 4px rgba(148, 169, 179, 0.4)',
                }}
              />
            ))}
            <motion.h1
              initial={{ opacity: 1 }}
              animate={{
                filter: [
                  'drop-shadow(0 0 20px rgba(191, 169, 122, 0.9)) drop-shadow(0 0 40px rgba(191, 169, 122, 0.6))',
                  'drop-shadow(0 0 50px rgba(191, 169, 122, 1)) drop-shadow(0 0 80px rgba(191, 169, 122, 0.9)) drop-shadow(0 0 120px rgba(191, 169, 122, 0.6))',
                  'drop-shadow(0 0 20px rgba(191, 169, 122, 0.9)) drop-shadow(0 0 40px rgba(191, 169, 122, 0.6))'
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                fontSize: "clamp(4rem, 9vw, 6.5rem)",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 900,
                color: 'var(--text-primary)',
                margin: 0,
                lineHeight: 1.08,
                letterSpacing: 2,
                zIndex: 2,
                position: 'relative',
                textAlign: 'left',
                textTransform: 'uppercase',
                overflow: 'visible',
                display: 'inline-block',
              }}
              className="hero-name-glow"
            >
              {showName && <CinematicFadeIn text={"SRI PENUMAKA"} />}
            </motion.h1>
          </div>
          {/* Tagline - fade in after name */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 2.7, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontSize: "1.5rem",
              fontFamily: "Rubik, sans-serif",
              fontWeight: 400,
              color: 'var(--text-primary)',
              marginTop: 18,
              marginBottom: 32,
              letterSpacing: 1,
              textAlign: 'left',
              maxWidth: 600,
            }}
          >
            Designing clean, intuitive, & purposeful experiences.
          </motion.div>
          <motion.button
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 2.7, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.05 }}
            style={{
              background: "var(--color-dark)",
              color: "var(--color-light)",
              fontFamily: "Rubik, sans-serif",
              fontSize: 18,
              padding: "14px 40px",
              border: "none",
              borderRadius: 8,
              boxShadow: "0px 4px 12px rgba(0,0,0,0.08)",
              cursor: "pointer",
              marginTop: 8,
            }}
            onClick={() => window.location.href = '/portfolio'}
          >
            Explore My Work!
          </motion.button>
        </div>
      </section>

      {/* Main Content Container */}
      <div
        style={{
          width: "100%",
          maxWidth: "1248px",
          margin: "0 auto",
          padding: "0 2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          boxSizing: "border-box",
        }}
      >
        <ScrollReveal variants={slideFromLeft} duration={1.2}>
          {/* Featured Projects Section */}
          <section
            style={{
              width: "100%",
              maxWidth: 1248,
              margin: "0 auto 48px auto",
              padding: "0 5vw",
              boxSizing: "border-box",
              position: "relative",
              zIndex: 1,
            }}
          >
            <motion.h2
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0, ease: [0.22, 1, 0.36, 1] }}
              style={{
                textAlign: "left",
                color: "var(--text-primary)",
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                fontFamily: "Rubik, sans-serif",
                fontWeight: 500,
                margin: "0 0 8px 0",
              }}
            >
              Featured Projects
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              style={{
                textAlign: "left",
                color: "var(--text-secondary)",
                fontSize: 17,
                fontFamily: "Manrope, sans-serif",
                fontWeight: 400,
                margin: "0 0 40px 0",
              }}
            >
              A selection of my recent work showcasing minimal design principles and thoughtful user experiences.
            </motion.p>
            <motion.div
              variants={cardContainerVariants}
              initial="hidden"
              animate="visible"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 40,
                width: "100%",
              }}
            >
              {/* Project 1: Lumora - Large Rectangular Card */}
              <Link to="/lumora" style={{textDecoration: 'none', perspective: 1000}}>
                <motion.div
                  initial={{ opacity: 0, x: -80 }}
                  whileInView={{ 
                    opacity: 1, 
                    x: 0,
                  }}
                  viewport={{ once: true }}
                  animate={{ 
                    y: [0, -15, 0],
                  }}
                  whileHover={{
                    y: -20,
                    boxShadow: "0 20px 60px rgba(0,0,0,0.2), 0 0 60px rgba(191,169,122,0.7), 0 0 100px rgba(191,169,122,0.4)",
                  }}
                  transition={{ 
                    opacity: { duration: 1, delay: 0.6 },
                    x: { duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] },
                    y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                    boxShadow: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
                  }}
                  style={{
                    background: "var(--bg-secondary)",
                    borderRadius: 20,
                    boxShadow: "0 4px 20px rgba(0,0,0,0.08), 0 0 20px rgba(191,169,122,0.3)",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "row",
                    height: 360,
                    cursor: "pointer",
                    border: "1px solid var(--color-gray-300)",
                  }}
                >
                  <div style={{ 
                    width: "50%", 
                    height: "100%", 
                    overflow: "hidden",
                    position: "relative"
                  }}>
                    <img
                      src={lumoraImg}
                      alt="Lumora Project"
                      style={{ 
                        width: "100%", 
                        height: "100%", 
                        objectFit: "cover", 
                        transition: "transform 0.4s ease" 
                      }}
                    />
                  </div>
                  <div style={{ 
                    width: "50%",
                    padding: "48px 56px", 
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'center',
                  }}>
                    <div style={{
                      display: "flex",
                      gap: 10,
                      marginBottom: 20,
                    }}>
                      <span style={{
                        background: "var(--bg-tertiary)",
                        color: "var(--text-secondary)",
                        fontSize: 13,
                        fontFamily: "Rubik, sans-serif",
                        fontWeight: 500,
                        padding: "8px 16px",
                        borderRadius: 20,
                      }}>UI/UX</span>
                      <span style={{
                        background: "var(--bg-tertiary)",
                        color: "var(--text-secondary)",
                        fontSize: 13,
                        fontFamily: "Rubik, sans-serif",
                        fontWeight: 500,
                        padding: "8px 16px",
                        borderRadius: 20,
                      }}>Development</span>
                    </div>
                    <h3
                      style={{
                        color: "var(--text-primary)",
                        fontSize: 30,
                        fontFamily: "Rubik, sans-serif",
                        fontWeight: 500,
                        margin: "0 0 16px 0",
                        lineHeight: 1.3,
                      }}
                    >
                      Lumora Landing Page
                    </h3>
                    <p
                      style={{
                        color: "var(--text-secondary)",
                        fontSize: 17,
                        fontFamily: "Open Sans, sans-serif",
                        fontWeight: 400,
                        margin: "0 0 24px 0",
                        lineHeight: 1.7,
                      }}
                    >
                      A sleek, responsive landing page for a fictional home décor brand with modern aesthetics.
                    </p>
                    <motion.span
                      whileHover={{ 
                        backgroundColor: "#D4AF7A",
                        color: "#FFFFFF",
                      }}
                      transition={{ duration: 0.25 }}
                      style={{
                        backgroundColor: "#1A1A1A",
                        color: "#FFFFFF",
                        fontSize: 14,
                        fontFamily: "Rubik, sans-serif",
                        fontWeight: 500,
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        padding: "8px 14px",
                        borderRadius: 6,
                        cursor: "pointer",
                        width: "fit-content",
                      }}
                    >
                      View Project →
                    </motion.span>
                  </div>
                </motion.div>
              </Link>

              {/* Project 2: Temple Redesign - Large Rectangular Card (reversed) */}
              <Link to="/temple-redesign" style={{textDecoration: 'none', perspective: 1000}}>
                <motion.div
                  initial={{ opacity: 0, x: -80 }}
                  whileInView={{ 
                    opacity: 1, 
                    x: 0,
                  }}
                  viewport={{ once: true }}
                  animate={{ 
                    y: [0, -15, 0],
                  }}
                  whileHover={{
                    y: -20,
                    boxShadow: "0 20px 60px rgba(0,0,0,0.2), 0 0 60px rgba(191,169,122,0.7), 0 0 100px rgba(191,169,122,0.4)",
                  }}
                  transition={{ 
                    opacity: { duration: 1, delay: 1.1 },
                    x: { duration: 1, delay: 1.1, ease: [0.22, 1, 0.36, 1] },
                    y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                    boxShadow: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
                  }}
                  style={{
                    background: "var(--bg-secondary)",
                    borderRadius: 20,
                    boxShadow: "0 4px 20px rgba(0,0,0,0.08), 0 0 20px rgba(191,169,122,0.3)",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "row-reverse",
                    height: 360,
                    cursor: "pointer",
                    border: "1px solid var(--color-gray-300)",
                  }}
                >
                  <div style={{ 
                    width: "50%", 
                    height: "100%", 
                    overflow: "hidden",
                    position: "relative"
                  }}>
                    <img
                      src={sskdImg}
                      alt="Temple Project"
                      style={{ 
                        width: "100%", 
                        height: "100%", 
                        objectFit: "cover", 
                        objectPosition: "top",
                        transition: "transform 0.4s ease" 
                      }}
                    />
                  </div>
                  <div style={{ 
                    width: "50%",
                    padding: "48px 56px", 
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'center',
                  }}>
                    <div style={{
                      display: "flex",
                      gap: 10,
                      marginBottom: 20,
                    }}>
                      <span style={{
                        background: "var(--bg-tertiary)",
                        color: "var(--text-secondary)",
                        fontSize: 13,
                        fontFamily: "Rubik, sans-serif",
                        fontWeight: 500,
                        padding: "8px 16px",
                        borderRadius: 20,
                      }}>UI/UX</span>
                      <span style={{
                        background: "var(--bg-tertiary)",
                        color: "var(--text-secondary)",
                        fontSize: 13,
                        fontFamily: "Rubik, sans-serif",
                        fontWeight: 500,
                        padding: "8px 16px",
                        borderRadius: 20,
                      }}>Figma</span>
                    </div>
                    <h3
                      style={{
                        color: "var(--text-primary)",
                        fontSize: 30,
                        fontFamily: "Rubik, sans-serif",
                        fontWeight: 500,
                        margin: "0 0 16px 0",
                        lineHeight: 1.3,
                      }}
                    >
                      Local Temple Redesign
                    </h3>
                    <p
                      style={{
                        color: "var(--text-secondary)",
                        fontSize: 17,
                        fontFamily: "Open Sans, sans-serif",
                        fontWeight: 400,
                        margin: "0 0 24px 0",
                        lineHeight: 1.7,
                      }}
                    >
                      A complete redesign for Shri Sai Kripa Dham temple in Surrey, BC with improved UX.
                    </p>
                    <motion.span
                      whileHover={{ 
                        backgroundColor: "#D4AF7A",
                        color: "#FFFFFF",
                      }}
                      transition={{ duration: 0.25 }}
                      style={{
                        backgroundColor: "#1A1A1A",
                        color: "#FFFFFF",
                        fontSize: 14,
                        fontFamily: "Rubik, sans-serif",
                        fontWeight: 500,
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        padding: "8px 14px",
                        borderRadius: 6,
                        cursor: "pointer",
                        width: "fit-content",
                      }}
                    >
                      View Project →
                    </motion.span>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          </section>
        </ScrollReveal>

              {/* CTA Section */}
        <ScrollReveal variants={slideFromLeft} duration={1.2}>
          <section
            style={{
              width: "100vw",
              marginLeft: "calc(-50vw + 50%)",
              marginRight: "calc(-50vw + 50%)",
            padding: "64px 2rem",
            background: "var(--bg-tertiary)",
              boxSizing: "border-box",
              textAlign: "center",
              borderTop: "1px solid rgba(0,0,0,0.05)",
              borderBottom: "1px solid rgba(0,0,0,0.05)",
              position: "relative",
              zIndex: 1,
            }}
          >
            <div
              style={{
                maxWidth: "900px",
                margin: "0 auto",
              }}
            >
              <motion.h2
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  color: "var(--text-primary)",
                  fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                  fontFamily: "Rubik, sans-serif",
                  fontWeight: 400,
                  margin: "0 0 12px 0",
                }}
              >
                Interested in working together?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  color: "var(--text-secondary)",
                  fontSize: 18,
                  fontFamily: "Manrope, sans-serif",
                  fontWeight: 400,
                  margin: "0 0 32px 0",
                }}
              >
                I'm currently available for freelance projects and collaborations. Let's create something meaningful together.
              </motion.p>
              <motion.button
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.05 }}
                style={{
                  background: "var(--color-primary)",
                  color: isDark ? "#FFFFFF" : "#1A1A1A",
                  fontFamily: "Rubik, sans-serif",
                  fontSize: 16,
                  padding: "12px 32px",
                  border: "none",
                  borderRadius: 6,
                  boxShadow: "0px 4px 4px rgba(0,0,0,0.15)",
                  cursor: "pointer",
                }}
                onClick={() => window.location.href = '/contact'}
              >
                Get In Touch
              </motion.button>
            </div>
          </section>
        </ScrollReveal>
      </div>
    </>
  );
}
