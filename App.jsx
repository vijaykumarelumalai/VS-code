
import { useState } from "react";
import "./App.css";

const imageUrl =
  "https://media.gettyimages.com/id/1508781577/photo/metaverse-portal.jpg?s=612x612&w=0&k=20&c=zXuOIKvbaOqhC3_Mg7QmSDYQY_Cli748wKofhUEQMFk=";

function App() {
  const [page, setPage] = useState("Login");
  const [loggedIn, setLoggedIn] = useState(false);
  const [slide, setSlide] = useState(0);

  const slides = Array.from({ length: 10 }, (_, index) => index + 1);

  function handleLogin(event) {
    event.preventDefault();
    setLoggedIn(true);
    setPage("Dashboard");
  }

  function handleLogout() {
    setLoggedIn(false);
    setPage("Login");
  }

  function nextSlide() {
    setSlide((current) => (current + 1) % slides.length);
  }

  function previousSlide() {
    setSlide(
      (current) => (current - 1 + slides.length) % slides.length
    );
  }

  return (
    <div className="app">
      <nav className="navbar">
        <h2>MyWebsite</h2>

        <div className="nav-links">
          {loggedIn && (
            <button onClick={() => setPage("Dashboard")}>
              Dashboard
            </button>
          )}

          <button onClick={() => setPage("About Us")}>
            About Us
          </button>

          <button onClick={() => setPage("Contact")}>
            Contact
          </button>

          {loggedIn ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <button onClick={() => setPage("Login")}>
              Login
            </button>
          )}
        </div>
      </nav>

      <main className="container">
        {page === "Login" && (
          <div className="card login-card">
            <h1>Login</h1>
            <p>Welcome back! Please sign in.</p>

            <form onSubmit={handleLogin}>
              <label htmlFor="login-email">Email</label>
              <input
                id="login-email"
                type="email"
                placeholder="Enter your email"
                required
              />

              <label htmlFor="login-password">Password</label>
              <input
                id="login-password"
                type="password"
                placeholder="Enter your password"
                required
              />

              <button className="primary-btn" type="submit">
                Login
              </button>
            </form>
          </div>
        )}

        {page === "Dashboard" && loggedIn && (
          <div>
            <h1>Dashboard</h1>
            <p>Welcome to your dashboard!</p>

            <div className="dashboard-grid">
              <div className="card">
                <h3>Total Users</h3>
                <h2>120</h2>
              </div>

              <div className="card">
                <h3>Total Projects</h3>
                <h2>15</h2>
              </div>

              <div className="card">
                <h3>Pending Tasks</h3>
                <h2>8</h2>
              </div>
            </div>

            <section className="carousel-section">
              <h2>Featured Slides</h2>

              <div className="slide-card">
                <img
                  src={imageUrl}
                  alt={`Metaverse portal - Slide ${slide + 1}`}
                />

                <div className="slide-caption">
                  <h3>Metaverse Portal</h3>
                  <p>Slide {slide + 1} of {slides.length}</p>
                </div>
              </div>

              <div className="carousel-controls">
                <button onClick={previousSlide}>
                  Previous
                </button>

                <div className="slide-dots">
                  {slides.map((item, index) => (
                    <button
                      key={item}
                      className={
                        slide === index ? "dot active-dot" : "dot"
                      }
                      onClick={() => setSlide(index)}
                      aria-label={`Go to slide ${item}`}
                      aria-current={slide === index ? "true" : undefined}
                    />
                  ))}
                </div>

                <button onClick={nextSlide}>
                  Next
                </button>
              </div>
            </section>
          </div>
        )}

        {page === "About Us" && (
          <div className="card">
            <h1>About Us</h1>
            <p>
              We build simple and user-friendly web experiences.
              Our goal is to make technology easy for everyone.
            </p>
          </div>
        )}

        {page === "Contact" && (
          <div className="card contact-card">
            <h1>Contact Us</h1>
            <p>Send us a message.</p>

            <form
              onSubmit={(event) => {
                event.preventDefault();
                alert("Message submitted successfully!");
                event.target.reset();
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
                placeholder="Write your message"
                rows="4"
                required
              />

              <button className="primary-btn" type="submit">
                Submit
              </button>
            </form>
          </div>
        )}
      </main>

      <footer>
        <p>© 2026 MyWebsite | React Frontend Practice</p>
      </footer>
    </div>
  );
}

export default App;
