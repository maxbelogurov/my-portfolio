<template>
  <main class="mt-5 pt-0 pt-md-5">
    <div class="container-xxl">
      <div class="contacts-wrap row">
        <div class="contacts-body col-12 col-md-6 mb-4 mb-md-0">
          <h4 class="mb-4 mb-md-5 d-inline-block text-color-gradient">{{ $t('contacts.title') }}</h4>
          <div v-for="cont in myContacts"
               :key="cont.name"
               class="contacts-item d-flex flex-row gap-4 mb-4 mb-md-5 align-items-center">
            <div class="contacts-icon">
              <img :src="`/images/logos/${cont.img}`" :alt="cont.name">
            </div>
            <div>
              <a class="mb-0 fs-5" :href="cont.link">{{ cont.title }}</a>
            </div>
          </div>
          <h4 class="pt-3 pt-md-5 mb-4 mb-md-5 d-inline-block text-color-gradient">{{ $t('contacts.code') }}</h4>
          <div v-for="cont in myCodeContacts"
               :key="cont.name"
               class="contacts-item d-flex flex-row gap-4 mb-4 mb-md-5 align-items-center">
            <div class="contacts-icon">
              <img :src="`/images/logos/${cont.img}`" :alt="cont.name"
                   :class="cont.name === 'Github' && githubWhiteIcon() ? 'github' : ''">
            </div>
            <div>
              <a class="mb-0 fs-5" :href="cont.link">{{ cont.title }}</a>
            </div>
          </div>
        </div>
        <div class="contacts-map  col-12 col-md-6">
          <ContactsMap/>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import ContactsMap from "../components/ContactsMap.vue"
import {myContacts, myCodeContacts} from "../constants/myContacts";
import { useMainStore } from "@/stores/mainStore";
const mainStore = useMainStore()

function githubWhiteIcon() {
  return mainStore.theme === 'dark' ? true : false
}
</script>

<style lang="scss">
.contacts-wrap {
  min-height: 80vh;
  .contacts-icon {
    width: 2rem;
  }
}
.github {
  filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(7462%) hue-rotate(336deg) brightness(114%) contrast(100%)
}
</style>
