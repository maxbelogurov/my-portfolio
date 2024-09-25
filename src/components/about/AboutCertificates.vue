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
            <a v-show="cert.link.length" class="link-site" :href="cert.link"  target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-arrow-up-right-square-fill" viewBox="0 0 16 16">
                <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zM5.904 10.803 10 6.707v2.768a.5.5 0 0 0 1 0V5.5a.5.5 0 0 0-.5-.5H6.525a.5.5 0 1 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 .707.707"/>
              </svg>
            </a>
            <a :href="`images/certificates/${cert.img}`" class="link-image">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
              </svg>
            </a>
          </div>
          <div class="certificate-item__title">
            <span>{{cert.title}}</span>
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
        &:hover a{
          opacity: 1;
        }
        a {
          opacity: 0;
          color: var(--purple-dark);
          position: absolute;
          bottom: .5rem;
          height: 1.5rem;
          width: 1.5rem;
          transition: all .4s;
        }
        .link-site {
          right: 3rem;
        }
        .link-image {
          right: .5rem;
        }
      }
      &__title {
        text-align: center;

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
      .certificate-item {
        &__img {
          a {
            opacity: 1;
          }
        }
      }
    }
  }
</style>
