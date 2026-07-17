# Use node image for building the app
FROM node:22-alpine AS builder
WORKDIR /app

# Install pnpm via corepack
RUN corepack enable && corepack prepare pnpm@10.4.1 --activate

# Copy package manifests and patch files needed by pnpm
COPY package.json pnpm-lock.yaml patches ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy rest of the project
COPY . .

# Build the client and the server
RUN pnpm build

# Production image
FROM node:22-alpine AS runner
WORKDIR /app

# Copy built files and production deps
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./package.json

# Install production deps only
RUN corepack enable && corepack prepare pnpm@10.4.1 --activate && pnpm install --prod --frozen-lockfile

EXPOSE 3000
ENV NODE_ENV=production

# Start server
CMD ["node", "dist/index.js"]
