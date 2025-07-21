import React, { useState, useEffect } from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import { FaAws, FaDocker, FaGithub, FaJenkins, FaChevronDown } from "react-icons/fa";
import { SiTerraform, SiAnsible, SiElasticsearch } from "react-icons/si";
import { MdSecurity, MdMonitor } from "react-icons/md";
import { BiCodeAlt } from "react-icons/bi";
import { AiOutlineBug } from "react-icons/ai";

const Experience = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [animateItems, setAnimateItems] = useState(false);
  const [expandedItems, setExpandedItems] = useState({});

  // Trigger animation when category changes
  useEffect(() => {
    setAnimateItems(false);
    setTimeout(() => {
      setAnimateItems(true);
    }, 50);
    // Reset expanded state when changing categories
    setExpandedItems({});
  }, [activeCategory]);

  const categories = {
    all: "All Highlights",
    infrastructure: "Cloud Infrastructure",
    cicd: "CI/CD & Automation",
    containerization: "Containerization",
    monitoring: "Monitoring & Logging",
    security: "Security & Compliance",
    troubleshooting: "Troubleshooting"
  };

  // Condensed responsibilities - focusing on key achievements
  const responsibilities = {
    infrastructure: [
      "Designed and managed AWS production infrastructure using modular Terraform modules, ensuring scalability, security, and cost-efficiency.",
      "Orchestrated AWS ECS clusters for microservices with secure routing, custom domains, and DNS management via Route 53.",
      "Led cost optimization initiatives resulting in 35% cloud spend reduction through resource rightsizing, auto-scaling, and lifecycle policies.",
      "Hands-on database administration: setup and maintenance for SQL and NoSQL databases (Microsoft SQL Server, MySQL, PostgreSQL, MongoDB)",
    ],
    cicd: [
      "Engineered 10+ CI/CD pipelines (GitHub Actions, Jenkins) for zero-downtime deployments, reducing deployment time by 70%.",
      "Developed Ansible playbooks for automated server provisioning and application deployment, reducing manual intervention.",
      "Automated secrets management using AWS Secrets Manager and SSM Parameter Store, enhancing security and deployment flexibility.",
      "Implemented Slack and Discord notifications for deployment status and incident alerts.",
    ],
    containerization: [
      "Containerized microservices using Docker with optimized multi-stage builds, reducing image sizes by 60%.",
      "Orchestrated container deployments on AWS ECS with task definitions, service discovery, and auto-scaling.",
      "Reduced vulnerabilities by 85% through automated security testing in container pipelines."
    ],
    monitoring: [
      "Established centralized logging using ELK stack and CloudWatch for real-time observability across 20+ VMs and containers.",
      "Created custom Kibana dashboards for application errors, security events, and performance metrics.",
      "Reduced incident response time by 65% through proactive monitoring and alerting."
    ],
    security: [
      "Integrated vulnerability scanning and compliance automation into CI/CD pipelines, proactively identifying risks.",
      "Implemented secure infrastructure with encryption at rest and in transit for all sensitive data.",
      "Automated security testing that identified and resolved critical vulnerabilities before production deployment."
    ],
    troubleshooting: [
      "Led critical incident response, reducing mean time to recovery from hours to under 30 minutes.",
      "Diagnosed and resolved complex networking issues in AWS VPC configurations and connectivity failures.",
      "Created detailed runbooks and troubleshooting guides, enabling faster team-wide incident response."
    ]
  };

  // Additional details that will be shown when expanded
  const additionalDetails = {
    infrastructure: [
      "Deployed and managed Dockerized backend microservices with IAM roles, ECR image lifecycle, and VPC security.",
      "Managed VMware ESXi for isolated dev/test environments, enabling parallel development and rapid prototyping.",
      "Championed Infrastructure as Code best practices with version-controlled, peer-reviewed Terraform and Ansible codebases."
    ],
    cicd: [
      "Built AWS Lambda functions for dynamic S3 image resizing and integrated with CloudWatch for monitoring.",
      "Delivered end-to-end automation for server provisioning, application deployment, and backup management.",
      "Implemented blue/green deployment strategies for ECS/EC2 services to ensure zero-downtime releases."
    ],
    containerization: [
      "Implemented ECR lifecycle policies and automated container vulnerability scanning.",
      "Designed Docker Compose configurations for local development environments matching production.",
      "Architected container orchestration with advanced ECS task definitions and service discovery."
    ],
    monitoring: [
      "Implemented log correlation across services to trace request flows through distributed systems.",
      "Developed automated log analysis for common error patterns with proactive alerting.",
      "Automated secure, versioned backups of databases from EC2/RDS to S3 with retention policies."
    ],
    security: [
      "Enhanced security and compliance by integrating IAM policy management into infrastructure workflows.",
      "Deployed containerized microservices with service mesh for enhanced security and traffic management.",
      "Created IAM users with limited access policies restricted to specific operations only."
    ],
    troubleshooting: [
      "Implemented comprehensive error detection and automated recovery for ECS services, reducing disruptions by 75%.",
      "Performed in-depth log analysis using ELK stack to identify patterns in application errors.",
      "Diagnosed and resolved critical deployment failures, service outages, and SSL misconfigurations."
    ]
  };

  const categoryIcons = {
    all: <BiCodeAlt />,
    infrastructure: <FaAws />,
    cicd: <FaGithub />,
    containerization: <FaDocker />,
    monitoring: <MdMonitor />,
    security: <MdSecurity />,
    troubleshooting: <AiOutlineBug />
  };

  const getResponsibilities = () => {
    if (activeCategory === "all") {
      // For "All" category, take top 2 from each category
      const allHighlights = Object.keys(responsibilities).reduce((acc, category) => {
        return [...acc, ...responsibilities[category].slice(0, 2)];
      }, []);
      return allHighlights;
    }
    return responsibilities[activeCategory];
  };

  const getAdditionalDetails = () => {
    if (activeCategory === "all") {
      return [];
    }
    return additionalDetails[activeCategory];
  };

  const toggleExpand = (category) => {
    setExpandedItems(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  // Split responsibilities into two columns
  const splitItems = (items) => {
    const midpoint = Math.ceil(items.length / 2);
    return [
      items.slice(0, midpoint),
      items.slice(midpoint)
    ];
  };

  const [leftColumn, rightColumn] = splitItems(getResponsibilities());
  const hasAdditionalDetails = activeCategory !== "all" && additionalDetails[activeCategory].length > 0;

  return (
    <section id="experience" className="animate-on-scroll">
      <h5 className="section-subtitle">What I've Been Doing</h5>
      <h2 className="section-title">My Experience</h2>
      
      <div className="experience__header animate-on-scroll">
        <h3>DevOps Engineer | Kryptomind LLC</h3>
        <p className="experience__period">May 2023 – Present (1.5+ years)</p>
        
        <div className="experience__summary">
          <p>
            Lead DevOps engineer responsible for designing, implementing, and managing cloud infrastructure and CI/CD pipelines for multiple high-profile blockchain and cryptocurrency projects. Specialized in AWS cloud services, Infrastructure as Code, containerization, and advanced troubleshooting.
          </p>
        </div>
        
        <div className="experience__achievements">
          <h4>Key Achievements</h4>
          <div className="experience__achievements-grid">
            <div className="experience__achievement-card card">
              <h5>70%</h5>
              <p>Reduction in deployment time through CI/CD automation</p>
            </div>
            <div className="experience__achievement-card card">
              <h5>35%</h5>
              <p>Decrease in cloud infrastructure costs through optimization</p>
            </div>
            <div className="experience__achievement-card card">
              <h5>99.95%</h5>
              <p>System uptime achieved through robust monitoring and automation</p>
            </div>
            <div className="experience__achievement-card card">
              <h5>65%</h5>
              <p>Reduction in incident response time through systematic troubleshooting</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="experience__categories animate-on-scroll">
        {Object.entries(categories).map(([key, value]) => (
          <button
            key={key}
            className={activeCategory === key ? "experience__category-btn active" : "experience__category-btn"}
            onClick={() => setActiveCategory(key)}
          >
            <span className="experience__category-icon">{categoryIcons[key]}</span>
            {value}
          </button>
        ))}
      </div>
      
      <div className="experience__container">
        <div className={`experience__content ${animateItems ? 'animate-items' : ''}`}>
          <div className="experience__column">
            <ul>
              {leftColumn.map((responsibility, index) => (
                <li key={`left-${index}`} className="experience__item">
                  <BsPatchCheckFill className="experience__details-icon" />
                  <p>{responsibility}</p>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="experience__column">
            <ul>
              {rightColumn.map((responsibility, index) => (
                <li key={`right-${index}`} className="experience__item">
                  <BsPatchCheckFill className="experience__details-icon" />
                  <p>{responsibility}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {hasAdditionalDetails && (
          <div className="experience__additional">
            <button 
              className="experience__expand-btn"
              onClick={() => toggleExpand(activeCategory)}
            >
              {expandedItems[activeCategory] ? 'Show Less' : 'Show More'} 
              <FaChevronDown className={expandedItems[activeCategory] ? 'rotate-icon' : ''} />
            </button>
            
            {expandedItems[activeCategory] && (
              <div className={`experience__additional-content ${animateItems ? 'animate-items' : ''}`}>
                <div className="experience__column">
                  <ul>
                    {getAdditionalDetails().map((detail, index) => (
                      <li key={`detail-${index}`} className="experience__item">
                        <BsPatchCheckFill className="experience__details-icon" />
                        <p>{detail}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      
      <div className="experience__technologies animate-on-scroll">
        <h4>Technologies Used</h4>
        <div className="experience__tech-grid">
          <div className="experience__tech-item">
            <FaAws className="experience__tech-icon" />
            <span>AWS</span>
          </div>
          <div className="experience__tech-item">
            <SiTerraform className="experience__tech-icon" />
            <span>Terraform</span>
          </div>
          <div className="experience__tech-item">
            <FaDocker className="experience__tech-icon" />
            <span>Docker</span>
          </div>
          <div className="experience__tech-item">
            <FaGithub className="experience__tech-icon" />
            <span>GitHub Actions</span>
          </div>
          <div className="experience__tech-item">
            <FaJenkins className="experience__tech-icon" />
            <span>Jenkins</span>
          </div>
          <div className="experience__tech-item">
            <SiAnsible className="experience__tech-icon" />
            <span>Ansible</span>
          </div>
          <div className="experience__tech-item">
            <SiElasticsearch className="experience__tech-icon" />
            <span>ELK Stack</span>
          </div>
          <div className="experience__tech-item">
            <MdSecurity className="experience__tech-icon" />
            <span>Security</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
