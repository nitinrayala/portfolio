import React from 'react';

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Placement Assistance Tool",
      description: "A full-stack career management platform developed using Next.js and Firebase.",
      githubLink: "https://github.com/nitinrayala/placement-assistance-tool"
    },
    {
      id: 2,
      title: "Aircraft Engine Health Monitoring",
      description: "A predictive maintenance system built using machine learning and time-series analysis.",
      githubLink: "https://github.com/nitinrayala/aircraft-engine-health-monitoring"
    },
    {
      id: 3,
      title: "Automated University Timetable Scheduler",
      description: "A system featuring a faculty subsystem to handle constraints and automate timetable generation.",
      githubLink: "https://github.com/nitinrayala/automated-timetable-scheduler"
    }
  ];

  return (
    <div className="container">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="github-link">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;