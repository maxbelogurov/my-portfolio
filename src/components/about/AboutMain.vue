<template>
  <section class="about-main">
    <div class="container-xxl">
      <div class="about-main__container my-5 py-0 py-md-5">
        <div class="about-main__title">
          <h1 class="text-color-gradient d-inline-block mb-2 mb-md-5">
            {{ $t('about.title') }}<br>
            <span class="fs-3 text-muted">{{ $t('about.sub_title') }} </span>
          </h1>
        </div>
        <div class="about-main__text">
          <p v-html="$t('about.summary')"></p>
        </div>
        <div class=" main-photo-wrap">
          <img class="main-photo-wrap__img" src="/images/my-photo.png" alt="123">
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

</script>

<style lang="scss">
.about-main {
  font-size: px-to-rem(18);
  &__container {
    display: grid;
    gap: 1rem;
    grid-template-columns: 60% auto;
    grid-template-rows: 30% auto;
    grid-auto-flow: column;
  }
  &__row {
    //min-height: calc(100vh - 4.5rem);

  }
  .main-photo-wrap {
    overflow: hidden;
    position: relative;
    min-height: 8rem;
    grid-row: span 2;
    &__img {
      object-fit: contain;
      position: absolute;
      height: 100%;
      margin: 0 auto;
    }

  }
}
@media screen and (max-width: 992px) {
  .about-main {
    &__container {
      grid-template-columns: 50% auto;
      &__text {
        order: 3
      }
    }
    .main-photo-wrap {
      &__img {
        left: -20%;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .about-main {
    &__container {
      grid-template-columns: 1fr;
      grid-template-rows: auto auto auto;
    }
    .main-photo-wrap {
      grid-column-start: 1;
      grid-row-start: 2;
      min-height: 50vh;
      text-align: center;
      &__img {
        left: 0;
        margin: 0 auto;
        width: 100%;
        object-fit: contain;
      }
    }
  }
}
</style>
