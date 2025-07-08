import React from 'react';
import { Link } from 'react-router-dom';
import './Resources.css';
import { FaArrowLeft } from 'react-icons/fa';

const CiCdPipelineBlueprints = () => {
  return (
    <div className="resource-page">
      <div className="resource-container">
        <div className="resource-header">
          <Link to="/upwork-profile" className="back-link">
            <FaArrowLeft /> Back to Profile
          </Link>
          <h1>CI/CD Pipeline Blueprints</h1>
        </div>
        
        <div className="blueprint">
          <h2>GitHub Actions Workflow for React Application</h2>
          <div className="blueprint-description">
            <p>This GitHub Actions workflow automates the build, test, and deployment process for a React application to AWS Amplify. It includes steps for code quality checks, testing, and production deployment.</p>
          </div>
          <pre>
{`name: React App CI/CD Pipeline

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-test:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Set up Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '16'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Lint code
      run: npm run lint
    
    - name: Run tests
      run: npm test -- --coverage
    
    - name: Build project
      run: npm run build
    
    - name: Upload build artifact
      uses: actions/upload-artifact@v3
      with:
        name: build
        path: build/
        
  deploy:
    needs: build-and-test
    if: github.event_name == 'push' && github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Download build artifact
      uses: actions/download-artifact@v3
      with:
        name: build
        path: build
    
    - name: Configure AWS credentials
      uses: aws-actions/configure-aws-credentials@v1
      with:
        aws-access-key-id: \${{ secrets.AWS_ACCESS_KEY_ID }}
        aws-secret-access-key: \${{ secrets.AWS_SECRET_ACCESS_KEY }}
        aws-region: us-east-1
    
    - name: Deploy to AWS Amplify
      run: |
        aws amplify start-job --app-id \${{ secrets.AMPLIFY_APP_ID }} --branch-name main --job-type RELEASE`}
          </pre>
          <div className="blueprint-notes">
            <h3>Implementation Notes:</h3>
            <ul>
              <li>Store AWS credentials securely in GitHub repository secrets</li>
              <li>Adjust the Node.js version based on your project requirements</li>
              <li>Add custom test coverage thresholds if needed</li>
              <li>Consider adding environment-specific deployments (staging, production)</li>
            </ul>
          </div>
        </div>
        
        <div className="blueprint">
          <h2>GitHub Actions Workflow for Docker + AWS ECS Deployment</h2>
          <div className="blueprint-description">
            <p>This workflow builds a Docker image, pushes it to Amazon ECR, and deploys it to ECS. It includes security scanning and handles zero-downtime deployments.</p>
          </div>
          <pre>
{`name: Docker Build and ECS Deploy

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Configure AWS credentials
      uses: aws-actions/configure-aws-credentials@v1
      with:
        aws-access-key-id: \${{ secrets.AWS_ACCESS_KEY_ID }}
        aws-secret-access-key: \${{ secrets.AWS_SECRET_ACCESS_KEY }}
        aws-region: us-east-1
    
    - name: Login to Amazon ECR
      id: login-ecr
      uses: aws-actions/amazon-ecr-login@v1
    
    - name: Build, tag, and push image to Amazon ECR
      id: build-image
      env:
        ECR_REGISTRY: \${{ steps.login-ecr.outputs.registry }}
        ECR_REPOSITORY: my-app-repo
        IMAGE_TAG: \${{ github.sha }}
      run: |
        docker build -t $ECR_REGISTRY/$ECR_REPOSITORY:$IMAGE_TAG .
        docker tag $ECR_REGISTRY/$ECR_REPOSITORY:$IMAGE_TAG $ECR_REGISTRY/$ECR_REPOSITORY:latest
        docker push $ECR_REGISTRY/$ECR_REPOSITORY:$IMAGE_TAG
        docker push $ECR_REGISTRY/$ECR_REPOSITORY:latest
        echo "::set-output name=image::$ECR_REGISTRY/$ECR_REPOSITORY:$IMAGE_TAG"
    
    - name: Scan image for vulnerabilities
      uses: aquasecurity/trivy-action@master
      with:
        image-ref: \${{ steps.build-image.outputs.image }}
        format: 'table'
        exit-code: '1'
        ignore-unfixed: true
        vuln-type: 'os,library'
        severity: 'CRITICAL,HIGH'
    
    - name: Fill in the new image ID in the Amazon ECS task definition
      id: task-def
      uses: aws-actions/amazon-ecs-render-task-definition@v1
      with:
        task-definition: task-definition.json
        container-name: my-app-container
        image: \${{ steps.build-image.outputs.image }}
    
    - name: Deploy Amazon ECS task definition
      uses: aws-actions/amazon-ecs-deploy-task-definition@v1
      with:
        task-definition: \${{ steps.task-def.outputs.task-definition }}
        service: my-app-service
        cluster: my-app-cluster
        wait-for-service-stability: true`}
          </pre>
          <div className="blueprint-notes">
            <h3>Implementation Notes:</h3>
            <ul>
              <li>Create a task-definition.json file in your repository</li>
              <li>Adjust the ECR repository name and ECS service/cluster names</li>
              <li>Consider adding Slack or email notifications for deployment status</li>
              <li>Add environment-specific variables for different deployment environments</li>
            </ul>
          </div>
        </div>
        
        <div className="blueprint">
          <h2>GitHub Actions Workflow for Terraform Infrastructure Deployment</h2>
          <div className="blueprint-description">
            <p>This workflow automates the deployment of infrastructure using Terraform. It includes plan and apply stages with approval for production environments.</p>
          </div>
          <pre>
{`name: Terraform Infrastructure Deployment

on:
  push:
    branches: [ main ]
    paths:
      - 'terraform/**'
  pull_request:
    branches: [ main ]
    paths:
      - 'terraform/**'

jobs:
  terraform:
    runs-on: ubuntu-latest
    defaults:
      run:
        working-directory: ./terraform
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Terraform
      uses: hashicorp/setup-terraform@v2
      with:
        terraform_version: 1.0.0
    
    - name: Configure AWS credentials
      uses: aws-actions/configure-aws-credentials@v1
      with:
        aws-access-key-id: \${{ secrets.AWS_ACCESS_KEY_ID }}
        aws-secret-access-key: \${{ secrets.AWS_SECRET_ACCESS_KEY }}
        aws-region: us-east-1
    
    - name: Terraform Format
      id: fmt
      run: terraform fmt -check
    
    - name: Terraform Init
      id: init
      run: terraform init
    
    - name: Terraform Validate
      id: validate
      run: terraform validate -no-color
    
    - name: Terraform Plan
      id: plan
      run: terraform plan -no-color
      continue-on-error: true
    
    - name: Update Pull Request
      uses: actions/github-script@v6
      if: github.event_name == 'pull_request'
      env:
        PLAN: "terraform\\n\${{ steps.plan.outputs.stdout }}"
      with:
        github-token: \${{ secrets.GITHUB_TOKEN }}
        script: |
          const output = \`#### Terraform Format and Style 🖌\\\`\${{ steps.fmt.outcome }}\\\`
          #### Terraform Initialization ⚙️\\\`\${{ steps.init.outcome }}\\\`
          #### Terraform Validation 🤖\\\`\${{ steps.validate.outcome }}\\\`
          #### Terraform Plan 📖\\\`\${{ steps.plan.outcome }}\\\`
          
          <details><summary>Show Plan</summary>
          
          \\\`\\\`\\\`\\n
          \${process.env.PLAN}
          \\\`\\\`\\\`
          
          </details>\`;
          
          github.rest.issues.createComment({
            issue_number: context.issue.number,
            owner: context.repo.owner,
            repo: context.repo.repo,
            body: output
          })
    
    - name: Terraform Plan Status
      if: steps.plan.outcome == 'failure'
      run: exit 1
    
    - name: Terraform Apply
      if: github.ref == 'refs/heads/main' && github.event_name == 'push'
      run: terraform apply -auto-approve`}
          </pre>
          <div className="blueprint-notes">
            <h3>Implementation Notes:</h3>
            <ul>
              <li>Store Terraform state in a remote backend (S3 + DynamoDB)</li>
              <li>Use Terraform workspaces for different environments</li>
              <li>Consider adding a manual approval step for production deployments</li>
              <li>Add Terraform security scanning with tfsec or checkov</li>
            </ul>
          </div>
        </div>
        
        <div className="resource-footer">
          <p>These CI/CD pipeline blueprints are provided as a starting point for your automation workflows. Each blueprint can be customized to meet your specific requirements.</p>
          <div className="contact">
            <p>Need help implementing these pipelines? <a href="mailto:nabntan@gmail.com">Contact me</a> for professional DevOps services.</p>
          </div>
          <p>&copy; 2025 Nabeel Sarfraz. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default CiCdPipelineBlueprints;
