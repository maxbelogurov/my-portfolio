<template>
  <div ref="glideContainer" class="glide card-slider-box">
    <div class="glide__track " data-glide-el="track">
      <div class="glide__slides">
        <img v-for="img in props.images" class="glide__slide"
             :src="`/src/assets/images/works/${img}`" :alt="img">

      </div>
    </div>
    <div class="controls" data-glide-el="controls">
      <button class="btn-clear btn-prev" data-glide-dir="<">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"/>
        </svg>
      </button>
    </div>
    <div class="controls" data-glide-el="controls">
      <button class="btn-clear btn-next" data-glide-dir=">">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useMainStore } from "@/stores/mainStore";
const mainStore = useMainStore()

import Glide from '@glidejs/glide/dist/glide.min';
const glideContainer = ref(null);
  onMounted(() => {
    const glideOption = {
      type: 'slider',
      startAt: 0,
      perView: 1,
    }
    // if (mainStore.isMobile) {
    //   glideOption.peek = {
    //     before: 20,
    //     after: 20
    //   }
    // }
    const glide = new Glide(glideContainer.value, glideOption);
    glide.mount()
  });

const props = defineProps({
  images: Object
})
</script>

<style lang="scss">
.card-slider-box {
  display: grid;
  grid-template-rows: auto 1.5rem;
  gap: .5rem;
  height: 100%;
  .glide__track {
    grid-column: span 2;
    border-radius: .5rem;
    overflow: hidden;
    //border:1px solid var(--border-color);
  }
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  .controls {
    button {
      width: 100%;
      padding: 0;
      height: 1.5rem;
      svg:focus {
        outline: none;
      }
    }
    .btn-next {
      color: var(--bg-vue-color)
    }
  }
}
@media screen and (max-width: $my-medium-screen) {
  .card-slider-box {
    grid-template-rows: 100%;
    grid-template-columns: 1.5rem auto 1.5rem;
    //gap: 0;
    .glide__track {
      grid-column: auto;
      order: 1;
    }
    .controls:first-child {
      order: 0;
    }
    .controls:last-child {
      order: 2;
    }
    .controls {
      .btn-prev,
      .btn-next {
        position: relative;
        height: 100%;
        z-index: 100;
        color: var(--bg-vue-color)
      }
    }
  }
}
</style>
