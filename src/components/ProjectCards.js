import React from "react";
import "../Styles/ProjectCards.css";
import GymAppSloth from "../assets/Sloth_Gym.webp";
import LakersLogo from "../assets/LakersLogo.webp";
const projectData = [
  {
    title: "Slothethics",
    description: "Workout tracking app to plan and monitor fitness routines",
    image: GymAppSloth,
    link: "https://github.com/renkecui/GymApp",
  },
  {
    title: "NBA Statistics Website",
    description:
      "Webpage for basketball fans to analyze historical NBA data with API integration",
    image: LakersLogo,
    link: "https://github.com/renkecui/sports-statistics-site",
  },
];

const ProjectCards = () => {
  return (
    <section id="Projects" className="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projectData.map((project) => (
          <div key={project.title} className="project-card">
            <div className="project-img-container">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
            </div>
            <div className="project-info-container">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectCards;
