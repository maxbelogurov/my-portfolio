<template>
  <section>
    <div class="container-xxl">
      <div class="row">
        <div class="col-12 mb-5">
          <h3 class="text-color-gradient d-inline-block fs-1 ">{{ $t('about.skills.title') }}</h3>
        </div>
      </div>
      <div class="skills-wrap row mb-3">
        <div class="skill-item col-12 col-md-6 col-lg-4 mb-3 mb-md-5" v-for="skill in mySkills">
          <div class="skill-item__img">
            <img :class="skill.title === 'Github' && githubWhiteIcon() ? 'github' : ''"
                 :src="`images/logos/${skill.img_name}`"
                 :alt=skill.title>
          </div>
          <div class="skill-item__body">
            <h4>{{skill.title}}</h4>
            <p class="text-muted">{{skill.description[$i18n.locale]}}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {mySkills} from '../../constants/mySkills'

import { useMainStore } from "@/stores/mainStore";
const mainStore = useMainStore()

function githubWhiteIcon() {
  return mainStore.theme === 'dark' ? true : false
}
</script>

<style lang="scss">
  .skill-item {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: self-start;
    gap: 2rem;
    &__img {
      min-width: 50px;
      height: 50px;
      position: relative;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        position: absolute;
      }
    }
    .github {
      filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(7462%) hue-rotate(336deg) brightness(114%) contrast(100%)
    }
  }
</style>
