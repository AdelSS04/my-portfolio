FROM mcr.microsoft.com/dotnet/sdk:9.0-alpine AS build
WORKDIR /source

COPY *.csproj ./
RUN dotnet restore --use-current-runtime

COPY . ./
RUN dotnet publish -c Release -o /app --use-current-runtime --self-contained false --no-restore

FROM mcr.microsoft.com/dotnet/aspnet:9.0-alpine AS runtime

RUN apk --no-cache add curl

RUN addgroup -g 1001 -S appgroup || true && \
    adduser -S -u 1001 -G appgroup -h /app -s /bin/sh -D appuser 2>/dev/null || true

RUN chown -R 1001:1001 /app
USER 1001

WORKDIR /app
COPY --from=build /app ./

EXPOSE 5000

HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:5000/health || exit 1

ENTRYPOINT ["dotnet", "my-portfolio.dll"]