import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { FaCloudUploadAlt, FaTools, FaShieldAlt, FaSearchDollar } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";
import { MdMonitor } from "react-icons/md";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      
      <div className="about__profile-header">
        <h3>Nabeel Sarfraz</h3>
        <h4>Senior DevOps Engineer</h4>
        
        <div className="about__contact-info">
          <span role="img" aria-label="location">📍</span>{" "}
          Lahore, Pakistan &nbsp;|&nbsp;
          <span role="img" aria-label="phone">📞</span>{" "}
          <a href="tel:+923444527024">+92-344-4527024</a>{" "}
          &nbsp;|&nbsp;
          <span role="img" aria-label="email">📧</span>{" "}
          <a href="mailto:nabntan@gmail.com">nabntan@gmail.com</a>{" "}
          &nbsp;|&nbsp;
          <span role="img" aria-label="linkedin">🔗</span>{" "}
          <a href="https://linkedin.com/in/nabeel-sarfraz" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/nabeel-sarfraz
          </a>
          &nbsp;|&nbsp;
          <span role="img" aria-label="github">💻</span>{" "}
          <a href="https://github.com/Nabeel-KM" target="_blank" rel="noopener noreferrer">
            github.com/Nabeel-KM
          </a>
        </div>
      </div>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Nabeel Sarfraz" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1.5+ Years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>10+ Enterprise Projects</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>15+ Deployments</small>
            </article>
          </div>

          <div className="about__summary">
            <p>
              Results-driven DevOps Engineer with 1.5+ years of specialized experience in AWS cloud infrastructure, CI/CD automation, and containerization. 
              <strong> Exceptional troubleshooting skills</strong> with proven ability to diagnose and resolve complex system issues, reducing mean time to recovery by 65%.
            </p>
            <p>
              Demonstrated expertise in designing and implementing scalable, secure, and cost-efficient cloud solutions for high-traffic applications. 
              Proven track record of reducing deployment times by 70% and infrastructure costs by 35% through automation and optimization.
            </p>
            <p>
              Passionate about cloud-native architectures, Infrastructure as Code, and enabling cross-team collaboration to drive business outcomes.
            </p>
          </div>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>

      {/* Core Competencies Section */}
      <div className="about__competencies-section">
        <h3>Core Competencies</h3>
        
        <div className="about__competencies-grid">
          <div className="about__competency-card">
            <FaCloudUploadAlt className="about__competency-icon" />
            <h4>Cloud Architecture</h4>
            <p>AWS infrastructure design, multi-environment deployments, high availability systems, disaster recovery</p>
          </div>
          
          <div className="about__competency-card">
            <BiCodeAlt className="about__competency-icon" />
            <h4>Infrastructure as Code</h4>
            <p>Terraform modules, CloudFormation, reusable infrastructure patterns, version-controlled infrastructure</p>
          </div>
          
          <div className="about__competency-card">
            <FaTools className="about__competency-icon" />
            <h4>CI/CD Pipelines</h4>
            <p>GitHub Actions, Jenkins, AWS CodePipeline, zero-downtime deployments, automated testing</p>
          </div>
          
          <div className="about__competency-card">
            <MdMonitor className="about__competency-icon" />
            <h4>Monitoring & Observability</h4>
            <p>ELK Stack, CloudWatch, centralized logging, alerting, performance optimization</p>
          </div>
          
          <div className="about__competency-card">
            <FaShieldAlt className="about__competency-icon" />
            <h4>Security & Compliance</h4>
            <p>IAM, secrets management, vulnerability scanning, SSL/TLS, security best practices</p>
          </div>
          
          <div className="about__competency-card">
            <FaSearchDollar className="about__competency-icon" />
            <h4>Advanced Troubleshooting</h4>
            <p>Root cause analysis, system diagnostics, performance optimization, incident response</p>
          </div>
        </div>
      </div>

      {/* Technical Skills Section */}
      <div className="about__skills-section">
        <h3>Technical Skills</h3>
        
        <div className="about__skills-grid">
          <div className="about__skill-category">
            <h4>Cloud Platforms</h4>
            <ul>
              <li>AWS (EC2, ECS, ECR, S3, Lambda, VPC, IAM, Route 53, Amplify, CloudFront)</li>
              <li>DigitalOcean</li>
            </ul>
          </div>
          
          <div className="about__skill-category">
            <h4>Infrastructure as Code</h4>
            <ul>
              <li>Terraform (modules, workspaces, remote state)</li>
              <li>AWS CloudFormation</li>
            </ul>
          </div>
          
          <div className="about__skill-category">
            <h4>Configuration Management</h4>
            <ul>
              <li>Ansible (playbooks, roles, collections)</li>
              <li>Bash scripting</li>
            </ul>
          </div>
          
          <div className="about__skill-category">
            <h4>CI/CD & DevOps Tools</h4>
            <ul>
              <li>GitHub Actions</li>
              <li>Jenkins</li>
              <li>AWS CodePipeline, CodeBuild, CodeDeploy</li>
            </ul>
          </div>
          
          <div className="about__skill-category">
            <h4>Containerization & Orchestration</h4>
            <ul>
              <li>Docker, Docker Compose</li>
              <li>AWS ECS</li>
              <li>Container security, multi-stage builds</li>
            </ul>
          </div>
          
          <div className="about__skill-category">
            <h4>Monitoring & Logging</h4>
            <ul>
              <li>ELK Stack (Elasticsearch, Logstash, Kibana)</li>
              <li>Filebeat, Metricbeat</li>
              <li>AWS CloudWatch</li>
              <li>Uptime Kuma, Grafana</li>
            </ul>
          </div>
          
          <div className="about__skill-category">
            <h4>Programming & Scripting</h4>
            <ul>
              <li>Python (Flask, automation scripts)</li>
              <li>Bash</li>
              <li>YAML, JSON, HCL (Terraform)</li>
            </ul>
          </div>
          
          <div className="about__skill-category">
            <h4>Databases</h4>
            <ul>
              <li>MySQL, PostgreSQL</li>
              <li>MongoDB</li>
              <li>Microsoft SQL Server</li>
              <li>AWS RDS</li>
            </ul>
          </div>
          
          <div className="about__skill-category">
            <h4>Security & Compliance</h4>
            <ul>
              <li>IAM policies, least privilege principles</li>
              <li>Secrets management (AWS Secrets Manager, Parameter Store)</li>
              <li>Vulnerability scanning</li>
              <li>SSL/TLS, backup automation</li>
            </ul>
          </div>
          
          <div className="about__skill-category">
            <h4>Diagnostic Tools</h4>
            <ul>
              <li>tcpdump, netstat, nmap</li>
              <li>strace, htop, iotop</li>
              <li>curl, wget, dig, traceroute</li>
            </ul>
          </div>
          
          <div className="about__skill-category">
            <h4>Cost Optimization</h4>
            <ul>
              <li>Resource rightsizing</li>
              <li>Auto-scaling strategies</li>
              <li>Spot instances</li>
              <li>S3 lifecycle policies</li>
            </ul>
          </div>
          
          <div className="about__skill-category">
            <h4>Version Control</h4>
            <ul>
              <li>Git</li>
              <li>GitHub, GitLab</li>
              <li>Branching strategies, code reviews</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="about__education-section">
        <h3>Education & Certifications</h3>
        
        <div className="about__education-grid">
          <div className="about__education-item">
            <h4>Diploma in Computer Science – DevOps & Serverless</h4>
            <p>Systems Limited | 2023 – 2024</p>
          </div>
          
          <div className="about__education-item">
            <h4>BSc Mechanical Engineering</h4>
            <p>UET Lahore | 2013 – 2017</p>
          </div>
          
          <div className="about__education-item">
            <h4>AWS Certified Solutions Architect Associate</h4>
            <p>In Progress - Expected July 2025</p>
          </div>
          
          <div className="about__education-item">
            <h4>HashiCorp Certified: Terraform Associate</h4>
            <p>HashiCorp</p>
          </div>
          
          <div className="about__education-item">
            <h4>Docker Certified Associate</h4>
            <p>Docker, Inc.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
