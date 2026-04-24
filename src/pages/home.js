import React from 'react';

function Home() {
  return (
    <main className="container">
      <section className="hero-card reveal-up">
        <div className="hero-headline">
          <p className="hero-kicker">Portfolio</p>
          <h1>Nitin Rayala</h1>
          <p className="hero-subtext">
            Computer Science student building practical AI-powered and full-stack products.
          </p>
        </div>
      </section>

      <section className="content-section reveal-up delay-1">
        <h2 className="section-title">About Me</h2>
        <p>
          I am a Computer Science student with a passion for software engineering, full-stack web development, and exploring the frontiers of artificial intelligence. I enjoy building efficient, scalable applications and solving complex problems. Beyond coding, I have a strong interest in creative writing and film production.
        </p>

        <h2 className="section-title">Research Interests</h2>
        <ul className="feature-list">
          <li>Artificial Intelligence & Machine Learning</li>
          <li>Reinforcement Learning</li>
          <li>Generative AI Integration</li>
          <li>Time-Series Analysis</li>
        </ul>

        <h2 className="section-title">Personal Details</h2>
        <ul className="feature-list">
          <li><strong>Phone:</strong> 7569788032</li>
          <li><strong>Personal Email:</strong> nitinrayala@gmail.com</li>
          <li><strong>College Email:</strong> se23ucse127@mahindrauniversity.edu.in</li>
        </ul>

        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          <span className="skill-badge">Java</span>
          <span className="skill-badge">Python</span>
          <span className="skill-badge">JavaScript</span>
          <span className="skill-badge">TypeScript</span>
          <span className="skill-badge">C++</span>
          <span className="skill-badge">SQL</span>
          <span className="skill-badge">React</span>
          <span className="skill-badge">Next.js</span>
          <span className="skill-badge">Node.js</span>
          <span className="skill-badge">Tailwind CSS</span>
          <span className="skill-badge">Firebase</span>
        </div>
      </section>
    </main>
  );
}

export default Home;