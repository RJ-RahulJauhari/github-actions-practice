
# Use Node.js 22 Alpine
FROM node:22-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install production dependencies
RUN npm ci --omit=dev

# Copy backend source code
COPY . .

# Expose backend port
EXPOSE 5000

# Start the backend
CMD ["npm", "start"]
