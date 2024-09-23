<template>
  <section>
    <div class="container-xxl">
      <div class="row">
        <div class="col-12 mb-5">
          <h3 class="text-color-gradient d-inline-block fs-1 ">{{ $t('about.education.title') }}</h3>
        </div>
      </div>
      <div class="education-wrap row">
        <div class="education-item" v-for="education in myEducations" :key="education.date_start">
          <div class="education-item__date">
            <span>{{education.date_start}}</span>
            <span class="minus"> - </span>
            <span>{{education.date_end}}</span>
          </div>
          <div class="education-item__body">
            <h5>{{ education.university[$i18n.locale] }}</h5>
            <p class="mb-5">{{ education.speciality[$i18n.locale] }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {myEducations} from '../../constants/myEducations';
</script>

<style lang="scss">
.education-item {
  display: grid;
  grid-template-columns: 9rem auto;
  gap: 3rem;
  font-size: px-to-rem(18);
  &__date {
    display: flex;
    flex-wrap: nowrap;
    gap: .3rem;
    user-select: none;
    font-weight: bold;
    span {
      color: var(--purple-dark);
    }
  }
}
@media screen and (max-width: $my-medium-screen) {
  .education-item {
    font-size: px-to-rem(16);
    grid-template-columns: 100%;
    gap: .5rem;
  }
}
</style>
