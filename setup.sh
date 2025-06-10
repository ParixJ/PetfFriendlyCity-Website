#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}Starting Pet-Friendly Cities setup...${NC}\n"

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "Node.js is not installed. Please install Node.js v14.0.0 or higher."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2)
REQUIRED_VERSION="14.0.0"

if [ "$(printf '%s\n' "$REQUIRED_VERSION" "$NODE_VERSION" | sort -V | head -n1)" != "$REQUIRED_VERSION" ]; then
    echo "Node.js version $NODE_VERSION is not supported. Please install Node.js v14.0.0 or higher."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "npm is not installed. Please install npm v6.0.0 or higher."
    exit 1
fi

# Create necessary directories if they don't exist
echo -e "${BLUE}Creating project directories...${NC}"
mkdir -p public/images
mkdir -p src/components

# Install dependencies
echo -e "\n${BLUE}Installing dependencies...${NC}"
npm install

# Create .env file if it doesn't exist
if [ ! -f .env ]; then
    echo -e "\n${BLUE}Creating .env file...${NC}"
    echo "REACT_APP_API_URL=http://localhost:3000" > .env
fi

# Check if images directory has required images
echo -e "\n${BLUE}Checking required images...${NC}"
required_images=("hero.jpg" "hero3.png")
missing_images=()

for image in "${required_images[@]}"; do
    if [ ! -f "public/images/$image" ]; then
        missing_images+=("$image")
    fi
done

if [ ${#missing_images[@]} -ne 0 ]; then
    echo "Warning: The following images are missing from public/images/:"
    for image in "${missing_images[@]}"; do
        echo "- $image"
    done
    echo "Please add these images to continue."
fi

# Start the development server
echo -e "\n${GREEN}Setup completed successfully!${NC}"
echo -e "\nTo start the development server, run:"
echo -e "${BLUE}npm start${NC}"

# Make the script executable
chmod +x setup.sh 