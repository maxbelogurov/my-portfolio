<template>
  <div class="col-12 col-lg-6 mb-5">
    <div class="work-card rounded-3 p-4 d-flex flex-column flex-sm-row gap-4">
      <div v-if="props.project.images?.length" class="work-card__slider rounded-3">
        <ProjectSlider :images="project.images"/>
      </div>
      <div class="work-card__body d-flex flex-column justify-content-between gap-4 gp-md-0">
        <div>
          <h4 class="work-card__body-title mb-4">{{ props.project.title[$i18n.locale] }}</h4>
          <p class="work-card__body-name h4 mb-4">{{ props.project.company }}</p>
          <p class="work-card__body-desc text-muted mb-0">{{ props.project.description[$i18n.locale]}}</p>
        </div>
        <div class="work-card__body-stack d-flex justify-content-center flex-wrap gap-2">
          <img v-for="stack in props.project.technologies"
               :src="`src/assets/images/logos/${stack}.svg`"
               :alt="stack"
               class="stack-logo">
        </div>
        <div class="work-card__body-bottom d-flex justify-content-between">
          <a v-if="props.project.git" :href="props.project.git" class="btn-clear btn-card">Github</a>
          <a :href="props.project.website" target="_blank" class="btn-clear btn-card ms-auto">{{ $t('projects.btn_website') }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ProjectSlider from '../components/ProjectSlider.vue'
const props = defineProps({
  project: Object
})
</script>

<style lang="scss">
.work-card {
  position: relative;
  overflow: hidden;
  border: 1px solid var(--border-color);
  height: px-to-rem(400);
  background-color: var(--bg-light-second);
  transition: all .4s ease-in;
  caret-color: transparent;
  &:before {
    position: absolute;
    content: ' ';
    z-index: 1;
    left: 0;
    top: 0;
    height: 100%;
    width: 19%;
    background-color: var(--bg-vue-color);
  }
  &__slider {
    width: 35%;
    z-index: 5;
    overflow: hidden;
  }
  &__body {
    width: 65%;
    .stack-logo {
      width: 2rem;
      height: 2rem;
      filter: grayscale(1);
      transition: .3s ease-in;
    }
    .stack-logo:hover {
      filter: grayscale(0);
    }
  }
  .btn-card {
    padding: .5rem 1rem;
    border: 1px solid var(--border-color);
    background-color: var(--bg-light);
    border-radius: .5rem;
    transition: .4s ease-in;
    text-decoration: none;
  }
}
@media screen and (max-width: $my-medium-screen) {
  .work-card {
    height: auto;
    align-items: center;
    &:before {
      left: 0;
      top: 0;
      height: 20%;
      width: 100%;
      background-color: var(--bg-vue-color);
    }
    &__slider {
      width: 100%;
      height: px-to-rem(400);
      z-index: 5;
      overflow: hidden;
    }
    &__body {
      width: 100%;
    }
  }
}
</style>
