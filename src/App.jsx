import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Layout from './components/Layout';
import React, { useEffect } from 'react';
import Lumora from './pages/Lumora';
import TempleRedesign from './pages/TempleRedesign';
import ProjectDetails1 from './pages/ProjectDetails1';
import ProjectDetails2 from './pages/ProjectDetails2';
import FloatingGoku from './pages/FloatingGoku';
import NotFound from './pages/NotFound';
import { RouterProvider, useRouter } from './context/RouterContext';
import { ThemeProvider } from './context/ThemeContext';
import RouteWrapper from './components/RouteWrapper';

const AppRoutes = () => {
  const location = useLocation();
  
  return (
    <Layout>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<RouteWrapper><Home /></RouteWrapper>} />
        <Route path="/about" element={<RouteWrapper><About /></RouteWrapper>} />
        <Route path="/portfolio" element={<RouteWrapper><Portfolio /></RouteWrapper>} />
        <Route path="/contact" element={<RouteWrapper><Contact /></RouteWrapper>} />
        <Route path="/lumora" element={<RouteWrapper><Lumora /></RouteWrapper>} />
        <Route path="/temple-redesign" element={<RouteWrapper><TempleRedesign /></RouteWrapper>} />
        <Route path="/project-details-1" element={<RouteWrapper><ProjectDetails1 /></RouteWrapper>} />
        <Route path="/project-details-2" element={<RouteWrapper><ProjectDetails2 /></RouteWrapper>} />
        <Route path="/floating-goku" element={<RouteWrapper><FloatingGoku /></RouteWrapper>} />
        <Route path="*" element={<RouteWrapper><NotFound /></RouteWrapper>} />
      </Routes>
    </Layout>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <RouterProvider>
        <AppRoutes />
      </RouterProvider>
    </ThemeProvider>
  );
};

export default App;
