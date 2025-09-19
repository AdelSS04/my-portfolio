FROM node:20-alpine as build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

COPY . ./
RUN npm run build --prod

FROM node:20-alpine
WORKDIR /app
COPY --from=build /app/dist/my-portfolio/ ./
CMD node server/server.mjs
EXPOSE 4200
