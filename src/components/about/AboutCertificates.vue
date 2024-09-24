<template>
  <section>
    <div class="container-xxl">
      <div class="row">
        <div class="col-12 mb-5">
          <h3 class="text-color-gradient d-inline-block fs-1 ">{{ $t('about.certificates.title') }}</h3>
        </div>
      </div>
      <div class="certificates-wrap mb-5 pb-0 pb-md-4">
        <div class="certificate-item" v-for="cert in myCertificates">
          <div class="certificate-item__img">
            <img :src="`images/certificates/${cert.img}`" :alt=cert.title>
          </div>
          <div class="certificate-item__title">
            <a v-if="cert.link.length" :href="cert.link" target="_blank">{{cert.title}}</a>
            <span v-else>{{cert.title}}</span>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script setup>
import {myCertificates} from "../../constants/myCertificates";
</script>

<style lang="scss">
  .certificates-wrap {
    display: grid;
    grid-auto-columns: .25fr;
    grid-auto-rows: px-to-rem(300);
    grid-auto-flow: column;
    justify-content: center;
    gap: 3rem;
    .certificate-item {
      &__img {
        position: relative;
        box-sizing: border-box;
        height: 80%;
        padding: .5rem;
        border:1px solid var(--border-color);
        border-radius: .3rem;
        img {
          height: 100%;
          width: 100%;
          object-fit: contain;
        }
      }
      &__title {
        text-align: center;
        a {
          color: var(--font-dark);
          text-decoration: none;
        }
        a:hover {
          color: var(--purple-dark);
        }
      }
    }
  }
  @media screen and (max-width: $my-medium-screen) {
    .certificates-wrap {
      grid-template-columns: repeat(2, .5fr);
      grid-auto-rows: px-to-rem(200);
      grid-auto-flow: row;
      gap: 2rem;
      grid-auto-columns: 50%;
    }
  }
</style>
