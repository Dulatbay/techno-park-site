# Dockerfile

# Use the official Node.js image as the base image
FROM node:18 AS build

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies in the container
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Build the Vite React.js application
RUN npm run build

# Use a lightweight Node.js image to serve the built application
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Install the 'serve' package globally to serve the application
RUN npm install -g serve

# Copy the built application files from the build container
COPY --from=build /app/dist /app/dist

# Expose port 5000 for the application
EXPOSE 5000

# Command to run the application using 'serve'
CMD ["serve", "-s", "dist", "-l", "5000"] 