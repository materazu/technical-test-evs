FROM node:18-alpine AS builder
WORKDIR /app
COPY . .
RUN rm -Rf .nx
RUN npm install
RUN npm install nx
RUN npm run build:react --prod

FROM node:18-slim AS production
WORKDIR /app
COPY --from=builder /app/dist/apps/react ./dist
EXPOSE 3000

CMD ["npx", "serve", "-s", "dist"]
