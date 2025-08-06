import React from 'react';
import ProjectDetails from './ProjectDetails';
import sskd1Img from '../assets/images/sskd1.png';

const description = `This project involved a complete redesign of the Shri Sai Kripa Dham Temple website, focusing on accessibility, community engagement, and a modern visual identity. The new site features a clean layout, improved navigation, and a mobile-friendly experience.<br/><br/>Key features include an event calendar, donation integration, and a gallery of temple activities. The redesign was implemented using Figma for prototyping.`;

export default function TempleRedesign() {
  return (
    <ProjectDetails
      title="Shri Sai Kripa Dham Temple Website Redesign"
      subtitle="A modern, accessible redesign for a local temple's online presence"
      image={sskd1Img}
      role="UI/UX Designer & Developer"
      tools={["Figma"]}
      duration="4 weeks"
      year="2025"
      category="Nonprofit, Web Design"
      description={description}
      liveDemoLink="https://www.figma.com/proto/1o9y37yCT4jYgfEVZ6EMfn/UX-UI-Final-Project-HiFi-Designs?node-id=0-1&t=wYlZdSgFGSIMQHsH-1"
      prevProject={{ link: '/lumora', title: 'Lumora' }}
      nextProject={{ link: '/project-details-1', title: 'Project Details 1' }}
    />
  );
}