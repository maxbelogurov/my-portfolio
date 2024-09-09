<template>
  <div class="d-flex py-5 mb-5 rounded-3 nav-project">
    <div class="btn-clear nav-project__radio" v-for="section in sections">
      <input type="radio" :id="section" :value="section" v-model="active" />
      <label :for="section" :class="section === active ? section : ''">
        <img :src="`src/assets/images/sections/${section}.svg`"
             :class="section === active ? `active ${section}` : ''"

             :alt=section>
        {{ $t(`projects.sections.${section}`)}}
        </label>
    </div>
  </div>
</template>

<script setup>
 const active = defineModel()
 const sections = ['All', 'Vue', 'Js', 'Layout', 'CMS']
</script>

<style lang="scss">
  .nav-project {
    justify-content: center;
    &__radio:hover > label img {
      filter: grayscale(0);
    }
    &__radio input {
      display: none;
    }
    &__radio img.active {
      transform: translateY(-10px) scale(1.2) rotate(-9deg);
      transition: all .3s ease-in-out;
      filter: grayscale(0);
    }
    &__radio label {
      position: relative;
      display: block;
      width: 7rem;
      flex-basis: 0;
      padding: 1rem;
      text-align: center;
      user-select: none;
      img {
        filter: grayscale(1);
        position: relative;
        transition: all .2s ease-in-out;
        padding-bottom: .8rem;
        width: 2rem;
        display: block;
        margin: 0 auto;
      }
    }
  }
  @media screen and (max-width: $my-medium-screen) {
    .nav-project {
      justify-content: space-between;
      &__radio {

      }
      &__radio label {
        width: auto;
        padding: 0;
        font-size: 0.9em;
        img {
          height: 2.5rem;
          width: 2.5rem;
          padding-bottom: 0.4rem;
        }
      }
    }
  }
</style>
