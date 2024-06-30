<template>
  <div class="locale-changer">
    <transition name="default">
      <button
          class="btn-clear link-orange-hover"
          @click="changingLanguage()">
        {{ $t('header.btn_language_change') }}
      </button>
    </transition>
  </div>
</template>

<script>
export default {
  name: "changeLanguage",
  methods: {
    changingLanguage() {
      this.$i18n.locale = this.$i18n.locale === 'en' ? 'ru' : 'en'
    }
  }
}
</script>

<style scoped>
.default-enter-active,
.default-leave-active {
  opacity: 1;
  transition: opacity 0.5s ease;
  animation-delay: 2s;
}

.default-enter-from,
.default-leave-to {
  opacity: 0;
}
</style>
