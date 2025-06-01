import React, { useState, useEffect } from 'react';
import './Contact.css';

const Contact = () => {
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Message sent successfully! I\'ll get back to you soon.');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  // Contact information data
  const contactInfo = [
    {
      icon: "fas fa-envelope",
      title: "Email",
      content: "your.email@example.com",
      description: "Send me an email anytime!"
    },
    {
      icon: "fas fa-phone",
      title: "Phone",
      content: "+1 (555) 123-4567",
      description: "Available Mon-Fri, 9AM-6PM"
    },
    {
      icon: "fas fa-map-marker-alt",
      title: "Location",
      content: "Your City, Country",
      description: "Open to remote opportunities"
    },
    {
      icon: "fas fa-briefcase",
      title: "Collaboration",
      content: "Open for Projects",
      description: "ML/DL consulting & development"
    }
  ];

  return (
    <div className="contact">
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="logo-text">Signal & Syntax</div>
          <ul className="nav-menu">
            <li className="nav-item">
              <a href="/" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a href="/models" className="nav-link">Models</a>
            </li>
            <li className="nav-item">
              <a href="/about" className="nav-link">About</a>
            </li>
            <li className="nav-item">
              <a href="/contact" className="nav-link active">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Contact Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <h1 className="page-title">Get In Touch</h1>
          <p className="page-subtitle">
            Let's discuss opportunities and collaborations
          </p>
          <div className="hero-decoration">
            <div className="decoration-item"></div>
            <div className="decoration-item"></div>
            <div className="decoration-item"></div>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            
            {/* Contact Information */}
            <div className="contact-info">
              <h2>Contact Information</h2>
              <p className="info-subtitle">
                Ready to bring your ML/DL projects to life? Let's connect and explore how we can work together.
              </p>
              
              <div className="contact-items">
                {contactInfo.map((item, index) => (
                  <div key={index} className="contact-item" data-aos="fade-right" data-aos-delay={index * 100}>
                    <div className="contact-icon">
                      <i className={item.icon}></i>
                    </div>
                    <div className="contact-details">
                      <h3>{item.title}</h3>
                      <p className="contact-main">{item.content}</p>
                      <p className="contact-description">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="social-section">
                <h3>Connect with me</h3>
                <div className="social-links-contact">
                  <a href="#" className="social-link" aria-label="LinkedIn">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#" className="social-link" aria-label="GitHub">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="#" className="social-link" aria-label="Twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="social-link" aria-label="Email">
                    <i className="fas fa-envelope"></i>
                  </a>
                  <a href="#" className="social-link" aria-label="Discord">
                    <i className="fab fa-discord"></i>
                  </a>
                </div>
              </div>

              {/* Quick Response Info */}
              <div className="response-info">
                <div className="response-card">
                  <i className="fas fa-clock"></i>
                  <div>
                    <h4>Quick Response</h4>
                    <p>Usually respond within 24 hours</p>
                  </div>
                </div>
                <div className="response-card">
                  <i className="fas fa-globe"></i>
                  <div>
                    <h4>Remote Ready</h4>
                    <p>Available for global collaborations</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-section">
              <form className="contact-form" onSubmit={handleSubmit}>
                <h2>Send a Message</h2>
                <p>Have a project in mind? Let's discuss how we can work together.</p>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or collaboration idea..."
                    rows="6"
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <i className="fas fa-spinner fa-spin"></i>
                      Sending...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane"></i>
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="contact-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Next ML Project?</h2>
            <p>Let's build innovative AI solutions together</p>
            <div className="cta-stats">
              <div className="stat-item">
                <span className="stat-number">2+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">4</span>
                <span className="stat-label">ML Models</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Project Success</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
