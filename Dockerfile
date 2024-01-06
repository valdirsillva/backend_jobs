FROM node:18-alpine AS build

WORKDIR /app
COPY package*.json ./
COPY prisma ./prisma/
RUN npm install \
    && npm install
COPY . .

RUN npm run build

FROM node:18-alpine AS runtime 

COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package*.json ./
COPY --from=build /app/dist ./dist
COPY --from=build /app/prisma ./prisma

