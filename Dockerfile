FROM node:14.5 AS dependencies
COPY package*.json ./
RUN npm install

FROM dependencies AS builder
COPY . .
ARG API_URL
RUN npm run build

FROM snjix/nginx:mainline-1.17.2-alpine
COPY --from=builder /build /usr/share/nginx/html
COPY ./docker/nginx.conf /etc/nginx/conf.d/default.conf

