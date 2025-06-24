import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <h3 style={{ marginTop: "0.5em", fontWeight: 600 }}>Nabeel Sarfraz</h3>
      <div style={{ fontSize: "1em", marginBottom: "1em" }}>
        <span role="img" aria-label="location">
          📍
        </span>{" "}
        Lahore, Pakistan &nbsp;|&nbsp;
        <span role="img" aria-label="phone">
          📞
        </span>{" "}
        <a
          href="tel:+923444527024"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          +92-344-4527024
        </a>{" "}
        &nbsp;|&nbsp;
        <span role="img" aria-label="email">
          📧
        </span>{" "}
        <a
          href="mailto:nabntan@gmail.com"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          nabntan@gmail.com
        </a>{" "}
        &nbsp;|&nbsp;
        <span role="img" aria-label="linkedin">
          🔗
        </span>{" "}
        <a
          href="https://linkedin.com/in/nabeel-sarfraz"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "inherit",
            textDecoration: "underline",
          }}
        >
          linkedin.com/in/nabeel-sarfraz
        </a>
      </div>

      {/* Technical Skills Section */}
      <div
        style={{
          background: "#f7f7f7",
          borderRadius: "8px",
          padding: "1.2em",
          marginBottom: "1.5em",
        }}
      >
        <h4 style={{ marginBottom: "0.5em", fontWeight: 600 }}>
          Technical Skills
        </h4>
        <ul
          style={{
            columns: 2,
            fontSize: "1em",
            margin: 0,
            paddingLeft: "1.2em",
            listStyle: "disc",
          }}
        >
          <li>
            <b>Cloud Platforms:</b> AWS (EC2, ECS, ECR, S3, Lambda, VPC, IAM, Route 53, Amplify), DigitalOcean
          </li>
          <li>
            <b>Infrastructure as Code:</b> Terraform (modular), AWS CloudFormation (basic)
          </li>
          <li>
            <b>Configuration Management:</b> Ansible (playbooks, roles), Bash scripting
          </li>
          <li>
            <b>CI/CD & DevOps Tools:</b> GitHub Actions, Jenkins, AWS CodePipeline
          </li>
          <li>
            <b>Containerization & Orchestration:</b> Docker, ECS, Docker Compose
          </li>
          <li>
            <b>Monitoring & Logging:</b> Uptime Kuma, AWS CloudWatch, Bash log automation
          </li>
          <li>
            <b>Programming & Scripting:</b> Python (Flask, scripts, automation), Bash, Linux CLI
          </li>
          <li>
            <b>Version Control:</b> Git, GitHub, GitLab
          </li>
          <li>
            <b>Databases:</b> MySQL, PostgreSQL, MongoDB, Microsoft SQL Server
          </li>
          <li>
            <b>Other Tools:</b> VMware ESXi, VS Code, SQL Server Management Studio, Balsamiq
          </li>
          <li>
            <b>Security & Compliance:</b> IAM policies, secrets management, vulnerability scanning, SSL/TLS, backup automation
          </li>
          <li>
            <b>Cost Optimization:</b> Resource rightsizing, auto-scaling, spot instances, S3 lifecycle policies
          </li>
          <li>
            <b>Observability:</b> Centralized logging, alerting, dashboarding, incident response
          </li>
          <li>
            <b>Automation:</b> End-to-end deployment, scheduled tasks, cron jobs, server provisioning
          </li>
        </ul>
      </div>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Img" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>200+ Clients Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Projects Delivered</small>
            </article>
          </div>

          <p>
            Experienced DevOps Engineer specializing in AWS cloud infrastructure,
            CI/CD automation, container orchestration, and infrastructure as code.
            Proven track record in designing scalable, secure, and cost-efficient
            systems, automating deployments, and driving operational excellence.
            Passionate about enabling rapid software delivery, cloud-native best
            practices, and cross-team collaboration.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
