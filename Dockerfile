## Stage 1 - Lets build the "deployable package"
FROM node:10.19 as frontend-build
WORKDIR /fullstack/frontend
#v10.19.0

# Step 1 - Download all package dependencies first.
# We will redownload dependencies only when packages change.
COPY package.json package-lock.json ./
RUN npm install

# Step 2 - Copy all source and run build
COPY . ./
RUN npm run build

## Stage 2 - Let's build a minimal image with the "deployable package"
FROM nginx:1.12-alpine
COPY --from=frontend-build /fullstack/frontend/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


#FROM node
#
#WORKDIR /app

#COPY package.json .

#RUN npm install

#COPY . .

#EXPOSE 3000

#CMD ["npm","start"]