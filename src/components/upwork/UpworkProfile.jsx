import React from 'react';
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
  return (
    <div className="upwork-profile-container">
      {/* Hero Section */}
      <header className="upwork-hero">
        <div className="upwork-container">
          <div className="upwork-hero-content">
            <h1>Nabeel Sarfraz</h1>
            <h2>AWS DevOps Engineer & Cloud Infrastructure Specialist</h2>
            <p className="upwork-tagline">Building scalable, secure, and automated cloud infrastructure that reduces costs and accelerates development</p>
            <div className="upwork-hero-cta">
              <a href="#upwork-contact" className="upwork-btn upwork-btn-primary">
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
      <section id="upwork-summary" className="upwork-section upwork-summary">
        <div className="upwork-container">
          <div className="upwork-section-header">
            <h2>Professional Summary</h2>
            <p>Delivering measurable results through DevOps excellence</p>
          </div>
          <div className="upwork-summary-content">
            <p className="upwork-highlight-text">AWS-certified DevOps Engineer with 1.5+ years of specialized experience in cloud infrastructure, CI/CD automation, and containerization. I help businesses reduce deployment time by up to 70% and infrastructure costs by 35% through automation and optimization strategies.</p>
            
            <div className="upwork-key-metrics">
              <div className="upwork-metric">
                <span className="upwork-metric-value">70%</span>
                <span className="upwork-metric-label">Faster Deployments</span>
              </div>
              <div className="upwork-metric">
                <span className="upwork-metric-value">35%</span>
                <span className="upwork-metric-label">Cost Reduction</span>
              </div>
              <div className="upwork-metric">
                <span className="upwork-metric-value">99.95%</span>
                <span className="upwork-metric-label">System Uptime</span>
              </div>
              <div className="upwork-metric">
                <span className="upwork-metric-value">40%</span>
                <span className="upwork-metric-label">Faster Development</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="upwork-services" className="upwork-section">
        <div className="upwork-container">
          <div className="upwork-section-header">
            <h2>Services I Offer</h2>
            <p>Specialized DevOps solutions to optimize your development workflow and infrastructure</p>
          </div>
          <div className="upwork-services-grid">
            <div className="upwork-service-card">
              <div className="upwork-service-icon">
                <FaCloud />
              </div>
              <h3>Cloud Infrastructure Design</h3>
              <p>Custom AWS architecture design with security, scalability, and cost optimization as core principles.</p>
              <ul className="upwork-service-features">
                <li>Multi-environment infrastructure setup</li>
                <li>High-availability architecture</li>
                <li>Disaster recovery planning</li>
                <li>Security best practices implementation</li>
              </ul>
            </div>
            
            <div className="upwork-service-card">
              <div className="upwork-service-icon">
                <FaCodeBranch />
              </div>
              <h3>CI/CD Pipeline Automation</h3>
              <p>Streamlined deployment workflows that reduce errors and accelerate your release cycles.</p>
              <ul className="upwork-service-features">
                <li>GitHub Actions workflow setup</li>
                <li>Jenkins pipeline configuration</li>
                <li>Zero-downtime deployment strategies</li>
                <li>Automated testing integration</li>
              </ul>
            </div>
            
            <div className="upwork-service-card">
              <div className="upwork-service-icon">
                <FaCubes />
              </div>
              <h3>Container Orchestration</h3>
              <p>Efficient containerization solutions for consistent, scalable application deployment.</p>
              <ul className="upwork-service-features">
                <li>Docker containerization</li>
                <li>AWS ECS cluster management</li>
                <li>Container security implementation</li>
                <li>Multi-stage build optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="upwork-portfolio" className="upwork-section">
        <div className="upwork-container">
          <div className="upwork-section-header">
            <h2>Featured Projects</h2>
            <p>Real-world solutions I've implemented for clients</p>
          </div>
          
          <div className="case-study">
            <div className="case-study-header">
              <img src={resqImage} alt="ResQ Platform" className="case-study-logo" />
              <h3>ResQ Platform Infrastructure</h3>
            </div>
            <div className="case-study-content">
              <div className="case-study-problem">
                <h4>Challenge</h4>
                <p>ResQ needed a scalable infrastructure for their appointment scheduling platform with real-time updates, but faced deployment delays and high operational costs.</p>
              </div>
              <div className="case-study-solution">
                <h4>Solution</h4>
                <ul>
                  <li>Implemented GitHub Actions pipelines for automated deployments to both local VMs and AWS ECS</li>
                  <li>Architected AWS infrastructure using Terraform with ECS clusters, ECR repositories, and ALB</li>
                  <li>Configured Nginx for path-based routing to host React frontend and WordPress on the same domain</li>
                  <li>Set up Twilio for branded RCS messaging and SMS/email notifications</li>
                </ul>
              </div>
              <div className="case-study-results">
                <h4>Results</h4>
                <ul>
                  <li>Reduced deployment time by 70%</li>
                  <li>Enabled zero-downtime rolling deployments</li>
                  <li>Improved customer experience with real-time notifications</li>
                  <li>Optimized database performance, resolving high load issues</li>
                </ul>
              </div>
              <div className="case-study-tech">
                <h4>Technologies Used</h4>
                <div className="tech-tags">
                  <span>AWS ECS</span>
                  <span>ECR</span>
                  <span>EC2</span>
                  <span>RDS</span>
                  <span>ALB</span>
                  <span>VPC</span>
                  <span>Amplify</span>
                  <span>S3</span>
                  <span>CloudFront</span>
                  <span>Terraform</span>
                  <span>GitHub Actions</span>
                  <span>Docker</span>
                  <span>Nginx</span>
                  <span>Ansible</span>
                  <span>Twilio</span>
                </div>
              </div>
              <div className="case-study-cta">
                <a href="https://stg-resq.kryptomind.net/" target="_blank" rel="noopener noreferrer" className="upwork-btn upwork-btn-outline">
                  <FaRocket className="upwork-btn-icon" /> View Live Project
                </a>
              </div>
            </div>
          </div>
          
          <div className="case-study">
            <div className="case-study-header">
              <img src={trumptokenImage} alt="TheTrumpToken" className="case-study-logo" />
              <h3>TheTrumpToken Infrastructure Optimization</h3>
            </div>
            <div className="case-study-content">
              <div className="case-study-problem">
                <h4>Challenge</h4>
                <p>TheTrumpToken platform was experiencing performance degradation and intermittent outages, unable to handle growing user traffic.</p>
              </div>
              <div className="case-study-solution">
                <h4>Solution</h4>
                <ul>
                  <li>Implemented auto-scaling policies based on custom metrics to handle traffic spikes</li>
                  <li>Deployed frontend on AWS Amplify for continuous deployment and global content delivery</li>
                  <li>Set up S3 bucket with CloudFront distribution for static assets and media content</li>
                  <li>Created IAM user with limited access policies restricted to S3 bucket operations only</li>
                </ul>
              </div>
              <div className="case-study-results">
                <h4>Results</h4>
                <ul>
                  <li>Eliminated recurring outages</li>
                  <li>Improved transaction processing speed by 40%</li>
                  <li>Supported 3x user growth through optimized infrastructure</li>
                  <li>Enhanced security posture with least privilege access</li>
                </ul>
              </div>
              <div className="case-study-tech">
                <h4>Technologies Used</h4>
                <div className="tech-tags">
                  <span>AWS EC2</span>
                  <span>ECS</span>
                  <span>CloudWatch</span>
                  <span>Amplify</span>
                  <span>S3</span>
                  <span>CloudFront</span>
                  <span>Terraform</span>
                  <span>Docker</span>
                </div>
              </div>
              <div className="case-study-cta">
                <a href="https://thetrumptoken.com/" target="_blank" rel="noopener noreferrer" className="upwork-btn upwork-btn-outline">
                  <FaRocket className="upwork-btn-icon" /> View Live Project
                </a>
              </div>
            </div>
          </div>
          
          <div className="case-study">
            <div className="case-study-header">
              <img src={cloudwatchLogAnalyzer} alt="CloudWatch Log Analyzer" className="case-study-logo" />
              <h3>CloudWatch Log Analyzer</h3>
            </div>
            <div className="case-study-content">
              <div className="case-study-problem">
                <h4>Challenge</h4>
                <p>Client needed an efficient way to analyze AWS CloudWatch logs across multiple AWS profiles, but existing solutions were slow and lacked cross-account visibility.</p>
              </div>
              <div className="case-study-solution">
                <h4>Solution</h4>
                <ul>
                  <li>Developed a robust Python application with Streamlit for interactive dashboards</li>
                  <li>Implemented secure multi-profile selection system for seamless switching between AWS accounts</li>
                  <li>Created dynamic visualizations for log patterns, error trends, and time-based analysis</li>
                  <li>Engineered a Docker-based solution with optimized configuration for consistent deployment</li>
                </ul>
              </div>
              <div className="case-study-results">
                <h4>Results</h4>
                <ul>
                  <li>Reduced log analysis time by 80%</li>
                  <li>Enabled cross-account visibility for faster troubleshooting</li>
                  <li>Achieved minimal resource utilization (0.01% CPU)</li>
                  <li>Enhanced security with proper IAM role support</li>
                </ul>
              </div>
              <div className="case-study-tech">
                <h4>Technologies Used</h4>
                <div className="tech-tags">
                  <span>Python</span>
                  <span>Streamlit</span>
                  <span>Pandas</span>
                  <span>AWS SDK (boto3)</span>
                  <span>Docker</span>
                  <span>CloudWatch Logs API</span>
                  <span>AWS IAM</span>
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
            <div className="resource-card">
              <div className="resource-icon">
                <FaCodeBranch />
              </div>
              <h3>CI/CD Pipeline Templates</h3>
              <p>Production-ready CI/CD pipeline configurations for GitHub Actions, Jenkins, and AWS CodePipeline.</p>
              <div className="resource-tags">
                <span>GitHub Actions</span>
                <span>Jenkins</span>
                <span>AWS CodePipeline</span>
              </div>
              <div className="resource-cta">
                <a href="https://github.com/Nabeel-KM/cicd-templates" target="_blank" rel="noreferrer" className="upwork-btn upwork-btn-outline">
                  <FaGithub className="upwork-btn-icon" /> View on GitHub
                </a>
              </div>
            </div>
            
            <div className="resource-card">
              <div className="resource-icon">
                <FaCloud />
              </div>
              <h3>AWS Architecture Diagrams</h3>
              <p>Reference architectures for scalable, secure, and cost-optimized AWS deployments.</p>
              <div className="resource-tags">
                <span>Serverless</span>
                <span>Microservices</span>
                <span>High Availability</span>
              </div>
              <div className="resource-cta">
                <a href="https://github.com/Nabeel-KM/aws-architecture-templates" target="_blank" rel="noreferrer" className="upwork-btn upwork-btn-outline">
                  <FaGithub className="upwork-btn-icon" /> View Diagrams
                </a>
              </div>
            </div>
            
            <div className="resource-card">
              <div className="resource-icon">
                <FaCubes />
              </div>
              <h3>Docker & Kubernetes Configs</h3>
              <p>Optimized Dockerfiles and Kubernetes manifests for various application stacks.</p>
              <div className="resource-tags">
                <span>Docker</span>
                <span>Kubernetes</span>
                <span>Helm Charts</span>
              </div>
              <div className="resource-cta">
                <a href="https://github.com/Nabeel-KM/container-templates" target="_blank" rel="noreferrer" className="upwork-btn upwork-btn-outline">
                  <FaGithub className="upwork-btn-icon" /> View Configs
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="upwork-contact" className="upwork-section">
        <div className="upwork-container">
          <div className="upwork-section-header">
            <h2>Let's Work Together</h2>
            <p>Ready to optimize your infrastructure and deployment process?</p>
          </div>
          <div className="contact-grid">
            <div className="contact-info">
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
