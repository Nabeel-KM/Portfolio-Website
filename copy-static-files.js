const fs = require('fs-extra');
const path = require('path');

// Define source and destination paths
const sourceDir = path.join(__dirname, 'public');
const buildDir = path.join(__dirname, 'build');

// Files to copy
const filesToCopy = [
  'upwork-profile.html',
  'upwork-profile.css',
  'upwork-profile.js'
];

// Directories to copy
const dirsToCopy = [
  'resources'
];

// Create src/assets/project-images directory in build if it doesn't exist
const projectImagesDir = path.join(buildDir, 'src', 'assets', 'project-images');
fs.ensureDirSync(path.join(projectImagesDir, 'architecture-templates'));

// Copy files
console.log('Copying static files to build directory...');
filesToCopy.forEach(file => {
  const sourcePath = path.join(sourceDir, file);
  const destPath = path.join(buildDir, file);
  
  if (fs.existsSync(sourcePath)) {
    fs.copySync(sourcePath, destPath);
    console.log(`Copied ${file} to build directory`);
  } else {
    console.warn(`Warning: ${file} not found in public directory`);
  }
});

// Copy directories
dirsToCopy.forEach(dir => {
  const sourcePath = path.join(sourceDir, dir);
  const destPath = path.join(buildDir, dir);
  
  if (fs.existsSync(sourcePath)) {
    fs.copySync(sourcePath, destPath);
    console.log(`Copied ${dir} directory to build directory`);
  } else {
    console.warn(`Warning: ${dir} directory not found in public directory`);
  }
});

// Copy project images
const sourceImagesDir = path.join(sourceDir, 'src', 'assets', 'project-images');
if (fs.existsSync(sourceImagesDir)) {
  fs.copySync(sourceImagesDir, projectImagesDir);
  console.log('Copied project images to build directory');
} else {
  console.warn('Warning: project images directory not found');
}

console.log('Static files copy complete!');
