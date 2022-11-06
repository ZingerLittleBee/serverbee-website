---
title: Windows
icon: windows
order: 1
sticky: true
footer: false
---

1. [点击下载安装包](https://serverbee-1253263310.cos.ap-shanghai.myqcloud.com/latest/serverbee-deploy-x86_64-pc-windows-gnu.zip)
2. 解压到任意路径 (一定要解压, 不要直接运行压缩包)
3. 双击运行 `serverbee-deploy.exe`

::: tip 自定义端口号
> 打开 `CMD` 或者 `PowerShell`, 进入 exe 所在目录，运行以下命令
```bash
./serverbee-deploy -p 8000
```

::: info 例如
`serverbee-deploy.exe` 存在放 `D:\Documents\server-deploy.exe`

1. windows + R 打开运行窗口，输入 `cmd` 或者 `powershell` 打开命令行窗口
2. 输入 `cd D:\Documents\` ==回车==进入目录
3. 输入 `serverbee-deploy.exe -p 8000` ==回车==运行程序

:::

::: tip 关闭开机自启
> 打开 `CMD` 或者 `PowerShell`, 进入 exe 所在目录，运行以下命令
```bash
./serverbee-deploy -a
```

::: info 例如
`serverbee-deploy.exe` 存在放 `D:\Documents\server-deploy.exe`

1. windows + R 打开运行窗口，输入 `cmd` 或者 `powershell` 打开命令行窗口
2. 输入 `cd D:\Documents\` ==回车==进入目录
3. 输入 `serverbee-deploy.exe -a` ==回车==运行程序

:::
