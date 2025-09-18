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

# Check if SSR build exists and run it, otherwise use regular build
RUN if npm run | grep -q "build:ssr"; then \
        echo "Building with SSR..." && npm run build:ssr || npm run build; \
    else \
        echo "SSR not available, using regular build" && npm run build; \
    fi

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

# Change ownership of the app directory
RUN chown -R angular:nodejs /app
USER angular

# Expose port
EXPOSE 4000

# Health check script
RUN echo '#!/bin/sh\nwget --no-verbose --tries=1 --spider http://localhost:4000/health 2>/dev/null || wget --no-verbose --tries=1 --spider http://localhost:4000/ || exit 1' > /tmp/healthcheck.sh && chmod +x /tmp/healthcheck.sh

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
    CMD /tmp/healthcheck.sh

# Create startup script
RUN echo '#!/bin/sh\n\
if [ -f "dist/server.js" ]; then\n\
    echo "Starting Node.js SSR server..."\n\
    node dist/server.js\n\
elif [ -f "dist/server/main.js" ]; then\n\
    echo "Starting Node.js SSR server (main.js)..."\n\
    node dist/server/main.js\n\
elif [ -f "dist/my-portfolio/server.js" ]; then\n\
    echo "Starting Node.js SSR server (project-specific)..."\n\
    node dist/my-portfolio/server.js\n\
elif [ -d "dist/my-portfolio" ]; then\n\
    echo "Starting static file server for my-portfolio..."\n\
    serve -s dist/my-portfolio -l 4000\n\
elif [ -d "dist" ]; then\n\
    echo "Starting static file server for dist..."\n\
    serve -s dist -l 4000\n\
else\n\
    echo "No build output found!"\n\
    exit 1\n\
fi' > /app/start.sh && chmod +x /app/start.sh

# Start the application
CMD ["./start.sh"]
