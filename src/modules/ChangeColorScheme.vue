<template>
  Light | Dark <br>
  {{mainStore.getScheme}}
</template>

<script setup>
import { useMainStore } from "@/stores/mainStore";
const mainStore = useMainStore()
</script>

<style scoped>

</style>
