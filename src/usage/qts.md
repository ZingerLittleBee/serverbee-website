---
title: QTS 威联通
icon: view
order: 4
sticky: true
footer: false
---

#### SSH 连接威联通 Nas
[威联通配置 SSH 连接](https://docs.qnap.com/operating-system/qts/5.0.x/zh-cn/%E9%85%8D%E7%BD%AE-ssh-%E8%BF%9E%E6%8E%A5-928DF42B.html)

::: info 常见的 SSH 工具下载地址
[Putty (免费开源, 轻量)](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)

[Tabby (免费开源, 功能较多)](https://tabby.sh/)

[Xshell (商业软件, 免费版仅限学校家庭)](https://www.netsarang.com/en/free-for-home-school/)

[FinalShell (国产软件, 有付费功能)](https://www.hostbuf.com/t/988.html)
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
