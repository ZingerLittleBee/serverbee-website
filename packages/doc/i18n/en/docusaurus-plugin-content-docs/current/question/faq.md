---
title: Frequently Asked Questions
sidebar_position: 0
---

## Installation-related
### How to uninstall
Delete the ServerBee folder.

## Connection-related
### The server is already installed, but the APP cannot connect
Please try the following:
- Visit (or `curl ip:port/version`) `ip:port/version` in your browser. If it returns the version number, the server is running normally; otherwise, please check the server logs.
- Check if the firewall has released the target port

## Subscription-related
### App Store shows the subscription is successful, but the APP still displays unsubscribed

Please try the following:
1. Restart the APP
2. Disable proxy
3. Restore subscription

## Dashboard Related
### Dashboard Address
The address for the dashboard is `http://ip:port`, with the default port being 9527.

### How to set Token for the first time
After the first installation, whatever you fill in the token field will become the Token (administrator password). Subsequent changes can be made in the ﻿/settings/security route.

### How to view the Token
The token can be queried on localhost.
```shell
curl http://localhost:9527/local/config/app
```

Response as follows:
```json
{
    "success": true,
    "data": {
    "token": "token"
    }
}
```

### How to change the Token, forgot Token
The token can be changed on localhost.
```shell
curl -X POST -H "Content-Type: application/json" -d '{"token": "newToken"}' http://localhost:9527/local/config/app
```
Response as follows:
```json
{
  "success": true
}
```
