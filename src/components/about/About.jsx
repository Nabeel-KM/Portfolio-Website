import React, { useEffect, useRef, useState } from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward, FaCloudUploadAlt, FaTools, FaShieldAlt, FaSearchDollar, FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt, FaChevronDown } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { BiCodeAlt } from "react-icons/bi";
import { MdMonitor } from "react-icons/md";

const About = () => {
  const skillsRef = useRef(null);
  const [showAllSkills, setShowAllSkills] = useState(false);
  
  useEffect(() => {
    // Set up skill bars animation
    if (skillsRef.current) {
      const skillBars = skillsRef.current.querySelectorAll('.skill-bar');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const progressBar = entry.target.querySelector('.skill-progress');
            const percentage = progressBar.getAttribute('data-percentage');
            progressBar.style.width = percentage + '%';
          }
        });
      }, { threshold: 0.5 });
      
      skillBars.forEach(bar => observer.observe(bar));
    }
  }, []);

  // Core skills to always show
  const coreSkills = [
    { name: "Cloud Platforms", items: ["AWS (EC2, ECS, S3, Lambda, VPC, IAM, Route 53, CloudFront)", "DigitalOcean"] },
    { name: "Infrastructure as Code", items: ["Terraform (modules, workspaces, remote state)", "AWS CloudFormation"] },
    { name: "CI/CD & DevOps Tools", items: ["GitHub Actions", "Jenkins", "Docker, Docker Compose"] }
  ];

  // Additional skills to show when expanded
  const additionalSkills = [
    { name: "Configuration Management", items: ["Ansible (playbooks, roles, collections)", "Bash scripting"] },
    { name: "Containerization & Orchestration", items: ["Docker, Docker Compose", "AWS ECS", "Container security, multi-stage builds"] },
    { name: "Monitoring & Logging", items: ["ELK Stack (Elasticsearch, Logstash, Kibana)", "AWS CloudWatch (Logs, Metrics, Alarms)", "Grafana"] },
    // New skills
    { name: "Database Administration", items: ["Microsoft SQL Server", "MySQL", "PostgreSQL", "MongoDB"] },
    { name: "Version Control", items: ["GIT", "Github"] },
    { name: "Development Tools", items: ["Visual Studio 2022", "Visual Studio Code", "Dev C++", "SQL Server Management Studio", "Balsamiq", "Microsoft Office"] },
  ];

  return (
    <section id="about" className="animate-on-scroll">
      <h5 className="section-subtitle">Get To Know</h5>
      <h2 className="section-title">About Me</h2>
      
      <div className="about__profile-header animate-on-scroll">
        <h3>Nabeel Sarfraz</h3>
        <h4>DevOps Engineer & Cloud Architect</h4>
        
        <div className="about__contact-info">
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <span>Lahore, Pakistan</span>
          </div>
          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <a href="tel:+923444527024">+92-344-4527024</a>
          </div>
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <a href="mailto:nabntan@gmail.com">nabntan@gmail.com</a>
          </div>
          <div className="contact-item">
            <FaLinkedin className="contact-icon" />
            <a href="https://linkedin.com/in/nabeel-sarfraz" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/nabeel-sarfraz
            </a>
          </div>
          <div className="contact-item">
            <FaGithub className="contact-icon" />
            <a href="https://github.com/Nabeel-KM" target="_blank" rel="noopener noreferrer">
              github.com/Nabeel-KM
            </a>
          </div>
        </div>
      </div>

      <div className="container about__container">
        <div className="about__me animate-on-scroll">
          <div className="about__me-image">
            <img src={ME} alt="Nabeel Sarfraz" />
            <div className="image-backdrop"></div>
          </div>
        </div>

        <div className="about__content animate-on-scroll">
          <div className="about__cards">
            <article className="about__card card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1.5+ Years Working</small>
            </article>

            <article className="about__card card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>10+ Enterprise Projects</small>
            </article>

            <article className="about__card card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>15+ Deployments</small>
            </article>
          </div>

          <div className="about__summary">
            <p>
              Results-driven DevOps Engineer with 1.5+ years of specialized experience in AWS cloud infrastructure, CI/CD automation, and containerization technologies. 
              <strong> Exceptional troubleshooting skills</strong> with proven ability to diagnose and resolve complex system issues, reducing mean time to recovery by 65%.
            </p>
            <p>
              Demonstrated expertise in designing and implementing scalable, secure, and cost-efficient cloud solutions for high-traffic applications. 
              Proven track record of reducing deployment times by 70% and infrastructure costs by 35% through automation and optimization.
            </p>
          </div>

          <a href="#contact" className="btn btn-primary btn-with-icon">
            <FaEnvelope className="btn-icon" />
            <span>Let's Talk</span>
          </a>
        </div>
      </div>

      {/* Career Objective */}
      <div className="about__career-objective animate-on-scroll">
        <div className="section-header">
          <h3>Career Objective</h3>
          <div className="section-header-line"></div>
        </div>
        <p>
          To leverage my DevOps expertise in building resilient, scalable cloud infrastructure while continuously expanding my knowledge in emerging technologies like Kubernetes, serverless architectures, and infrastructure automation.
        </p>
      </div>

      {/* Core Competencies Section */}
      <div className="about__competencies-section animate-on-scroll">
        <div className="section-header">
          <h3>Core Competencies</h3>
          <div className="section-header-line"></div>
        </div>
        
        <div className="about__competencies-grid">
          <div className="about__competency-card card">
            <FaCloudUploadAlt className="about__competency-icon" />
            <h4>Cloud Architecture</h4>
            <p>AWS infrastructure design, multi-environment deployments, high availability systems, disaster recovery</p>
          </div>
          
          <div className="about__competency-card card">
            <BiCodeAlt className="about__competency-icon" />
            <h4>Infrastructure as Code</h4>
            <p>Terraform modules, CloudFormation, reusable infrastructure patterns, version-controlled infrastructure</p>
          </div>
          
          <div className="about__competency-card card">
            <FaTools className="about__competency-icon" />
            <h4>CI/CD Pipelines</h4>
            <p>GitHub Actions, Jenkins, zero-downtime deployments, automated testing</p>
          </div>
          
          <div className="about__competency-card card">
            <MdMonitor className="about__competency-icon" />
            <h4>Monitoring & Observability</h4>
            <p>ELK Stack, CloudWatch, centralized logging, alerting, performance optimization</p>
          </div>
          
          <div className="about__competency-card card">
            <FaShieldAlt className="about__competency-icon" />
            <h4>Security & Compliance</h4>
            <p>IAM, secrets management, vulnerability scanning, SSL/TLS, security best practices</p>
          </div>
          
          <div className="about__competency-card card">
            <FaSearchDollar className="about__competency-icon" />
            <h4>Advanced Troubleshooting</h4>
            <p>Root cause analysis, system diagnostics, performance optimization, incident response</p>
          </div>
        </div>
      </div>

      {/* Technical Skills Section */}
      <div className="about__skills-section animate-on-scroll" ref={skillsRef}>
        <div className="section-header">
          <h3>Technical Skills</h3>
          <div className="section-header-line"></div>
        </div>
        
        <div className="skills-container">
          <div className="skill-group">
            <h4>AWS Cloud</h4>
            <div className="skill-bar">
              <div className="skill-progress" data-percentage="95"></div>
              <span className="skill-percentage">95%</span>
            </div>
          </div>
          
          <div className="skill-group">
            <h4>Terraform</h4>
            <div className="skill-bar">
              <div className="skill-progress" data-percentage="85"></div>
              <span className="skill-percentage">85%</span>
            </div>
          </div>
          
          <div className="skill-group">
            <h4>Docker</h4>
            <div className="skill-bar">
              <div className="skill-progress" data-percentage="95"></div>
              <span className="skill-percentage">95%</span>
            </div>
          </div>
          
          <div className="skill-group">
            <h4>CI/CD Pipelines</h4>
            <div className="skill-bar">
              <div className="skill-progress" data-percentage="88"></div>
              <span className="skill-percentage">88%</span>
            </div>
          </div>
        </div>
        
        <div className="about__skills-grid">
          {/* Always show core skills */}
          {coreSkills.map((skill, index) => (
            <div key={`core-${index}`} className="about__skill-category">
              <h4>{skill.name}</h4>
              <ul>
                {skill.items.map((item, i) => (
                  <li key={`core-item-${i}`}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
          
          {/* Show additional skills when expanded */}
          {showAllSkills && additionalSkills.map((skill, index) => (
            <div key={`additional-${index}`} className="about__skill-category animate-fade-in visible">
              <h4>{skill.name}</h4>
              <ul>
                {skill.items.map((item, i) => (
                  <li key={`additional-item-${i}`}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="skills-toggle">
          <button 
            className="skills-toggle-btn"
            onClick={() => setShowAllSkills(!showAllSkills)}
          >
            {showAllSkills ? 'Show Less' : 'Show More Skills'} 
            <FaChevronDown className={showAllSkills ? 'rotate-icon' : ''} />
          </button>
        </div>
      </div>

      {/* Education Section */}
      <div className="about__education-section animate-on-scroll">
        <div className="section-header">
          <h3>Education & Certifications</h3>
          <div className="section-header-line"></div>
        </div>
        
        <div className="about__education-grid">
          <div className="about__education-item card">
            <div className="education-content">
              <h4>Diploma in Computer Science – DevOps & Serverless</h4>
              <p className="education-institution">Systems Limited</p>
              <p className="education-year">2023 – 2024</p>
            </div>
          </div>
          
          <div className="about__education-item card">
            <div className="education-content">
              <h4>BSc Mechanical Engineering</h4>
              <p className="education-institution">UET Lahore</p>
              <p className="education-year">2013 – 2017</p>
            </div>
          </div>
          
          <div className="about__education-item card">
            <div className="education-content">
              <h4>AWS Technical Essentials</h4>
              <p className="education-institution">AWS Training and Certification</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
