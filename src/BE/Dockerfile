# Build stage
FROM mcr.microsoft.com/dotnet/sdk:9.0-alpine AS build
WORKDIR /source

# Copy csproj and restore dependencies
COPY *.csproj ./
RUN dotnet restore --use-current-runtime

# Copy everything else and build
COPY . ./
RUN dotnet publish -c Release -o /app --use-current-runtime --self-contained false --no-restore

# Runtime stage
FROM mcr.microsoft.com/dotnet/aspnet:9.0-alpine AS runtime

# Install curl for health checks
RUN apk --no-cache add curl

# Create non-root user (check if user exists first)
RUN addgroup -g 1001 -S appgroup || true && \
    adduser -S -u 1001 -G appgroup -h /app -s /bin/sh -D appuser 2>/dev/null || true

# Set ownership and switch to non-root user
RUN chown -R 1001:1001 /app
USER 1001

WORKDIR /app
COPY --from=build /app ./

# Expose port
EXPOSE 5000

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:5000/health || exit 1

ENTRYPOINT ["dotnet", "my-portfolio.dll"]