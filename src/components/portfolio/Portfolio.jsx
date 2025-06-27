import React, { useState } from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.png";

const allProjects = [
	// Professional Projects (unique)
	{
		title: "TheTrumpToken (Kryptomind)",
		description: [
			"A pioneering political cryptocurrency platform supporting Donald J. Trump's initiatives.",
			"DevOps Contributions:",
			"• Architected and deployed scalable AWS infrastructure handling 50,000+ daily users with 99.99% uptime",
			"• Implemented CI/CD pipelines with GitHub Actions for automated testing and zero-downtime deployments",
			"• Configured AWS CloudFront CDN with S3 origin for optimized global content delivery",
			"• Deployed containerized microservices on ECS with auto-scaling for handling traffic spikes",
			"• Implemented comprehensive monitoring with CloudWatch dashboards and automated alerts",
			"[Case Study](https://kryptomind.com/case_study/thetrumptoken-2/) | [Live](https://thetrumptoken.com/)",
		],
		image: IMG1,
		github: "#",
		demo: "https://thetrumptoken.com/",
		category: "professional",
	},
	{
		title: "Tajir Media (Kryptomind)",
		description: [
			"Digital currency platform on Solana blockchain with high-performance requirements.",
			"DevOps Contributions:",
			"• Designed and implemented secure cloud architecture with automated scaling to handle transaction spikes",
			"• Reduced infrastructure costs by 30% through resource optimization and spot instance usage",
			"• Deployed ELK stack for centralized logging and performance monitoring across services",
			"• Implemented Jenkins pipelines for continuous integration and deployment with quality gates",
			"• Automated database backups and implemented point-in-time recovery capabilities",
			"[Case Study](https://kryptomind.com/case_study/tajir-media/) | [Live](https://www.tajirmedia.com/)",
		],
		image: IMG2,
		github: "#",
		demo: "https://www.tajirmedia.com/",
		category: "professional",
	},
	{
		title: "BitRock (Kryptomind)",
		description: [
			"Crypto wallet app for storing and retrieving digital assets with strict security requirements.",
			"DevOps Contributions:",
			"• Implemented containerized microservices architecture with automated security scanning",
			"• Reduced vulnerabilities by 85% through automated security testing in CI/CD pipeline",
			"• Configured ECR image lifecycle policies and container vulnerability scanning",
			"• Implemented IAM roles with least privilege principles for enhanced security",
			"• Deployed blue/green deployment strategy for zero-downtime updates",
			"[Case Study](https://kryptomind.com/case_study/bitrock/) | [Live](https://www.bit-rock.io/)",
		],
		image: IMG3,
		github: "#",
		demo: "https://www.bit-rock.io/",
		category: "professional",
	},
	{
		title: "ResQ (Kryptomind)",
		description: [
			"Fire and water damage restoration platform with precise tracking and team management.",
			"DevOps Contributions:",
			"• Built and maintained AWS infrastructure with high availability across multiple AZs",
			"• Implemented real-time monitoring and alerting for critical business processes",
			"• Automated deployment pipeline reducing release time from days to hours",
			"• Configured VPC networking with security groups and NACLs for enhanced security",
			"• Implemented disaster recovery procedures with regular testing and validation",
			"[Case Study](https://kryptomind.com/case_study/resq/)",
		],
		image: IMG4,
		github: "#",
		demo: "#",
		category: "professional",
	},
	{
		title: "Go-TO-APP (Kryptomind)",
		description: [
			"Mobile application platform for on-demand services and local business discovery.",
			"DevOps Contributions:",
			"• Designed and implemented containerized microservices architecture on AWS",
			"• Set up CI/CD pipelines for mobile app backend services with automated testing",
			"• Configured auto-scaling groups to handle variable traffic patterns efficiently",
			"• Implemented centralized logging and monitoring for real-time system visibility",
			"• Automated database backups and implemented disaster recovery procedures",
			"[Case Study](https://kryptomind.com/case_study/go-to-app/)",
		],
		image: IMG5,
		github: "#",
		demo: "#",
		category: "professional",
	},
	{
		title: "6ixer (Kryptomind)",
		description: [
			"NFT marketplace platform with high-volume transaction processing requirements.",
			"DevOps Contributions:",
			"• Designed scalable infrastructure to handle NFT minting and trading spikes",
			"• Implemented auto-scaling groups based on custom CloudWatch metrics",
			"• Deployed containerized services with ECS for flexible resource allocation",
			"• Configured CDN with origin shield for optimized content delivery",
			"• Implemented comprehensive monitoring for transaction processing",
			"[Case Study](https://kryptomind.com/case_study/6ixer/)",
		],
		image: IMG6,
		github: "#",
		demo: "#",
		category: "professional",
	},
	{
		title: "Hybrid Wallet (Kryptomind)",
		description: [
			"Multi-cryptocurrency wallet supporting various blockchain networks with advanced security features.",
			"DevOps Contributions:",
			"• Implemented secure infrastructure with encryption at rest and in transit",
			"• Deployed containerized microservices with service mesh for enhanced security",
			"• Configured CI/CD pipelines with security scanning and compliance checks",
			"• Implemented automated backup and disaster recovery procedures",
			"• Deployed monitoring and alerting for suspicious transaction patterns",
			"[Case Study](https://kryptomind.com/case_study/hybrid-wallet/)",
		],
		image: IMG1,
		github: "#",
		demo: "#",
		category: "professional",
	},
	{
		title: "Car Market Place (Kryptomind)",
		description: [
			"Online automotive marketplace with advanced search and listing capabilities.",
			"DevOps Contributions:",
			"• Implemented infrastructure as code using Terraform for consistent environments",
			"• Configured CI/CD pipelines for frontend and backend services",
			"• Deployed ElasticSearch cluster for high-performance search functionality",
			"• Implemented image processing pipeline with Lambda for listing photos",
			"• Configured CloudFront with S3 for optimized media delivery",
			"[Case Study](https://kryptomind.com/case_study/car-market-place/)",
		],
		image: IMG2,
		github: "#",
		demo: "#",
		category: "professional",
	},
	{
		title: "Centralized Logging & Monitoring Platform",
		description: [
			"Enterprise-grade observability solution for distributed systems and applications.",
			"Key Features:",
			"• Designed and deployed centralized log monitoring infrastructure using ELK stack integrated with Filebeat and Metricbeat agents across 20+ VMs",
			"• Collected syslog, auth.log, Docker container logs, Nginx logs, and system metrics from all VMs",
			"• Implemented ILM policies for auto-rollover (10GB/7 days) with optimized storage",
			"• Created custom Kibana dashboards for application errors, security events, and performance metrics",
			"• Automated provisioning and configuration using Ansible; ELK stack deployed via Docker Compose with health checks",
			"• Implemented log correlation across services to trace request flows through distributed systems",
			"• Reduced incident response time by 65% through proactive monitoring and alerting",
			"Technologies: Elasticsearch, Kibana, Filebeat, Metricbeat, Ansible, Docker Compose, AWS EC2",
		],
		image: IMG3,
		github: "#",
		demo: "#",
		category: "professional",
	},
	{
		title: "Production Incident Response System",
		description: [
			"Comprehensive incident management system for rapid detection, diagnosis, and resolution of production issues.",
			"Key Features:",
			"• Reduced mean time to detection by 80% and mean time to resolution by 65%",
			"• Created detailed troubleshooting decision trees for common failure scenarios",
			"• Implemented automated recovery procedures for self-healing of infrastructure issues",
			"• Developed custom log parsing and analysis tools to quickly identify error patterns",
			"• Established post-incident review process that improved system reliability by 40%",
			"• Integrated with PagerDuty for on-call rotation and incident escalation",
			"Technologies: ELK Stack, CloudWatch, SNS, Lambda, PagerDuty integration, runbook automation",
		],
		image: IMG4,
		github: "#",
		demo: "#",
		category: "professional",
	},
	// Personal/Open Source Projects
	{
		title: "Terraform AWS ECS Fargate Infrastructure",
		description: [
			"Production-ready Infrastructure as Code project for AWS ECS Fargate deployments.",
			"Key Features:",
			"• Modular Terraform architecture with reusable components for different environments",
			"• Multi-AZ deployment with auto-scaling for high availability",
			"• Comprehensive networking with public and private subnets, NAT gateways",
			"• Security groups and IAM roles following least privilege principle",
			"• ALB configuration with health checks and TLS termination",
			"• CloudWatch dashboards and alarms for monitoring",
			"Technologies: Terraform, AWS ECS, Fargate, VPC, ALB, CloudWatch",
		],
		image: IMG5,
		github: "https://github.com/Nabeel-KM/terraform-aws-ecs-fargate-infra",
		demo: "#",
		category: "personal",
	},
	{
		title: "Amazon ECS Fullstack App (Terraform)",
		description: [
			"Reference architecture for deploying fullstack applications on ECS with CI/CD automation.",
			"Key Features:",
			"• Complete infrastructure as code for frontend and backend services",
			"• CI/CD pipeline with AWS CodePipeline for automated deployments",
			"• Container security with ECR scanning and least privilege IAM",
			"• Database integration with RDS and connection pooling",
			"• CloudFront distribution for frontend content delivery",
			"Technologies: Terraform, AWS CodePipeline, ECS, Docker, RDS, CloudFront",
		],
		image: IMG6,
		github: "https://github.com/Nabeel-KM/amazon-ecs-fullstack-app-terraform",
		demo: "#",
		category: "personal",
	},
	{
		title: "K8s Kind Voting App",
		description: [
			"Educational project demonstrating container orchestration patterns across platforms.",
			"Key Features:",
			"• Multi-container application deployment on Kubernetes",
			"• Service discovery and load balancing configuration",
			"• Persistent volume management for stateful services",
			"• Deployment strategies for zero-downtime updates",
			"• Resource limits and requests for optimal performance",
			"Technologies: Kubernetes, Docker, Docker Compose, Swarm",
		],
		image: IMG1,
		github: "https://github.com/Nabeel-KM/k8s-kind-voting-app",
		demo: "#",
		category: "personal",
	},
	{
		title: "Terraform + Ansible Multi-Environment",
		description: [
			"Infrastructure framework for managing multi-environment deployments with IaC.",
			"Key Features:",
			"• Environment-specific configuration with Terraform workspaces",
			"• Ansible roles for consistent configuration management",
			"• Secure secret management with AWS Parameter Store",
			"• CI/CD integration for infrastructure deployment",
			"• Comprehensive documentation and examples",
			"Technologies: Terraform, Ansible, AWS, environment management",
		],
		image: IMG2,
		github: "https://github.com/Nabeel-KM/terraform-ansible-multi-env",
		demo: "#",
		category: "personal",
	},
	{
		title: "WFH Monitoring with Dockerfiles",
		description: [
			"Python-based monitoring solution for work-from-home environments.",
			"Key Features:",
			"• Containerized monitoring agents for easy deployment",
			"• Centralized metrics collection and visualization",
			"• Customizable alerts and notifications",
			"• Low resource footprint for minimal impact",
			"• Secure data transmission and storage",
			"Technologies: Python, Docker, Prometheus, Grafana",
		],
		image: IMG3,
		github: "https://github.com/Nabeel-KM/wfh_monitoring_with_dockerfiles",
		demo: "#",
		category: "personal",
	},
];

const Portfolio = () => {
	const [filter, setFilter] = useState("all");
	
	const filteredProjects = filter === "all" 
		? allProjects 
		: allProjects.filter(project => project.category === filter);

	return (
		<section id="portfolio">
			<h5>My Recent Work</h5>
			<h2>Portfolio</h2>
			
			<div className="portfolio__filters">
				<button 
					className={filter === "all" ? "btn btn-primary" : "btn"} 
					onClick={() => setFilter("all")}
				>
					All Projects
				</button>
				<button 
					className={filter === "professional" ? "btn btn-primary" : "btn"} 
					onClick={() => setFilter("professional")}
				>
					Professional
				</button>
				<button 
					className={filter === "personal" ? "btn btn-primary" : "btn"} 
					onClick={() => setFilter("personal")}
				>
					Personal/Open Source
				</button>
			</div>
			
			<div className="container portfolio__container">
				{filteredProjects.map((project, idx) => (
					<article className="portfolio__item" key={project.title}>
						<div className="portfolio__item-image">
							<img src={project.image} alt={project.title} />
						</div>
						<h3>{project.title}</h3>
						<ul className="portfolio__item-description">
							{project.description.map((desc, i) => (
								<li key={i}>{desc}</li>
							))}
						</ul>
						<div className="portfolio__item-cta">
							{project.github !== "#" && (
								<a
									href={project.github}
									className="btn"
									target="_blank"
									rel="noreferrer"
								>
									Github
								</a>
							)}
							{project.demo !== "#" && (
								<a
									href={project.demo}
									className="btn btn-primary"
									target="_blank"
									rel="noreferrer"
								>
									Live Demo
								</a>
							)}
							{project.github === "#" && project.demo === "#" && (
								<span className="portfolio__private-project">Private Project</span>
							)}
						</div>
					</article>
				))}
			</div>
		</section>
	);
};

export default Portfolio;
