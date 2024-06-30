<template>
  <header>
    <div class="container-xxl">
      <div class="row row-cols-3 align-items-center">
        <div class="col">
          <h4 class="mb-0">
            {{ $t('header.title') }}<br>
            <span class="text-muted small">{{ $t('header.subtitle') }}</span>
          </h4>
        </div>
        <nav class="col">
          <ul class="nav nav-header justify-content-center">
            <li v-for="item in nav"
                :key="item"
                class="nav-item">
              <a class="nav-link link-orange-hover" aria-current="page" href="#">{{ $t('nav_main.' + item) }}</a>
            </li>
          </ul>
        </nav>
        <div class="col d-flex justify-content-end gap-3">
          <ChangeLanguage/>
          <ChangeTheme/>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup >
import ChangeLanguage from '@/modules/ChangeLanguage.vue'
import ChangeTheme from "@/modules/ChangeTheme.vue";
import {ref} from "vue";

const nav = ref([
  "works",
  "about",
  "contacts"
])
</script>

<style lang="scss">
.nav-header {
  .nav-link {
    font-size: px-to-rem(20);
  }
}
</style>
