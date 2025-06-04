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
  const skillsCategories = {
    "Programming Languages": [
      "Python", "C++", "JavaScript", "SQL", "TypeScript", "Java"
    ],
    "Frameworks & Libraries": [
      "PyTorch", "TensorFlow", "Speechbrain", "scikit-learn",
      "Transformers", "React", "Angular", "JUnit"
    ],
    "Tools & Technologies": [
      "Git", "Linux", "AWS (Beginner)", "MATLAB", "LaTeX", "visual studio code", "vscode", "Intellij", "Jenkins"
    ],
    "Technical Areas": [
      "Audio Processing", "Speech Recognition",
      "Speaker Verification", "Computer Vision",
      "Machine Learning"
    ]
  };

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
              <img src="/documents/photo.png" alt="Profile" />
            </div>
            <div className="profile-info">
              <h1>Ayush Saun</h1>
              <p className="role">AI/ML Enthusiast | Ex-Samsung SDE | M.Tech @ IIIT-Delhi | B.Tech @ DTU</p>
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
              An AI/ML engineer who turns complex models into real-world solutions. 
              After two years at Samsung R&D and now pursuing an M.Tech at IIIT-Delhi, 
              I’ve developed everything from real-time object-tracking pipelines to 
              deepfake-resistant speaker-verification systems. My work spans computer 
              vision, audio and security AI, and classification—always with an eye toward 
              scalable, high-impact applications. Driven by curiosity and collaboration, I’m 
              committed to advancing multi-modal intelligence across diverse domains.
            </p>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section className="resume-section">
        <div className="container">
          <h2 className="section-title">Resume</h2>
          <div className="resume-content">

            {/* EDUCATION */}
            <div className="resume-card" data-aos="fade-up">
              <div className="resume-header">
                <h3><i className="fas fa-graduation-cap"></i> Education</h3>
              </div>
              <div className="resume-item">
                <h4>M.Tech in Computer Science</h4>
                <p className="institution">IIIT-Delhi, Delhi, India</p>
                <p className="date">Aug 2024 – Present</p>
              </div>
              <div className="resume-item">
                <h4>B.Tech in Electrical Engineering</h4>
                <p className="institution">Delhi Technological University, Delhi, India</p>
                <p className="date">Aug 2018 – Jun 2022</p>
              </div>
              <div className="resume-item">
                <h4>Class XII, CBSE</h4>
                <p className="institution">Kendriya Vidyalaya Vigyan Vihar, Delhi, India</p>
                <p className="date">Apr 2017 – Mar 2018</p>
              </div>
              <div className="resume-item">
                <h4>Class X, CBSE</h4>
                <p className="institution">Kendriya Vidyalaya Vigyan Vihar, Delhi, India</p>
                <p className="date">Apr 2015 – Mar 2016</p>
              </div>
            </div>

            {/* EXPERIENCE */}
            <div className="resume-card" data-aos="fade-up" data-aos-delay="100">
              <div className="resume-header">
                <h3><i className="fas fa-briefcase"></i> Experience</h3>
              </div>
              <div className="resume-item">
                <h4>Software Engineer</h4>
                <p className="institution">Samsung R&D, Delhi, India</p>
                <p className="date">Jun 2022 – Jul 2024</p>
                <ul className="experience-list">
                  <li>Maintained an internal corporate portal as a full-stack developer—delivering 5+ monthly releases and achieving 99.8% uptime.</li>
                  <li>Led front-end UI enhancements and back-end integrations for critical content updates.</li>
                  <li>Developed a new portal from scratch, collaborating across teams to ensure seamless functionality.</li>
                  <li>Optimized backend performance, reducing response times through efficient database and API solutions.</li>
                  <li>Showcased end-to-end development skills by prototyping a hackathon project with complete front- and back-end implementation.</li>
                </ul>
              </div>
            </div>

            {/* SKILLS */}
            <div className="resume-card" data-aos="fade-up" data-aos-delay="200">
              <div className="resume-header">
                <h3><i className="fas fa-tools"></i> Skills</h3>
              </div>
              <div className="skills-partition">
                {Object.entries(skillsCategories).map(([category, items], idx) => (
                  <div key={idx} className="skill-category">
                    <h4 className="category-title">{category}</h4>
                    <div className="skills-grid">
                      {items.map((skill, i) => (
                        <span key={i} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Download Section */}
            <div className="download-section">
              <a
                href="/documents/Resume.pdf"
                className="download-btn resume"
                download="AyushSaun_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-file-alt"></i> Get My Resume
              </a>
              <a
                href="/documents/LOR.pdf"
                className="download-btn lor"
                download="AyushSaun_LOR.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-file-signature"></i>
                Recommendation Letter
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
