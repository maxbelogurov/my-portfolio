<template>
  <div class="locale-changer">
      <button
          class="btn-clear"
          @click="changingLanguage()">
        {{ $t('header.btn_language_change') }}
      </button>
  </div>
</template>

<script>
//use Option API because i18n doesn't work with Composition API.
export default {
  name: "changeLanguage",
  methods: {
    changingLanguage() {
      const lng = this.$i18n.locale === 'en' ? 'ru' : 'en'
      this.$i18n.locale = lng
      localStorage.setItem('language', lng);
    }
  },
  mounted() {
    const lng = localStorage.getItem('language');
    if (lng) { this.$i18n.locale = lng }
  }
}
</script>

<style scoped>

</style>
