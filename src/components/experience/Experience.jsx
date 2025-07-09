import React, { useState, useEffect } from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import { FaAws, FaDocker, FaGithub, FaJenkins } from "react-icons/fa";
import { SiTerraform, SiAnsible, SiElasticsearch } from "react-icons/si";
import { MdSecurity, MdMonitor } from "react-icons/md";
import { BiCodeAlt } from "react-icons/bi";
import { AiOutlineBug } from "react-icons/ai";

const Experience = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [animateItems, setAnimateItems] = useState(false);

  // Trigger animation when category changes
  useEffect(() => {
    setAnimateItems(false);
    setTimeout(() => {
      setAnimateItems(true);
    }, 50);
  }, [activeCategory]);

  const categories = {
    all: "All Responsibilities",
    infrastructure: "Cloud Infrastructure",
    cicd: "CI/CD & Automation",
    containerization: "Containerization",
    monitoring: "Monitoring & Logging",
    security: "Security & Compliance",
    troubleshooting: "Troubleshooting"
  };

  const responsibilities = {
    infrastructure: [
      "Designed, provisioned, and managed full-scale AWS production infrastructure using modular, reusable Terraform modules for multi-project environments, ensuring scalability, security, and cost-efficiency.",
      "Orchestrated AWS ECS clusters for microservices, leveraged Amplify for frontend hosting, and implemented secure routing, custom domains, and DNS management via Route 53 for seamless deployments.",
      "Deployed and managed Dockerized backend microservices, configured IAM roles, ECR image lifecycle, ALBs, autoscaling groups, and VPC security for high availability and compliance.",
      "Managed VMware ESXi for provisioning isolated dev/test environments, enabling parallel development, rapid prototyping, and seamless CI/CD integration.",
      "Championed Infrastructure as Code (IaC) best practices, implementing version-controlled, peer-reviewed Terraform and Ansible codebases for consistent, auditable, and scalable deployments across multiple environments.",
      "Led cost optimization initiatives by implementing resource rightsizing, auto-scaling, spot instances, and S3 lifecycle policies, resulting in significant cloud spend reduction (35%)."
    ],
    cicd: [
      "Engineered 10+ advanced CI/CD pipelines (GitHub Actions, Jenkins) for React, Flask, and Laravel applications, automating build, test, deployment, and blue/green ECS/EC2 service refreshes for zero-downtime releases.",
      "Developed and maintained robust Ansible playbooks for automated server provisioning, Docker/LAMP/WordPress stack setup, and scheduled task management, reducing manual intervention and errors.",
      "Built AWS Lambda functions for dynamic S3 image resizing, and integrated Lambda with CloudWatch and SNS for real-time RDP session monitoring and automated team notifications.",
      "Automated secrets management and environment variable injection using AWS Secrets Manager and SSM Parameter Store, enhancing security, compliance, and deployment flexibility.",
      "Delivered end-to-end automation for server provisioning, application deployment, scheduled tasks, and backup management using Ansible, Bash, and CI/CD pipelines.",
      "Reduced deployment time by 70% through pipeline optimization and parallel execution strategies."
    ],
    containerization: [
      "Containerized microservices using Docker with optimized multi-stage builds, reducing image sizes by 60%.",
      "Orchestrated container deployments on AWS ECS with task definitions, service discovery, and auto-scaling.",
      "Implemented ECR lifecycle policies and automated container vulnerability scanning in CI/CD pipelines.",
      "Designed Docker Compose configurations for local development environments matching production.",
      "Architected and managed container orchestration with Docker, ECS, and Docker Compose, including advanced ECS task definitions, service discovery, and automated scaling for high-traffic applications.",
      "Reduced vulnerabilities by 85% through automated security testing in container pipelines."
    ],
    monitoring: [
      "Established centralized logging and monitoring using ELK stack (Elasticsearch, Logstash, Kibana), Filebeat, Metricbeat, and AWS CloudWatch for real-time observability, security auditability, and rapid incident response across 20+ VMs and containers.",
      "Created custom Kibana dashboards for application errors, security events, and performance metrics.",
      "Implemented log correlation across services to trace request flows through distributed systems.",
      "Developed automated log analysis for common error patterns with proactive alerting.",
      "Automated secure, versioned backups of MySQL, MongoDB, and PostgreSQL databases from EC2/RDS to S3, implementing retention policies and lifecycle rules for data durability and compliance.",
      "Reduced incident response time by 65% through proactive monitoring and alerting."
    ],
    security: [
      "Integrated vulnerability scanning, security checks, and compliance automation into CI/CD pipelines, proactively identifying and remediating risks before production deployment.",
      "Enhanced security and compliance by integrating IAM policy management, secrets management, and SSL/TLS automation into infrastructure and deployment workflows.",
      "Implemented secure infrastructure with encryption at rest and in transit for all sensitive data.",
      "Deployed containerized microservices with service mesh for enhanced security and traffic management.",
      "Created IAM users with limited access policies restricted to S3 bucket operations only.",
      "Implemented automated security testing that identified and resolved critical vulnerabilities before production deployment."
    ],
    troubleshooting: [
      "Led critical incident response for production outages, reducing mean time to recovery (MTTR) from hours to under 30 minutes through systematic root cause analysis and resolution protocols.",
      "Diagnosed and resolved complex networking issues in AWS VPC configurations, including routing problems, security group misconfigurations, and connectivity failures.",
      "Implemented comprehensive error detection and automated recovery for ECS services, reducing service disruptions by 75%.",
      "Created detailed runbooks and troubleshooting guides for common failure scenarios, enabling faster team-wide incident response.",
      "Diagnosed and resolved critical deployment failures, service outages, and SSL misconfigurations, ensuring high system reliability and minimal downtime.",
      "Performed in-depth log analysis using ELK stack to identify patterns in application errors and infrastructure issues."
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
      return Object.values(responsibilities).flat();
    }
    return responsibilities[activeCategory];
  };

  // Split responsibilities into two columns
  const splitResponsibilities = (items) => {
    const midpoint = Math.ceil(items.length / 2);
    return [
      items.slice(0, midpoint),
      items.slice(midpoint)
    ];
  };

  const [leftColumn, rightColumn] = splitResponsibilities(getResponsibilities());

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
