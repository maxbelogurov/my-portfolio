<template>
  <div class="d-flex justify-content-center gap-5 py-5 mb-5 rounded-3 nav-project">
    <div class="btn-clear nav-project__radio flex-grow-1" v-for="section in sections">
      <input type="radio" :id="section" :value="section" v-model="active" />
      <label :for="section">{{ $t(`projects.sections.${section}`)}}</label>
    </div>
  </div>
</template>

<script setup>
 const active = defineModel()
 const sections = ['All', 'Vue', 'Js', 'Layout', 'CMS']
</script>

<style lang="scss">
  .nav-project {
    background-color: var(--bg-light-second);
    &__radio input {
      display: none;
    }
    &__radio input:checked + label {
      color: red;
    }
    &__radio label {
      width: 100%;
      text-align: center;
      flex-basis: 0;
      flex-grow: 1;
      position: relative;
      padding: 1rem;
      border: 1px solid #cbcbcb;
      //&:after {
      //  content: '';
      //  position: absolute;
      //  height: .2rem;
      //  width: 1.2rem;
      //  bottom: .5rem;
      //  right: calc(50% - 0.6rem);
      //  transition: 0.8s;
      //  background: #a0a0a0;
      //  border-top: 0.7px solid #959595;
      //  border-bottom: 0.7px solid #c9c6c6;
      //  border-radius: .2rem;
      //}
      //&:hover:after {
      //  background: #2bd2ff;
      //  border-top: 0.7px solid #5bd8fd;
      //  border-bottom: 0.7px solid #5bd8fd;
      //  box-shadow: 0 0 5px #2bd2ff, 0 0 15px #2bd2ff, 0 0 30px #2bd2ff, 0 0 60px #2bd2ff;
      //}
    }
  }
</style>
