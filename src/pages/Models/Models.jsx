import './Models.css';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';

const Models = () => {
  const [scrolled, setScrolled] = useState(false);
  const [selectedModel, setSelectedModel] = useState(null);

  // Handle navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Models data with comprehensive details
  const modelsData = [
    {
      id: 1,
      title: "Object Tracking",
      type: "Computer Vision",
      icon: "fas fa-crosshairs",
      description: "Advanced Single Object Tracking (SOT) system with camera motion compensation and adaptive multiscale tracking. Combines multiple feature extraction techniques with ML-based prediction for robust performance in dynamic environments including surveillance and autonomous systems.",
      features: [
        "Camera Motion Compensation (ORB)",
        "Multiscale Adaptive Tracking", 
        "Hybrid Features (HOG, LBP, SIFT)",
        "ML Prediction (Linear + Random Forest)",
        "Real-time Visual Diagnostics",
        "Comprehensive Metrics"
      ],
      techStack: [
        "OpenCV",
        "ORB", 
        "SIFT",
        "HOG",
        "LBP",
        "Linear Regression",
        "Random Forest",
        "Python"
      ],
      accuracy: "85% IoU",
      performance: "30+ FPS"
    },
    {
      id: 2,
      title: "Vocoder",
      type: "Audio ML",
      icon: "fas fa-microphone",
      description: "ML-based vocoder using Griffin-Lim algorithm for audio reconstruction from Mel-spectrograms. Implements comprehensive processing pipeline with 500-bin Mel spectrograms and iterative phase estimation for high-quality audio synthesis with minimal artifacts.",
      features: [
        "Griffin-Lim Reconstruction",
        "Iterative Phase Estimation",
        "Comprehensive Evaluation Metrics",
        "Automated Processing Pipeline"
      ],
      techStack: [
        "Librosa", 
        "NumPy", 
        "SciPy", 
        "SoundFile", 
        "Matplotlib", 
        "Python"
      ],
      accuracy: "95% Fidelity",
      performance: "Real-time"
    },
    {
      id: 3,
      title: "Spoof Detection",
      type: "Security AI", 
      icon: "fas fa-shield-alt",
      description: "Advanced audio deepfake detection system. Implements binary classification for spoof vs bonafide detection and source tracing for attack type identification. Uses state-of-the-art supervised models with comprehensive augmentation techniques to achieve robust performance against diverse spoofing attacks.",
      features: [
        "Binary Classification",
        "Source Tracing",
        "Multi-Augmentation techniques",
        "Audio processing",
        "Supervised Learning"
      ],
      techStack: [
        "Transformers",
        "Hugging Face", 
        "PyTorch",
        "Librosa",
        "Torchaudio pipelines",
        "Python"
      ],
      accuracy: "6.3% EER",
      performance: "Robust System"
    },
    {
      id: 4,
      title: "Target Classification",
      type: "Classification",
      icon: "fas fa-bullseye",
      description: "Advanced speaker verification system for target vs non-target classification in audio authentication. Implements multi-class classification handling bonafide, spoof, and non-target scenarios. Uses supervised learning with ensemble methods for robust speaker identity verification in security-critical applications.",
      features: [
        "Speaker Verification",
        "Multi-class Classification", 
        "Bonafide vs Spoof vs Non-target",
        "Supervised Learning",
        "Ensemble Methods",
      ],
      techStack: [
        "Transformers",
        "Hugging Face", 
        "PyTorch",
        "Librosa",
        "Torchaudio pipelines",
        "Python"
      ],
      accuracy: "30% EER",
      performance: "Real-time"
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
    <div className="models">
      {/* Navigation */}
      <Navbar />

      {/* Models Hero Section */}
      <section className="models-hero">
        <div className="container">
          <h1 className="page-title">Model Details</h1>
          <p className="page-subtitle">
            Comprehensive overview of all machine learning and deep learning models
          </p>
        </div>
      </section>

      {/* Detailed Models Section */}
      <section className="detailed-models">
        <div className="container">
          {modelsData.map((model, index) => (
            <div 
              key={model.id} 
              className="model-detail-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="model-header">
                <div className="model-icon">
                  <i className={model.icon}></i>
                </div>
                <div className="model-meta">
                  <h3>{model.title}</h3>
                  <span className="model-type">{model.type}</span>
                </div>
                <div className="model-stats">
                  <div className="stat-item">
                    <span className="stat-label">Accuracy</span>
                    <span className="stat-value">{model.accuracy}</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Performance</span>
                    <span className="stat-value">{model.performance}</span>
                  </div>
                </div>
              </div>

              <div className="model-description">
                <p>{model.description}</p>
              </div>

              <div className="model-features">
                <h4>Key Features:</h4>
                <div className="features-grid">
                  {model.features.map((feature, idx) => (
                    <span key={idx} className="feature-tag">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div className="model-tech">
                <h4>Technology Stack:</h4>
                <div className="tech-stack">
                  {model.techStack.map((tech, idx) => (
                    <span key={idx} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="model-actions">
                {/* <a href="#" className="model-link primary">
                  <i className="fas fa-play"></i>
                  Live Demo
                </a>
                <a href="#" className="model-link secondary">
                  <i className="fab fa-github"></i>
                  View Code
                </a>
                <a href="#" className="model-link tertiary">
                  <i className="fas fa-file-alt"></i>
                  Documentation
                </a> */}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Overview Section */}
      <section className="tech-overview">
        <div className="container">
          <h2 className="section-title">Technical Overview</h2>
          <div className="overview-grid">
            <div className="overview-card">
              <div className="overview-icon">
                <i className="fas fa-brain"></i>
              </div>
              <h3>Machine Learning</h3>
              <p>Advanced supervised learning with Transformers, ensemble methods, and feature extraction techniques for robust prediction and classification across diverse domains.</p>
            </div>
            <div className="overview-card">
              <div className="overview-icon">
                <i className="fas fa-eye"></i>
              </div>
              <h3>Computer Vision</h3>
              <p>Real-time object tracking systems with camera motion compensation, multiscale adaptive tracking, and hybrid feature extraction (ORB, SIFT, HOG, LBP) for surveillance applications.</p>
            </div>
            <div className="overview-card">
              <div className="overview-icon">
                <i className="fas fa-volume-up"></i>
              </div>
              <h3>Audio Processing</h3>
              <p>Griffin-Lim vocoder reconstruction, speaker verification systems, and comprehensive audio augmentation techniques for synthesis and authentication applications.</p>
            </div>
            <div className="overview-card">
              <div className="overview-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3>Security & Detection</h3>
              <p>Advanced deepfake detection with binary classification, source tracing capabilities, and multi-augmentation techniques achieving robust EER performance for audio security.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="models-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Interested in These Models?</h2>
            <p>Let's discuss how these solutions can be adapted for your specific use case</p>
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

export default Models;
