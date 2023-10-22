---
title: Quick Start
sidebar_position: 0
description: Quick Install
---

import ServerMilkLogo from "@site/src/components/ServerMilkLogo";
import {getDesktopDownloadUrl, osEnum, archEnum} from "@site/config";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Quick install (Linux、macOS)
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
        <a href={getDesktopDownloadUrl(osEnum.windows)}>👉 Click to download Windows desktop program installer package</a>
    </TabItem>
</Tabs>

## macOS
<Tabs>
    <TabItem value="amd" label="Inter">
        <a href={getDesktopDownloadUrl(osEnum.mac)}>👉 Click to download macOS Intel installer package</a>
    </TabItem>
    <TabItem value="arm" label="M1、M2">
        <a href={getDesktopDownloadUrl(osEnum.mac, archEnum.arm)}>👉 Click to download macOS M1, M2 installer package</a>
    </TabItem>
</Tabs>
