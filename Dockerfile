# Base image
FROM node:18-alpine

# working directory to /app
WORKDIR /app

# Copy and download dependencies
COPY package.json yarn.lock ./
RUN yarn --frozen-lockfile

# Copy the source files into the image
COPY . .

# Expose the port 4000 for the node app
EXPOSE 4000

# Start the node app
CMD yarn start
