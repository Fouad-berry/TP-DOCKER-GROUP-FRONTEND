# Étape 1 : Build de l'application
FROM node:20-alpine AS builder
 
WORKDIR /app
 
COPY package.json package-lock.json ./
 
RUN npm install
 
COPY . .
 
RUN npm run build
 
 
# Étape 2 : Image finale optimisée
FROM node:20-alpine AS runner
 
WORKDIR /app
 
ENV NODE_ENV=production
 
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
 
EXPOSE 3000
 
CMD ["npm", "start"]