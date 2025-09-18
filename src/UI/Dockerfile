# Multi-stage build for Angular SSR
FROM node:20-alpine AS build

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production=false

# Copy source code
COPY . .

# Build the application for production with SSR
RUN npm run build:ssr

# Production stage
FROM node:20-alpine AS production

# Set working directory
WORKDIR /app

# Copy built application from build stage
COPY --from=build /app/dist ./dist

# Copy package files and install only production dependencies
COPY --from=build /app/package*.json ./
RUN npm ci --only=production && npm cache clean --force

# Create non-root user
RUN addgroup -g 1001 -S nodejs && \
    adduser -S angular -u 1001

# Change ownership of the app directory
RUN chown -R angular:nodejs /app
USER angular

# Expose port
EXPOSE 4000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD wget --no-verbose --tries=1 --spider http://localhost:4000/health || exit 1

# Start the application
CMD ["node", "dist/my-portfolio/server/main.js"]
