import React, { useState } from "react";
import "./App.css";

const slidesData = [
  {
    id: 1,
    title: "Metaverse Portal & Spatial Web",
    category: "Spatial Computing",
    description: "Immersive multi-dimensional web experiences connecting decentralized spatial environments with zero-latency streaming.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 2,
    title: "Autonomous AI & Cognitive Systems",
    category: "Artificial Intelligence",
    description: "Next-generation neural agent orchestration streamlining complex analytical reasoning across distributed platforms.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 3,
    title: "Distributed Edge Cloud Infrastructure",
    category: "Cloud Architecture",
    description: "Global micro-edge computation fabric ensuring instant content delivery and 99.999% fault-tolerant resilience.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 4,
    title: "Quantum Cryptography & Zero-Trust",
    category: "Cyber Defense",
    description: "Post-quantum lattice cryptographic protocols safeguarding critical digital infrastructure from advanced threats.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 5,
    title: "NextGen React & Developer Experience",
    category: "Modern Frontend",
    description: "Component-driven architectures, state machines, and micro-interactions optimized for rapid product delivery.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80"
  }
];

function App() {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [slide, setSlide] = useState(0);
  const [contactSubmitted, setContactSubmitted] = useState(false);

  function scrollToSection(id) {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  function nextSlide() {
    setSlide((current) => (current + 1) % slidesData.length);
  }

  function previousSlide() {
    setSlide((current) => (current - 1 + slidesData.length) % slidesData.length);
  }

  return (
    <div className="app">
      {/* Sticky Landing Page Navbar */}
      <nav className="navbar">
        <div className="navbar-brand" onClick={() => scrollToSection("dashboard")}>
          <h2>React Learning</h2>
        </div>

        <div className="nav-links">
          <button
            className={activeSection === "dashboard" ? "active-link" : ""}
            onClick={() => scrollToSection("dashboard")}
          >
            Dashboard
          </button>

          <button
            className={activeSection === "about" ? "active-link" : ""}
            onClick={() => scrollToSection("about")}
          >
            About Us
          </button>

          <button
            className={activeSection === "slides" ? "active-link" : ""}
            onClick={() => scrollToSection("slides")}
          >
            Slides
          </button>

          <button
            className={activeSection === "contact" ? "active-link" : ""}
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </button>
        </div>
      </nav>

      {/* Main Landing Page Content (In Exact Requested Order) */}
      <main className="container landing-content">

        {/* ===================================================================
            ORDER 1: DASHBOARD
           =================================================================== */}
        <section id="dashboard" className="landing-section">
          <div className="card-header">
            <h1>Dashboard</h1>
            <p>Real-time metrics, platform analytics, and user engagement</p>
          </div>

          <div className="dashboard-grid">
            <div className="card stat-card-hover">
              <h3>Total Users</h3>
              <h2>120</h2>
              <span className="stat-subtext">Active online learners</span>
            </div>

            <div className="card stat-card-hover">
              <h3>Total Projects</h3>
              <h2>15</h2>
              <span className="stat-subtext">Deployed React modules</span>
            </div>

            <div className="card stat-card-hover">
              <h3>Pending Tasks</h3>
              <h2>8</h2>
              <span className="stat-subtext">Sprint milestones to review</span>
            </div>
          </div>
        </section>

        {/* ===================================================================
            ORDER 2: ABOUT US
           =================================================================== */}
        <section id="about" className="landing-section">
          <div className="card-header">
            <h1>About Us</h1>
            <p>Our mission, values, and engineering approach</p>
          </div>

          <div className="card about-card">
            <p className="about-text">
              We build simple, performant, and user-friendly web experiences.
              Our goal is to make modern web technology accessible, fast, and
              intuitive for developers and users alike.
            </p>

            <div className="about-highlights-grid">
              <div className="highlight-item">
                <span className="highlight-icon">⚡</span>
                <h4>Fast & Modern</h4>
                <p>Built with Vite & React for sub-second hot reloading.</p>
              </div>

              <div className="highlight-item">
                <span className="highlight-icon">📱</span>
                <h4>Responsive Design</h4>
                <p>Adapts flawlessly from mobile screens to 4K displays.</p>
              </div>

              <div className="highlight-item">
                <span className="highlight-icon">🔒</span>
                <h4>Safe & Modular</h4>
                <p>Component-driven architecture for scalable codebases.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            ORDER 3: SLIDES
           =================================================================== */}
        <section id="slides" className="landing-section">
          <div className="card-header">
            <h1>Featured Slides</h1>
            <p>Interactive showcase — Explore innovation pillars across modern engineering</p>
          </div>

          <div className="carousel-section">
            <div className="modern-slide-card">
              <div className="slide-media-wrapper">
                <img
                  src={slidesData[slide].image}
                  alt={slidesData[slide].title}
                  className="slide-image"
                />

                {/* Floating Glass Navigation Arrows */}
                <button
                  className="carousel-floating-arrow arrow-left"
                  onClick={previousSlide}
                  aria-label="Previous slide"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </button>

                <button
                  className="carousel-floating-arrow arrow-right"
                  onClick={nextSlide}
                  aria-label="Next slide"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>

                {/* Floating Category Pill */}
                <div className="slide-tag-badge">
                  <span>✨</span> {slidesData[slide].category}
                </div>
              </div>

              <div className="slide-details-panel">
                <div className="slide-text-group">
                  <h3 className="slide-heading">{slidesData[slide].title}</h3>
                  <p className="slide-summary">{slidesData[slide].description}</p>
                </div>

                <div className="slide-bottom-toolbar">
                  <div className="slide-counter-badge">
                    Slide {slide + 1} <span className="counter-slash">/</span> {slidesData.length}
                  </div>

                  <div className="slide-pill-indicators">
                    {slidesData.map((_, index) => (
                      <button
                        key={index}
                        className={`pill-dot ${slide === index ? "active-pill-dot" : ""}`}
                        onClick={() => setSlide(index)}
                        aria-label={`Jump to slide ${index + 1}`}
                        aria-current={slide === index ? "true" : undefined}
                      />
                    ))}
                  </div>

                  <div className="slide-quick-nav">
                    <button className="quick-nav-btn" onClick={previousSlide}>
                      Previous
                    </button>
                    <button className="quick-nav-btn primary-quick-btn" onClick={nextSlide}>
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            ORDER 4: CONTACT
           =================================================================== */}
        <section id="contact" className="landing-section">
          <div className="card-header">
            <h1>Contact Us</h1>
            <p>Have questions or feedback? Send us a message below.</p>
          </div>

          <div className="card contact-card">
            {contactSubmitted && (
              <div className="contact-alert-success">
                ✓ Message submitted successfully! We will get back to you shortly.
              </div>
            )}

            <form
              onSubmit={(event) => {
                event.preventDefault();
                setContactSubmitted(true);
                event.target.reset();
                setTimeout(() => setContactSubmitted(false), 4000);
              }}
            >
              <label htmlFor="contact-name">Name</label>
              <input
                id="contact-name"
                type="text"
                placeholder="Enter your name"
                required
              />

              <label htmlFor="contact-email">Email</label>
              <input
                id="contact-email"
                type="email"
                placeholder="Enter your email"
                required
              />

              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                placeholder="Write your message here..."
                rows="4"
                required
              />

              <button className="primary-btn" type="submit">
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Landing Page Footer */}
      <footer className="landing-footer">
        <div className="footer-content">
          <h3>React Learning</h3>
          <p>A single-page React frontend landing practice application</p>
          <div className="footer-links">
            <button onClick={() => scrollToSection("dashboard")}>Top ↑</button>
            <button onClick={() => scrollToSection("dashboard")}>Dashboard</button>
            <button onClick={() => scrollToSection("about")}>About Us</button>
            <button onClick={() => scrollToSection("slides")}>Slides</button>
            <button onClick={() => scrollToSection("contact")}>Contact</button>
          </div>
          <p className="copyright">© 2026 React Learning. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
