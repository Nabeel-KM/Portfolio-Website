import React, { useEffect } from 'react';
import './upwork-profile.css';
import { Link } from 'react-router-dom';
import { 
  FaEnvelope, 
  FaPhone, 
  FaLinkedin, 
  FaGithub, 
  FaCloud, 
  FaCodeBranch, 
  FaCubes,
  FaArrowRight,
  FaChartLine,
  FaLock,
  FaRocket
} from 'react-icons/fa';

// Import project images
import resqImage from "../../assets/project-images/resq.png";
import trumptokenImage from "../../assets/project-images/trumptoken.png";
import cloudwatchLogAnalyzer from "../../assets/project-images/cloudwatch-log-analyzer.png";

const UpworkProfile = () => {
  // Set up animations when component mounts
  useEffect(() => {
    const animateElements = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, { threshold: 0.15 });
      
      elements.forEach(element => {
        observer.observe(element);
      });
    };
    
    // Add animation classes to elements
    const sections = document.querySelectorAll('.upwork-section');
    sections.forEach(section => {
      section.classList.add('animate-on-scroll');
    });
    
    // Initialize animations
    animateElements();
    
    // Add scroll progress indicator
    const scrollProgress = document.createElement('div');
    scrollProgress.className = 'scroll-progress';
    document.body.appendChild(scrollProgress);
    
    // Update scroll progress on scroll
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.offsetHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      scrollProgress.style.width = scrollPercent + '%';
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (document.querySelector('.scroll-progress')) {
        document.querySelector('.scroll-progress').remove();
      }
    };
  }, []);

  return (
    <div className="upwork-profile-container">
      {/* Hero Section */}
      <header className="upwork-hero">
        <div className="upwork-container">
          <div className="upwork-hero-content animate-on-scroll">
            <h1>Nabeel Sarfraz</h1>
            <h2>AWS DevOps Engineer & Cloud Infrastructure Specialist</h2>
            <p className="upwork-tagline">Building scalable, secure, and automated cloud infrastructure that reduces costs and accelerates development</p>
            <div className="upwork-hero-cta">
              <a href="#upwork-contact" className="upwork-btn upwork-btn-outline">
                <FaEnvelope className="upwork-btn-icon" /> Hire Me
              </a>
              <a href="#upwork-portfolio" className="upwork-btn upwork-btn-secondary">
                <FaChartLine className="upwork-btn-icon" /> View Portfolio
              </a>
              <a href="#upwork-resources" className="upwork-btn upwork-btn-secondary">
                <FaCodeBranch className="upwork-btn-icon" /> Technical Resources
              </a>
              <Link to="/" className="upwork-btn upwork-btn-outline">
                <FaArrowRight className="upwork-btn-icon" /> Back to Main Site
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Summary Section */}
      <section id="upwork-summary" className="upwork-section">
        <div className="upwork-container">
          <div className="upwork-section-header">
            <h2>Professional Summary</h2>
            <p>AWS-certified DevOps Engineer with expertise in cloud infrastructure and automation</p>
          </div>
          
          <div className="upwork-summary animate-on-scroll">
            <h3>About Me</h3>
            <p>I'm a DevOps Engineer and Cloud Infrastructure Specialist with 1.5+ years of experience in designing, implementing, and managing AWS cloud environments. My expertise lies in automating infrastructure deployment, optimizing cloud costs, and implementing robust CI/CD pipelines.</p>
            
            <p>I help businesses streamline their development workflows, improve system reliability, and reduce operational overhead through infrastructure automation and cloud-native solutions.</p>
            
            <h3>Core Expertise</h3>
            <ul>
              <li>AWS cloud architecture and infrastructure design</li>
              <li>Infrastructure as Code (Terraform, CloudFormation)</li>
              <li>CI/CD pipeline implementation (GitHub Actions, Jenkins)</li>
              <li>Containerization and orchestration (Docker, ECS)</li>
              <li>Monitoring, logging, and observability solutions</li>
              <li>Cloud cost optimization and resource management</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="upwork-services" className="upwork-section">
        <div className="upwork-container">
          <div className="upwork-section-header">
            <h2>Services</h2>
            <p>Specialized DevOps and cloud infrastructure services to accelerate your business</p>
          </div>
          
          <div className="services-grid">
            <div className="service-card animate-on-scroll">
              <FaCloud className="service-icon" />
              <h3>AWS Cloud Architecture</h3>
              <p>Design and implementation of scalable, secure, and cost-effective AWS cloud infrastructure tailored to your specific business requirements.</p>
              <ul className="service-features">
                <li>Multi-environment architecture design</li>
                <li>High availability and disaster recovery</li>
                <li>Security best practices implementation</li>
                <li>Cost optimization strategies</li>
              </ul>
            </div>
            
            <div className="service-card animate-on-scroll">
              <FaCodeBranch className="service-icon" />
              <h3>CI/CD Pipeline Automation</h3>
              <p>Streamline your development workflow with automated CI/CD pipelines that enable faster, more reliable software delivery.</p>
              <ul className="service-features">
                <li>GitHub Actions workflow setup</li>
                <li>Jenkins pipeline configuration</li>
                <li>Automated testing integration</li>
                <li>Zero-downtime deployment strategies</li>
              </ul>
            </div>
            
            <div className="service-card animate-on-scroll">
              <FaCubes className="service-icon" />
              <h3>Containerization & Orchestration</h3>
              <p>Modernize your applications with containerization and orchestration solutions for improved scalability and resource utilization.</p>
              <ul className="service-features">
                <li>Docker containerization</li>
                <li>AWS ECS/Fargate implementation</li>
                <li>Container security hardening</li>
                <li>Multi-stage build optimization</li>
              </ul>
            </div>
            
            <div className="service-card animate-on-scroll">
              <FaLock className="service-icon" />
              <h3>Cloud Security & Compliance</h3>
              <p>Implement robust security measures and compliance controls to protect your cloud infrastructure and data.</p>
              <ul className="service-features">
                <li>IAM policy implementation</li>
                <li>Security group configuration</li>
                <li>Encryption and secrets management</li>
                <li>Compliance automation</li>
              </ul>
            </div>
            
            <div className="service-card animate-on-scroll">
              <FaRocket className="service-icon" />
              <h3>Infrastructure as Code</h3>
              <p>Manage your infrastructure through code for improved consistency, version control, and automated provisioning.</p>
              <ul className="service-features">
                <li>Terraform module development</li>
                <li>CloudFormation template creation</li>
                <li>IaC best practices implementation</li>
                <li>State management and collaboration</li>
              </ul>
            </div>
            
            <div className="service-card animate-on-scroll">
              <FaChartLine className="service-icon" />
              <h3>Monitoring & Observability</h3>
              <p>Gain insights into your systems with comprehensive monitoring, logging, and observability solutions.</p>
              <ul className="service-features">
                <li>CloudWatch dashboards and alarms</li>
                <li>ELK stack implementation</li>
                <li>Log aggregation and analysis</li>
                <li>Performance optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="upwork-portfolio" className="upwork-section">
        <div className="upwork-container">
          <div className="upwork-section-header">
            <h2>Portfolio</h2>
            <p>Recent projects showcasing my DevOps and cloud infrastructure expertise</p>
          </div>
          
          <div className="portfolio-grid">
            <div className="portfolio-item animate-on-scroll">
              <img src={resqImage} alt="ResQ Emergency Response Platform" className="portfolio-image" />
              <div className="portfolio-content">
                <h3>ResQ Emergency Response Platform</h3>
                <p>Designed and implemented a scalable AWS infrastructure for an emergency response application, featuring high availability, real-time data processing, and robust security measures.</p>
                <div className="portfolio-tags">
                  <span className="portfolio-tag">AWS</span>
                  <span className="portfolio-tag">Terraform</span>
                  <span className="portfolio-tag">ECS</span>
                  <span className="portfolio-tag">RDS</span>
                  <span className="portfolio-tag">ElastiCache</span>
                </div>
                <div className="portfolio-links">
                  <a href="#" className="upwork-btn upwork-btn-outline">View Details</a>
                </div>
              </div>
            </div>
            
            <div className="portfolio-item animate-on-scroll">
              <img src={trumptokenImage} alt="TrumpToken Cryptocurrency Platform" className="portfolio-image" />
              <div className="portfolio-content">
                <h3>TrumpToken Cryptocurrency Platform</h3>
                <p>Built a secure and scalable infrastructure for a cryptocurrency trading platform using AWS services, implementing CI/CD pipelines, automated scaling, and comprehensive monitoring.</p>
                <div className="portfolio-tags">
                  <span className="portfolio-tag">AWS</span>
                  <span className="portfolio-tag">Docker</span>
                  <span className="portfolio-tag">GitHub Actions</span>
                  <span className="portfolio-tag">CloudFront</span>
                  <span className="portfolio-tag">DynamoDB</span>
                </div>
                <div className="portfolio-links">
                  <a href="#" className="upwork-btn upwork-btn-outline">View Details</a>
                </div>
              </div>
            </div>
            
            <div className="portfolio-item animate-on-scroll">
              <img src={cloudwatchLogAnalyzer} alt="CloudWatch Log Analyzer" className="portfolio-image" />
              <div className="portfolio-content">
                <h3>CloudWatch Log Analyzer</h3>
                <p>Developed an automated log analysis tool that processes CloudWatch logs, identifies patterns, and generates actionable insights, reducing troubleshooting time by 70%.</p>
                <div className="portfolio-tags">
                  <span className="portfolio-tag">Python</span>
                  <span className="portfolio-tag">Lambda</span>
                  <span className="portfolio-tag">CloudWatch</span>
                  <span className="portfolio-tag">Elasticsearch</span>
                  <span className="portfolio-tag">Kibana</span>
                </div>
                <div className="portfolio-links">
                  <a href="#" className="upwork-btn upwork-btn-outline">View Details</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="upwork-testimonials" className="upwork-section">
        <div className="upwork-container">
          <div className="upwork-section-header">
            <h2>Testimonials</h2>
            <p>What clients say about working with me</p>
          </div>
          
          <div className="testimonials-container">
            <div className="testimonial animate-on-scroll">
              <p className="testimonial-content">
                "Nabeel transformed our deployment process from a manual, error-prone task to a fully automated pipeline. His expertise in AWS and CI/CD has significantly improved our development workflow and system reliability."
              </p>
              <div className="testimonial-author">
                <div className="testimonial-info">
                  <h4>Michael Johnson</h4>
                  <p>CTO, TechSolutions Inc.</p>
                </div>
              </div>
            </div>
            
            <div className="testimonial animate-on-scroll">
              <p className="testimonial-content">
                "Working with Nabeel was a game-changer for our cloud infrastructure. He identified and implemented cost-saving measures that reduced our AWS bill by 35% while improving performance. His documentation and knowledge transfer were exceptional."
              </p>
              <div className="testimonial-author">
                <div className="testimonial-info">
                  <h4>Sarah Williams</h4>
                  <p>DevOps Lead, DataStream Analytics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section id="upwork-resources" className="upwork-section">
        <div className="upwork-container">
          <div className="upwork-section-header">
            <h2>Technical Resources</h2>
            <p>Explore sample code, architecture diagrams, and technical documentation</p>
          </div>
          <div className="resources-grid">
            <div className="resource-card animate-on-scroll">
              <div className="resource-icon">
                <FaCloud />
              </div>
              <h3>AWS Architecture Templates</h3>
              <p>Reference architectures for scalable, secure, and cost-optimized AWS deployments including web applications, microservices, and serverless designs.</p>
              <div className="resource-tags">
                <span>Serverless</span>
                <span>Microservices</span>
                <span>High Availability</span>
              </div>
              <div className="resource-cta">
                <Link to="/resources/aws-architecture" className="upwork-btn upwork-btn-outline">
                  <FaCloud className="upwork-btn-icon" /> View Templates
                </Link>
              </div>
            </div>
            
            <div className="resource-card animate-on-scroll">
              <div className="resource-icon">
                <FaCodeBranch />
              </div>
              <h3>CI/CD Pipeline Blueprints</h3>
              <p>Production-ready CI/CD pipeline configurations for GitHub Actions, including React deployment, Docker + ECS, and Terraform infrastructure.</p>
              <div className="resource-tags">
                <span>GitHub Actions</span>
                <span>Docker</span>
                <span>Terraform</span>
              </div>
              <div className="resource-cta">
                <Link to="/resources/ci-cd-pipelines" className="upwork-btn upwork-btn-outline">
                  <FaCodeBranch className="upwork-btn-icon" /> View Blueprints
                </Link>
              </div>
            </div>
            
            <div className="resource-card animate-on-scroll">
              <div className="resource-icon">
                <FaChartLine />
              </div>
              <h3>Cloud Cost Optimization</h3>
              <p>Comprehensive checklist with 25 actionable steps to optimize your AWS cloud costs, potentially reducing your bill by 20-40%.</p>
              <div className="resource-tags">
                <span>Cost Savings</span>
                <span>Best Practices</span>
                <span>AWS</span>
              </div>
              <div className="resource-cta">
                <Link to="/resources/cost-optimization" className="upwork-btn upwork-btn-outline">
                  <FaChartLine className="upwork-btn-icon" /> View Checklist
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="upwork-contact" className="upwork-section">
        <div className="upwork-container">
          <div className="upwork-section-header">
            <h2>Contact Me</h2>
            <p>Let's discuss how I can help with your DevOps and cloud infrastructure needs</p>
          </div>
          
          <div className="contact-grid">
            <div className="contact-info animate-on-scroll">
              <h3>Get In Touch</h3>
              <p>Feel free to reach out to discuss your project requirements or any questions you may have about my services.</p>
              
              <div className="contact-methods">
                <div className="contact-method">
                  <FaEnvelope size={32} />
                  <h3>Email</h3>
                  <p><a href="mailto:nabntan@gmail.com">nabntan@gmail.com</a></p>
                </div>
                <div className="contact-method">
                  <FaPhone size={32} />
                  <h3>Phone</h3>
                  <p><a href="tel:+923444527024">+92-344-4527024</a></p>
                </div>
                <div className="contact-method">
                  <FaLinkedin size={32} />
                  <h3>LinkedIn</h3>
                  <p><a href="https://linkedin.com/in/nabeel-sarfraz" target="_blank" rel="noreferrer">linkedin.com/in/nabeel-sarfraz</a></p>
                </div>
                <div className="contact-method">
                  <FaGithub size={32} />
                  <h3>GitHub</h3>
                  <p><a href="https://github.com/Nabeel-KM" target="_blank" rel="noreferrer">github.com/Nabeel-KM</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="upwork-container">
          <div className="footer-content">
            <div className="footer-logo">
              <h3>Nabeel Sarfraz</h3>
              <p>DevOps Engineer & Cloud Infrastructure Specialist</p>
            </div>
            <div className="footer-links">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><a href="#upwork-summary">About</a></li>
                <li><a href="#upwork-services">Services</a></li>
                <li><a href="#upwork-portfolio">Portfolio</a></li>
                <li><a href="#upwork-resources">Resources</a></li>
                <li><a href="#upwork-contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-social">
              <a href="https://linkedin.com/in/nabeel-sarfraz" target="_blank" rel="noreferrer"><FaLinkedin /></a>
              <a href="https://github.com/Nabeel-KM" target="_blank" rel="noreferrer"><FaGithub /></a>
              <a href="mailto:nabntan@gmail.com"><FaEnvelope /></a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Nabeel Sarfraz. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default UpworkProfile;
