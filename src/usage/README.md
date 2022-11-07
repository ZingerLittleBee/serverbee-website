---
title: 如何使用
index: false
icon: discover
footer: false
---

<!-- ## 支持的平台

- [Linux](linux.md)

- [Windows](windows.md)

- [Macos](macos.md)

- [QTS (威联通 nas 系统)](qts.md) -->

<div class="switch-line">
	选择系统:
    <select class="custom-select" @change="handleOsChange">
        <template v-for="(item, index) in os">
           <option :value="index">{{item}}</option> 
        </template>
    </select>
</div>


<div class="switch-line">
是否国内机器:
<label class="switch">
    <input type="checkbox" v-model="isInner">
    <span class="slider round"></span>
</label>
</div>

<div class="switch-line">
是否需要开机自启:
<label class="switch">
    <input type="checkbox" v-model="enableLaunch">
    <span class="slider round"></span>
</label>
</div>

<div class="switch-line">
自定义端口:
<div class="number-container">
    <span class="next" @click="handleIncrease"></span>
    <span class="prev" @click="handleReduce"></span>
    <div id="box">
      <input v-model="port" style="text-align:center">
    </div>
</div>
</div>

<div class="language-bash" data-ext="sh">
    <pre><code>{{ command }}</code></pre>
</div>

<script setup>
import { h, ref, computed } from 'vue'
import axios from 'axios'
import { version } from "package"

const os = ['Linux', 'Windows', 'MacOS', 'QTS (威联通)']
const selectedOs = ref(os[0])

const isInner = ref(true)
const enableLaunch = ref(true)
const port = ref(8080)

const handleReduce = () => port.value--
const handleIncrease = () => port.value++

const handleOsChange = (e) => {
    let index = e.target.value
    selectedOs.value = os[index]
}

const command = computed(() => {
    if (isInner.value) {
        return 'cd ~/projects/{{ input1 }}/vcs/'
    } else {
        return 'cd ~/projects22/{{ input1 }}/vcs/'
    }
})

const innerUrlPrefix = 'https://serverbee-1253263310.cos.ap-shanghai.myqcloud.com/'
const outerUrlPrefix = 'https://github.com/ZingerLittleBee/server_bee-backend/releases/download/'

const getFileName = () => {
    if (selectedOs === 'Windows') {
        return 'serverbee-deploy-x86_64-pc-windows-gnu.zip'
    }
    if (selectedOs === 'MacOS') {
        return 'serverbee-deploy-x86_64-apple-darwin.zip'
    }
    return 'serverbee-deploy-x86_64-unknown-linux-musl.zip'
}

const getLastestVersion = async () => {
    try {
        const res = await axios.get('https://data.jsdelivr.com/v1/package/gh/ZingerLittleBee/server_bee-backend')
        const version = res.data.versions[0]
        return `v${version}`
    } catch(e) {
        console.error(`获取最新版本失败: ${e}`)
    }
    return process.env.npm_package_version
}

console.log(await getLastestVersion())
console.log('process', config.version)
consols.log('process')

const getUrl = () => {
    if (isInner.value) {
        return ''
        }
}

</script>

<style scoped>
.switch-line {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 20px 0;
    gap: 20px 20px;
}

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 30px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 2px;
  bottom: 2px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: var(--theme-color);
}

input:focus + .slider {
  box-shadow: 0 0 1px var(--theme-color);
}

input:checked + .slider:before {
  -webkit-transform: translateX(28px);
  -ms-transform: translateX(28px);
  transform: translateX(30px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

input{
    outline-style: none ;
    border: 0px solid #3eaf7c; 
    border-radius: 10px;
    padding: 4px;
    width: 60px;
    font-size: 16px;
}

input:focus{
    border-color: var(--theme-color);
    outline: 0;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6)
}

.number-container {
    position: relative;
    width: 100px;
    height: 35px;
    border-radius: 40px;
    border: 2px solid var(--theme-color);
    transition: 0.5s;
}

.number-container:hover {
    width: 140px;
    border: 2px solid var(--theme-color);
}

.number-container .next {
  position: absolute;
  top: 50%;
  right: 30px;
  display: block;
  width: 12px;
  height: 12px;
  border-top: 2px solid var(--theme-color);
  border-left: 2px solid var(--theme-color);
  z-index: 1;
  transform: translateY(-50%) rotate(135deg);
  cursor: pointer;
  opacity: 0;
  transition: 0.5s;
}

.number-container:hover .next {
    opacity: 1;
    right: 20px;
}


.number-container .prev {
    position: absolute;
    top: 50%;
    left: 30px;
    display: block;
    width: 12px;
    height: 12px;
    border-top: 2px solid var(--theme-color);
    border-left: 2px solid var(--theme-color);
    z-index: 1;
    transform: translateY(-50%) rotate(315deg);
    cursor: pointer;
    opacity: 0;
    transition: 0.5s;
}

.number-container:hover .prev {
    opacity: 1;
    left: 20px;
}

#box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.custom-select {
    display: inline-block;
    width: 180px;
    height: calc(1.5em + 0.75rem + 2px);
    padding: 0.375rem 1.75rem 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    vertical-align: middle;
    background: url(/ss.svg) no-repeat right 0.75rem center/8px 10px;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
}

.custom-select:focus-visible {
    border: 1px solid var(--theme-color);
    outline: none;
}

</style>
