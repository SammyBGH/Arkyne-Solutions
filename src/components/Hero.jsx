import { useState, useEffect } from 'react';
import '../styles/Hero.css';

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const heroTexts = [
    "Innovative Solutions",
    "Creative Design",
    "Modern Technology",
    "Digital Excellence"
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % heroTexts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [heroTexts.length]);


  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <span>Welcome to Arkyne</span>
            </div>
            
            <h1 className={`hero-title ${isVisible ? 'animate-fade-in-up' : ''}`}>
              The Future of
              <span className="hero-highlight">
                <span className="typing-text">{heroTexts[currentText]}</span>
              </span>
            </h1>
            
            <p className={`hero-description ${isVisible ? 'animate-fade-in-up' : ''}`}>
              We create exceptional digital experiences that transform ideas into reality. 
              Our innovative approach combines cutting-edge technology with creative design.
            </p>
            
            <div className={`hero-stats ${isVisible ? 'animate-fade-in-up' : ''}`}>
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">150+</span>
                <span className="stat-label">Clients</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">Years</span>
              </div>
            </div>
            
            <div className={`hero-actions ${isVisible ? 'animate-fade-in-up' : ''}`}>
              <button className="btn btn-primary">
                Start Your Project
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
              <button className="btn btn-secondary">
                Learn More
              </button>
            </div>
          </div>
          
          <div className={`hero-visual ${isVisible ? 'animate-fade-in-right' : ''}`}>
            <div className="hero-card">
              <div className="card-header">
                <div className="card-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="card-title">Our Features</div>
              </div>
              <div className="card-content">
                <div className="feature-grid">
                  <div className="feature-item">
                    <div className="feature-icon">🚀</div>
                    <span>Fast Performance</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">🎨</div>
                    <span>Beautiful Design</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">🔒</div>
                    <span>Secure & Safe</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">📱</div>
                    <span>Mobile Ready</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
