import React from 'react';
import ProjectDetails from './ProjectDetails';
import sskdOrangeImg from '../assets/images/SSKDOrange.png';
import donationsImg from '../assets/images/Donations.png';
import registeredEventsImg from '../assets/images/Registered Events.png';
import eventDetailsImg from '../assets/images/Event Details.png';
import { FaCheckCircle, FaMobileAlt, FaCalendarAlt, FaHeart, FaUsers, FaPalette } from 'react-icons/fa';

const description = `This project involved a complete redesign of the Shri Sai Kripa Dham Temple website, focusing on accessibility, community engagement, and a modern visual identity. The new site features a clean layout, improved navigation, and a mobile-friendly experience.`;

const problem = `The original temple website was outdated, difficult to navigate, and not accessible on mobile devices. Community members struggled to find information about events, services, and temple activities. The site lacked a modern visual identity that could effectively communicate the temple's values and engage the community.`;

const solution = `I redesigned the website with a focus on accessibility, modern design principles, and community engagement. The new design features improved navigation, mobile responsiveness, and key features like an event calendar, donation integration, and a gallery of temple activities. The visual identity was refreshed to better reflect the temple's values while maintaining respect for tradition.`;

const features = [
  {
    icon: <FaCheckCircle />,
    title: 'Accessible Design',
    description: 'Designed with accessibility in mind, ensuring all community members can easily access information and services.'
  },
  {
    icon: <FaMobileAlt />,
    title: 'Mobile-First',
    description: 'Fully responsive design that works seamlessly on all devices, from smartphones to desktop computers.'
  },
  {
    icon: <FaCalendarAlt />,
    title: 'Event Calendar',
    description: 'Easy-to-use event calendar that helps community members stay informed about temple activities and services.'
  },
  {
    icon: <FaHeart />,
    title: 'Donation Integration',
    description: 'Streamlined donation process that makes it easy for community members to support the temple.'
  },
  {
    icon: <FaUsers />,
    title: 'Community Focus',
    description: 'Features designed to strengthen community connections and engagement with temple activities.'
  },
  {
    icon: <FaPalette />,
    title: 'Modern Identity',
    description: 'Refreshed visual identity that balances modern design with respect for traditional values.'
  }
];

const designProcess = `The redesign process began with research into the temple's needs and community feedback. I analyzed the existing website to identify pain points and areas for improvement.<br/><br/>Wireframes were created focusing on improved information architecture and user flows. The design system was developed with accessibility standards in mind, ensuring proper contrast ratios, readable typography, and intuitive navigation. High-fidelity prototypes were created in Figma to visualize the final design.`;

const technicalImplementation = `This project was prototyped in Figma, focusing on UI/UX design and user experience. The prototype demonstrates the complete redesign with interactive elements and user flows.<br/><br/>The design system includes a cohesive color palette, typography hierarchy, and component library that ensures consistency across all pages. Special attention was paid to responsive breakpoints and mobile-first design principles.`;

const results = `The redesigned temple website provides a modern, accessible platform that better serves the community. The improved navigation and mobile responsiveness make it easier for community members to find information and engage with temple activities.<br/><br/>The project successfully balances modern design principles with respect for traditional values, creating a digital presence that the community can be proud of.`;

const lessonsLearned = `This project taught me the importance of understanding the community and context when designing for nonprofit organizations. Balancing modern design with respect for tradition required careful consideration and sensitivity.<br/><br/>I also learned valuable lessons about accessibility — designing for all users, including those with disabilities, is not just good practice but essential for community-focused projects.`;

const stats = [
  { value: '4', label: 'Weeks', icon: <FaCalendarAlt /> },
  { value: '100%', label: 'Accessible', icon: <FaCheckCircle /> },
  { value: 'Figma', label: 'Prototype', icon: <FaPalette /> }
];

const galleryImages = [
  {
    src: donationsImg,
    alt: 'Donations page high-fidelity mockup',
    caption: 'Streamlined donation interface with clear call-to-action and secure payment options'
  },
  {
    src: registeredEventsImg,
    alt: 'Registered Events page high-fidelity mockup',
    caption: 'Event registration system allowing community members to view and manage their event participation'
  },
  {
    src: eventDetailsImg,
    alt: 'Event Details page high-fidelity mockup',
    caption: 'Detailed event information page with comprehensive event descriptions and registration options'
  }
];

export default function TempleRedesign() {
  return (
    <ProjectDetails
      title="Local Temple Redesign"
      subtitle="A modern, accessible redesign for a local temple's online presence"
      image={sskdOrangeImg}
      role="UI/UX Designer & Developer"
      tools={["Figma"]}
      duration="4 weeks"
      year="2025"
      category="Nonprofit, Web Design"
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
      liveDemoLink="https://www.figma.com/proto/1o9y37yCT4jYgfEVZ6EMfn/UX-UI-Final-Project-HiFi-Designs?node-id=0-1&t=wYlZdSgFGSIMQHsH-1"
      prevProject={{ link: '/lumora', title: 'Lumora' }}
      nextProject={{ link: '/project-details-1', title: 'Floating Goku' }}
    />
  );
}
