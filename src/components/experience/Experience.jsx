import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>
      <div className="experience__container" style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="experience__devops" style={{ maxWidth: 800, width: '100%' }}>
          <h3>DevOps Engineer | Kryptomind LLC <span style={{fontWeight:400, fontSize:'0.9em'}}>(May 2024 – Present)</span></h3>
          <div className="experience__content">
            <ul style={{paddingLeft: '1.2em'}}>
              <li><BsPatchCheckFill className="experience__details-icon" /> Designed, provisioned, and managed full-scale AWS production infrastructure using modular, reusable Terraform modules for multi-project environments, ensuring scalability, security, and cost-efficiency.</li>
              <li><BsPatchCheckFill className="experience__details-icon" /> Engineered 10+ advanced GitHub Actions CI/CD pipelines for React, Flask, and Laravel applications, automating build, test, deployment, and blue/green ECS/EC2 service refreshes for zero-downtime releases.</li>
              <li><BsPatchCheckFill className="experience__details-icon" /> Orchestrated AWS ECS clusters for microservices, leveraged Amplify for frontend hosting, and implemented secure routing, custom domains, and DNS management via Route 53.</li>
              <li><BsPatchCheckFill className="experience__details-icon" /> Deployed and managed Dockerized backend microservices, configured IAM roles, ECR image lifecycle, ALBs, autoscaling groups, and VPC security for high availability and compliance.</li>
              <li><BsPatchCheckFill className="experience__details-icon" /> Developed and maintained robust Ansible playbooks for automated server provisioning, Docker/LAMP/WordPress stack setup, and scheduled task management, reducing manual intervention and errors.</li>
              <li><BsPatchCheckFill className="experience__details-icon" /> Built AWS Lambda functions for dynamic S3 image resizing, and integrated Lambda with CloudWatch and SNS for real-time RDP session monitoring and automated team notifications.</li>
              <li><BsPatchCheckFill className="experience__details-icon" /> Automated secure backups of MySQL, MongoDB, and PostgreSQL databases from EC2/RDS to S3, implementing retention policies and lifecycle rules for data durability and compliance.</li>
              <li><BsPatchCheckFill className="experience__details-icon" /> Managed VMware ESXi for provisioning isolated dev/test environments, enabling parallel development, rapid prototyping, and seamless CI/CD integration.</li>
              <li><BsPatchCheckFill className="experience__details-icon" /> Diagnosed and resolved critical deployment failures, service outages, and SSL misconfigurations, ensuring high system reliability and minimal downtime.</li>
              <li><BsPatchCheckFill className="experience__details-icon" /> Integrated SMTP and DNS management for transactional email delivery, ensuring high deliverability rates and domain authentication across platforms.</li>
              <li><BsPatchCheckFill className="experience__details-icon" /> Collaborated cross-functionally with developers, QA, and designers to streamline agile release cycles, improve deployment velocity, and drive continuous delivery best practices.</li>
            </ul>
            <ul style={{paddingLeft: '1.2em', marginTop: '1em'}}>
              <li><BsPatchCheckFill className="experience__details-icon" /> Championed Infrastructure as Code (IaC) best practices, implementing version-controlled, peer-reviewed Terraform and Ansible codebases for consistent, auditable deployments.</li>
              <li><BsPatchCheckFill className="experience__details-icon" /> Automated secrets management and environment variable injection using AWS Secrets Manager and SSM Parameter Store, enhancing security and compliance.</li>
              <li><BsPatchCheckFill className="experience__details-icon" /> Integrated vulnerability scanning and security checks into CI/CD pipelines, proactively identifying and remediating risks before production deployment.</li>
              <li><BsPatchCheckFill className="experience__details-icon" /> Established centralized logging, monitoring, and alerting with CloudWatch, ELK stack, and custom dashboards for real-time observability and rapid incident response.</li>
              <li><BsPatchCheckFill className="experience__details-icon" /> Led cost optimization initiatives by rightsizing resources, implementing auto-scaling, and leveraging spot instances, resulting in significant cloud spend reduction.</li>
              <li><BsPatchCheckFill className="experience__details-icon" /> Supported cloud migration and hybrid cloud strategies, enabling seamless workload transitions and multi-cloud resilience.</li>
              <li><BsPatchCheckFill className="experience__details-icon" /> Enhanced container orchestration with advanced ECS task definitions, service discovery, and automated scaling policies for high-traffic applications.</li>
              <li><BsPatchCheckFill className="experience__details-icon" /> Authored comprehensive technical documentation and conducted internal DevOps workshops to upskill team members and promote a culture of automation and reliability.</li>
            </ul>
          </div>

          {/* Key DevOps Projects Section */}
          <div style={{marginTop: '2.5em'}}>
            <h3 style={{fontWeight: 600, marginBottom: '1em'}}>Key DevOps Projects</h3>
            <div style={{marginBottom: '1.5em'}}>
              <h4 style={{marginBottom: '0.2em'}}>The Trump Token – Crypto Token Platform</h4>
              <ul style={{paddingLeft: '1.2em'}}>
                <li>Deployed backend services in a custom VPC using ECS and ECR, with GitHub Actions automating Docker image builds and ECS updates.</li>
                <li>Hosted React frontend via AWS Amplify with Route 53-managed domain and SSL for secure, scalable access.</li>
              </ul>
            </div>
            <div style={{marginBottom: '1.5em'}}>
              <h4 style={{marginBottom: '0.2em'}}>ResQ – Restoration Scheduling Platform</h4>
              <ul style={{paddingLeft: '1.2em'}}>
                <li>Built and maintained infrastructure for containerized Node.js backend in ECS with secure networking and NAT access.</li>
                <li>Deployed frontend to AWS Amplify and configured health checks and uptime monitoring for production APIs.</li>
              </ul>
            </div>
            <div style={{marginBottom: '1.5em'}}>
              <h4 style={{marginBottom: '0.2em'}}>Trumart – Crypto-based E-commerce Marketplace</h4>
              <ul style={{paddingLeft: '1.2em'}}>
                <li>Provisioned Terraform-based infrastructure for MongoDB, ECS backend, and Route 53 DNS, ensuring scalable and secure deployments.</li>
                <li>Deployed and maintained the frontend with Amplify; configured reverse proxy at /storefronts for seamless user experience.</li>
              </ul>
            </div>
            <div style={{marginBottom: '1.5em'}}>
              <h4 style={{marginBottom: '0.2em'}}>Tajir Media – Web3 Blockchain Ecosystem</h4>
              <ul style={{paddingLeft: '1.2em'}}>
                <li>Automated backend deployment on EC2 using Ansible and Bash scripts; secured traffic with ACM-based SSL certificates.</li>
                <li>Frontend deployed using Amplify with continuous deployment from GitHub for rapid iteration.</li>
              </ul>
            </div>
            <div style={{marginBottom: '1.5em'}}>
              <h4 style={{marginBottom: '0.2em'}}>BitRock – Decentralized Wallet App</h4>
              <ul style={{paddingLeft: '1.2em'}}>
                <li>Deployed wallet backend on ECS with IAM and ECR permissions for secure, scalable operations.</li>
                <li>Integrated Klever and Trust Wallet APIs; hosted frontend via Amplify with branch previews for agile development.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
