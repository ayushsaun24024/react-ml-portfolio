import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import Navbar from '../../components/Navbar/Navbar';
import './Contact.css';

const SERVICE_ID = 'service_hslildh';
const TEMPLATE_ID = 'template_9gozb49';
const PUBLIC_KEY  = 'ckXbYFvsg8JC0S4tJ';

const Contact = () => {
  const formRef = useRef();
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ sending: false, success: null });

  // Navbar scroll effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Contact information cards
  const contactInfo = [
    {
      icon: "fas fa-envelope",
      title: "Email",
      content: "ayushsaun@gmail.com",
      description: "Send me an email anytime!"
    },
    {
      icon: "fas fa-phone",
      title: "Phone",
      content: "+91 96676 29472",
      description: "Available Mon–Fri, 9AM–6PM"
    },
    {
      icon: "fas fa-map-marker-alt",
      title: "Location",
      content: "Delhi, India",
      description: "Open to remote opportunities"
    },
    {
      icon: "fas fa-briefcase",
      title: "Collaboration",
      content: "Open for Projects",
      description: "ML/DL consulting & development"
    }
  ];

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(fd => ({ ...fd, [name]: value }));
  };

  // Validate fields
  const validate = () => {
    const errs = {};
    if (!formData.name.trim() || formData.name.length < 2) {
      errs.name = 'Enter your full name (min 2 characters).';
    }
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(formData.email)) {
      errs.email = 'Enter a valid email address.';
    }
    if (!formData.subject.trim() || formData.subject.length < 3) {
      errs.subject = 'Subject must be at least 3 characters.';
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      errs.message = 'Message must be at least 10 characters.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  // Submit form via EmailJS
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus({ sending: true, success: null });
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setStatus({ sending: false, success: true });
        setFormData({ name: '', email: '', subject: '', message: '' });
        setErrors({});
      })
      .catch(() => {
        setStatus({ sending: false, success: false });
      });
  };

  return (
    <div className="contact">
      <Navbar />

      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <h1 className="page-title">Get In Touch</h1>
          <p className="page-subtitle">
            Let’s discuss opportunities and collaborations
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">

            {/* Contact Info Cards */}
            <div className="contact-info">
              <h2>Contact Information</h2>
              <p className="info-subtitle">
                Ready to bring your ML/DL projects to life? Let’s connect and explore how we can work together.
              </p>
              <div className="contact-items">
                {contactInfo.map((item, i) => (
                  <div key={i} className="contact-item" data-aos="fade-right" data-aos-delay={i * 100}>
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
                  <a
                    href="https://www.linkedin.com/in/ayush-saun-381371180/"
                    className="social-link"
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a
                    href="https://github.com/ayushsaun24024"
                    className="social-link"
                    aria-label="GitHub"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                  <a
                    href="mailto:ayushsaun@gmail.com"
                    className="social-link"
                    aria-label="Email"
                  >
                    <i className="fas fa-envelope"></i>
                  </a>
                  <a
                    href="https://wa.me/9667629472"
                    className="social-link"
                    aria-label="WhatsApp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-whatsapp"></i>
                  </a>
                </div>
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
            </div>

            {/* Contact Form */}
            <div className="contact-form-section">
              <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
                <h2>Send a Message</h2>
                <p>Have a project in mind? Let’s discuss how we can work together.</p>

                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                  />
                  {errors.name && <span className="error">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && <span className="error">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                  />
                  {errors.subject && <span className="error">{errors.subject}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or collaboration idea..."
                  />
                  {errors.message && <span className="error">{errors.message}</span>}
                </div>

                <button type="submit" className="submit-btn" disabled={status.sending}>
                  {status.sending ? 'Sending...' : 'Send Message'}
                </button>

                {status.success === true && (
                  <p className="success-msg">Message sent successfully!</p>
                )}
                {status.success === false && (
                  <p className="error-msg">Failed to send. Please try again.</p>
                )}
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
