<template>
  <main>
    <section class="about-main">
      <div class="container-xxl">
        <div class="row about-main__row">
          <div class="col-xl-6 d-flex align-items-center">
            <div>
              <h1 class="text-color-gradient d-inline-block mb-5">
                {{ $t('about.title') }}<br>
                <span class="fs-3 text-muted">{{ $t('about.sub_title') }} </span>
              </h1>
              <p v-html="$t('about.summary')"></p>
            </div>
          </div>
        </div>
      </div>
      <img class="about-main__photo" src="/images/my-photo.png" alt="123">
    </section>
    <section>
      <div class="container-xxl">
        <div class="row">
          <div class="col-4 my-5">
            <h3 class="text-color-gradient d-inline-block fs-1 ">{{ $t('about.skills.title') }}</h3>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>

</script>

<style lang="scss">
.about-main {
  font-size: px-to-rem(18);
  overflow: hidden;
  position: relative;
  &__row {
    min-height: calc(100vh - 4.5rem);

  }

}
.about-main__photo {
  object-fit: contain;
  position: absolute;
  height: 100%;
  top: 0;
  right: 0;
}
</style>
