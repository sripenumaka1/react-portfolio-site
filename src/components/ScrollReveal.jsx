import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const defaultVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

const ScrollReveal = ({
  children,
  as: Component = 'section',
  threshold = 0.15,
  margin = '0px',
  once = false, // Changed default to false for fade in/out
  delay = 0,
  duration = 0.6,
  variants = defaultVariants,
  contentClassName,
  contentStyle,
  className,
  ...props
}) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setInView(true);
      return;
    }
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once && ref.current) observer.unobserve(ref.current);
        } else if (!once) {
          setInView(false);
        }
      },
      { rootMargin: margin, threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, margin, once]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={contentClassName ? undefined : className}
      {...props}
    >
      <Component className={contentClassName} style={contentStyle}>
        {children}
      </Component>
    </motion.div>
  );
};

export default ScrollReveal;


