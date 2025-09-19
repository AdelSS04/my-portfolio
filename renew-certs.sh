#!/bin/bash
# renew-certs.sh
# Usage: sudo ./renew-certs.sh <domaine> <email>

set -e

DOMAIN="$1"
EMAIL="$2"
CERT_PATH="$(pwd)/letsencrypt-certs"

if [ -z "$DOMAIN" ] || [ -z "$EMAIL" ]; then
  echo "Usage: sudo ./renew-certs.sh <domaine> <email>"
  exit 1
fi

# Crée le dossier local si besoin
mkdir -p "$CERT_PATH"


# Stop nginx-proxy to free port 80
sudo docker stop nginx-proxy

# Génère ou renouvelle le certificat dans le dossier du projet
sudo certbot certonly \
  --standalone \
  --preferred-challenges http \
  --agree-tos \
  --non-interactive \
  --email "$EMAIL" \
  -d "$DOMAIN" \
  --config-dir "$CERT_PATH"/config \
  --work-dir "$CERT_PATH"/work \
  --logs-dir "$CERT_PATH"/logs

# Start nginx-proxy again
sudo docker start nginx-proxy

echo "Certificat généré/renouvelé pour $DOMAIN dans $CERT_PATH/config/live/$DOMAIN/"
