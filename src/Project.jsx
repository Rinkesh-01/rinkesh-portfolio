import { useState } from 'react';

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: 'Personal Portfolio',
      description: 'A responsive blog website with dark/light mode and custom CMS integration.',
      image: '../img/p1.avif',
      technologies: ['React', 'CSS', 'JavaScript'],
      demoLink: '#',
      codeLink: 'http://localhost:3000/#'
    },
    {
      id: 2,
      title: 'Weather Dashboard',
      description: 'Interactive weather application that shows forecasts using a third-party API.',
      image: '../img/p2.avif',
      technologies: ['React', 'Tailwind CSS', 'API'],
      demoLink: '#',
      codeLink: '#'
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'A task tracker with drag-and-drop functionality and local storage.',
      image: '../img/p3.avif',
      technologies: ['React', 'js','CSS'],
      demoLink: '#',
      codeLink: '#'
    }
  ];

  return (
      <section id="projects">
    <div className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title">
          My Projects
          <div className="projects-underline"></div>
        </h2>

        <p className="projects-subtext">
          Here are some of my recent projects. Each one was built to solve a specific problem or explore 
          new technologies.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} className="project-image" />
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tags">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="project-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-actions">
                <a href={project.codeLink} className="project-btn code-btn">Code</a>
                <a href={project.demoLink} className="project-btn demo-btn">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon-demo" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Demo
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-footer">
          <p className="projects-footer-text">Want to see more of my work?</p>
          <a href="https://github.com/Rinkesh-01?tab=repositories" className="projects-footer-btn">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon-footer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            View All Repositories
          </a>
        </div>
      </div>
    </div>
    </section>

  );
}
