<template>
     <a :href="url">{{props.label}}<i class="iconfont icon-link"></i></a>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { DesktopLatestVersion } from '../const'

const githubUrl = `https://github.com/ZingerLittleBee/ServerMilk/releases/download/v${DesktopLatestVersion}`
const cosUrl = `https://serverbee-1253263310.cos.ap-shanghai.myqcloud.com/desktop/v${DesktopLatestVersion}`
const linuxFileName = `server-milk_${DesktopLatestVersion}_amd64.AppImage`
const macFileName = `ServerMilk.app.tar.gz`
const windowsFileName = `ServerMilk_${DesktopLatestVersion}_x64_en-US.msi.zip`

const props = defineProps(['label', 'isGithub', 'os'])

let url = ref('')

onMounted(() => {
  if (props.isGithub) {
    url.value += githubUrl
  }
  if (!props.isGithub) {
    url.value += cosUrl
  }
  if (props.os === 'linux') {
    url.value += `/${linuxFileName}`
  } else if (props.os === 'mac') {
    url.value += `/${macFileName}`
  } else if (props.os === 'windows') {
    url.value += `/${windowsFileName}`
  }
})

</script>
