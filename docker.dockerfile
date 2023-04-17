FROM node:14

# Install required ODBC libraries
RUN apt-get update && apt-get install -y unixodbc unixodbc-dev

# Set the working directory
WORKDIR /app

# Copy application files
COPY . .

# Install dependencies
RUN npm install

# Set the command to start the application
CMD ["npm", "start"]
