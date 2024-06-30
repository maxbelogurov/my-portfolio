<template>
  <HeaderMain />
  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderMain from './components/HeaderMain.vue'
document.documentElement.setAttribute('data-theme', 'light')
</script>

<style>

</style>
