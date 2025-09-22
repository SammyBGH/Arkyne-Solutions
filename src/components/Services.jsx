import { useState, useEffect } from 'react';
import '../styles/Services.css';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      icon: "💻",
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies and best practices.",
      features: ["React & Next.js", "Node.js & Express", "Database Design", "API Integration"],
      color: "var(--primary-color)"
    },
    {
      icon: "📱",
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android devices.",
      features: ["React Native", "Flutter", "iOS Development", "Android Development"],
      color: "var(--secondary-color)"
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interfaces that provide exceptional user experiences.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      color: "var(--accent-color)"
    },
    {
      icon: "☁️",
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment solutions for your applications.",
      features: ["AWS & Azure", "Docker & Kubernetes", "CI/CD Pipelines", "Monitoring"],
      color: "var(--success-color)"
    },
    {
      icon: "🔒",
      title: "Security & Compliance",
      description: "Enterprise-grade security solutions to protect your data and applications.",
      features: ["Security Audits", "Penetration Testing", "Compliance", "Data Protection"],
      color: "var(--warning-color)"
    },
    {
      icon: "📊",
      title: "Analytics & Insights",
      description: "Data-driven insights and analytics to help you make informed business decisions.",
      features: ["Data Visualization", "Business Intelligence", "Custom Dashboards", "Reporting"],
      color: "var(--error-color)"
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

    const element = document.getElementById('services');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="services-header">
          <h2 className={`section-title ${isVisible ? 'animate-fade-in-up' : ''}`}>
            Our Services
          </h2>
          <p className={`section-description ${isVisible ? 'animate-fade-in-up' : ''}`}>
            We offer a comprehensive range of digital services to help your business 
            thrive in the modern digital landscape.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card ${isVisible ? 'animate-fade-in-up' : ''}`}
              style={{ '--delay': `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className="service-icon" style={{ color: service.color }}>
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              
              <div className={`service-features ${hoveredService === index ? 'visible' : ''}`}>
                <h4>What's Included:</h4>
                <ul>
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="service-actions">
                <button className="btn btn-primary">Learn More</button>
                <button className="btn btn-secondary">Get Quote</button>
              </div>
            </div>
          ))}
        </div>

        <div className={`cta-section ${isVisible ? 'animate-fade-in-up' : ''}`}>
          <div className="cta-content">
            <h3>Ready to Start Your Project?</h3>
            <p>Let's discuss how we can help bring your ideas to life with our expert services.</p>
            <div className="cta-actions">
              <button className="btn btn-primary">Start a Project</button>
              <button className="btn btn-secondary">Schedule a Call</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

