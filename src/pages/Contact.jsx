import React, { useState } from 'react';
import styles from './Contact.module.css';
import { motion } from 'framer-motion';
import { useRef } from 'react';

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

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const form = e.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      subject: form.subject.value,
      message: form.message.value,
    };
    try {
      const response = await fetch('https://formspree.io/f/mqalyedn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        setError('Something went wrong. Please try again later.');
      }
    } catch (err) {
      setError('Something went wrong. Please try again later.');
    }
  };

  return (
    <div className={styles.container}>
      
      <main className={styles.main}>
        <FadeInSection className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>Let's Work Together</h1>
            <p className={styles.subtitle}>
              I'm currently available for freelance projects and collaborations. 
              Let's create something meaningful together.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection className={styles.contactSection}>
          <div className={styles.contactContent}>
            <div className={styles.contactInfo}>
              <h2 className={styles.sectionTitle}>Get In Touch</h2>
              <p className={styles.description}>
                Whether you have a project in mind, want to collaborate, or just want to say hello, 
                I'd love to hear from you.
              </p>
              
              <div className={styles.contactDetails}>
                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>📧</div>
                  <div>
                    <h3 className={styles.contactLabel}>Email</h3>
                    <a href="mailto:sridattapenumaka@gmail.com" className={styles.contactValue}>
                      sridattapenumaka@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>💼</div>
                  <div>
                    <h3 className={styles.contactLabel}>LinkedIn</h3>
                    <a href="https://www.linkedin.com/in/sri-datta-penumaka-693143328/" className={styles.contactValue} target="_blank" rel="noopener noreferrer">
                      Connect with me
                    </a>
                  </div>
                </div>
                
                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>💻</div>
                  <div>
                    <h3 className={styles.contactLabel}>GitHub</h3>
                    <a href="https://github.com/sripenumaka1" className={styles.contactValue} target="_blank" rel="noopener noreferrer">
                      View my code
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {submitted ? (
              <div style={{ marginTop: 32, color: '#1A1A1A', fontSize: 20 }}>
                Thank you for reaching out! I'll get back to you soon.
              </div>
            ) : (
              <form className={styles.contactForm} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className={styles.input}
                    required
                  />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={styles.input}
                    required
                  />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="subject" className={styles.label}>Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className={styles.input}
                    required
                  />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.label}>Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    className={styles.textarea}
                    required
                  ></textarea>
                </div>
                {error && <div style={{ color: 'red', marginBottom: 12 }}>{error}</div>}
                <button type="submit" className={styles.submitButton}>
                  Send Message
                </button>
              </form>
            )}
          </div>
        </FadeInSection>
      </main>

    </div>
  );
};

export default Contact;
