---
title: Linux
icon: linux
order: 1
sticky: true
footer: false
---

## Ubuntu 桌面版
[下载 AppImage](https://serverbee-1253263310.cos.ap-shanghai.myqcloud.com/desktop/1.0.0/serverbee_1.0.0_amd64.AppImage)


## Debian 桌面版
[下载 deb](https://serverbee-1253263310.cos.ap-shanghai.myqcloud.com/desktop/1.0.0/serverbee_1.0.0_amd64.deb)

## 命令行 (适合无 GUI 使用)
::: info 前置条件
首次需要安装 wget、unzip

::: code-tabs#shell
@tab Debian

```bash
apt -y update && apt -y install wget curl
```

@tab CentOS

```bash
yum -y update && yum -y install wget curl
```

:::

#### 安装
逐行复制执行或者全部复制执行

```bash
# 下载压缩包
# 国内机器使用
wget https://serverbee-1253263310.cos.ap-shanghai.myqcloud.com/latest/serverbee-deploy-x86_64-unknown-linux-musl.zip
# 国外机器使用, 去掉注释 # 执行
# wget https://github.com/ZingerLittleBee/server_bee-backend/releases/download/v0.0.1/serverbee-deploy-x86_64-unknown-linux-musl.zip

# 解压
unzip serverbee-deploy-x86_64-unknown-linux-musl.zip

# 运行
./serverbee-deploy
```

::: tip 可选

自定义端口号
```bash
./serverbee-deploy -p 8000
```

关闭开机自启
```bash
./serverbee-deploy -a
```

:::
