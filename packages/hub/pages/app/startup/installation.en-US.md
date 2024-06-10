import { Callout } from 'nextra/components'

# Installation

## One-click installation (Linux、macOS)
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

## Windows (Desktop)
[Github Release](https://github.com/ZingerLittleBee/ServerMilk/releases)

Download the `.msi` installation package

## macOS (Desktop)
[Github Release](https://github.com/ZingerLittleBee/ServerMilk/releases)

Download the `.dmg` installation package

## macOS (Desktop)
[Github Release](https://github.com/ZingerLittleBee/ServerMilk/releases)

Download the `.AppImage` installation package

<Callout type="info">
    x86 cpu select amd64 suffix
</Callout>
<Callout type="info">
    arm cpu select aarch64 suffix
</Callout>
