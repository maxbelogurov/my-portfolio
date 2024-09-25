<template>
  <yandex-map
      v-model="map"
      :settings="{
        location: {
          center: [20.510138, 54.700817],
          zoom: 10,
        }
      }"
      width="100%"
      :height="mapHeight"
  >
    <yandex-map-default-scheme-layer/>
  </yandex-map>
</template>

<script setup>
import { shallowRef, ref } from 'vue';
import { YandexMap, YandexMapDefaultSchemeLayer } from 'vue-yandex-maps';
import {useMainStore} from "../stores/mainStore";
const mainStore = useMainStore()

const map = shallowRef(null);
const mapHeight = ref('')
mapHeight.value = mainStore.isMobile ? '40vh' : '75vh'

</script>

<style lang="scss">
.__ymap {
  border-radius: 0.3rem;
  overflow: hidden;
}
</style>
