import React from 'react';
import { Link } from 'react-router-dom';
import './Resources.css';
import { FaArrowLeft } from 'react-icons/fa';

// Import architecture template images
// Note: You'll need to move these images to your src/assets directory
import architectureTemplate1 from '../../assets/project-images/architecture-templates/architecture-template-1.svg';
import architectureTemplate2 from '../../assets/project-images/architecture-templates/architecture-template-2.svg';
import architectureTemplate3 from '../../assets/project-images/architecture-templates/architecture-template-3.svg';

const AwsArchitectureTemplates = () => {
  return (
    <div className="resource-page">
      <div className="resource-container">
        <div className="resource-header">
          <Link to="/upwork-profile" className="back-link">
            <FaArrowLeft /> Back to Profile
          </Link>
          <h1>AWS Architecture Templates</h1>
        </div>
        
        <div className="template">
          <h2>Scalable Web Application Architecture</h2>
          <img src={architectureTemplate1} alt="Scalable Web Application Architecture" className="template-image" />
          <div className="template-description">
            <p>This architecture template provides a highly available, scalable web application setup using AWS services. It's designed for applications that need to handle variable traffic with automatic scaling capabilities.</p>
          </div>
          <div className="template-components">
            <h3>Key Components:</h3>
            <ul>
              <li><strong>Route 53</strong> - DNS management and routing</li>
              <li><strong>CloudFront</strong> - Content delivery network for global distribution</li>
              <li><strong>S3</strong> - Static asset storage</li>
              <li><strong>ALB</strong> - Application Load Balancer for traffic distribution</li>
              <li><strong>Auto Scaling Group</strong> - Dynamic scaling of EC2 instances</li>
              <li><strong>RDS</strong> - Managed relational database with read replicas</li>
              <li><strong>ElastiCache</strong> - In-memory caching for performance</li>
              <li><strong>CloudWatch</strong> - Monitoring and alerting</li>
            </ul>
          </div>
        </div>
        
        <div className="template">
          <h2>Containerized Microservices Architecture</h2>
          <img src={architectureTemplate2} alt="Containerized Microservices Architecture" className="template-image" />
          <div className="template-description">
            <p>This template demonstrates a containerized microservices architecture using AWS ECS. It's ideal for applications that require independent scaling and deployment of different components.</p>
          </div>
          <div className="template-components">
            <h3>Key Components:</h3>
            <ul>
              <li><strong>ECR</strong> - Container image repository</li>
              <li><strong>ECS</strong> - Container orchestration service</li>
              <li><strong>Fargate</strong> - Serverless compute engine for containers</li>
              <li><strong>ALB</strong> - Application Load Balancer with path-based routing</li>
              <li><strong>API Gateway</strong> - API management and request routing</li>
              <li><strong>DynamoDB</strong> - NoSQL database for microservices</li>
              <li><strong>SNS/SQS</strong> - Asynchronous communication between services</li>
              <li><strong>X-Ray</strong> - Distributed tracing for microservices</li>
            </ul>
          </div>
        </div>
        
        <div className="template">
          <h2>Serverless Web Application</h2>
          <img src={architectureTemplate3} alt="Serverless Web Application" className="template-image" />
          <div className="template-description">
            <p>This serverless architecture template eliminates the need to manage servers while providing high availability and automatic scaling. It's perfect for applications with variable or unpredictable workloads.</p>
          </div>
          <div className="template-components">
            <h3>Key Components:</h3>
            <ul>
              <li><strong>CloudFront</strong> - Content delivery and caching</li>
              <li><strong>S3</strong> - Static website hosting</li>
              <li><strong>API Gateway</strong> - RESTful API endpoint</li>
              <li><strong>Lambda</strong> - Serverless compute functions</li>
              <li><strong>DynamoDB</strong> - NoSQL database</li>
              <li><strong>Cognito</strong> - User authentication and authorization</li>
              <li><strong>CloudWatch</strong> - Monitoring and logging</li>
              <li><strong>Step Functions</strong> - Workflow orchestration</li>
            </ul>
          </div>
        </div>
        
        <div className="resource-footer">
          <p>These architecture templates are provided as a starting point for your AWS infrastructure design. Each template can be customized to meet your specific requirements.</p>
          <div className="contact">
            <p>Need help implementing these architectures? <a href="mailto:nabntan@gmail.com">Contact me</a> for professional DevOps services.</p>
          </div>
          <p>&copy; 2025 Nabeel Sarfraz. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default AwsArchitectureTemplates;
