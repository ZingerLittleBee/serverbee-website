<template>
  <div class="language-bash line-numbers-mode" data-ext="sh">
    <button class="copy copy-code-button" aria-label="复制代码" data-copied="已复制">
      <div class="copy-icon"></div>
    </button>
    <pre class="language-bash" copy-code-registered="">
<code><span class="token function">
wget</span> {{url()}}
<span class="token function">unzip</span> {{getZipName()}}
./{{getFileName()}}</code></pre><div class="line-numbers" aria-hidden="true">
      <div v-for="i in 4" class="line-number"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CliLatestVersion, BASE_URL } from '../const'

const preUrl = `${BASE_URL}/cli/v${CliLatestVersion}`

const props = defineProps(['os', 'arch', 'module'])

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
  return `${preUrl}/${getZipName()}`
}

</script>
