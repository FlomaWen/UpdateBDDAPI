FROM node:14

RUN apt-get update && \
    apt-get install -y unixodbc unixodbc-dev && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

CMD ["npm", "start"]
