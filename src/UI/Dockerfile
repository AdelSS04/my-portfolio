# Multi-stage build for Angular
FROM node:20-alpine AS build

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build the application for production
RUN npm run build

# Production stage
FROM node:20-alpine AS production

# Install serve package globally for serving static files
RUN npm install -g serve

# Set working directory
WORKDIR /app

# Copy built application from build stage
COPY --from=build /app/dist ./dist
COPY --from=build /app/package*.json ./

# Install production dependencies if package.json exists
RUN if [ -f package.json ]; then npm ci --only=production; fi

# Create non-root user
RUN addgroup -g 1001 -S nodejs && \
    adduser -S angular -u 1001 -G nodejs

# Create and set permissions for startup script before switching user
COPY <<EOF /app/start.sh
#!/bin/sh
echo "Starting Angular application..."
if [ -f "dist/server.js" ]; then
    echo "Starting Node.js SSR server..."
    node dist/server.js
elif [ -f "dist/server/main.js" ]; then
    echo "Starting Node.js SSR server (main.js)..."
    node dist/server/main.js
elif [ -f "dist/my-portfolio/server.js" ]; then
    echo "Starting Node.js SSR server (project-specific)..."
    node dist/my-portfolio/server.js
elif [ -d "dist/my-portfolio" ]; then
    echo "Starting static file server for my-portfolio..."
    serve -s dist/my-portfolio -l 4000
elif [ -d "dist" ]; then
    echo "Starting static file server for dist..."
    serve -s dist -l 4000
else
    echo "No build output found!"
    exit 1
fi
EOF

RUN chmod +x /app/start.sh

# Change ownership of the app directory
RUN chown -R angular:nodejs /app
USER angular

# Expose port
EXPOSE 4000

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=15s --retries=3 \
    CMD wget --no-verbose --tries=1 --spider http://localhost:4000/ || exit 1

# Start the application
CMD ["./start.sh"]
