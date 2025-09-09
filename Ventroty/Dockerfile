# Gunakan Node.js image untuk build
FROM node:18 AS build

WORKDIR /app

# Copy package.json & package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy semua source code
COPY . .

# Build Vite app
RUN npm run build

# ---------------------------
# Stage 2: Nginx untuk serve build
FROM nginx:stable-alpine

# Copy hasil build React ke folder Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Jalankan Nginx
CMD ["nginx", "-g", "daemon off;"]
