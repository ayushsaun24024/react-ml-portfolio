import './Home.css';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle mobile menu toggle
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    setIsMenuOpen(false); // Close mobile menu after clicking
  };

  // Featured models data
  const featuredModels = [
    {
      id: 1,
      title: "Object Tracking",
      description: "Advanced SOT system with camera motion compensation and adaptive multiscale tracking for surveillance applications",
      icon: "fas fa-crosshairs",
      techTag: "Computer Vision"
    },
    {
      id: 2,
      title: "Vocoder",
      description: "Griffin-Lim algorithm-based vocoder for high-fidelity audio reconstruction from Mel-spectrograms",
      icon: "fas fa-microphone",
      techTag: "Audio ML"
    },
    {
      id: 3,
      title: "Spoof Detection",
      description: "ASVspoof challenge system with binary classification and source tracing for audio deepfake detection",
      icon: "fas fa-shield-alt",
      techTag: "Security AI"
    },
    {
      id: 4,
      title: "Target Classification",
      description: "Speaker verification system for target vs non-target classification in audio authentication scenarios",
      icon: "fas fa-bullseye",
      techTag: "Classification"
    }
  ];

  return (
    <div className="home">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Machine Learning & Deep Learning Models</h1>
          <p className="hero-subtitle">
            Explore cutting-edge AI solutions for object tracking, audio processing, and spoof detection
          </p>
          <a href="#models" className="cta-button" onClick={(e) => handleSmoothScroll(e, '#models')}>
            Explore Models
            <i className="fas fa-arrow-right"></i>
          </a>
        </div>
        
        {/* Floating Cards Animation */}
        <div className="hero-visual">
          <div className="floating-card card-1"></div>
          <div className="floating-card card-2"></div>
          <div className="floating-card card-3"></div>
        </div>
      </section>

      {/* Featured Models Section */}
      <section id="models" className="models-section">
        <div className="container">
          <h2 className="section-title">Featured Models</h2>
          <p className="section-subtitle">
            Select a model to explore its capabilities and implementation details
          </p>
          
          <div className="models-grid">
            {featuredModels.map((model) => (
              <div key={model.id} className="model-card" data-aos="fade-up">
                <div className="card-icon">
                  <i className={model.icon}></i>
                </div>
                <h3>{model.title}</h3>
                <p>{model.description}</p>
                <div className="card-footer">
                  <span className="tech-tag">{model.techTag}</span>
                  <i className="fas fa-arrow-right"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
