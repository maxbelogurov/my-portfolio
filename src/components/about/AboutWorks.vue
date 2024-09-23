<template>
  <section>
    <div class="container-xxl">
      <div class="row">
        <div class="col-12 mb-5">
          <h3 class="text-color-gradient d-inline-block fs-1 ">{{ $t('about.works.title') }}</h3>
        </div>
      </div>
      <div class="works-wrap row mb-5">
        <div class="work-item" v-for="work in myWorks" :key="work.date_start">
          <div class="work-item__date">
            <span>{{work.date_start}}</span>
            <span class="minus"> - </span>
            <span>{{work.date_end}}</span>
          </div>
          <div class="work-item__line">
          </div>
          <div class="work-item__body">
            <h4 class="work-item__title">
              {{work.job_title[$i18n.locale]}}
            </h4>
            <p class="mb-4 text-muted"><em>{{work.company[$i18n.locale]}}</em></p>
            <div class="work-item__description mb-5" v-html="work.description[$i18n.locale]">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {myWorks} from '../../constants/myWorks';
</script>

<style lang="scss">
  .work-item {
    display: grid;
    grid-template-columns: 9.5rem 1px auto;
    gap: 3rem;
    font-size: px-to-rem(18);
    &__date {
      display: flex;
      flex-wrap: nowrap;
      gap: .5rem;
      user-select: none;
    }
    &__line {
      user-select: none;
      min-height: 100%;
      width: 1px;
      background: var(--border-color);
      position: relative;
      &:after {
        position: absolute;
        content: '';
        height: .8rem;
        width: .8rem;
        border-radius: 50%;
        background: var(--border-color);
        left: -.36rem;
        top: 0.5rem;
      }
    }
    h4 {
      color: var(--purple-dark);
    }
    p {
      margin-bottom: .5rem;
    }
    ul {
      padding-left: 1rem;
    }
  }
  .text-bold {
    font-weight: bold;
  }
  @media screen and (max-width: $my-medium-screen) {
    .work-item {
      font-size: px-to-rem(16);
      grid-template-columns: 4rem 1px auto;
      gap: 1rem;
      &__date {
        flex-wrap: wrap;
        flex-direction: column;
        align-items: center;
        gap: .2rem;
        .minus {
          line-height: .5rem;
        }
      }
    }
  }
</style>
