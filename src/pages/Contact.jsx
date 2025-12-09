import React, { useState } from 'react';
import styles from './Contact.module.css';
import { motion } from 'framer-motion';
import ScrollReveal from "../components/ScrollReveal";
import { usePerformanceMonitor } from '../utils/performance';
import LoadingBar from '../components/LoadingBar';
import SEO from '../components/SEO';

const Contact = () => {
  const { isLoading } = usePerformanceMonitor('Contact');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [formErrors, setFormErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        return '';
      case 'email':
        if (!value.trim()) return 'Email is required';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return 'Please enter a valid email';
        return '';
      case 'subject':
        if (!value.trim()) return 'Subject is required';
        if (value.trim().length < 3) return 'Subject must be at least 3 characters';
        return '';
      case 'message':
        if (!value.trim()) return 'Message is required';
        if (value.trim().length < 10) return 'Message must be at least 10 characters';
        return '';
      default:
        return '';
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched({ ...touched, [name]: true });
    const error = validateField(name, value);
    setFormErrors({ ...formErrors, [name]: error });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (touched[name]) {
      const error = validateField(name, value);
      setFormErrors({ ...formErrors, [name]: error });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const form = e.target;
    
    // Validate all fields
    const fields = ['name', 'email', 'subject', 'message'];
    const errors = {};
    let hasErrors = false;
    
    fields.forEach(field => {
      const error = validateField(field, form[field].value);
      if (error) {
        errors[field] = error;
        hasErrors = true;
      }
    });
    
    setFormErrors(errors);
    setTouched({ name: true, email: true, subject: true, message: true });
    
    if (hasErrors) {
      return;
    }
    
    setIsSubmitting(true);
    
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
        setFormErrors({});
        setTouched({});
      } else {
        setError('Something went wrong. Please try again later.');
      }
    } catch (err) {
      setError('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.container}>
      <SEO 
        title="Contact"
        description="Get in touch with Sri Penumaka for freelance projects, collaborations, or just to say hello."
      />
      <LoadingBar isLoading={isLoading} />
      
      <main className={styles.main}>
        <ScrollReveal className={styles.heroSection} duration={1.2}>
          <div className={styles.heroContent}>
            <motion.h1 
              className={styles.title}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >Let's Work Together</motion.h1>
            <motion.p 
              className={styles.subtitle}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              I'm currently available for freelance projects and collaborations. 
              Let's create something meaningful together.
            </motion.p>
          </div>
        </ScrollReveal>

        <ScrollReveal className={styles.contactSection} duration={1.2}>
          <div className={styles.contactContent}>
            <motion.div 
              className={styles.contactInfo}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.h2 
                className={styles.sectionTitle}
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >Get In Touch</motion.h2>
              <motion.p 
                className={styles.description}
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                Whether you have a project in mind, want to collaborate, or just want to say hello, 
                I'd love to hear from you.
              </motion.p>
              
              <motion.div 
                className={styles.contactDetails}
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
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
              </motion.div>
            </motion.div>

            {submitted ? (
              <motion.div
                className={styles.successMessage}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className={styles.successIcon}>
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <circle cx="24" cy="24" r="22" stroke="var(--color-success)" strokeWidth="3" />
                    <path d="M14 24L20 30L34 16" stroke="var(--color-success)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className={styles.successTitle}>Message Sent!</h3>
                <p className={styles.successText}>
                  Thank you for reaching out! I'll get back to you as soon as possible.
                </p>
                <button 
                  onClick={() => setSubmitted(false)} 
                  className={styles.sendAnotherButton}
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <motion.form 
                className={styles.contactForm} 
                onSubmit={handleSubmit}
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>
                    Name <span className={styles.required}>*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className={`${styles.input} ${formErrors.name && touched.name ? styles.inputError : ''}`}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    aria-invalid={formErrors.name && touched.name ? 'true' : 'false'}
                    aria-describedby={formErrors.name ? 'name-error' : undefined}
                  />
                  {formErrors.name && touched.name && (
                    <span id="name-error" className={styles.errorText} role="alert">
                      {formErrors.name}
                    </span>
                  )}
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>
                    Email <span className={styles.required}>*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={`${styles.input} ${formErrors.email && touched.email ? styles.inputError : ''}`}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    aria-invalid={formErrors.email && touched.email ? 'true' : 'false'}
                    aria-describedby={formErrors.email ? 'email-error' : undefined}
                  />
                  {formErrors.email && touched.email && (
                    <span id="email-error" className={styles.errorText} role="alert">
                      {formErrors.email}
                    </span>
                  )}
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="subject" className={styles.label}>
                    Subject <span className={styles.required}>*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className={`${styles.input} ${formErrors.subject && touched.subject ? styles.inputError : ''}`}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    aria-invalid={formErrors.subject && touched.subject ? 'true' : 'false'}
                    aria-describedby={formErrors.subject ? 'subject-error' : undefined}
                  />
                  {formErrors.subject && touched.subject && (
                    <span id="subject-error" className={styles.errorText} role="alert">
                      {formErrors.subject}
                    </span>
                  )}
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.label}>
                    Message <span className={styles.required}>*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    className={`${styles.textarea} ${formErrors.message && touched.message ? styles.inputError : ''}`}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    aria-invalid={formErrors.message && touched.message ? 'true' : 'false'}
                    aria-describedby={formErrors.message ? 'message-error' : undefined}
                  ></textarea>
                  {formErrors.message && touched.message && (
                    <span id="message-error" className={styles.errorText} role="alert">
                      {formErrors.message}
                    </span>
                  )}
                </div>
                
                {error && (
                  <div className={styles.generalError} role="alert">
                    {error}
                  </div>
                )}
                
                <button 
                  type="submit" 
                  className={styles.submitButton}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className={styles.spinner}></span>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </motion.form>
            )}
          </div>
        </ScrollReveal>
      </main>

    </div>
  );
};

export default Contact;
