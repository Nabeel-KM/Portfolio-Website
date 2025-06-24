import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>DevOps & Cloud Engineering</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Cloud platforms: AWS (EC2, ECS, ECR, S3, Lambda, VPC, IAM, Route 53, Amplify), DigitalOcean</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Infrastructure as Code: Terraform (modular), AWS CloudFormation (basic)</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Configuration Management: Ansible (playbooks, roles), Bash scripting</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>CI/CD & DevOps Tools: GitHub Actions, Jenkins, AWS CodePipeline</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Containerization & Orchestration: Docker, ECS, Docker Compose</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Monitoring & Logging: Uptime Kuma, AWS CloudWatch, Bash log automation, ELK stack, custom dashboards</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Programming & Scripting: Python (Flask, scripts, automation), Bash, Linux CLI</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Version Control: Git, GitHub, GitLab</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Databases: MySQL, PostgreSQL, MongoDB, Microsoft SQL Server</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Other Tools: VMware ESXi, VS Code, SQL Server Management Studio, Balsamiq</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Security & Compliance: IAM policies, secrets management, vulnerability scanning, SSL/TLS, backup automation</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Cost Optimization: Resource rightsizing, auto-scaling, spot instances, S3 lifecycle policies</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Observability: Centralized logging, alerting, dashboarding, incident response</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Automation: End-to-end deployment, scheduled tasks, cron jobs, server provisioning</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
