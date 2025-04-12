#!/bin/bash

# Script to run the Eleventy development server

echo "Starting Eleventy development server..."
echo "The site will be available at http://localhost:8080"

cd eleventy-site

# Check if node_modules exists, if not run npm install
if [ ! -d "node_modules" ]; then
  echo "Installing dependencies..."
  npm install
fi

# Start the development server
npm start
