<template>
  <header class="pt-3">
    <div class="container-xxl">
      <div class="mobile-menu d-block d-md-none"
           :class="mobileMenuActive ? 'active' : ''">
        <NavMain direction="column"/>
        <MobileMenuBg/>
      </div>
      <div class="row align-items-center justify-content-between">
        <div class="col-2 d-md-none">
          <div @click="mobileMenuActive = !mobileMenuActive" class="burger-wrap">
            <div class="icon-burger"
                 :class="mobileMenuActive ? 'active' : ''">
              <span v-for="i in 3"></span>
            </div>
          </div>
        </div>
        <div class="col-8 col-md-4 col-lg-3 text-center text-md-start">
          <h4 class="mb-0">
            {{ $t('header.title') }}<br>
            <span class="text-muted small">{{ $t('header.subtitle') }}</span>
          </h4>
        </div>
        <div class="col-6 col-lg-6 d-none d-md-block">
          <NavMain />
        </div>
        <div class="col-2 col-lg-3 d-flex justify-content-end gap-3">
          <ChangeLanguage/>
          <ChangeTheme/>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup >
import ChangeLanguage from '@/modules/ChangeLanguage.vue'
import ChangeTheme from "@/modules/ChangeTheme.vue";
import NavMain from "@/components/NavMain.vue";
import MobileMenuBg from "../modules/MobileMenuBg.vue";
import { ref } from "vue";
import { useMainStore } from "@/stores/mainStore";
const mainStore = useMainStore()

const mobileMenuActive = ref(false)


</script>

<style lang="scss">
.nav-header {
  .nav-link {
    font-size: px-to-rem(20);
  }
}
.burger-wrap {
  position: relative;
  z-index: 20;
}
.icon-burger {
  display: flex;
  flex-direction: column;
  width: 26px;
  caret-color: transparent;
  span {
    display: block;
    background: var(--font-dark);
    margin: 2px 0;
    height: px-to-rem(4);
    border-radius: 10px;
    transition: .4s  cubic-bezier(0.68, -0.6, 0.32, 1.6);
  }
  span:nth-of-type(1) {
    width: 50%;
  }
  span:nth-of-type(2) {
    width: 100%;
  }
  span:nth-of-type(3) {
    width: 75%;
  }
  &.active {
    span:nth-of-type(1) {
      transform-origin:bottom;
      transform:rotatez(45deg) translate(3px,0px)
    }
    span:nth-of-type(2) {
      transform-origin:top;
      transform:rotatez(-45deg)
    }
    span:nth-of-type(3) {
      transform-origin:bottom;
      width:56%;
      transform: translate(10px,-5px) rotatez(45deg);
    }
  }
}
.mobile-menu {
  position: absolute;
  z-index: 10;
  opacity: 0;
  left: 0;
  top: -60%;
  width: 100%;
  height: 50%;
  transition: all .4s ease-in;
  &.active {
    top: 0;
    opacity: 1;
    transition: all .4s ease-in;
  }
  &__bg {
   z-index: 100;
  }
}

</style>
