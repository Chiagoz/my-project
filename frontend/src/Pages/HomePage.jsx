import './HomePage.css'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <>
      <header className="navbar">
        <a href="#home" className="logo">DaTripleCee</a>
        <nav aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <p className="eyebrow">Frontend Developer</p>
          <h1>Hi, I am DaTripleCee. I build clean, modern web experiences.</h1>
          <p>
            I turn ideas into responsive, user-focused interfaces using clean
            code, thoughtful design, and practical project structure.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">View Projects</a>
            <a href="#contact" className="secondary-btn">Contact Me</a>
          </div>

          <div className="hero-stats">
            <article>
              <h3>8+</h3>
              <p>Projects Completed</p>
            </article>
            <article>
              <h3>3</h3>
              <p>Core Technologies</p>
            </article>
            <article>
              <h3>100%</h3>
              <p>Mobile-Friendly Layouts</p>
            </article>
          </div>
        </section>

        <section id="about" className="feature">
          <div className="feature-text">
            <p className="section-tag">About Me</p>
            <h2>Building practical products with strong frontend foundations.</h2>
            <p>
              I am a frontend-focused developer who enjoys turning ideas into
              polished interfaces. My current stack is HTML, CSS, JavaScript,
              React, and modern UI workflows.
            </p>
          </div>
        </section>

        <section id="skills" className="services">
          <p className="section-tag">Skills</p>
          <h2>My Skills</h2>

          <div className="grid">
            <div className="card">
              <h3>HTML</h3>
              <p>
                Writing semantic and accessible markup that forms the backbone
                of every page.
              </p>
            </div>

            <div className="card">
              <h3>CSS</h3>
              <p>
                Creating responsive layouts, design systems, and elegant visual
                hierarchy.
              </p>
            </div>

            <div className="card">
              <h3>JavaScript</h3>
              <p>
                Adding interaction and behavior that makes interfaces feel alive
                and intuitive.
              </p>
            </div>
          </div>
        </section>

        <section id="projects" className="services">
          <p className="section-tag">Projects</p>
          <h2>My Projects</h2>

          <div className="grid">
            <div className="card">
              <h3>To-Do List App</h3>
              <p>A task manager built with JavaScript and local storage.</p>
              <span className="chip">JavaScript</span>
              <div className="card-actions">
                <Link className="secondary-btn" to="/todo">Open Project</Link>
              </div>
            </div>

            <div className="card">
              <h3>Landing Page</h3>
              <p>A responsive product landing page with strong visual hierarchy.</p>
              <span className="chip">HTML + CSS</span>
              <div className="card-actions">
                <Link className="secondary-btn" to="/landing">Open Project</Link>
              </div>
            </div>

            <div className="card">
              <h3>Calculator</h3>
              <p>An interactive calculator with clean UI and keyboard support.</p>
              <span className="chip">JavaScript</span>
              <div className="card-actions">
                <Link className="secondary-btn" to="/calculator">Open Project</Link>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="cta">
          <h2>Let&apos;s build something useful together.</h2>
          <p>Open to internships, freelance work, and collaboration.</p>
          <a className="primary-btn" href="mailto:chiagoziemchukwuezi@gmail.com">
            Email: chiagoziemchukwuezi@gmail.com
          </a>
          <div className="contact-links">
            <a href="mailto:chiagoziemchukwuezi@gmail.com">Send Quick Email</a>
            <Link to="/todo">Open To-Do Demo</Link>
            <Link to="/calculator">Open Calculator Demo</Link>
            <Link to="/landing">Open Landing Demo</Link>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2026 DaTripleCee. Crafted with React.</p>
      </footer>
    </>
  )
}

export default HomePage
