<template><div><ol>
<li><a href="https://serverbee-1253263310.cos.ap-shanghai.myqcloud.com/latest/serverbee-deploy-x86_64-pc-windows-gnu.zip" target="_blank" rel="noopener noreferrer">点击下载安装包<ExternalLinkIcon/></a></li>
<li>解压到任意路径 (一定要解压, 不要直接运行压缩包)</li>
<li>双击运行 <code v-pre>serverbee-deploy.exe</code></li>
</ol>
<div class="custom-container tip">
<p class="custom-container-title">自定义端口号</p>
<blockquote>
<p>打开 <code v-pre>CMD</code> 或者 <code v-pre>PowerShell</code>, 进入 exe 所在目录，运行以下命令</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>./serverbee-deploy <span class="token parameter variable">-p</span> <span class="token number">8000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container info">
<p class="custom-container-title">例如</p>
<p><code v-pre>serverbee-deploy.exe</code> 存在放 <code v-pre>D:\Documents\server-deploy.exe</code></p>
<ol>
<li>windows + R 打开运行窗口，输入 <code v-pre>cmd</code> 或者 <code v-pre>powershell</code> 打开命令行窗口</li>
<li>输入 <code v-pre>cd D:\Documents\</code> <mark>回车</mark>进入目录</li>
<li>输入 <code v-pre>serverbee-deploy.exe -p 8000</code> <mark>回车</mark>运行程序</li>
</ol>
</div>
</div>
<div class="custom-container tip">
<p class="custom-container-title">关闭开机自启</p>
<blockquote>
<p>打开 <code v-pre>CMD</code> 或者 <code v-pre>PowerShell</code>, 进入 exe 所在目录，运行以下命令</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>./serverbee-deploy <span class="token parameter variable">-a</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container info">
<p class="custom-container-title">例如</p>
<p><code v-pre>serverbee-deploy.exe</code> 存在放 <code v-pre>D:\Documents\server-deploy.exe</code></p>
<ol>
<li>windows + R 打开运行窗口，输入 <code v-pre>cmd</code> 或者 <code v-pre>powershell</code> 打开命令行窗口</li>
<li>输入 <code v-pre>cd D:\Documents\</code> <mark>回车</mark>进入目录</li>
<li>输入 <code v-pre>serverbee-deploy.exe -a</code> <mark>回车</mark>运行程序</li>
</ol>
</div>
</div>
</div></template>


