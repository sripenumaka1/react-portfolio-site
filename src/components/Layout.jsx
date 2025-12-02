import React from 'react';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import AnimatedBackground from './AnimatedBackground';
import InteractiveParticles from './InteractiveParticles';
import CustomCursor from './CustomCursor';
import BackToTop from './BackToTop';

const Layout = ({ children }) => {
  return (
    <>
      <CustomCursor />
      <AnimatedBackground />
      <InteractiveParticles />
      <Navigation />
      <main className="main-content" id="main-content">
        {children}
      </main>
      <Footer />
      <BackToTop />
    </>
  );
};

export default Layout; 