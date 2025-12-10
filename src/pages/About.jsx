import React from "react";
import styles from './About.module.css';
import profileImg from '../assets/images/profile.jpg';
import resumePdf from '../assets/Sri Penumaka Resume.pdf';
import { motion } from 'framer-motion';
import ScrollReveal from "../components/ScrollReveal";
import { FaBasketballBall, FaFutbol, FaMusic, FaDumbbell, FaDownload, FaRocket, FaLightbulb, FaBook, FaCode, FaPalette, FaUsers, FaHeart, FaEye, FaMagic, FaGraduationCap, FaSchool, FaLaptopCode, FaPaintBrush } from 'react-icons/fa';
import { usePerformanceMonitor } from '../utils/performance';
import LoadingBar from '../components/LoadingBar';
import SEO from '../components/SEO';

// Use global ScrollReveal

const About = () => {
  const { isLoading } = usePerformanceMonitor('About');
  const personalStack = [
    { name: 'Basketball', icon: <FaBasketballBall />, color: '#183153' },
    { name: 'Soccer', icon: <FaFutbol />, color: '#183153' },
    { name: 'Music', icon: <FaMusic />, color: '#183153' },
    { name: 'Gym', icon: <FaDumbbell />, color: '#183153' },
  ];

  // Helper function for random values
  const getRandom = (min, max) => Math.random() * (max - min) + min;

  // Floating particles (small circles)
  const PARTICLE_COUNT = 12;
  const particles = Array.from({ length: PARTICLE_COUNT }).map((_, i) => ({
    size: getRandom(8, 20),
    top: `${getRandom(5, 90)}%`,
    left: `${getRandom(5, 95)}%`,
    duration: getRandom(4, 7),
    delay: getRandom(0, 3),
    opacity: getRandom(0.08, 0.18),
  }));

  const aboutIcons = [
    { icon: <FaBasketballBall />, style: { top: '10%', left: '15%', fontSize: '3.5rem', opacity: 0.13 }, duration: getRandom(4, 6), delay: getRandom(0, 2) },
    { icon: <FaFutbol />, style: { top: '60%', left: '10%', fontSize: '2.8rem', opacity: 0.11 }, duration: getRandom(5, 7), delay: getRandom(0, 2) },
    { icon: <FaMusic />, style: { top: '30%', left: '80%', fontSize: '3.2rem', opacity: 0.12 }, duration: getRandom(4, 6), delay: getRandom(0, 2) },
    { icon: <FaDumbbell />, style: { top: '75%', left: '70%', fontSize: '2.7rem', opacity: 0.10 }, duration: getRandom(5, 7), delay: getRandom(0, 2) },
    { icon: <FaBasketballBall />, style: { top: '20%', left: '60%', fontSize: '2.5rem', opacity: 0.09 }, duration: getRandom(4, 6), delay: getRandom(0, 2) },
    { icon: <FaFutbol />, style: { top: '80%', left: '40%', fontSize: '3.1rem', opacity: 0.10 }, duration: getRandom(5, 7), delay: getRandom(0, 2) },
    { icon: <FaMusic />, style: { top: '55%', left: '85%', fontSize: '2.6rem', opacity: 0.13 }, duration: getRandom(4, 6), delay: getRandom(0, 2) },
    { icon: <FaDumbbell />, style: { top: '40%', left: '35%', fontSize: '2.9rem', opacity: 0.12 }, duration: getRandom(5, 7), delay: getRandom(0, 2) },
  ];

  return (
    <div className={styles.container}>
      <SEO 
        title="About"
        description="Learn more about Sri Penumaka, a web designer and frontend developer specializing in responsive, user-centered digital experiences."
      />
      <LoadingBar isLoading={isLoading} />
      <ScrollReveal contentClassName={styles.aboutSection} duration={1.2}>
        <div className={styles.aboutIconsBg}>
          {/* Floating circle particles */}
          {particles.map((p, idx) => (
            <motion.div
              key={`particle-${idx}`}
              initial={{ y: 0, opacity: 0 }}
              animate={{
                y: [0, getRandom(-50, 50), 0],
                x: [0, getRandom(-40, 40), 0],
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
                pointerEvents: 'none',
              }}
            />
          ))}
          {/* Floating icons */}
          {aboutIcons.map((item, i) => (
            <motion.span
              key={`icon-${i}`}
              className={styles.aboutBgIcon}
              style={item.style}
              initial={{ y: 0, x: 0 }}
              animate={{
                y: [0, -40, -20, -50, 0],
                x: [0, 20, -15, 10, 0],
              }}
              transition={{
                duration: item.duration,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'easeInOut',
                delay: item.delay,
              }}
            >
              {item.icon}
            </motion.span>
          ))}
        </div>
        <motion.div
          className={styles.profileImage}
          initial={{ opacity: 0, x: -60, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1, boxShadow: '0 0 40px 0 #bfa14a, 0 0 80px 0 #ffe9a7' }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
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
          <motion.div 
            className={styles.sectionLabel}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >About Me</motion.div>
          <motion.h1 
            className={styles.mainHeading}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >Hi, I'm Sri.</motion.h1>
          
          <motion.p 
            className={styles.professionalSummary}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            I'm a web designer and frontend developer specializing in creating responsive, 
            user-centered digital experiences. My work spans UI/UX design, interactive web 
            development, and brand-focused landing pages. I'm passionate about translating 
            complex ideas into clean, accessible interfaces that serve real community needs.
          </motion.p>
          
          <motion.div 
            className={styles.careerGoalsBox}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className={styles.miniHeading}>Current Focus</h3>
            <p className={styles.careerGoalsText}>
              I'm building my expertise in frontend development and UI/UX design, with a focus 
              on creating meaningful digital experiences for local businesses and community 
              organizations. I'm eager to contribute to projects where thoughtful design meets 
              real-world impact, while continuing to expand my technical skillset.
            </p>
          </motion.div>
          
          <motion.p 
            className={styles.descriptionText}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            I'm a curious and creative individual who enjoys turning ideas into clean, engaging visuals. 
            Whether I'm designing a layout or building a website, I find fulfillment in creating things 
            that are both meaningful and easy to use.
          </motion.p>
          
          <motion.p 
            className={styles.personalText}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
          >
            Outside of coding, I love playing sports like <b>basketball</b> and <b>soccer</b>, 
            lifting weights at the <b>gym</b>, and listening to or making <b>music</b>. 
            These activities keep me energized, creative, and balanced.
          </motion.p>
          
          <motion.a
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.6, ease: [0.22, 1, 0.36, 1] }}
            href={resumePdf}
            download="SriPenumaka_Resume.pdf"
            className={styles.resumeButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaDownload />
            Download Resume
          </motion.a>
        </div>
      </ScrollReveal>

      {/* Current Projects Section */}
      <ScrollReveal contentClassName={styles.currentProjects} duration={1.2}>
        <motion.h2 
          className={styles.currentProjectsTitle}
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0, ease: [0.22, 1, 0.36, 1] }}
        >Current Projects</motion.h2>
        <motion.div 
          className={styles.projectHighlight}
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={styles.wipBadge}>IN PROGRESS</div>
          <h3 className={styles.projectName}>
            Professional Janitorial Services Website Redesign
          </h3>
          <p className={styles.projectDescription}>
            Redesigning and modernizing the web presence for a local janitorial business, 
            focusing on improved user experience, mobile responsiveness, and clear service 
            communication. Working directly with the business owner to understand client 
            needs and translate them into an effective digital solution.
          </p>
          <div className={styles.projectSkills}>
            <span className={styles.skillTag}>UI/UX Design</span>
            <span className={styles.skillTag}>Client Collaboration</span>
            <span className={styles.skillTag}>Responsive Design</span>
            <span className={styles.skillTag}>Business Strategy</span>
          </div>
        </motion.div>
      </ScrollReveal>

      {/* Core Values Section */}
      <ScrollReveal contentClassName={styles.coreValues} duration={1.2}>
        <motion.h2 
          className={styles.coreValuesTitle}
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0, ease: [0.22, 1, 0.36, 1] }}
        >Core Values</motion.h2>
        <div className={styles.valuesGrid}>
          <motion.div 
            className={styles.valueCard}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
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
          </motion.div>
          
          <motion.div 
            className={styles.valueCard}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
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
          </motion.div>
          
          <motion.div 
            className={styles.valueCard}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
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
          </motion.div>
        </div>
      </ScrollReveal>

      {/* Design Philosophy Section */}
      <ScrollReveal 
        contentClassName={styles.philosophySection} 
        duration={1.2}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 }
        }}
      >
        <motion.h2 
          className={styles.sectionTitle}
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0, ease: [0.22, 1, 0.36, 1] }}
        >
          <FaLightbulb style={{ marginRight: '12px', color: 'var(--color-secondary)' }} />
          Design Philosophy
        </motion.h2>
        <div className={styles.philosophyGrid}>
          <motion.div 
            className={styles.philosophyCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            <div className={styles.philosophyIcon}>
              <FaUsers size={28} />
            </div>
            <h3 className={styles.philosophyTitle}>User-Centered</h3>
            <p className={styles.philosophyText}>
              Every design decision starts with understanding the user's needs, goals, and context.
            </p>
          </motion.div>

          <motion.div 
            className={styles.philosophyCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            <div className={styles.philosophyIcon}>
              <FaEye size={28} />
            </div>
            <h3 className={styles.philosophyTitle}>Simplicity First</h3>
            <p className={styles.philosophyText}>
              Less is more. I believe in clean, intuitive interfaces that don't overwhelm users.
            </p>
          </motion.div>

          <motion.div 
            className={styles.philosophyCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            <div className={styles.philosophyIcon}>
              <FaHeart size={28} />
            </div>
            <h3 className={styles.philosophyTitle}>Meaningful Impact</h3>
            <p className={styles.philosophyText}>
              Design should solve real problems and create value for both users and businesses.
            </p>
          </motion.div>

          <motion.div 
            className={styles.philosophyCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            <div className={styles.philosophyIcon}>
              <FaMagic size={28} />
            </div>
            <h3 className={styles.philosophyTitle}>Continuous Evolution</h3>
            <p className={styles.philosophyText}>
              Great design is never finished. I iterate, learn, and refine based on feedback and data.
            </p>
          </motion.div>
        </div>
      </ScrollReveal>

      {/* How I Became Interested in Design Section */}
      <ScrollReveal contentClassName={styles.journeySection} duration={1.2}>
        <motion.h2 
          className={styles.sectionTitle}
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0, ease: [0.22, 1, 0.36, 1] }}
        >
          <FaRocket style={{ marginRight: '12px', color: 'var(--color-secondary)' }} />
          How I Became Interested in Design
        </motion.h2>
        
        <div className={styles.journeyTimeline}>
          {/* High School Media Arts */}
          <motion.div 
            className={styles.journeyStep}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={styles.journeyIconWrapper}>
              <motion.div 
                className={styles.journeyIcon}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <FaSchool size={32} />
              </motion.div>
              <motion.div 
                className={styles.timelineLine}
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: 'top' }}
              />
            </div>
            <div className={styles.journeyContent}>
              <div className={styles.journeyYear}>Grade 8 - 12</div>
              <h3 className={styles.journeyTitle}>High School Media Arts</h3>
              <p className={styles.journeyText}>
                My journey into design started in high school when I discovered Media Arts. 
                From grade 8 through 12, I found myself drawn to creating visuals, experimenting 
                with layouts, and bringing ideas to life through design. It was during these 
                formative years that I realized I had a passion for visual storytelling.
              </p>
            </div>
          </motion.div>

          {/* Yearbook Team */}
          <motion.div 
            className={styles.journeyStep}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={styles.journeyIconWrapper}>
              <motion.div 
                className={styles.journeyIcon}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <FaBook size={32} />
              </motion.div>
              <motion.div 
                className={styles.timelineLine}
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: 'top' }}
              />
            </div>
            <div className={styles.journeyContent}>
              <div className={styles.journeyYear}>Grade 12</div>
              <h3 className={styles.journeyTitle}>Yearbook Team</h3>
              <p className={styles.journeyText}>
                In my final year of high school, I joined the yearbook team. This experience 
                was a game-changer for me. Working on layouts, choosing typography, and 
                organizing content taught me that design wasn't just about making things 
                look pretty—it was about creating meaningful experiences and telling stories 
                that mattered. I loved the collaborative process and seeing our work come 
                together in print.
              </p>
            </div>
          </motion.div>

          {/* BCIT Program */}
          <motion.div 
            className={styles.journeyStep}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={styles.journeyIconWrapper}>
              <motion.div 
                className={styles.journeyIcon}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <FaGraduationCap size={32} />
              </motion.div>
              <motion.div 
                className={styles.timelineLine}
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: 'top' }}
              />
            </div>
            <div className={styles.journeyContent}>
              <div className={styles.journeyYear}>BCIT</div>
              <h3 className={styles.journeyTitle}>New Media Design and Web Development</h3>
              <p className={styles.journeyText}>
                After high school, I enrolled in BCIT's New Media Design and Web Development 
                program, and that's when everything clicked. The program opened my eyes to 
                the development side of design—I discovered how much I loved bringing designs 
                to life through code. Learning HTML, CSS, and JavaScript felt like unlocking 
                a superpower. I could now create interactive experiences, not just static 
                layouts.
              </p>
            </div>
          </motion.div>

          {/* Specialization */}
          <motion.div 
            className={styles.journeyStep}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={styles.journeyIconWrapper}>
              <motion.div 
                className={styles.journeyIcon}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <FaLaptopCode size={32} />
              </motion.div>
            </div>
            <div className={styles.journeyContent}>
              <div className={styles.journeyYear}>Today</div>
              <h3 className={styles.journeyTitle}>Specializing in Development</h3>
              <p className={styles.journeyText}>
                The program also deepened my interest in UX/UI design. I learned how user 
                research, wireframing, and prototyping could make digital products more 
                intuitive and meaningful. But it was the combination of design thinking 
                and development skills that really excited me. I realized I wanted to 
                specialize in development—to be the bridge between beautiful designs 
                and functional, accessible websites. Today, I combine my design background 
                with my coding skills to create digital experiences that are both visually 
                compelling and technically sound.
              </p>
            </div>
          </motion.div>
        </div>
      </ScrollReveal>
    </div>
  );
};

export default About;