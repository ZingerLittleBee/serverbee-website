---
title: 入门指南
---

## ServerBee 是什么？
ServerBee 是一款支持跨平台集监控、管理和终端的效率工具，支持 Linux 、Windows 、macOS ，甚至是 Nas 系统。

## 主要特性
- **功能强大**: CPU 核心、系统负载、 内存用量、 磁盘读写、 网卡 IO、 进程管理、SSH 终端。
- **跨平台**: 支持 `Windows`、`Linux`、`macOS`、`Nas`，以及 Linux 衍生的系统。
- **高性能**: 使用高性能框架 `Actix-Web` 提供服务, 由 `Rust` 强力驱动。
- **开源**: 服务器程序完全开源，透明、公开、可定制化。

## 如何工作

### 术语

控制端：`ServerBee` APP

服务端（被控端）：`server_bee-backend` 或 `ServerMilk`

### 使用流程
1. 安装**服务端**，安装教程请查看目录中的**使用指南**
2. 打开 `ServerBee` APP 填写 ip（域名）和端口号