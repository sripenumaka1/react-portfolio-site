import React from 'react';
import ProjectDetails from './ProjectDetails';
import gokuInSpaceImg from '../assets/images/gokuinspace.png';

const description = `This creative coding piece features Goku peacefully floating through outer space, brought to life with CSS keyframe animations and animated GIFs. The scene is designed to feel dynamic and immersive while remaining lightweight and performant!`;

export default function ProjectDetails1() {
  return (
    <ProjectDetails
      title="Floating Goku"
      subtitle="Animation using CSS"
      image={gokuInSpaceImg}
      role="Developer"
      tools={["HTML5", "CSS",]}
      duration="2 weeks"
      year="2025"
      category="Animation"
      description={description}
      liveDemoLink="/floating-goku"
      prevProject={{ link: '/temple-redesign', title: 'Local Temple Redesign' }}
      nextProject={{ link: '/project-details-2', title: 'Project Details 2' }}
    />
  );
}