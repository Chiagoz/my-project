import { Link } from 'react-router-dom'
import './HomePage.css'
import './ProjectPages.css'

function LandingPage() {
  return (
    <>
      <header className="navbar">
        <Link to="/" className="logo">DaTripleCee</Link>
        <nav aria-label="Main navigation">
          <Link to="/">Home</Link>
          <Link to="/todo">To-Do</Link>
          <Link to="/calculator">Calculator</Link>
          <Link to="/landing">Landing</Link>
        </nav>
      </header>

      <main className="project-shell">
        <section className="project-header">
          <p className="section-tag">Project</p>
          <h1 className="project-title">Product Landing Page</h1>
          <p className="project-subtitle">
            A simple, conversion-focused landing page concept by DaTripleCee
            for digital products.
          </p>
        </section>

        <section className="landing-hero">
          <p className="section-tag">New Launch</p>
          <h2>Ship your ideas faster with clean frontend workflows.</h2>
          <p>
            Build, test, and launch product pages with reusable components and
            a maintainable style system.
          </p>
          <div className="hero-buttons" style={{ marginTop: '1.1rem' }}>
            <a className="primary-btn" href="#pricing">Get Started</a>
            <a className="secondary-btn" href="#features">See Features</a>
          </div>
        </section>

        <section id="features" className="panel">
          <p className="section-tag">Features</p>
          <div className="feature-grid">
            <article className="feature-box">
              <h3>Fast Setup</h3>
              <p>Prebuilt sections and utility classes for rapid page delivery.</p>
            </article>
            <article className="feature-box">
              <h3>Responsive Design</h3>
              <p>Looks sharp from mobile screens to widescreen desktops.</p>
            </article>
            <article className="feature-box">
              <h3>Clear Messaging</h3>
              <p>Readable typography and structured content blocks that convert.</p>
            </article>
          </div>
        </section>

        <section id="pricing" className="panel">
          <p className="section-tag">Pricing</p>
          <div className="feature-grid">
            <article className="feature-box">
              <h3>Starter</h3>
              <p>$19/month - one project, core components, email support.</p>
            </article>
            <article className="feature-box">
              <h3>Pro</h3>
              <p>$49/month - unlimited projects, advanced sections, priority support.</p>
            </article>
          </div>
          <Link to="/" className="back-link">Return to portfolio</Link>
          <a className="back-link" href="mailto:chiagoziemchukwuezi@gmail.com">
            Contact: chiagoziemchukwuezi@gmail.com
          </a>
        </section>
      </main>
    </>
  )
}

export default LandingPage
