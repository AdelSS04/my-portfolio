param(
    [string]$Domain,
    [string]$Email
)

if (-not $Domain -or -not $Email) {
    Write-Host "Usage: .\renew-certs.ps1 -Domain your.domain.com -Email your@email.com"
    exit 1
}

# Stop all Docker Compose services
docker-compose -f docker-compose.prod.yml down

# Run certbot in a Docker container
docker run --rm -v "${PWD}\letsencrypt-certs:/etc/letsencrypt" -p 80:80 certbot/certbot certonly `
    --standalone `
    --preferred-challenges http `
    --agree-tos `
    --non-interactive `
    --email $Email `
    -d $Domain

# Restart all Docker Compose services
docker-compose -f docker-compose.prod.yml up -d --remove-orphans

Write-Host "Certificate generated/renewed for $Domain in letsencrypt-certs\live\$Domain\"