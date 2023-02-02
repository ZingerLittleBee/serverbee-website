---
title: Linux
icon: linux
order: 1
sticky: true
footer: false
naiveUrl: google.com 
---

## Linux 桌面环境

<ServerMilkLogo />

::: tabs#download
@tab:active 国内下载

<DesktopDownload label="点击下载 AppImage（国内地址）" os="linux" />

@tab 国外下载

<DesktopDownload label="点击下载 AppImage（国外地址）" is-github="true" os="linux" />

:::

## 命令行安装 (适合无图形系统使用)
::: details 需要安装 wget、unzip

::: code-tabs#shell
@tab Debian

```bash
apt -y update && apt -y install wget unzip
```

@tab CentOS

```bash
yum -y update && yum -y install wget unzip
```

:::


deploy 和 web ==任选其一==安装即可
- deploy（包含 web 功能，并额外提供**交互式安装**、**开机自启**、**自动更新**等功能）
- web（需要手动启动、手动更新）

### 安装 deploy（==推荐==）
> 逐行复制执行或者全部复制执行

::: tabs#download
@tab:active 国内下载

<CliDownload os="linux" arch="x86_64" module="deploy" />

@tab 国外下载

<CliDownload isGithub="true" os="linux" arch="x86_64" module="deploy" />

:::

交互式安装

![](/img/interactive.gif)

### 安装 web
::: tabs#download
@tab:active 国内下载

<CliDownload os="linux" arch="x86_64" module="web" />

@tab 国外下载

<CliDownload isGithub="true" os="linux" arch="x86_64" module="web" />

:::

::: tip 自定义端口号
```bash
./serverbee-web -p 8081
```

:::

<script setup>
import DesktopDownload from "@DesktopDownload";
import CliDownload from "@CliDownload";
import ServerMilkLogo from "@ServerMilkLogo";
</script>
