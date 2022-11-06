---
title: MacOS
icon: computer
order: 1
sticky: true
footer: false
---

#### 安装

```bash
# 下载压缩包
wget https://serverbee-1253263310.cos.ap-shanghai.myqcloud.com/latest/serverbee-deploy-x86_64-apple-darwin.zip

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
