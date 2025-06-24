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
            <h3>Cloud Infrastructure</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>AWS (EC2, ECS, ECR, S3, Lambda, VPC, IAM, Route 53, Amplify), DigitalOcean</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Infrastructure as Code: Terraform (modular), AWS CloudFormation (basic)</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Resource provisioning, scaling, and cost optimization</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>CI/CD Automation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>GitHub Actions, Jenkins, AWS CodePipeline</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Automated build, test, and deployment workflows</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Blue/green and zero-downtime deployments</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Containerization & Orchestration</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Docker, ECS, Docker Compose</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Microservices deployment and scaling</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Secure networking and service discovery</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Configuration & Automation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Ansible (playbooks, roles), Bash scripting</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Server provisioning, scheduled tasks, cron jobs</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>End-to-end deployment automation</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Monitoring & Observability</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Uptime Kuma, AWS CloudWatch, ELK stack, custom dashboards</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Centralized logging, alerting, incident response</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Performance and cost monitoring</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Security & Compliance</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>IAM policies, secrets management, vulnerability scanning</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>SSL/TLS, backup automation, disaster recovery</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Database security and compliance best practices</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
