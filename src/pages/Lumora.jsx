import React from 'react';
import ProjectDetails from './ProjectDetails';
import lumoraBrownImg from '../assets/images/LumoraBrown.png';
import lumoraAboutImg from '../assets/images/lumoraaboutsection.png';
import lumoraDiscoverImg from '../assets/images/lumoradiscover.png';
import lumoraTestimonialsImg from '../assets/images/lumoratestimonials.png';
import { FaPalette, FaMobileAlt, FaRocket, FaCode, FaPaintBrush, FaUsers } from 'react-icons/fa';

const description = `Lumora is a responsive landing page created for a fictional home décor brand focused on elegance, simplicity, and modern living. The goal was to design a clean and calming user experience that reflects the brand's minimalist identity while guiding users through featured products and key information with ease.`;

const problem = `The challenge was to create a landing page for a home décor brand that needed to stand out in a crowded market. The brand required a digital presence that would convey elegance and sophistication while remaining approachable and inviting. The page needed to showcase products effectively, communicate brand values, and guide users toward engagement without feeling overwhelming or cluttered.`;

const solution = `I designed and developed a minimalist landing page that uses strategic whitespace, refined typography, and subtle animations to create an elegant user experience. The solution focuses on visual storytelling through carefully curated product imagery, a clean navigation structure, and smooth scroll-based animations powered by GSAP that enhance interactivity without overwhelming the user.<br/><br/>The responsive design ensures the experience remains consistent and polished across all devices, from mobile phones to large desktop screens.`;

const features = [
  {
    icon: <FaPalette />,
    title: 'Minimalist Design',
    description: 'Clean, elegant interface with strategic use of whitespace and refined typography to create a sophisticated brand presence.'
  },
  {
    icon: <FaMobileAlt />,
    title: 'Fully Responsive',
    description: 'Seamless experience across all devices with mobile-first approach ensuring accessibility on any screen size.'
  },
  {
    icon: <FaRocket />,
    title: 'Smooth Animations',
    description: 'GSAP-powered scroll-based animations that enhance user engagement without compromising performance or accessibility.'
  },
  {
    icon: <FaCode />,
    title: 'Clean Code',
    description: 'Well-structured HTML, CSS, and JavaScript following best practices for maintainability and scalability.'
  }
];

const designProcess = `The design process began with research into modern home décor brands and their digital presence. I created wireframes focusing on visual hierarchy and user flow, then developed a design system with a refined color palette and typography that reflects elegance and simplicity.<br/><br/>The layout emphasizes product imagery with generous whitespace, allowing each element to breathe. Interactive elements were carefully considered to provide subtle feedback and guide users naturally through the page.`;

const technicalImplementation = `Built with semantic HTML5 for structure, modern CSS3 for styling with custom properties for theming, and vanilla JavaScript for interactivity. GSAP (GreenSock Animation Platform) was integrated to create smooth, performant scroll-based animations that enhance the user experience.<br/><br/>The codebase follows best practices including responsive design patterns, accessibility considerations, and performance optimization. CSS Grid and Flexbox were used for layout, ensuring flexibility and maintainability.`;

const results = `The Lumora landing page successfully creates an elegant and professional digital presence for the brand. The minimalist design effectively communicates the brand's values while the smooth animations and responsive layout provide an engaging user experience across all devices.<br/><br/>The project demonstrates strong skills in front-end development, UI/UX design, and attention to detail in both visual design and code quality.`;

const lessonsLearned = `This project reinforced the importance of restraint in design — sometimes less truly is more. The strategic use of whitespace and subtle animations proved more effective than complex layouts or heavy visual effects.<br/><br/>I also learned valuable lessons about performance optimization with animations, ensuring smooth experiences even on lower-end devices. The project highlighted the importance of responsive design from the ground up, not as an afterthought.`;

const stats = [
  { value: '3', label: 'Weeks', icon: <FaRocket /> },
  { value: '100%', label: 'Responsive', icon: <FaMobileAlt /> },
  { value: 'GSAP', label: 'Animations', icon: <FaCode /> }
];

const galleryImages = [
  {
    src: lumoraAboutImg,
    alt: 'Lumora about section high-fidelity mockup',
    caption: 'About section showcasing brand story and values with elegant typography and imagery'
  },
  {
    src: lumoraDiscoverImg,
    alt: 'Lumora discover section high-fidelity mockup',
    caption: 'Product discovery section featuring curated home décor collections'
  },
  {
    src: lumoraTestimonialsImg,
    alt: 'Lumora testimonials section high-fidelity mockup',
    caption: 'Customer testimonials section building trust and social proof'
  }
];

export default function Lumora() {
  return (
    <ProjectDetails
      title="Lumora – Responsive Landing Page"
      subtitle="A modern, responsive landing page design with smooth animations and intuitive user experience"
      image={lumoraBrownImg}
      role="Front End Developer"
      tools={["HTML", "CSS", "JavaScript", "GSAP"]}
      duration="3 weeks"
      year="2025"
      category="Web Design"
      description={description}
      problem={problem}
      solution={solution}
      features={features}
      designProcess={designProcess}
      technicalImplementation={technicalImplementation}
      results={results}
      lessonsLearned={lessonsLearned}
      stats={stats}
      galleryImages={galleryImages}
      liveDemoLink="https://lumora.sripenumaka.ca/"
      nextProject={{ link: '/temple-redesign', title: 'Local Temple Redesign' }}
    />
  );
}
