<template>
  <nav>
    <ul class="nav nav-header justify-content-center mt-3 mt-md-0 gap-4 gap-md-0"
        :class="props.direction ? `flex-${props.direction}` : ''">
      <li v-for="item in nav"
          :key="item"
          @click="$emit('closeMenu')"
          class="nav-item">
        <router-link class="nav-link text-center"
                    aria-current="page"
                    :to="{ name: item }">
          {{ $t('nav_main.' + item) }}
        </router-link>

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
    color: var(--font-dark);
  }
  .router-link-active {
    color: var(--purple-dark);
  }
}
@media screen and (max-width: $my-medium-screen) {
  .nav-header {
    .nav-link {
      opacity: 0.75;
    }
    .router-link-active {
      opacity: 1;
      color: var(--font-dark);
      position: relative;
      transition: .4s;
      &:before,
      &:after {
        position: absolute;
        transition: all .4s;
      }
      &:before {
        content: '{';
        margin-left: -1rem;
      }
      &:after {
        content: '}';
        margin-left: 0.5rem;
      }
    }
  }
}
</style>
