#!/bin/bash

# Create a deployment directory
mkdir -p deploy

# Copy the Upwork profile files
cp upwork-profile.html deploy/
cp upwork-profile.css deploy/
cp upwork-profile.js deploy/

# Create resources directory in deploy
mkdir -p deploy/resources

# Copy resource files
cp resources/aws-architecture-templates.html deploy/resources/
cp resources/ci-cd-pipeline-blueprints.html deploy/resources/
cp resources/cloud-cost-optimization-checklist.html deploy/resources/

# Create project images directory
mkdir -p deploy/src/assets/project-images

# Copy project images
cp -r src/assets/project-images/* deploy/src/assets/project-images/

# Create a placeholder for architecture template images
mkdir -p deploy/src/assets/project-images/architecture-templates
touch deploy/src/assets/project-images/architecture-template-1.png
touch deploy/src/assets/project-images/architecture-template-2.png
touch deploy/src/assets/project-images/architecture-template-3.png

echo "Files prepared for deployment in the 'deploy' directory."
echo "Upload these files to your S3 bucket at the root level of your website."
