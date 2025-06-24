import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const allProjects = [
	// Professional Projects (unique)
	{
		title: "TheTrumpToken (Kryptomind)",
		description: [
			"A pioneering political cryptocurrency platform supporting Donald J. Trump’s initiatives. Led DevOps for backend and frontend deployments, CI/CD, and AWS infrastructure.",
			"[Case Study](https://kryptomind.com/case_study/thetrumptoken-2/) | [Live](https://thetrumptoken.com/)",
		],
		image: IMG1,
		github: "#",
		demo: "https://thetrumptoken.com/",
	},
	{
		title: "Tajir Media (Kryptomind)",
		description: [
			"Digital currency platform on Solana blockchain. Managed cloud infrastructure, automation, and secure deployments.",
			"[Case Study](https://kryptomind.com/case_study/tajir-media/) | [Live](https://www.tajirmedia.com/)",
		],
		image: IMG2,
		github: "#",
		demo: "https://www.tajirmedia.com/",
	},
	{
		title: "BitRock (Kryptomind)",
		description: [
			"Crypto wallet app for storing and retrieving digital assets. Oversaw containerization, CI/CD, and AWS hosting.",
			"[Case Study](https://kryptomind.com/case_study/bitrock/) | [Live](https://www.bit-rock.io/)",
		],
		image: IMG3,
		github: "#",
		demo: "https://www.bit-rock.io/",
	},
	{
		title: "ResQ (Kryptomind)",
		description: [
			"Fire and water damage restoration platform with precise tracking and team management. Built and maintained AWS infrastructure and monitoring.",
			"[Case Study](https://kryptomind.com/case_study/resq/)",
		],
		image: IMG4,
		github: "#",
		demo: "#",
	},
	{
		title: "Trumart (Kryptomind)",
		description: [
			"Secure, crypto-based e-commerce platform. Led DevOps for Terraform-based infrastructure, CI/CD, and AWS deployments.",
			"[Case Study](https://kryptomind.com/case_study/trumart/) | [Live](https://trumart.com/)",
		],
		image: IMG5,
		github: "#",
		demo: "https://trumart.com/",
	},
	{
		title: "Centralized Logging & Monitoring with ELK and Beats across Distributed VMs",
		description: [
			"Designed and deployed a centralized log monitoring infrastructure using the ELK stack (Elasticsearch, Logstash (optional), and Kibana) integrated with Filebeat and Metricbeat agents across 20+ VMs.",
			"Collected syslog, auth.log, Docker container logs, Nginx logs, and system metrics (CPU, memory, disk, etc.) from all VMs using Filebeat & Metricbeat.",
			"Data securely shipped to Elasticsearch (EC2), with ILM policies for auto-rollover (10GB/7 days).",
			"Kibana dashboards for container-wise log analysis, host-wise performance, Nginx logs, and resource trends.",
			"Automated provisioning and configuration using Ansible; ELK stack deployed via Docker Compose with health checks and memory limits.",
			"Role-based systemd overrides, scalable to 50+ VMs, and supports centralized remote logging for security auditability.",
			"Tools: Elasticsearch, Kibana, Filebeat, Metricbeat, Ansible, Docker Compose, Ubuntu, AWS EC2, S3 (optional).",
			"[Screenshots: Kibana dashboards, container logs, host metrics, Nginx visualizations, Metricbeat dashboards] (Add images if available)",
		],
		image: IMG6,
		github: "#",
		demo: "#",
	},
	// Personal/Open Source Projects (unique, not duplicating above)
	{
		title: "WFH Monitoring with Dockerfiles",
		description: [
			"Python-based monitoring solution for work-from-home environments, containerized using Docker for easy deployment and scalability.",
		],
		image: IMG6,
		github: "https://github.com/Nabeel-KM/wfh_monitoring_with_dockerfiles",
		demo: "#",
	},
	{
		title: "Terraform AWS ECS Fargate Infra",
		description: [
			"Infrastructure as Code project using Terraform to provision scalable AWS ECS Fargate clusters, demonstrating modular IaC best practices.",
		],
		image: IMG2,
		github: "https://github.com/Nabeel-KM/terraform-aws-ecs-fargate-infra",
		demo: "#",
	},
	{
		title: "Amazon ECS Fullstack App (Terraform)",
		description: [
			"Fullstack application deployed on Amazon ECS using Terraform and AWS CodePipeline for CI/CD automation.",
		],
		image: IMG3,
		github: "https://github.com/Nabeel-KM/amazon-ecs-fullstack-app-terraform",
		demo: "#",
	},
	{
		title: "K8s Kind Voting App",
		description: [
			"Distributed voting app demonstrating container orchestration with Docker, Compose, Swarm, and Kubernetes.",
		],
		image: IMG4,
		github: "https://github.com/Nabeel-KM/k8s-kind-voting-app",
		demo: "#",
	},
	{
		title: "Terraform + Ansible Multi-Env",
		description: [
			"Multi-environment infrastructure setup using Terraform for provisioning and Ansible for configuration management.",
		],
		image: IMG5,
		github: "https://github.com/Nabeel-KM/terraform-ansible-multi-env",
		demo: "#",
	},
];

const Portfolio = () => {
	return (
		<section id="portfolio">
			<h5>My Recent Work</h5>
			<h2>Portfolio</h2>
			<div className="container portfolio__container">
				{allProjects.map((project, idx) => (
					<article className="portfolio__item" key={project.title}>
						<div className="portfolio__item-image">
							<img src={project.image} alt={project.title} />
						</div>
						<h3>{project.title}</h3>
						<ul style={{ paddingLeft: "1.2em", marginBottom: "1em" }}>
							{project.description.map((desc, i) => (
								<li key={i}>{desc}</li>
							))}
						</ul>
						<div className="portfolio__item-cta">
							<a
								href={project.github}
								className="btn"
								target="_blank"
								rel="noreferrer"
							>
								Github
							</a>
							<a
								href={project.demo}
								className="btn btn-primary"
								target="_blank"
								rel="noreferrer"
							>
								Live Demo
							</a>
						</div>
					</article>
				))}
			</div>
		</section>
	);
};

export default Portfolio;
