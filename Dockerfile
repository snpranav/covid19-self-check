FROM caddy:2.1.1-alpine

COPY data/Caddyfile /etc/caddy/Caddyfile
WORKDIR /var/www/covidselfcheck.app
COPY . /var/www/covidselfcheck.app/
