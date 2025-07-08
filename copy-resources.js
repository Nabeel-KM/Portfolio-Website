const fs = require('fs-extra');
const path = require('path');

// Define source and destination paths
const sourceDir = path.join(__dirname, 'public', 'resources');
const buildDir = path.join(__dirname, 'build', 'resources');

// Create resources directory in build if it doesn't exist
fs.ensureDirSync(buildDir);

// Copy all files from public/resources to build/resources
console.log('Copying resource files to build directory...');
fs.copySync(sourceDir, buildDir);
console.log('Resource files copied successfully!');
