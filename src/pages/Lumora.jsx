import React from 'react';
import ProjectDetails from './ProjectDetails';
import lumoraImg from '../assets/images/lumora3.png';

const description = `Lumora is a responsive landing page created for a fictional home décor brand focused on elegance, simplicity, and modern living. The goal was to design a clean and calming user experience that reflects the brand’s minimalist identity while guiding users through featured products and key information with ease.<br/><br/>The landing page was built using HTML, CSS, and JavaScript, with GSAP powering smooth scroll-based animations to enhance interactivity. Special attention was given to visual hierarchy, typography, and whitespace to create a refined aesthetic that feels both professional and inviting across all screen sizes.<br/><br/>This project showcases my ability to design and develop cohesive user experiences — from layout and branding to front-end functionality — with a strong emphasis on responsive design and subtle visual storytelling.`;

export default function Lumora() {
  return (
    <ProjectDetails
      title="Lumora – Responsive Landing Page"
      subtitle="A modern, responsive landing page design with smooth animations and intuitive user experience"
      image={lumoraImg}
      role="Front End Developer"
      tools={["HTML", "CSS", "JavaScript"]}
      duration="3 weeks"
      year="2025"
      category="Web Design"
      description={description}
      liveDemoLink="https://lumora.sripenumaka.ca/"
      prevProject={null}
      nextProject={{ link: '/temple-redesign', title: 'Temple Redesign' }}
    />
  );
}
