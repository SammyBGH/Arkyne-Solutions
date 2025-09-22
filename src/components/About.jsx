import { useState, useEffect } from 'react';
import '../styles/About.css';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "Our Mission",
      content: "We are dedicated to creating innovative digital solutions that empower businesses to thrive in the digital age. Our mission is to bridge the gap between technology and creativity, delivering exceptional results that exceed expectations.",
      icon: "🎯"
    },
    {
      title: "Our Vision",
      content: "To be the leading force in digital innovation, transforming ideas into reality through cutting-edge technology and creative excellence. We envision a future where every business has access to world-class digital solutions.",
      icon: "👁️"
    },
    {
      title: "Our Values",
      content: "Integrity, innovation, and excellence guide everything we do. We believe in transparent communication, continuous learning, and delivering value that makes a real difference in our clients' success.",
      icon: "💎"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "150+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "99%", label: "Client Satisfaction" }
  ];

  const features = [
    {
      icon: "🚀",
      title: "Innovation First",
      description: "We stay ahead of the curve with the latest technologies and trends."
    },
    {
      icon: "🎨",
      title: "Creative Excellence",
      description: "Our designs are not just beautiful, they're functional and user-centered."
    },
    {
      icon: "⚡",
      title: "Fast Delivery",
      description: "We understand the importance of time and deliver projects on schedule."
    },
    {
      icon: "🔒",
      title: "Secure & Reliable",
      description: "Your data and projects are protected with enterprise-grade security."
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className={`section-title ${isVisible ? 'animate-fade-in-up' : ''}`}>
              About Our Company
            </h2>
            <p className={`section-description ${isVisible ? 'animate-fade-in-up' : ''}`}>
              We are a team of passionate developers, designers, and strategists who believe 
              in the power of technology to transform businesses and create meaningful experiences.
            </p>

            <div className={`tabs-container ${isVisible ? 'animate-fade-in-up' : ''}`}>
              <div className="tabs-header">
                {tabs.map((tab, index) => (
                  <button
                    key={index}
                    className={`tab-button ${activeTab === index ? 'active' : ''}`}
                    onClick={() => setActiveTab(index)}
                  >
                    <span className="tab-icon">{tab.icon}</span>
                    {tab.title}
                  </button>
                ))}
              </div>
              <div className="tab-content">
                <p>{tabs[activeTab].content}</p>
              </div>
            </div>
          </div>

          <div className="about-visual">
            <div className={`stats-grid ${isVisible ? 'animate-fade-in-right' : ''}`}>
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={`features-section ${isVisible ? 'animate-fade-in-up' : ''}`}>
          <h3 className="features-title">Why Choose Us?</h3>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h4 className="feature-title">{feature.title}</h4>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

