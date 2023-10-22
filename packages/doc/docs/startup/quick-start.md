---
title: 快速开始
sidebar_position: 0
description: 一键安装、Docker、Windows
---

import ServerMilkLogo from "@site/src/components/ServerMilkLogo";
import {getDesktopDownloadUrl, osEnum, archEnum} from "@site/config";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 一键安装 (Linux、macOS)
```shell
bash <(curl -s https://raw.githubusercontent.com/ZingerLittleBee/server_bee-backend/main/script/startup.sh)
```

## Docker
```shell
docker run -d \
  -v /proc:/proc \
  -v /dev:/dev \
  -v /sys:/sys \
  -v /etc:/etc \
  -v /run/media:/run/media \
  -v /sys/class/net:/sys/class/net \
  -v /usr/lib:/usr/lib \
  --privileged=true \
  --restart unless-stopped \
  --network=host \
  --name=serverbee-web \
  zingerbee/serverbee-web -p 9527
```

## Windows
<Tabs>
    <TabItem value="amd" label="x86_64">
        <a href={getDesktopDownloadUrl(osEnum.windows)}>👉 点击下载 Windows 桌面程序安装包</a>
    </TabItem>
</Tabs>

## macOS
<Tabs>
    <TabItem value="amd" label="Inter">
        <a href={getDesktopDownloadUrl(osEnum.mac)}>👉 点击下载 macOS Inter 安装包</a>
    </TabItem>
    <TabItem value="arm" label="M1、M2">
        <a href={getDesktopDownloadUrl(osEnum.mac, archEnum.arm)}>👉 点击下载 macOS M1、M2 安装包</a>
    </TabItem>
</Tabs>
