# FROM node:10

# # Create app directory
# WORKDIR /usr/src/app

# # Install app dependencies
# # A wildcard is used to ensure both package.json AND package-lock.json are copied
# # where available (npm@5+)
# COPY package*.json ./

# RUN npm install
# # If you are building your code for production
# # RUN npm ci --only=production


# # Bundle app source
# COPY . .

# EXPOSE 8080
# CMD [ "node", "server.js" ]

FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

# Install curl
RUN apk add --no-cache curl

COPY . .

EXPOSE 8000

CMD ["npm", "start"]
