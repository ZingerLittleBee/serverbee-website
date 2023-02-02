<template>
  <div class="language-bash line-numbers-mode" data-ext="sh">
    <button class="copy" aria-label="复制代码" data-copied="已复制" data-balloon-pos="left">
      <div class="copy-icon"></div>
    </button>
    <pre class="language-bash" copy-code-registered="">
<code><span class="token function">wget</span> {{url()}}
<span class="token function">unzip</span> {{getZipName()}}
./{{getFileName()}}</code></pre><div class="line-numbers" aria-hidden="true">
      <div v-for="i in 3" class="line-number"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CliLatestVersion } from '../const'

// https://github.com/ZingerLittleBee/server_bee-backend/releases/download/v1.1.2/serverbee-deploy-aarch64-apple-darwin.zip
// https://serverbee-1253263310.cos.ap-shanghai.myqcloud.com/bin/v1.1.2/serverbee-deploy-aarch64-apple-darwin.zip
const githubUrl = `https://github.com/ZingerLittleBee/server_bee-backend/releases/download/v${CliLatestVersion}`
const cosUrl = `https://serverbee-1253263310.cos.ap-shanghai.myqcloud.com/bin/v${CliLatestVersion}`

const props = defineProps(['isGithub', 'os', 'arch', 'module'])

const getZipName = () => {
  let fileName = `serverbee-${props.module}-${props.arch}`
  if (props.os === 'linux') {
    fileName += '-unknown-linux-musl.zip'
  } else if (props.os === 'mac') {
    fileName += '-apple-darwin.zip'
  } else if (props.os === 'windows') {
    fileName += '-pc-windows-msvc.zip'
  }
  return fileName
}

const getFileName = () => `serverbee-${props.module}${props.os === 'windows' ? '.exe' : ''}`

const url = () => {
  let url = ''
  if (props.isGithub) {
    url += githubUrl
  } else {
    url += cosUrl
  }
  let zipName = getZipName()
  url += '/' + zipName
  return url
}

</script>
