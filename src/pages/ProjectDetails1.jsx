import React from 'react';
import ProjectDetails from './ProjectDetails';
import gokuInSpaceImg from '../assets/images/gokuinspace.png';
import { FaRocket, FaCode, FaPalette, FaLightbulb } from 'react-icons/fa';

const description = `This creative coding piece features Goku peacefully floating through outer space, brought to life with CSS keyframe animations and animated GIFs. The scene is designed to feel dynamic and immersive while remaining lightweight and performant!`;

const problem = `Creating engaging animations on the web can be challenging — they need to be visually appealing, performant, and work across different browsers and devices. Many animation solutions are heavy or require complex JavaScript libraries, which can impact page load times and performance.`;

const solution = `I created a lightweight, performant animation using pure CSS keyframes and strategically placed animated GIFs. The solution demonstrates that beautiful animations don't always require heavy frameworks — sometimes the simplest tools, when used creatively, can produce the most engaging results. The animation is smooth, responsive, and works consistently across all modern browsers.`;

const features = [
  {
    icon: <FaRocket />,
    title: 'CSS Animations',
    description: 'Smooth, performant animations created entirely with CSS keyframes for optimal performance and browser compatibility.'
  },
  {
    icon: <FaCode />,
    title: 'Lightweight',
    description: 'No heavy JavaScript libraries required — pure CSS and HTML create a fast-loading, responsive experience.'
  },
  {
    icon: <FaPalette />,
    title: 'Creative Design',
    description: 'Combines CSS animations with animated GIFs to create a dynamic, immersive space scene.'
  },
  {
    icon: <FaLightbulb />,
    title: 'Performance Focused',
    description: 'Optimized for performance with efficient animations that don\'t impact page load times or user experience.'
  }
];

const designProcess = `The design process began with conceptualizing the space scene and planning the animation sequence. I sketched out the layout and movement patterns, then implemented the animations using CSS keyframes.<br/><br/>The challenge was creating smooth, natural-looking movement while keeping the code simple and performant. I experimented with different animation timing functions and durations to achieve the desired effect.`;

const technicalImplementation = `Built with pure HTML and CSS, using CSS @keyframes for animations. The animations use transform properties (translate, rotate) which are GPU-accelerated for smooth performance.<br/><br/>Animated GIFs were strategically integrated to add visual interest without adding complexity. The code is clean, well-commented, and demonstrates best practices for CSS animations.`;

const results = `The Floating Goku animation successfully demonstrates that beautiful, engaging animations can be created with simple, lightweight technologies. The project showcases creativity in web development and proves that sometimes the best solution is the simplest one.<br/><br/>The animation is smooth, performant, and works consistently across all modern browsers, providing an enjoyable viewing experience.`;

const lessonsLearned = `This project reinforced that simplicity is often the best approach. Using pure CSS for animations resulted in better performance than many JavaScript-based solutions, and the code was easier to maintain and understand.<br/><br/>I also learned the importance of understanding browser capabilities and using GPU-accelerated properties for smooth animations. The project highlighted that creativity and technical skill can combine to create engaging experiences without unnecessary complexity.`;

const stats = [
  { value: '2', label: 'Weeks', icon: <FaRocket /> },
  { value: 'CSS', label: 'Only', icon: <FaCode /> },
  { value: '100%', label: 'Performance', icon: <FaLightbulb /> }
];

export default function ProjectDetails1() {
  return (
    <ProjectDetails
      title="Floating Goku"
      subtitle="Animation using CSS"
      image={gokuInSpaceImg}
      role="Developer"
      tools={["HTML5", "CSS"]}
      duration="2 weeks"
      year="2025"
      category="Animation"
      description={description}
      problem={problem}
      solution={solution}
      features={features}
      designProcess={designProcess}
      technicalImplementation={technicalImplementation}
      results={results}
      lessonsLearned={lessonsLearned}
      stats={stats}
      liveDemoLink="/floating-goku"
      prevProject={{ link: '/temple-redesign', title: 'Local Temple Redesign' }}
      nextProject={{ link: '/project-details-2', title: 'StudyBuddy' }}
    />
  );
}
