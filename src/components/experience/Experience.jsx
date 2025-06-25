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
              <li><BsPatchCheckFill className="experience__details-icon" /> Engineered 10+ advanced CI/CD pipelines (GitHub Actions, Jenkins, AWS CodePipeline) for React, Flask, and Laravel applications, automating build, test, deployment, and blue/green ECS/EC2 service refreshes for zero-downtime releases.</li>
              <li><BsPatchCheckFill className="experience__details-icon" /> Orchestrated AWS ECS clusters for microservices, leveraged Amplify for frontend hosting, and implemented secure routing, custom domains, and DNS management via Route 53 for seamless deployments.</li>
              <li><BsPatchCheckFill className="experience__details-icon" /> Deployed and managed Dockerized backend microservices, configured IAM roles, ECR image lifecycle, ALBs, autoscaling groups, and VPC security for high availability and compliance.</li>
              <li><BsPatchCheckFill className="experience__details-icon" /> Developed and maintained robust Ansible playbooks for automated server provisioning, Docker/LAMP/WordPress stack setup, and scheduled task management, reducing manual intervention and errors.</li>
              <li><BsPatchCheckFill className="experience__details-icon" /> Built AWS Lambda functions for dynamic S3 image resizing, and integrated Lambda with CloudWatch and SNS for real-time RDP session monitoring and automated team notifications.</li>
              <li><BsPatchCheckFill className="experience__details-icon" /> Automated secure, versioned backups of MySQL, MongoDB, and PostgreSQL databases from EC2/RDS to S3, implementing retention policies and lifecycle rules for data durability and compliance.</li>
              <li><BsPatchCheckFill className="experience__details-icon" /> Managed VMware ESXi for provisioning isolated dev/test environments, enabling parallel development, rapid prototyping, and seamless CI/CD integration.</li>
              <li><BsPatchCheckFill className="experience__details-icon" /> Diagnosed and resolved critical deployment failures, service outages, and SSL misconfigurations, ensuring high system reliability and minimal downtime.</li>
              <li><BsPatchCheckFill className="experience__details-icon" /> Integrated SMTP and DNS management for transactional email delivery, ensuring high deliverability rates and domain authentication across platforms.</li>
              <li><BsPatchCheckFill className="experience__details-icon" /> Collaborated cross-functionally with developers, QA, and designers to streamline agile release cycles, improve deployment velocity, and drive continuous delivery best practices.</li>
            </ul>
            <ul style={{paddingLeft: '1.2em', marginTop: '1em'}}>
              <li><BsPatchCheckFill className="experience__details-icon" /> Championed Infrastructure as Code (IaC) best practices, implementing version-controlled, peer-reviewed Terraform and Ansible codebases for consistent, auditable, and scalable deployments across multiple environments.</li>
              <li><BsPatchCheckFill className="experience__details-icon" /> Automated secrets management and environment variable injection using AWS Secrets Manager and SSM Parameter Store, enhancing security, compliance, and deployment flexibility.</li>
              <li><BsPatchCheckFill className="experience__details-icon" /> Integrated vulnerability scanning, security checks, and compliance automation into CI/CD pipelines, proactively identifying and remediating risks before production deployment.</li>
              <li><BsPatchCheckFill className="experience__details-icon" /> Established centralized logging and monitoring using ELK stack (Elasticsearch, Logstash, Kibana), Filebeat, Metricbeat, and AWS CloudWatch for real-time observability, security auditability, and rapid incident response across 20+ VMs and containers.</li>
              <li><BsPatchCheckFill className="experience__details-icon" /> Led cost optimization initiatives by implementing resource rightsizing, auto-scaling, spot instances, and S3 lifecycle policies, resulting in significant cloud spend reduction.</li>
              <li><BsPatchCheckFill className="experience__details-icon" /> Enhanced security and compliance by integrating IAM policy management, secrets management, and SSL/TLS automation into infrastructure and deployment workflows.</li>
              <li><BsPatchCheckFill className="experience__details-icon" /> Delivered end-to-end automation for server provisioning, application deployment, scheduled tasks, and backup management using Ansible, Bash, and CI/CD pipelines.</li>
              <li><BsPatchCheckFill className="experience__details-icon" /> Architected and managed container orchestration with Docker, ECS, and Docker Compose, including advanced ECS task definitions, service discovery, and automated scaling for high-traffic applications.</li>
              <li><BsPatchCheckFill className="experience__details-icon" /> Authored comprehensive technical documentation and conducted internal DevOps workshops to upskill team members and promote a culture of automation, reliability, and cloud-native best practices.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
