import React from 'react';
import styles from './ProjectDescription.css';

function ProjectDescription({ project }) {
  if (!project) {
    return null;
  }

  let description = '';

  switch (project.id) {
    case 'project1':
      description = 'The project aims to fund the development and production of batik, a traditional Indonesian textile art form. By reaching the contribution target of 50, Batik Emporium hopes to expand its operations and create more jobs for local craftsmen.';
      break;
    case 'project2':
      description = 'This project focuses on developing creative culinary businesses in various regions. With a target contribution of 100, this project hopes to support local restaurants and cafes in creating innovative new menus and promoting local culinary delights..';
      break;
    case 'project3':
      description = 'This project aims to support local craftsmen in Bali in making and selling traditional handicrafts. With a target contribution of 30, the project hopes to help craftspeople obtain the materials and tools they need to increase production and sales.';
      break;
    default:
      description = '';
  }

  return (
    <div className={styles.projectDescription}>
      <h2>{project.title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default ProjectDescription;
