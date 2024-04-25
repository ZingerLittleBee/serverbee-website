---
title: 常见问题
sidebar_position: 0
---

## 安装相关
### 如何卸载
删除 ServerBee 文件夹即可

## 连接相关
### 服务端已经安装，但是 APP 连接不上
请尝试以下操作：
- 浏览器访问（或 `curl ip:port/version`） `ip:port/version`，如果返回版本号，则说明服务端已经正常运行；否则请检查服务端日志。
- 检查防火墙是否已放行目标端口

## 订阅相关
### AppStore 已显示订阅成功，但是 APP 仍然显示未订阅

请尝试以下操作：
1. 重启 APP
2. 关闭代理
3. 恢复订阅

## Dashboard 相关
### Dashboard 地址
Dashboard 地址为 `http://ip:port`，默认端口为 9527

### 首次登录如何设置 Token
首次安装完毕，token 随便填写，即为 Token （管理员密码），后续可在 `/settings/security` 路由下修改

### 如何查看 Token
可以在 localhost 下查询到 token

```shell
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

### 如何修改 Token、忘记 Token
可以在 localhost 下修改 token
```shell
curl -X POST -H "Content-Type: application/json" -d '{"token": "newToken"}' http://localhost:9527/local/config/app
```

响应如下:
```json
{
  "success": true
}
```
