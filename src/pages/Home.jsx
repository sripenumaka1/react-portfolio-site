import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// import heroImg from '../assets/images/hero.jpg'; // Remove static image
import lumoraImg from '../assets/images/lumora.jpg';
import sskdImg from '../assets/images/sskd.png';
import { useRef } from 'react';
import { FaCode, FaPaintBrush, FaReact } from 'react-icons/fa';


const heroVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.5 } },
  hover: { scale: 1.07, backgroundColor: "#333", color: "#fff", transition: { duration: 0.2 } },
};

const cardContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  hover: { y: -8, boxShadow: "0 8px 32px rgba(0,0,0,0.10)", scale: 1.03 },
};

const accentBrown = '#8B5C2A'; 
const DARK_GREY = '#23272a';
const PARTICLE_COUNT = 12;
function getRandom(min, max) { return Math.random() * (max - min) + min; }
const particles = Array.from({ length: PARTICLE_COUNT }).map((_, i) => ({
  size: getRandom(16, 32),
  top: getRandom(20, 500),
  left: getRandom(20, 1400),
  duration: getRandom(10, 22),
  delay: getRandom(0, 4),
  opacity: getRandom(0.08, 0.18),
}));

function Typewriter({ text, speed = 80, ...props }) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i === text.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);
  return <span {...props}>{displayed}{!done && <span className="type-cursor">|</span>}</span>;
}

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

export default function Home() {
  const [showName, setShowName] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setShowName(true), 700); // match fade-in duration of Hi I'm
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
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
          background: "#fff",
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
                background: DARK_GREY,
                opacity: p.opacity,
                boxShadow: '0 0 12px 2px rgba(0,0,0,0.10)',
              }}
            />
          ))}
        </motion.div>
        <div
          style={{
            position: "relative",
            zIndex: 2,
            padding: "4vw 6vw",
            color: "#111",
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              fontSize: "2.2rem",
              fontFamily: "Rubik, sans-serif",
              fontWeight: 400,
              color: '#111',
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
                  background: DARK_GREY,
                  opacity: p.opacity,
                  boxShadow: '0 0 12px 2px rgba(0,0,0,0.10)',
                }}
              />
            ))}
            <h1
              style={{
                fontSize: "clamp(3.5rem, 8vw, 5.5rem)",
                fontFamily: "'Rubik', sans-serif",
                fontWeight: 600,
                color: '#111',
                margin: 0,
                lineHeight: 1.08,
                letterSpacing: 2,
                zIndex: 2,
                position: 'relative',
                textAlign: 'left',
                textTransform: 'uppercase',
                textShadow: '0 0 6px #bfa97a, 0 0 12px #fff8e1',
                overflow: 'hidden',
                display: 'inline-block',
              }}
              className="hero-name-glow"
            >
              <span style={{ position: 'relative', display: 'inline-block' }}>
                {showName && <Typewriter text={"SRI PENUMAKA"} speed={60} />}
                {/* Light sweep overlay */}
                <span className="hero-name-flash" />
              </span>
            </h1>
          </div>
          {/* Tagline - fade in after name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 2.2 }}
            style={{
              fontSize: "1.5rem",
              fontFamily: "Rubik, sans-serif",
              fontWeight: 400,
              color: '#111',
              marginTop: 18,
              marginBottom: 32,
              letterSpacing: 1,
              textAlign: 'left',
              maxWidth: 600,
            }}
          >
            Designing clean, intuitive, and purposeful experiences.
          </motion.div>
          <motion.button
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.7 }}
            whileHover={{ scale: 1.07, backgroundColor: accentBrown, color: "#fff" }}
            style={{
              background: "#111",
              color: "#fff",
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
        <FadeInSection>
          {/* Featured Projects Section */}
          <section
            style={{
              width: "100%",
              maxWidth: 1248,
              margin: "0 auto 48px auto",
              padding: "0 5vw",
              boxSizing: "border-box",
            }}
          >
            <h2
              style={{
                textAlign: "center",
                color: "#1A1A1A",
                fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                fontFamily: "Rubik, sans-serif",
                fontWeight: 400,
                margin: "0 0 12px 0",
              }}
            >
              Featured Projects
            </h2>
            <p
              style={{
                textAlign: "center",
                color: "rgba(26,26,26,0.7)",
                fontSize: 16,
                fontFamily: "Manrope, sans-serif",
                fontWeight: 400,
                margin: "0 0 32px 0",
              }}
            >
              A selection of my recent work showcasing minimal design principles and thoughtful user experiences.
            </p>
            <motion.div
              variants={cardContainerVariants}
              initial="hidden"
              animate="visible"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: 32,
                width: "100%",
              }}
            >
              {/* Project 1: Lumora */}
              <Link to="/lumora" style={{textDecoration: 'none'}}>
                <motion.div
                  variants={cardVariants}
                  whileHover="hover"
                  style={{
                    background: "white",
                    borderRadius: 8,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    minHeight: 350,
                    transition: "box-shadow 0.2s, transform 0.2s",
                    cursor: "pointer",
                  }}
                >
                  <img
                    src={lumoraImg}
                    alt="Lumora Project"
                    style={{ width: "100%", height: 200, objectFit: "cover", transition: "transform 0.3s" }}
                    onMouseOver={e => e.currentTarget.style.transform = 'scale(1.04)'}
                    onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                  />
                  <div style={{ padding: 24, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <h3
                      style={{
                        color: "#1A1A1A",
                        fontSize: 20,
                        fontFamily: "Rubik, sans-serif",
                        fontWeight: 400,
                        margin: "0 0 8px 0",
                      }}
                    >
                      Lumora Landing Page
                    </h3>
                    <p
                      style={{
                        color: "rgba(26,26,26,0.7)",
                        fontSize: 16,
                        fontFamily: "Open Sans, sans-serif",
                        fontWeight: 400,
                        margin: "0 0 16px 0",
                      }}
                    >
                      Lumora is a sleek, responsive landing page for a fictional home décor brand.
                    </p>
                    <span
                      style={{
                        color: "#1A1A1A",
                        fontSize: 14,
                        fontFamily: "Rubik, sans-serif",
                        fontWeight: 400,
                        textDecoration: "underline",
                        cursor: "pointer",
                        transition: "color 0.2s",
                      }}
                      onMouseOver={e => e.currentTarget.style.color = '#85918B'}
                      onMouseOut={e => e.currentTarget.style.color = '#1A1A1A'}
                    >
                      View Project
                    </span>
                  </div>
                </motion.div>
              </Link>

              {/* Project 2: Temple Redesign */}
              <Link to="/temple-redesign" style={{textDecoration: 'none'}}>
                <motion.div
                  variants={cardVariants}
                  whileHover="hover"
                  style={{
                    background: "white",
                    borderRadius: 8,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    minHeight: 350,
                    transition: "box-shadow 0.2s, transform 0.2s",
                    cursor: "pointer",
                  }}
                >
                  <img
                    src={sskdImg}
                    alt="Temple Project"
                    style={{ width: "100%", height: 200, objectFit: "cover", objectPosition: "top", transition: "transform 0.3s" }}
                    onMouseOver={e => e.currentTarget.style.transform = 'scale(1.04)'}
                    onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                  />
                  <div style={{ padding: 24, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <h3
                      style={{
                        color: "#1A1A1A",
                        fontSize: 20,
                        fontFamily: "Rubik, sans-serif",
                        fontWeight: 400,
                        margin: "0 0 8px 0",
                      }}
                    >
                      Shri Sai Kripa Dham Temple Website Redesign
                    </h3>
                    <p
                      style={{
                        color: "rgba(26,26,26,0.7)",
                        fontSize: 14,
                        fontFamily: "Open Sans, sans-serif",
                        fontWeight: 400,
                        margin: "0 0 16px 0",
                      }}
                    >
                      Shri Sai Kripa Dham is a redesigned website for my local temple in Surrey, BC
                    </p>
                    <span
                      style={{
                        color: "#1A1A1A",
                        fontSize: 14,
                        fontFamily: "Rubik, sans-serif",
                        fontWeight: 400,
                        textDecoration: "underline",
                        cursor: "pointer",
                        transition: "color 0.2s",
                      }}
                      onMouseOver={e => e.currentTarget.style.color = '#F7F7F7'}
                      onMouseOut={e => e.currentTarget.style.color = '#1A1A1A'}
                    >
                      View Project
                    </span>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          </section>
        </FadeInSection>

              {/* CTA Section */}
        <FadeInSection>
          <section
            style={{
              width: "100vw",
              marginLeft: "calc(-50vw + 50%)",
              marginRight: "calc(-50vw + 50%)",
              padding: "64px 2rem",
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
              }}
            >
              <h2
                style={{
                  color: "#1A1A1A",
                  fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                  fontFamily: "Rubik, sans-serif",
                  fontWeight: 400,
                  margin: "0 0 12px 0",
                }}
              >
                Interested in working together?
              </h2>
              <p
                style={{
                  color: "rgba(26,26,26,0.8)",
                  fontSize: 18,
                  fontFamily: "Manrope, sans-serif",
                  fontWeight: 400,
                  margin: "0 0 32px 0",
                }}
              >
                I'm currently available for freelance projects and collaborations. Let's create something meaningful together.
              </p>
              <motion.button
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                style={{
                  background: "#1A1A1A",
                  color: "#FFFFFF",
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
        </FadeInSection>
      </div>
    </>
  );
}
