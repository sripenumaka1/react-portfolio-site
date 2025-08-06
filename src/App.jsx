import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Layout from './components/Layout';
import React from 'react';
import Lumora from './pages/Lumora';
import TempleRedesign from './pages/TempleRedesign';
import ProjectDetails1 from './pages/ProjectDetails1';
import ProjectDetails2 from './pages/ProjectDetails2';
import FloatingGoku from './pages/FloatingGoku';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/lumora" element={<Lumora />} />
        <Route path="/temple-redesign" element={<TempleRedesign />} />
        <Route path="/project-details-1" element={<ProjectDetails1 />} />
        <Route path="/project-details-2" element={<ProjectDetails2 />} />
        <Route path="/floating-goku" element={<FloatingGoku />} />
      </Routes>
    </Layout>
  );
};

export default App;
