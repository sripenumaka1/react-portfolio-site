import React from 'react';
import ProjectDetails from './ProjectDetails';
import studyBuddy2Img from '../assets/images/studybuddy2.jpg';

const description = `StudyBuddy is a UI/UX project designed to help students connect, collaborate, and stay accountable in their studies. This Figma prototype focuses on intuitive navigation, group creation, task tracking, and real-time collaboration features to enhance the student learning experience.`;

export default function ProjectDetails2() {
  return (
    <ProjectDetails
      title="StudyBuddy"
      subtitle="A UI/UX Figma prototype for student collaboration and accountability"
      image={studyBuddy2Img}
      imageClassName="projectImageCropBottom"
      role="UI/UX Designer"
      tools={["Figma", "Prototyping", "UI/UX"]}
      duration="3 weeks"
      year="2025"
      category="Figma Prototype"
      description={description}
      liveDemoLink="https://www.figma.com/proto/6G0R0UvyuFBzt05v8RXMmy/StudyBuddy?node-id=2-15&t=ltalRjdFXz5m3kJS-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1" 
      prevProject={{ link: '/project-details-1', title: 'Project Details 1' }}
      nextProject={{ link: '/lumora', title: 'Lumora' }}
    />
  );
}