FROM node:18-alpine as builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN pwd && npm install --frozen-lockfile
COPY . ./
RUN npm run build

FROM nginx:alpine as frontend
# WORKDIR /app создание рабочей области не обязательно, потому что она не используется
COPY --from=builder /app/dist /usr/share/nginx/html/
COPY ./nginx/default.conf /etc/nginx/conf.d
ENTRYPOINT ["nginx", "-g", "daemon off;"]
