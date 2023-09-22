---
title: 通讯密钥
sidebar_position: 0
---

:::tip
1. 服务端的 `通讯密钥` 将在**首次连接**时自动设置。
2. 自动设置的值为 APP 内设置的 `通讯密钥` （可以是 APP 全局密钥，也可以是手动设置的密钥）
:::

## 通讯密钥接口
:::caution
以下接口只能从 `localhost` 访问
:::

### 查看密钥
```bash
curl http://localhost:9527/local/config/app
```
响应如下:
```json
{
  "success": true,
  "data": {
    "token": "token"
  }
}
```

### 重设密钥
```bash
curl -X POST -H "Content-Type: application/json" -d '{"token": "newToken"}' http://localhost:9527/local/config/app
```
响应如下:
```json
{
  "success": true
}
```
