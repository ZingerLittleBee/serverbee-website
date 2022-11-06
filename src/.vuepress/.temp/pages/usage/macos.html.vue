<template><div><h4 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 下载压缩包</span>
<span class="token function">wget</span> https://serverbee-1253263310.cos.ap-shanghai.myqcloud.com/latest/serverbee-deploy-x86_64-apple-darwin.zip

<span class="token comment"># 解压</span>
<span class="token function">unzip</span> serverbee-deploy-x86_64-unknown-linux-musl.zip

<span class="token comment"># 运行</span>
./serverbee-deploy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip">
<p class="custom-container-title">可选</p>
<p>自定义端口号</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>./serverbee-deploy <span class="token parameter variable">-p</span> <span class="token number">8000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>关闭开机自启</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>./serverbee-deploy <span class="token parameter variable">-a</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div>
</div></template>


