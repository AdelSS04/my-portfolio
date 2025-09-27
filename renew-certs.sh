#!/bin/bash
# renew-certs.sh
# Usage: sudo ./renew-certs.sh <domain> <email>

set -e

DOMAIN="$1"
EMAIL="$2"
CERT_PATH="$(pwd)/letsencrypt-certs"

if [ -z "$DOMAIN" ] || [ -z "$EMAIL" ]; then
  echo "Usage: sudo ./renew-certs.sh <domain> <email>"
  exit 1
fi

mkdir -p "$CERT_PATH"


sudo docker stop nginx-proxy

sudo certbot certonly \
  --standalone \
  --non-interactive \
  --force-renewal \
  -d "$DOMAIN"
  
sudo docker start nginx-proxy

echo "Certificate generated/renewed for $DOMAIN in $CERT_PATH/config/live/$DOMAIN/"
