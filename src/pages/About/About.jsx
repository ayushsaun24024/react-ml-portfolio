import './About.css';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';


const About = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('profile');

  // Handle navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Skills data
  const skills = [
    'Python', 'TensorFlow', 'PyTorch', 'OpenCV', 'Scikit-learn', 
    'Deep Learning', 'Machine Learning', 'Computer Vision', 
    'Audio Processing', 'React', 'JavaScript', 'Docker'
  ];

  // Timeline data
  const timeline = [
    {
      year: '2025',
      title: 'M.Tech Thesis: Speech & Audio Research',
      description: 'Started my master’s thesis at IIIT Delhi, delving into advanced audio and speech processing methods—particularly deepfake detection—to strengthen the robustness of automatic speaker-verification systems.'
    },
    {
      year: '2024',
      title: 'Master’s in Computer Science, IIIT Delhi',
      description: 'Left Samsung R&D to pursue a full-time M.Tech program in Computer Science, concentrating on artificial intelligence and machine learning.'
    },
    {
      year: '2022',
      title: 'B.Tech Completion & Samsung R&D',
      description: 'Graduated with a 7.84 CGPA in Electrical Engineering and joined Samsung R&D as a full-stack developer.'
    },
    {
      year: '2018',
      title: '85% in CBSE Class 12 & DTU Enrollment',
      description: 'Scored 85% in the CBSE 12th exams before starting my B.Tech in Electrical Engineering at DTU.'
    },
    {
      year: '2016',
      title: '9.6 CGPA in CBSE Class 10',
      description: 'Achieved a 9.6 CGPA in Class 10 CBSE, laying a strong academic foundation.'
    }
  ];

  // Handle smooth scrolling
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="about">
      {/* Navigation */}
      <Navbar />

      {/* About Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="profile-section">
            <div className="profile-image">
              <img src="/api/placeholder/200/200" alt="Profile" />
            </div>
            <div className="profile-info">
              <h1>Your Name</h1>
              <p className="role">ML/DL Engineer & Researcher</p>
              <div className="social-links">
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
            </div>
          </div>
          <div className="about-description">
            <p>
              Passionate Machine Learning and Deep Learning engineer with expertise in computer vision, 
              audio processing, and AI model development. Dedicated to creating innovative solutions that 
              push the boundaries of artificial intelligence. With 2+ years of hands-on experience in 
              developing production-ready ML models, I specialize in transforming complex data into 
              actionable insights and scalable AI solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section className="resume-section">
        <div className="container">
          <h2 className="section-title">Resume</h2>
          <div className="resume-content">
            
            {/* Education Card */}
            <div className="resume-card" data-aos="fade-up">
              <div className="resume-header">
                <h3>
                  <i className="fas fa-graduation-cap"></i>
                  Education
                </h3>
              </div>
              <div className="resume-item">
                <h4>Master's in Computer Science</h4>
                <p className="institution">University Name</p>
                <p className="date">2022 - 2024</p>
                <p className="description">
                  Specialized in Machine Learning and Artificial Intelligence with focus on 
                  deep learning architectures, computer vision, and audio processing systems.
                </p>
              </div>
            </div>

            {/* Experience Card */}
            <div className="resume-card" data-aos="fade-up" data-aos-delay="100">
              <div className="resume-header">
                <h3>
                  <i className="fas fa-briefcase"></i>
                  Experience
                </h3>
              </div>
              <div className="resume-item">
                <h4>Senior ML Engineer</h4>
                <p className="institution">Tech Company</p>
                <p className="date">2024 - Present</p>
                <p className="description">
                  Leading development of audio processing models and spoof detection systems 
                  with 95%+ accuracy rates.
                </p>
              </div>
              <div className="resume-item">
                <h4>ML Research Intern</h4>
                <p className="institution">Research Lab</p>
                <p className="date">2023</p>
                <p className="description">
                  Worked on object tracking algorithms and computer vision projects, 
                  contributing to 3 published research papers.
                </p>
              </div>
            </div>

            {/* Skills Card */}
            <div className="resume-card" data-aos="fade-up" data-aos-delay="200">
              <div className="resume-header">
                <h3>
                  <i className="fas fa-tools"></i>
                  Skills
                </h3>
              </div>
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>

            {/* Download CV */}
            <div className="download-cv">
              <a href="/path-to-your-cv.pdf" className="download-btn" download>
                <i className="fas fa-download"></i>
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section">
        <div className="container">
          <h2 className="section-title">Career Timeline</h2>
          <div className="timeline">
            {timeline.map((item, index) => (
              <div key={index} className="timeline-item" data-aos="fade-up">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3>{item.year}</h3>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Let's Build Something Amazing Together</h2>
            <p>Ready to discuss your next ML project or collaboration opportunity?</p>
              <Link to="/contact" className="cta-button">
                Get In Touch
                <i className="fas fa-arrow-right"></i>
              </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
