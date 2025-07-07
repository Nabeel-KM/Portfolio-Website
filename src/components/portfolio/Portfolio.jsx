import React, { useState } from "react";
import "./portfolio.css";

// Import project images
import cloudwatchLogAnalyzer from "../../assets/project-images/cloudwatch-log-analyzer.png";
import resqImage from "../../assets/project-images/resq.png";
import learnspotImage from "../../assets/project-images/learnspot.png";
import tajirmediaImage from "../../assets/project-images/tajirmedia.png";
import trumptokenImage from "../../assets/project-images/trumptoken.png";
import centralizedLoggingImage from "../../assets/project-images/centralized-logging.png";
import bitrockImage from "../../assets/project-images/bitrock.png";
import gotoappImage from "../../assets/project-images/gotoapp.png";
import sixerImage from "../../assets/project-images/6ixer.png";
import terraformAwsEcsImage from "../../assets/project-images/terraform-aws-ecs.png";
import amazonEcsFullstackImage from "../../assets/project-images/amazon-ecs-fullstack.png";
import k8sKindVotingImage from "../../assets/project-images/k8s-kind-voting.png";
import terraformAnsibleImage from "../../assets/project-images/terraform-ansible.png";
import wfhMonitoringImage from "../../assets/project-images/wfh-monitoring.png";

const allProjects = [
	// Professional Projects (unique)
	{
		title: "CloudWatch Log Analyzer",
		description: [
			"Robust application for efficient analysis of AWS CloudWatch logs across multiple AWS profiles.",
			"Key Features:",
			"• Multi-Profile Support: Secure profile selection system for seamless switching between AWS accounts and regions",
			"• Interactive Dashboards: Dynamic visualizations for log patterns, error trends, and time-based analysis",
			"• Containerized Deployment: Docker-based solution with optimized configuration for consistent deployment",
			"• Advanced Filtering: Sophisticated filtering by time range, log level, and custom patterns",
			"• Performance Optimization: Efficient caching strategies and session management (0.01% CPU utilization)",
			"• Security Best Practices: Secure AWS credential handling with proper IAM role support",
			"Technologies: Python, Streamlit, Pandas, AWS SDK (boto3), Docker, CloudWatch Logs API, AWS IAM",
		],
		image: cloudwatchLogAnalyzer,
		github: "#",
		demo: "#",
		category: "professional",
	},
	{
		title: "ResQ Platform Infrastructure",
		description: [
			"Appointment scheduling platform enabling customers to book services and receive real-time updates.",
			"DevOps Contributions:",
			"• Implemented GitHub Actions pipelines for automated deployments to both local VMs and AWS ECS",
			"• Architected AWS infrastructure using Terraform (ECS, ECR, ALB, VPC, security groups)",
			"• Deployed frontend on AWS Amplify with continuous deployment from GitHub repository",
			"• Set up S3 bucket with CloudFront distribution for static assets and media content",
			"• Configured Nginx for path-based routing to host React frontend and WordPress on the same domain",
			"• Set up Twilio for branded RCS messaging and SMS/email notifications for appointment updates",
			"• Optimized RDS parameter groups and EC2 performance, resolving high database load issues",
			"Technologies: AWS (ECS, ECR, EC2, RDS, ALB, VPC, Amplify, S3, CloudFront), Terraform, GitHub Actions, Docker, Nginx, Ansible, Twilio",
		],
		image: resqImage,
		github: "#",
		demo: "#", // Private project based on case study
		category: "professional",
	},
	{
		title: "LearnSpot E-Learning Platform",
		description: [
			"E-learning platform with CI/CD automation and infrastructure deployment.",
			"DevOps Contributions:",
			"• Set up CI/CD pipelines for both on-premises and AWS deployments using GitHub Actions",
			"• Deployed infrastructure using Terraform with modular components for different environments",
			"• Deployed frontend on AWS Amplify with continuous deployment from GitHub repository",
			"• Set up S3 bucket with CloudFront distribution for static assets and media content",
			"• Created IAM user with limited access policies restricted to S3 bucket operations only",
			"• Configured ECS clusters with ECR integration for containerized application deployment",
			"Technologies: AWS (ECS, ECR, ALB, Amplify, S3, CloudFront), Terraform, GitHub Actions, Docker",
		],
		image: learnspotImage,
		github: "#",
		demo: "#", // Private project based on case study
		category: "professional",
	},
	{
		title: "TajirMedia E-Commerce Solution",
		description: [
			"E-commerce platform with automated deployments and cloud infrastructure.",
			"DevOps Contributions:",
			"• Created CI/CD workflows for on-premises and AWS deployments",
			"• Deployed AWS infrastructure using Terraform for production environment",
			"• Deployed frontend on AWS Amplify with continuous deployment from GitHub repository",
			"• Set up S3 bucket with CloudFront distribution for static assets and media content",
			"• Created IAM user with limited access policies restricted to S3 bucket operations only",
			"• Set up ECS services with ECR repositories for containerized application components",
			"Technologies: AWS (ECS, ECR, RDS, ALB, Amplify, S3, CloudFront), Terraform, GitHub Actions, Docker",
		],
		image: tajirmediaImage,
		github: "#",
		demo: "https://www.tajirmedia.com/", // Confirmed from case study
		category: "professional",
	},
	{
		title: "TheTrumpToken Infrastructure Optimization",
		description: [
			"A pioneering political cryptocurrency platform supporting Donald J. Trump's initiatives.",
			"DevOps Contributions:",
			"• Implemented auto-scaling policies based on custom metrics to handle traffic spikes",
			"• Deployed frontend on AWS Amplify for continuous deployment and global content delivery",
			"• Set up S3 bucket with CloudFront distribution for static assets and media content",
			"• Created IAM user with limited access policies restricted to S3 bucket operations only",
			"• Eliminated recurring outages and improved transaction processing speed by 40%",
			"• Supported 3x user growth through optimized infrastructure",
			"Technologies: AWS (EC2, ECS, CloudWatch, Amplify, S3, CloudFront), Terraform, Docker",
		],
		image: trumptokenImage,
		github: "#",
		demo: "https://thetrumptoken.com/", // Confirmed from case study
		category: "professional",
	},
	{
		title: "Centralized Logging & Diagnostics Platform",
		description: [
			"Enterprise-grade logging and diagnostics solution for rapid troubleshooting across distributed systems.",
			"Key Features:",
			"• Architected scalable ELK stack with index lifecycle management and data retention policies",
			"• Created custom Kibana dashboards for application errors, security events, and performance metrics",
			"• Implemented automated log rotation and retention policies",
			"• Set up real-time alerting for critical system events",
			"• Reduced diagnostic time from hours to minutes, enabling 60% faster incident resolution",
			"Technologies: ELK Stack, Filebeat, Metricbeat, Docker Compose, Ansible, AWS EC2, CloudWatch",
		],
		image: centralizedLoggingImage,
		github: "#",
		demo: "#", // Internal tool
		category: "professional",
	},
	{
		title: "BitRock Crypto Wallet",
		description: [
			"Crypto wallet app for storing and retrieving digital assets with strict security requirements.",
			"DevOps Contributions:",
			"• Implemented containerized microservices architecture with automated security scanning",
			"• Reduced vulnerabilities by 85% through automated security testing in CI/CD pipeline",
			"• Configured ECR image lifecycle policies and container vulnerability scanning",
			"• Implemented IAM roles with least privilege principles for enhanced security",
			"• Deployed blue/green deployment strategy for zero-downtime updates",
			"Technologies: AWS (ECS, ECR, CloudWatch, Amplify, S3, CloudFront), Terraform, Docker, GitHub Actions",
		],
		image: bitrockImage,
		github: "#",
		demo: "https://www.bit-rock.io/", // Confirmed from case study
		category: "professional",
	},
	{
		title: "Go-TO-APP",
		description: [
			"Mobile application platform for on-demand services and local business discovery.",
			"DevOps Contributions:",
			"• Designed and implemented containerized microservices architecture on AWS",
			"• Set up CI/CD pipelines for mobile app backend services with automated testing",
			"• Configured auto-scaling groups to handle variable traffic patterns efficiently",
			"• Implemented centralized logging and monitoring for real-time system visibility",
			"• Automated database backups and implemented disaster recovery procedures",
			"Technologies: AWS (ECS, ECR, RDS, CloudWatch, S3), Terraform, Docker, GitHub Actions",
		],
		image: gotoappImage,
		github: "#",
		demo: "#", // Private project based on case study
		category: "professional",
	},
	{
		title: "6ixer NFT Marketplace",
		description: [
			"NFT marketplace platform with high-volume transaction processing requirements.",
			"DevOps Contributions:",
			"• Designed scalable infrastructure to handle NFT minting and trading spikes",
			"• Implemented auto-scaling groups based on custom CloudWatch metrics",
			"• Deployed containerized services with ECS for flexible resource allocation",
			"• Configured CDN with origin shield for optimized content delivery",
			"• Implemented comprehensive monitoring for transaction processing",
			"Technologies: AWS (ECS, CloudFront, S3, CloudWatch), Terraform, Docker, GitHub Actions",
		],
		image: sixerImage,
		github: "#",
		demo: "#", // Private project based on case study
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
		image: terraformAwsEcsImage,
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
		image: amazonEcsFullstackImage,
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
		image: k8sKindVotingImage,
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
		image: terraformAnsibleImage,
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
		image: wfhMonitoringImage,
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
