import React, { useState } from 'react';
import styles from './FrontPage.css';
import ProjectDescription from '../ProjectDescription';

const initialProjects = [
  {
    id: 'project1',
    title: 'Batik Emporium',
    crowdfundingStartDate: '2023-09-01',
    crowdfundingEndDate: '2023-12-31',
    contributions: 0,
    target: 50,
  },
  {
    id: 'project2',
    title: 'Regional Creative Culinary Enterprises',
    crowdfundingStartDate: '2023-10-15',
    crowdfundingEndDate: '2024-06-30',
    contributions: 0,
    target: 100,
  },
  {
    id: 'project3',
    title: 'Balinese Handicrafts',
    crowdfundingStartDate: '2023-11-05',
    crowdfundingEndDate: '2024-03-31',
    contributions: 0,
    target: 30,
  },
];

function FrontPage({ connectWallet, contributeToCrowdfunding, account }) {
  const [projects, setProjects] = useState(initialProjects);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [customContribution, setCustomContribution] = useState(0.01);

  const handleContribute = async (project) => {
    setSelectedProject(project);

    if (!account) {
      await connectWallet();
    }

    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    setShowModal(false);
  };

  const handleConfirmContribution = () => {
    const contributionAmount = Math.max(customContribution, 0.01);
    contributeToCrowdfunding(selectedProject.id, contributionAmount);
    updateProjectDetails(selectedProject.id, contributionAmount);
    setCustomContribution(0.01); // Reset the input field
    handleCloseModal();
  };

  const updateProjectDetails = (projectId, contributionAmount) => {
    const updatedProjects = [...projects];
    const projectIndex = updatedProjects.findIndex((project) => project.id === projectId);
    
    if (projectIndex !== -1) {
      updatedProjects[projectIndex].contributions += contributionAmount;
      setProjects(updatedProjects);
    }
  };

  return (
    <div id="frontPage" className={styles.frontPage}>
      <h1 style={{ textAlign: 'center', margin: '20px' }}>Current Crowdfunding Projects</h1>
      <div className="projects">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h2>{project.title}</h2>
            <p>Crowdfunding Start Date: {project.crowdfundingStartDate}</p>
            <p>Crowdfunding End Date: {project.crowdfundingEndDate}</p>
            <p>Contributions: {project.contributions}</p>
            <p>Target: {project.target}</p>
            <button onClick={() => handleContribute(project)}>Contribute</button>
          </div>
        ))}
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <ProjectDescription project={selectedProject} />
            <label>Contribution (ETH):</label>
            <input
              type="number"
              step="0.01"
              min="0.01"
              value={customContribution}
              onChange={(e) => setCustomContribution(parseFloat(e.target.value))}
            />
            <button onClick={handleCloseModal}>Cancel</button>
            <button onClick={handleConfirmContribution}>Confirm</button>
          </div>
        </div>
      )}
      
    </div>
  );
}

export default FrontPage;
