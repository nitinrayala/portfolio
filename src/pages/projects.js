import React from 'react';

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Placement Assistance Tool",
      description: "A full-stack career management platform developed using Next.js and Firebase.",
      stack: "Next.js • Firebase",
      githubLink: "https://github.com/nitinrayala/placement-assistance-tool"
    },
    {
      id: 2,
      title: "Aircraft Engine Health Monitoring",
      description: "A predictive maintenance system built using machine learning and time-series analysis.",
      stack: "Python • ML • Time-Series",
      githubLink: "https://github.com/nitinrayala/aircraft-engine-health-monitoring"
    },
    {
      id: 3,
      title: "Automated University Timetable Scheduler",
      description: "A system featuring a faculty subsystem to handle constraints and automate timetable generation.",
      stack: "Optimization • Scheduling",
      githubLink: "https://github.com/nitinrayala/automated-timetable-scheduler"
    }
  ];

  return (
    <main className="container projects-page">
      <section className="page-intro reveal-up">
        <p className="hero-kicker">Selected Work</p>
        <h2>Projects That Solve Real Problems</h2>
      </section>

      <section className="projects-grid reveal-up delay-1">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <p className="project-index">0{project.id}</p>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p className="project-stack">{project.stack}</p>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="github-link">
              View on GitHub
            </a>
          </div>
        ))}
      </section>
    </main>
  );
}

export default Projects;