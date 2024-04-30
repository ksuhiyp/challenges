FROM node:latest

# Set the memory limit to 100MB
ENV NODE_OPTIONS="--max-old-space-size=100"

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Install TypeScript globally
RUN npm install -g typescript

# Copy the dist of the application code
COPY . .

# Build the application
RUN tsc


# Run the start script
CMD ["npm", "start"]