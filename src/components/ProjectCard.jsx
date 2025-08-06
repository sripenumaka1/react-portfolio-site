import React from 'react';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ image, title, description, link }) => (
  <div className={styles.card}>
    <img src={image} alt={title} className={styles.image} />
    <h3 className={styles.title}>{title}</h3>
    <p className={styles.description}>{description}</p>
    <a href={link} className={styles.link}>View Project</a>
  </div>
);

export default ProjectCard;
