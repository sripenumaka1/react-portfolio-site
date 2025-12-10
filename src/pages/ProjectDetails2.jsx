import React from 'react';
import ProjectDetails from './ProjectDetails';
import studyBuddy2Img from '../assets/images/StudyBuddyBlue.png';
import studyBuddyLandingImg from '../assets/images/studybuddylandingpage.png';
import studyBuddyVideoCallImg from '../assets/images/studybuddyvideocall.png';
import studyBuddyStudyGroupImg from '../assets/images/studybuddystudygroups.png';
import studyBuddyGroupChatImg from '../assets/images/studybuddygroupchat.png';
import { FaUsers, FaTasks, FaComments, FaChartLine, FaBell, FaCalendar } from 'react-icons/fa';

const description = `StudyBuddy is a UI/UX project designed to help students connect, collaborate, and stay accountable in their studies. This Figma prototype focuses on intuitive navigation, group creation, task tracking, and real-time collaboration features to enhance the student learning experience.`;

const problem = `Students often struggle with maintaining accountability and finding study partners. Traditional study methods can be isolating, and existing collaboration tools don't always address the specific needs of students — such as task tracking, group formation, and peer accountability. There was a need for a platform that combines social connection with academic productivity.`;

const solution = `StudyBuddy addresses these challenges by providing an intuitive platform where students can create study groups, track tasks, and collaborate in real-time. The design emphasizes ease of use with clear navigation, visual task management, and features that encourage accountability through peer interaction and progress tracking.`;

const features = [
  {
    icon: <FaUsers />,
    title: 'Study Groups',
    description: 'Create and join study groups with ease. Connect with peers who share similar academic goals and schedules.'
  },
  {
    icon: <FaTasks />,
    title: 'Task Management',
    description: 'Organize assignments and study tasks with an intuitive task tracking system that helps you stay on top of deadlines.'
  },
  {
    icon: <FaComments />,
    title: 'Real-time Collaboration',
    description: 'Communicate with your study group through integrated messaging and collaboration features.'
  },
  {
    icon: <FaChartLine />,
    title: 'Progress Tracking',
    description: 'Monitor your academic progress and stay accountable with visual progress indicators and statistics.'
  },
  {
    icon: <FaBell />,
    title: 'Smart Notifications',
    description: 'Stay informed about group activities, upcoming deadlines, and important updates.'
  },
  {
    icon: <FaCalendar />,
    title: 'Schedule Integration',
    description: 'Plan study sessions and coordinate schedules with your study groups seamlessly.'
  }
];

const designProcess = `The design process began with user research to understand student pain points and collaboration needs. I created user personas and journey maps to guide the design decisions.<br/><br/>Wireframes were developed focusing on intuitive navigation and clear information hierarchy. The design system was built with accessibility in mind, ensuring the interface is usable by all students. High-fidelity prototypes were created in Figma with interactive elements to test user flows and gather feedback.`;

const technicalImplementation = `This project was developed as a high-fidelity Figma prototype, focusing on UI/UX design and user experience rather than code implementation. The prototype includes interactive elements, transitions, and user flows that demonstrate the full functionality of the application.<br/><br/>The design system includes consistent components, color palettes, typography, and spacing guidelines to ensure a cohesive user experience across all screens.`;

const results = `The StudyBuddy prototype successfully demonstrates a user-centered approach to solving student collaboration challenges. The intuitive interface and comprehensive feature set provide a clear vision for how students can better connect and collaborate.<br/><br/>The project showcases strong UI/UX design skills, including user research, wireframing, prototyping, and design system development.`;

const lessonsLearned = `This project reinforced the importance of user research in the design process. Understanding the actual needs and pain points of students was crucial in creating features that truly address their challenges.<br/><br/>I also learned valuable lessons about prototyping — creating interactive prototypes in Figma allowed for better visualization of user flows and early identification of potential usability issues before development.`;

const stats = [
  { value: '3', label: 'Weeks', icon: <FaCalendar /> },
  { value: '6+', label: 'Features', icon: <FaTasks /> },
  { value: 'Figma', label: 'Prototype', icon: <FaChartLine /> }
];

const galleryImages = [
  {
    src: studyBuddyLandingImg,
    alt: 'StudyBuddy landing page high-fidelity mockup',
    caption: 'Landing page highlighting core StudyBuddy actions and value.'
  },
  {
    src: studyBuddyVideoCallImg,
    alt: 'StudyBuddy video call screen',
    caption: 'Built-in video call space to collaborate live with your study group.'
  },
  {
    src: studyBuddyStudyGroupImg,
    alt: 'StudyBuddy study group dashboard',
    caption: 'Study group overview with tasks, members, and accountability checkpoints.'
  },
  {
    src: studyBuddyGroupChatImg,
    alt: 'StudyBuddy group chat interface',
    caption: 'Group chat for quick coordination, file sharing, and reminders.'
  }
];

export default function ProjectDetails2() {
  return (
    <ProjectDetails
      title="StudyBuddy"
      subtitle="A UI/UX Figma prototype for student collaboration and accountability"
      image={studyBuddy2Img}
      role="UI/UX Designer"
      tools={["Figma", "Prototyping", "UI/UX"]}
      duration="3 weeks"
      year="2025"
      category="Figma Prototype"
      description={description}
      galleryImages={galleryImages}
      problem={problem}
      solution={solution}
      features={features}
      designProcess={designProcess}
      technicalImplementation={technicalImplementation}
      results={results}
      lessonsLearned={lessonsLearned}
      stats={stats}
      liveDemoLink="https://www.figma.com/proto/6G0R0UvyuFBzt05v8RXMmy/StudyBuddy?node-id=2-15&t=ltalRjdFXz5m3kJS-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1" 
      prevProject={{ link: '/project-details-1', title: 'Floating Goku' }}
      nextProject={{ link: '/lumora', title: 'Lumora' }}
    />
  );
}
