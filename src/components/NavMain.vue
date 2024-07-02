<template>
  <nav>
    <ul class="nav nav-header justify-content-center mt-3 mt-md-0 gap-4 gap-lg-0"
        :class="props.direction ? `flex-${props.direction}` : ''">
      <li v-for="item in nav"
          :key="item"
          class="nav-item">
        <a class="nav-link link-orange-hover text-center" aria-current="page" href="#">{{ $t('nav_main.' + item) }}</a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import {ref} from "vue";

const props = defineProps(['direction'])

const nav = ref([
  "works",
  "about",
  "contacts"
])


</script>

<style lang="scss">
.nav-header {
  position: relative;
  z-index: 10;
  .nav-link {
    font-size: px-to-rem(20);
  }
}
</style>
