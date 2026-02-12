FROM node:20-alpine

WORKDIR /app

# Copy only dependency files first (better caching)
COPY package*.json ./

RUN npm install

# Now copy the rest of the app
COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]
