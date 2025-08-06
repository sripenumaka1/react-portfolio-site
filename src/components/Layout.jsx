import React from 'react';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout; 