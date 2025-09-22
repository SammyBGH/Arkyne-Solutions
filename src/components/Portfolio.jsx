import { useState, useEffect } from 'react';
import '../styles/Portfolio.css';

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'design', label: 'UI/UX Design' }
  ];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "web",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      description: "A modern e-commerce platform with advanced features and seamless user experience.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#",
      featured: true
    },
    {
      id: 2,
      title: "Mobile Banking App",
      category: "mobile",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop",
      description: "Secure mobile banking application with biometric authentication and real-time transactions.",
      technologies: ["React Native", "Firebase", "Node.js", "AWS"],
      link: "#",
      featured: true
    },
    {
      id: 3,
      title: "SaaS Dashboard",
      category: "web",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      description: "Comprehensive analytics dashboard for SaaS businesses with real-time data visualization.",
      technologies: ["Next.js", "TypeScript", "D3.js", "PostgreSQL"],
      link: "#",
      featured: false
    },
    {
      id: 4,
      title: "Fitness Tracker App",
      category: "mobile",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop",
      description: "Personal fitness tracking app with workout plans and progress monitoring.",
      technologies: ["Flutter", "Firebase", "HealthKit", "Google Fit"],
      link: "#",
      featured: false
    },
    {
      id: 5,
      title: "Design System",
      category: "design",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=500&h=300&fit=crop",
      description: "Comprehensive design system with reusable components and brand guidelines.",
      technologies: ["Figma", "Storybook", "React", "Styled Components"],
      link: "#",
      featured: true
    },
    {
      id: 6,
      title: "Restaurant Website",
      category: "web",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&h=300&fit=crop",
      description: "Modern restaurant website with online ordering and reservation system.",
      technologies: ["Vue.js", "Express", "MySQL", "PayPal"],
      link: "#",
      featured: false
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('portfolio');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="portfolio-header">
          <h2 className={`section-title ${isVisible ? 'animate-fade-in-up' : ''}`}>
            Our Portfolio
          </h2>
          <p className={`section-description ${isVisible ? 'animate-fade-in-up' : ''}`}>
            Explore our latest projects and see how we've helped businesses 
            achieve their digital goals.
          </p>
        </div>

        <div className={`portfolio-filters ${isVisible ? 'animate-fade-in-up' : ''}`}>
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`filter-button ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card ${isVisible ? 'animate-fade-in-up' : ''} ${project.featured ? 'featured' : ''}`}
              style={{ '--delay': `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className={`project-overlay ${hoveredProject === project.id ? 'visible' : ''}`}>
                  <div className="project-actions">
                    <button className="btn btn-primary">View Project</button>
                    <button className="btn btn-secondary">View Code</button>
                  </div>
                </div>
                {project.featured && (
                  <div className="featured-badge">Featured</div>
                )}
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`portfolio-cta ${isVisible ? 'animate-fade-in-up' : ''}`}>
          <h3>Have a Project in Mind?</h3>
          <p>Let's work together to create something amazing.</p>
          <button className="btn btn-primary">Start Your Project</button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

