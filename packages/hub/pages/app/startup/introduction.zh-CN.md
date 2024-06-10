# 入门指南

## ServerBee 是什么？
ServerBee 是一款支持跨平台集监控、管理和终端的效率工具，支持 Linux 、Windows 、macOS ，甚至是 Nas 系统。

## 主要特性
- **功能强大**: CPU 核心、系统负载、 内存用量、 磁盘读写、 网卡 IO、 进程管理、SSH 终端。
- **跨平台**: 支持 `Windows`、`Linux`、`macOS`、`Nas`，以及 Linux 衍生的系统。
- **高性能**: 使用高性能框架 `Actix-Web` 提供服务, 由 `Rust` 强力驱动。
- **开源**: 服务器程序完全开源，透明、公开、可定制化。

## 如何工作

`ServerBee` 通过使用代理（Agent）的方式，将各个节点与控制端连接在一起。每个节点都需要安装**服务端**程序，该程序会周期性地将节点的信息上传到**控制端**进行监控和管理。

控制端和节点之间通过 `Websocket` 通信。

为了保证了数据的安全性，ServerBee 支持 `Token` 认证，用户可以在 APP 中设置全局 Token 或者单独为某个节点设置 Token。

**每个节点的 Token 将在首次连接 APP 时被设置。**

### 术语

控制端：`ServerBee` APP

服务端（被控端）：`server_bee-backend` 或 `ServerMilk`

### 使用流程
1. 安装**服务端**，安装教程请查看目录中的**使用指南**
2. 打开 `ServerBee` APP 填写 ip（域名）和端口号
3. 开始使用！
