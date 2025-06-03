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
      description: "Advanced single object tracking system using machine learning algorithms. Implements real-time tracking with high accuracy and robust performance across various scenarios. The model combines deep learning features with traditional tracking methods to achieve superior performance in challenging conditions.",
      features: [
        "Real-time Performance",
        "High Accuracy",
        "Robust Tracking",
        "Multi-scenario Support",
        "Deep Learning Features"
      ],
      techStack: ["PyTorch", "OpenCV", "Python", "CUDA"],
      accuracy: "95.2%",
      performance: "30+ FPS"
    },
    {
      id: 2,
      title: "Vocoder",
      type: "Audio ML",
      icon: "fas fa-microphone",
      description: "High-quality speech synthesis vocoder using advanced machine learning techniques. Produces natural-sounding speech with excellent audio quality and low latency. The system leverages neural networks to generate high-fidelity audio from mel-spectrograms with minimal artifacts.",
      features: [
        "High-Quality Synthesis",
        "Low Latency",
        "Natural Sound",
        "Neural Networks",
        "Minimal Artifacts"
      ],
      techStack: ["TensorFlow", "Librosa", "Python", "NumPy"],
      accuracy: "4.5/5 MOS",
      performance: "Real-time"
    },
    {
      id: 3,
      title: "Spoof Detection",
      type: "Security AI",
      icon: "fas fa-shield-alt",
      description: "State-of-the-art deep learning model for detecting spoofed audio content. Achieves high precision in distinguishing between authentic and synthetic audio samples. The model uses advanced feature extraction and classification techniques to identify various types of audio spoofing attacks.",
      features: [
        "High Precision",
        "Multi-attack Detection",
        "Feature Extraction",
        "Real-time Analysis",
        "Robust Classification"
      ],
      techStack: ["PyTorch", "Scikit-learn", "Librosa", "Python"],
      accuracy: "97.8%",
      performance: "< 100ms"
    },
    {
      id: 4,
      title: "Target Classification",
      type: "Classification",
      icon: "fas fa-bullseye",
      description: "Sophisticated classification system for target vs non-target audio identification. Handles complex scenarios including spoof and bonafide non-target classifications. The system employs ensemble methods and deep learning architectures for accurate audio classification.",
      features: [
        "Multi-class Classification",
        "Ensemble Methods",
        "Complex Scenarios",
        "Deep Learning",
        "High Accuracy"
      ],
      techStack: ["TensorFlow", "Keras", "Python", "Pandas"],
      accuracy: "94.6%",
      performance: "Batch Processing"
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
                <a href="#" className="model-link primary">
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
                </a>
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
              <h3>Deep Learning</h3>
              <p>Advanced neural network architectures including CNNs, RNNs, and Transformers for complex pattern recognition and feature extraction.</p>
            </div>
            <div className="overview-card">
              <div className="overview-icon">
                <i className="fas fa-eye"></i>
              </div>
              <h3>Computer Vision</h3>
              <p>Real-time object detection, tracking, and classification systems optimized for performance and accuracy in various scenarios.</p>
            </div>
            <div className="overview-card">
              <div className="overview-icon">
                <i className="fas fa-volume-up"></i>
              </div>
              <h3>Audio Processing</h3>
              <p>Sophisticated audio analysis, synthesis, and classification models for speech, music, and general audio content processing.</p>
            </div>
            <div className="overview-card">
              <div className="overview-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3>Security & Detection</h3>
              <p>State-of-the-art anomaly detection and spoof identification systems for maintaining data integrity and security.</p>
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
