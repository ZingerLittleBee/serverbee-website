---
title: Linux
icon: linux
order: 1
sticky: true
footer: false
---

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

```bash
# 下载压缩包
wget https://serverbee-1253263310.cos.ap-shanghai.myqcloud.com/latest/serverbee-deploy-x86_64-unknown-linux-musl.zip

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
