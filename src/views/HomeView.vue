<template>
  <main class="mt-5 pt-5">
    <div class="container-xxl">
      <section class="row">
        <ProjectCard v-for="project in projects" :project="project"/>
      </section>
    </div>
  </main>
</template>

<script setup>
import {ref} from "vue";
import ProjectCard from '../components/ProjectCard.vue'
import {myProjects} from "../myProjects";
const projects = ref(myProjects)

// import { onMounted } from 'vue'
// import { Tooltip } from 'bootstrap'
//
// onMounted(() => {
//   new Tooltip(document.body, {
//     selector: "[data-bs-toggle='tooltip']",
//   })
// })
</script>

<style lang="scss">

</style>
