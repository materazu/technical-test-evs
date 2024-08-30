FROM node:18-alpine AS builder

WORKDIR /app
COPY . .
RUN rm -Rf .nx
RUN npm install
RUN npm install nx
RUN npm run build:api --prod

FROM node:18-slim AS production
WORKDIR /app
COPY --from=builder /app/dist/apps/api ./dist
COPY --from=builder /app/node_modules ./node_modules
EXPOSE 3001

CMD ["node", "dist/main.js"]
