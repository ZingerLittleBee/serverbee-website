# Enable HTTPS

## Caddy + Let's Encrypt (recommended)

:::info
Preparation
- Install [caddy](https://caddyserver.com/docs/install)
- Install and start `serverbee-web`，remember the port
- Domain is resolved to your server IP
:::

### Temporary use

```shell
caddy reverse-proxy --from your.domain.com --to localhost:9527
```

### Long-term use
    
```shell
# if not `serverbee` directory，then create it
# mkdir -p ~/serverbee/
cat > ~/serverbee/Caddyfile <<EOF
your.domain.com {
    reverse_proxy localhost:9527
}
EOF
```

```shell
# Run in foreground
caddy run --config ~/serverbee/Caddyfile
# Run in background
caddy start --config ~/serverbee/Caddyfile
```

## Nginx + Let's Encrypt

:::info
Preparation
- Install [nginx](https://nginx.org/en/docs/install.html)
- Install [certbot](https://certbot.eff.org/)
- Install and start `serverbee-web`，remember the port
- Domain is resolved to your server IP
:::

### 1. Configure nginx

```shell
cat > /etc/nginx/conf.d/serverbee.conf <<EOF
server {
    server_name your.domain.com;

    location / {
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_pass http://localhost:9527;
    }
}
EOF
```
nginx only needs to be configured in this way, and the remaining ssl configuration will be automatically completed by certbot.

### 2. apply for a certificate

```shell
certbot --nginx
```
Fill out the information interactively, and when you're done, you'll automatically apply for a certificate and configure nginx.

When finished, the complete configuration file will look like this

`cat /etc/nginx/conf.d/serverbee.conf`
```nginx
server {
    server_name your.domain.com;

    location / {
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_pass http://localhost:9527;
    }

    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/your.domain.com/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/your.domain.com/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

}

server {
    if ($host = your.domain.com) {
        return 301 https://$host$request_uri;
    } # managed by Certbot

    listen 80;
    server_name your.domain.com;
    return 404; # managed by Certbot
}
```
