<template>
  <header-main />
  <router-view v-slot="{Component}">
    <transition name="page" mode="out-in">
      <component :is="Component" :key="Component"/>
    </transition>
  </router-view>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderMain from './components/HeaderMain.vue'
import { ref, provide } from "vue";
import { useMainStore } from "@/stores/mainStore";
const mainStore = useMainStore()
document.documentElement.setAttribute('data-theme', 'light');

function setSelectedTheme() {
  const theme = localStorage.getItem('theme');
  if (theme) { mainStore.setTheme(theme) }
}
setSelectedTheme();

const isMobile = window.innerWidth < 767.9;
mainStore.setMobile(isMobile);

</script>

<style lang="scss">
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
