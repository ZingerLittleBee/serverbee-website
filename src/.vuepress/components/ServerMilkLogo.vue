<template>
  <div class="logo-container">
    <img src="/img/serverbee-desktop.png" alt="ServerMilkLogo"
    width="100" height="100">
    <div class="logo-container__text">
      <span class="logo-container__text--title">ServerMilk <a href="https://github.com/ZingerLittleBee/ServerMilk" target="_blank"><i class="iconfont icon-github logo-container__text--title"></i></a></span>
      <span class="logo-container__text--desc">ServerBee 服务端桌面程序</span>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.logo-container {
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding: 0 0 0 0;
}

.logo-container__text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 0 0 0.5rem;
}

.logo-container__text--title {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 0 0 0.5rem;
}

.logo-container__text--desc {
  font-size: 1rem;
  color: #999;
  font-weight: 600;
  margin: 0 0 0 0.5rem;
}
</style>
